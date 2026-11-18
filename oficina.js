(() => {
  "use strict";

  const lessons = (window.CURSO || []).slice().sort((a, b) => a.ordem - b.ordem);
  const tasks = window.OFICINA_ROTINA || [];
  const glossary = window.OFICINA_GLOSSARIO || [];
  const storeKey = "oficina-vendas-estudo-v1";
  const main = document.querySelector("main");
  const searchBox = document.getElementById("search-dialog");
  const query = document.getElementById("global-query");
  const notebook = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  const percentage = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 });
  const escape = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const normalize = (value) => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const money = (cents) => notebook.format(cents / 100);
  const percent = (bp) => `${percentage.format(bp / 100)}%`;
  const number = (lesson) => String(lessons.indexOf(lesson) + 1).padStart(2, "0");
  const lines = (value) => escape(value).replace(/\r?\n/g, "<br>");
  const yearMonth = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  const menus = [
    ["inicio", "Início", "⌂"], ["simulador", "Simulador de preços", "≔"], ["rotina", "Checklist da operação", "✓"],
    ["glossario", "Glossário", "Aa"], ["prompts", "Perguntas para a IA", "?"], ["progresso", "Meu progresso", "◒"]
  ];
  const taskIds = new Set(tasks.flatMap((group) => group.itens.map((item) => `${group.id}/${item.id}`)));
  const lessonIds = new Set(lessons.map((lesson) => lesson.id));
  const topics = ["Tudo", "Primeiros passos", "Fiscal", "Operação", "Gestão"];
  const taxIntro = "aula/imposto-do-zero";
  const saleIntro = "aula/da-venda-ao-caixa";
  const examples = [
    { nome: "Avulsa", preco: "26,90", unidades: "1", embalagem: "1,00" },
    { nome: "Kit com 2", preco: "44,90", unidades: "2", embalagem: "2,00" },
    { nome: "Kit com 3", preco: "59,90", unidades: "3", embalagem: "2,50" }
  ];
  const simDefaults = { custo: "6,90", fixoGestao: "1,50", impostoBp: "7,69", extras: "0,00", adicionaisBp: "0,00", meta: "15,00", ...examples[0] };
  const fields = [
    ["preco", "Preço final do anúncio (R$)", "Após o desconto pago pela loja."],
    ["custo", "Fabricação por peça (R$)", "Um cabo ou uma desempenadeira."],
    ["unidades", "Peças no anúncio", "Um kit conta como um produto cadastrado."],
    ["embalagem", "Embalagem do pedido (R$)"],
    ["fixoGestao", "Sua comissão por pedido (R$)"],
    ["impostoBp", "Imposto estimado (%)", "Use a carga que o contador confirmou na operação real."],
    ["extras", "Frete, Ads e outros custos (R$)", "Valor pago pela fábrica, sem repetir cobranças da taxa."],
    ["adicionaisBp", "Taxa extra de campanha (%)", "Preencha pela regra da sua conta."],
    ["meta", "Margem de contribuição desejada (%)"]
  ];
  let memoryOnly = false;
  let state = (() => {
    try { return cleanState(JSON.parse(localStorage.getItem(storeKey))); }
    catch { return cleanState(null); }
  })();
  let filter = "Tudo";
  let month = yearMonth(new Date());
  let route = "inicio";
  let activeLesson = null;
  let messageTimer;
  let audioRun = 0;
  const taxBands = [
    [180000, 4.50, 0], [360000, 7.80, 5940], [720000, 10.00, 13860],
    [1800000, 11.20, 22500], [3600000, 14.70, 85500], [4800000, 30.00, 720000]
  ];
  const cashSteps = [
    ["O cliente compra", "R$ 26,90", "Esse é o valor da mercadoria vendida no exemplo. A venda fica registrada no pedido e na nota. Pelo Simples, é desse valor que partimos para estimar o tributo sobre a venda, antes da comissão da plataforma."],
    ["A Shopee faz o repasse", "R$ 17,02", "Dos R$ 26,90, a Shopee desconta R$ 9,88 no exemplo. Esse repasse é ilustrativo, sem outras cobranças, e pode ser liberado depois da venda."],
    ["Depois da reserva do imposto", "R$ 14,95", "Com 7,69% de exemplo, você reserva R$ 2,07. Aplicar esse percentual ao repasse de R$ 17,02 daria só R$ 1,31. Faltariam R$ 0,76 por pedido. A contabilidade confirma a regra e a fábrica paga a guia."],
    ["Desconte os outros custos", "R$ 5,55", "Tire R$ 6,90 da fabricação, R$ 1,00 da embalagem e R$ 1,50 da sua comissão. Sobra R$ 5,55 para cobrir as despesas fixas e, depois delas, gerar lucro."]
  ];

  function cleanState(data) {
    const source = data && typeof data === "object" ? data : {};
    const answers = {};
    for (const lesson of lessons) {
      lesson.quiz.forEach((question, index) => {
        const token = `${lesson.id}:${index}`;
        const answer = source.answers?.[token];
        if (Number.isInteger(answer) && answer >= 0 && answer < question.opcoes.length) answers[token] = answer;
      });
    }
    const checks = {};
    for (const [name, checked] of Object.entries(source.checks || {})) {
      const split = name.indexOf("/");
      if (split < 0 || checked !== true) continue;
      const period = name.slice(0, split);
      const task = name.slice(split + 1);
      if ((period === "setup" || /^\d{4}-\d{2}$/.test(period)) && taskIds.has(task)) checks[name] = true;
    }
    const sim = {};
    for (const [name] of fields) {
      if (typeof source.sim?.[name] === "string" && source.sim[name].length < 22) sim[name] = source.sim[name];
    }
    return {
      completed: Array.isArray(source.completed) ? [...new Set(source.completed.filter((id) => lessonIds.has(id)))] : [],
      last: lessonIds.has(source.last) ? source.last : "",
      answers, checks, sim
    };
  }

  function save() {
    try { localStorage.setItem(storeKey, JSON.stringify(state)); }
    catch { memoryOnly = true; }
  }

  function notify(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => { toast.textContent = ""; }, 3600);
  }

  function button(label, href, look = "") {
    return `<a class="button ${look}" href="#${href}">${label}</a>`;
  }

  function header(title, overview) {
    return `<header class="page-header"><h1>${escape(title)}</h1><p>${escape(overview)}</p></header>`;
  }

  function drawNav() {
    const navItem = (key, title, index, finished = false) => {
      const isCurrent = route === key;
      return `<a class="nav-link" href="#${key}"${isCurrent ? ' aria-current="page"' : ""}><span class="nav-index${finished ? " done" : ""}" aria-hidden="true">${index}</span><span>${escape(title)}</span></a>`;
    };
    document.getElementById("side-nav").innerHTML =
      `<div class="nav-group-title">Estudo e ferramentas</div>${menus.map(([key, title, glyph]) => navItem(key, title, glyph)).join("")}
       <div class="nav-group-title">Trilha de aulas</div>${lessons.map((lesson) => {
         const complete = state.completed.includes(lesson.id);
         return navItem(`aula/${lesson.id}`, lesson.menu || lesson.titulo, complete ? "✓" : number(lesson), complete);
       }).join("")}`;
    document.getElementById("side-progress").innerHTML =
      `<p><span>Aulas concluídas</span><strong>${state.completed.length}/${lessons.length}</strong></p><progress value="${state.completed.length}" max="${Math.max(1, lessons.length)}" aria-label="Aulas concluídas"></progress>`;
  }

  function lessonCards() {
    const list = lessons.filter((lesson) => filter === "Tudo" || filter === lesson.categoria);
    return list.map((lesson) => {
      const done = state.completed.includes(lesson.id);
      return `<a class="lesson-card" href="#aula/${lesson.id}">
        <div class="lesson-top"><span class="card-number${lesson.categoria === "Fiscal" ? " rust" : ""}">${done ? "✓" : number(lesson)}</span><span class="pill${lesson.categoria === "Fiscal" ? " rust" : ""}">${escape(lesson.categoria)}</span></div>
        <h3>${escape(lesson.titulo)}</h3><p>${escape(lesson.resumo)}</p>
        <span class="lesson-meta">${lesson.minutos} min <span aria-hidden="true">·</span> ${done ? "Concluída" : `${lesson.quiz.length} perguntas`}</span>
      </a>`;
    }).join("");
  }

  function home() {
    const next = lessons.find((lesson) => lesson.id === state.last && !state.completed.includes(lesson.id))
      || lessons.find((lesson) => !state.completed.includes(lesson.id)) || lessons[0];
    const shortcuts = [
      [saleIntro, "R$", "Siga uma venda de R$ 26,90", "Veja o que sai em taxa, imposto e custo."],
      ["rotina", "✓", "Antes da primeira venda", "Confira o que precisa estar pronto."],
      ["simulador", "=", "Simulador de preços", "Teste a sobra do avulso e dos kits."]
    ];
    return `<section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <span class="eyebrow">Curso prático de e-commerce</span>
          <h1 id="hero-title">Da fábrica à <span>primeira venda.</span></h1>
          <p>Comece entendendo de onde vem o imposto. Depois acompanhe o exemplo de uma venda de desempenadeira, do pedido ao fechamento com o contador.</p>
          <div class="actions">${button("Começar do zero", taxIntro, "ochre")}
          ${next && (state.completed.length || state.last) && next.id !== "imposto-do-zero" ? button("Continuar estudo", `aula/${next.id}`, "on-dark") : button("Ver o dinheiro de uma venda", saleIntro, "on-dark")}</div>
        </div><div class="hero-image" aria-hidden="true"></div>
      </section>
      <div class="quick">${shortcuts.map(([href, icon, name, description], index) => `<a class="quick-card" href="#${href}"><span class="quick-badge${index === 1 ? " rust" : ""}" aria-hidden="true">${icon}</span><span><strong>${name}</strong><small>${description}</small></span><span class="arrow" aria-hidden="true">↗</span></a>`).join("")}</div>
      <section class="block"><div class="section-head"><div><h2>Trilha de estudo</h2><p>${lessons.length} aulas com prática, perguntas e fontes.</p></div></div>
        <div class="actions preset" id="filters" aria-label="Filtrar aulas por assunto">${topics.map((topic) => `<button type="button" class="button" data-filter="${topic}" aria-pressed="${topic === filter}">${topic}</button>`).join("")}</div>
        <div class="cards" id="lesson-cards">${lessonCards()}</div>
      </section>`;
  }

  function sourceList(sources) {
    return `<details class="source-list"><summary>Fontes para conferir (${sources.length})</summary><ul>${sources.map(({ titulo, url }) =>
      `<li><a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(titulo)}</a></li>`).join("")}</ul></details>`;
  }

  function quiz(question, lesson, index) {
    const token = `${lesson.id}:${index}`;
    const selected = state.answers[token];
    const options = question.opcoes.map((option, answer) => {
      const picked = selected === answer;
      return `<button type="button" class="quiz-option${picked ? (answer === question.correta ? " selected good" : " selected bad") : ""}" data-answer="${answer}" aria-pressed="${picked}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + answer)}</span><span>${escape(option)}</span></button>`;
    }).join("");
    const feedback = selected === undefined ? "" : `<strong>${selected === question.correta ? "Acertou." : "Tente de novo."}</strong> ${escape(question.explicacao)}`;
    return `<fieldset data-question="${index}"><legend>${escape(question.pergunta)}</legend>${options}<p class="quiz-feedback" role="status">${feedback}</p></fieldset>`;
  }

  function industrialTaxExercise() {
    return `<section class="section-card tax-exercise" aria-labelledby="tax-exercise-title">
      <h2 id="tax-exercise-title">Calcule a alíquota do Anexo II</h2>
      <p>Exercício com a tabela do Simples para indústria em 2026. Informe o RBT12 já apurado, em reais. Em empresa nova, use o faturamento proporcionalizado que o contador indicar.</p>
      <label class="field" for="tax-rbt"><span>Receita bruta em 12 meses (R$)</span><input type="text" name="tax-rbt" id="tax-rbt" value="600000" inputmode="decimal" autocomplete="off">
        <small>Digite sem ponto de milhar. Exemplo: 600000,00.</small></label>
      <div class="tax-exercise-result" id="tax-result" aria-live="polite"></div>
      <p class="helper">A fórmula usa a faixa nominal e a parcela a deduzir. A carga de uma venda real pode mudar com segregações, sublimite estadual e tributos fora do DAS.</p>
    </section>`;
  }

  function drawTaxExercise() {
    const input = document.getElementById("tax-rbt");
    const result = document.getElementById("tax-result");
    if (!input || !result) return;
    const amount = input.value.trim();
    const rbt = /^\d{1,7}(?:,\d{1,2})?$/.test(amount) ? Number(amount.replace(",", ".")) : NaN;
    const band = taxBands.find(([ceiling]) => rbt <= ceiling);
    input.setAttribute("aria-invalid", String(!(rbt > 0 && band)));
    if (!(rbt > 0) || !band) {
      result.textContent = "Para o exercício, informe um RBT12 maior que zero e até R$ 4,8 milhões.";
      return;
    }
    const [, nominal, deduct] = band;
    const effective = (rbt * nominal / 100 - deduct) / rbt * 100;
    const display = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 4 });
    result.innerHTML = `<strong>Alíquota efetiva no exercício: ${display.format(effective)}%.</strong> Faixa nominal de ${percentage.format(nominal)}% e dedução de ${money(deduct * 100)}.
      ${rbt > 3600000 ? '<br>Acima de R$ 3,6 milhões, valide o sublimite e o ICMS com o contador antes de usar o número.' : ""}`;
  }

  function cashStepDetails(index) {
    const [title, amount, explanation] = cashSteps[index];
    return `<span class="eyebrow">${title}</span><strong class="cash-amount">${amount}</strong><p>${explanation}</p>`;
  }

  function cashExercise() {
    return `<section class="section-card cash-exercise"><h2>Veja o dinheiro da venda etapa por etapa</h2>
      <div class="actions preset" aria-label="Etapas do dinheiro da venda">${cashSteps.map(([title], index) =>
        `<button class="button" type="button" data-cash-step="${index}" aria-pressed="${index === 0}">${index + 1}. ${title}</button>`).join("")}</div>
      <div class="cash-details" role="status" id="cash-details">${cashStepDetails(0)}</div>
      <p class="helper">Exercício com uma venda sem frete cobrado da loja, Ads ou desconto. O percentual de 7,69% é um exemplo de estudo.</p>
    </section>`;
  }

  function essentialCheckpoints() {
    return `<div class="note" aria-labelledby="essential-title">
      <h2 id="essential-title">O que pode te pegar de surpresa</h2>
      <ul>
        <li><strong>Publicar com imposto chutado.</strong> Pegue com o contador a regra da primeira venda, a estimativa pra colocar no preço e se existe algum pagamento separado.</li>
        <li><strong>Gastar como se todo repasse fosse lucro.</strong> Classifique a taxa da Shopee, guarde a parte do imposto e desconte a produção antes de decidir o que pode gastar.</li>
        <li><strong>Mandar um pacote com a nota pendente.</strong> Confira se a Sefaz autorizou a nota do pedido certo. A autorização do sistema é uma etapa. Peça ao contador que confira os campos fiscais da primeira nota. Se houver rejeição ou devolução, siga o procedimento combinado.</li>
        <li><strong>Descobrir o vencimento no dia.</strong> Combine quem manda os arquivos, quem confere a guia e quem paga. Marque a data de entrega ao contador antes da data de pagamento.</li>
      </ul>
    </div>`;
  }

  function lessonPage(lesson) {
    const index = lessons.indexOf(lesson);
    const done = state.completed.includes(lesson.id);
    const previous = lessons[index - 1];
    const next = lessons[index + 1];
    const body = lesson.secoes.map((section) => `<section class="section-card"><h2>${escape(section.titulo)}</h2><p>${lines(section.texto)}</p>${section.itens?.length ? `<ul>${section.itens.map((item) => `<li>${escape(item)}</li>`).join("")}</ul>` : ""}</section>`).join("");
    const practice = lesson.pratica;
    return `<article class="article">
      <header class="page-header"><div class="lesson-meta"><span class="pill">${escape(lesson.categoria)}</span><span>Aula ${number(lesson)} de ${lessons.length}</span><span>· ${lesson.minutos} min</span></div>
        <h1>${escape(lesson.titulo)}</h1><p>${escape(lesson.objetivo)}</p>
        <div class="actions"><button class="button primary" type="button" data-reader-open>Ler na esteira</button><button class="button" type="button" id="listen-lesson">Ouvir aula</button><button class="button subtle" type="button" data-lesson-prompt>Copiar pergunta de estudo</button></div>
      </header>
      ${body}
      ${lesson.id === "imposto-do-zero" ? essentialCheckpoints() : ""}
      ${lesson.id === "da-venda-ao-caixa" ? cashExercise() : ""}
      ${lesson.id === "regime-simples" ? industrialTaxExercise() : ""}
      <section class="practice"><span class="eyebrow">Prática</span><h2>${escape(practice.titulo)}</h2><p>${escape(practice.texto)}</p><ol>${practice.passos.map((step) => `<li>${escape(step)}</li>`).join("")}</ol>
      ${lesson.id === "precificacao-shopee-kits" ? `<div class="actions">${button("Testar no simulador", "simulador")}</div>` : ""}
      ${lesson.id === "fechamento-mensal" ? `<div class="actions">${button("Abrir checklist mensal", "rotina")}</div>` : ""}</section>
      <section class="quiz"><h2>Teste o que aprendeu</h2>${lesson.quiz.map((question, i) => quiz(question, lesson, i)).join("")}</section>
      ${sourceList(lesson.fontes)}
      <div class="actions"><button type="button" class="button primary" data-complete aria-pressed="${done}">${done ? "Aula concluída · desfazer" : "Marcar aula como concluída"}</button></div>
      <nav class="pager" aria-label="Navegação entre aulas">${previous ? button("← Aula anterior", `aula/${previous.id}`) : button("← Trilha", "inicio")}
      ${next ? button("Próxima aula →", `aula/${next.id}`) : button("Meu progresso →", "progresso")}</nav>
    </article>`;
  }

  function speakLesson() {
    if (!activeLesson || !("speechSynthesis" in window)) {
      notify("A leitura em voz alta não está disponível neste navegador.");
      return;
    }
    const toggle = document.getElementById("listen-lesson");
    if (toggle.dataset.playing === "1") {
      audioRun++;
      speechSynthesis.cancel();
      toggle.textContent = "Ouvir aula";
      delete toggle.dataset.playing;
      return;
    }
    const parts = [activeLesson.titulo, activeLesson.objetivo, ...activeLesson.secoes.flatMap((part) => [part.titulo, part.texto, ...(part.itens || [])])].filter(Boolean);
    const run = ++audioRun;
    toggle.dataset.playing = "1";
    toggle.textContent = "Parar leitura";
    function next(index) {
      if (run !== audioRun) return;
      if (!parts[index]) {
        toggle.textContent = "Ouvir aula";
        delete toggle.dataset.playing;
        return;
      }
      const speech = new SpeechSynthesisUtterance(parts[index]);
      speech.lang = "pt-BR";
      speech.rate = 0.96;
      speech.onend = () => next(index + 1);
      speech.onerror = () => {
        if (run !== audioRun) return;
        toggle.textContent = "Ouvir aula";
        delete toggle.dataset.playing;
        notify("O navegador não conseguiu iniciar a voz. Confira as vozes instaladas.");
      };
      speechSynthesis.speak(speech);
    }
    next(0);
  }

  function simulatorPage() {
    const values = { ...simDefaults, ...state.sim };
    return `${header("Simulador de preços", "Faça a conta de um pedido na Shopee. Compare a sobra e o preço mínimo ao mudar custo, imposto e embalagem.")}
      <div class="split">
        <section class="panel">
          <div class="actions preset" aria-label="Exemplos de anúncio">${examples.map(({ nome }, index) => `<button type="button" class="button" data-preset="${index}" aria-pressed="${values.unidades === examples[index].unidades}">${nome}</button>`).join("")}</div>
          <form id="sim-form" autocomplete="off"><div class="input-grid">${fields.map(([key, label, help]) =>
            `<label class="field" for="sim-${key}"><span>${label}</span><input id="sim-${key}" name="${key}" type="text" inputmode="${key === "unidades" ? "numeric" : "decimal"}" value="${escape(values[key])}"${help ? ` aria-describedby="hint-${key}"` : ""}>${help ? `<small id="hint-${key}">${help}</small>` : ""}</label>`).join("")}</div>
            <p id="sim-notice" class="form-notice" role="status"></p>
          </form>
        </section>
        <section class="result-card" id="sim-out" aria-label="Resultado do simulador" aria-live="polite"></section>
      </div>
      <div class="note"><strong>De onde veio o 7,69% que aparece no campo?</strong><p>Ele vem de um exemplo do Simples para uma indústria com R$ 600 mil de faturamento em 12 meses. Confirme com o contador o percentual da sua fábrica antes de usar o resultado pra anunciar.</p>
      <p>Simule uma unidade do anúncio por pedido, avulso ou kit cadastrado como produto único. O preço entra como base simplificada dos percentuais. Descontos, frete e outras regras podem mudar a base da nota ou o repasse real.</p>
      <p><a href="https://seller.shopee.com.br/edu/article/26839" target="_blank" rel="noopener noreferrer">Política de comissão da Shopee para CNPJ</a></p></div>`;
  }

  function readAmount(value, whole) {
    const trimmed = value.trim();
    const pattern = whole ? /^\d{1,4}$/ : /^\d{1,6}(?:[,.]\d{1,2})?$/;
    if (!pattern.test(trimmed)) return NaN;
    if (whole) return Number(trimmed);
    const [int, fraction] = trimmed.split(/[,.]/);
    return Number(int) * 100 + Number((fraction || "").padEnd(2, "0"));
  }

  function simDraw() {
    const form = document.getElementById("sim-form");
    if (!form) return;
    const notice = document.getElementById("sim-notice");
    const out = document.getElementById("sim-out");
    const input = {};
    const raw = {};
    let invalid = false;
    for (const [key] of fields) {
      const control = form.elements.namedItem(key);
      raw[key] = control.value;
      const value = readAmount(control.value, key === "unidades");
      const allowed = Number.isInteger(value) && (
        key === "unidades" ? value >= 1 && value <= 999 :
        key === "preco" ? value >= 1 && value <= 10000000 :
        key.endsWith("Bp") || key === "meta" ? value <= 10000 :
        value <= 10000000
      );
      control.setAttribute("aria-invalid", String(!allowed));
      invalid ||= !allowed;
      input[key] = value;
    }
    main.querySelectorAll("[data-preset]").forEach((preset) => {
      preset.setAttribute("aria-pressed", String(examples[Number(preset.dataset.preset)].unidades === raw.unidades));
    });
    if (invalid) {
      notice.textContent = "Revise os campos destacados. Use números positivos, 1 a 999 peças e percentuais até 100%. O preço deve ser maior que zero.";
      out.classList.remove("neg");
      out.innerHTML = '<p class="muted">Ajuste as entradas para calcular.</p>';
      return;
    }
    if (!window.OFICINA_CALC) {
      notice.textContent = "O motor do simulador não foi carregado.";
      return;
    }
    state.sim = raw;
    save();
    notice.textContent = "";
    const result = window.OFICINA_CALC.calcular(input);
    const breakEven = window.OFICINA_CALC.piso(input, 0);
    const target = window.OFICINA_CALC.piso(input, input.meta);
    const costs = [
      ["Fabricação e embalagem", result.fabricacao + result.embalagem, "#a3c5a1"],
      ["Taxas", result.taxaShopee + result.adicionais, "#f4b47e"],
      ["Imposto", result.imposto, "#d58f76"],
      ["Gestão e extras", result.fixoGestao + result.extras, "#a2afcf"],
      ["Sobra", Math.max(0, result.sobra), "#f7e2ba"]
    ];
    const totalBar = costs.reduce((sum, cost) => sum + cost[1], 0) || 1;
    const rows = [
      ["Preço de venda", result.preco], ["Fabricação", -result.fabricacao], ["Embalagem", -result.embalagem],
      ["Shopee, parte percentual", -result.percentualShopee], ["Shopee, parte fixa", -result.fixoShopee],
      ["Imposto estimado", -result.imposto], ["Sua comissão", -result.fixoGestao], ["Campanha e outros custos", -(result.extras + result.adicionais)]
    ];
    const floorValue = (value) => value == null ? "Sem preço viável" : money(value);
    out.classList.toggle("neg", result.sobra < 0);
    out.innerHTML = `<span class="eyebrow">Sobra da fábrica por pedido</span><h2 class="balance">${money(result.sobra)}</h2>
      <p class="muted">${percent(result.margemBp)} de margem de contribuição</p>
      <div class="cost-bar" aria-hidden="true">${costs.map(([, v, color]) => v > 0 ? `<span style="width:${v / totalBar * 100}%;background:${color}"></span>` : "").join("")}</div>
      <div class="legend-items">${costs.filter(([, v]) => v > 0).map(([label, , color]) => `<span><i style="background:${color}"></i>${label}</span>`).join("")}</div>
      <dl class="result-rows">${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${money(value)}</dd></div>`).join("")}</dl>
      <div class="floor-grid"><div><span>Preço de empate*</span><strong>${floorValue(breakEven)}</strong></div><div><span>Mínimo para ${percent(input.meta)}*</span><strong>${floorValue(target)}</strong></div></div>
      <p class="helper muted">* Menor preço pelas premissas acima. Ao mudar de faixa da Shopee, a taxa fixa muda.</p>
      ${target == null ? "" : `<div class="actions"><button class="button on-dark" type="button" data-use-price="${target}">Simular com o preço mínimo</button></div>`}`;
  }

  function taskKey(group, item) {
    return `${group.id === "inicio" ? "setup" : month}/${group.id}/${item.id}`;
  }

  function routinesPage() {
    return `${header("Checklist da operação", "Marque os passos que você já confirmou com a fábrica, o contador e a Shopee. Cada mês guarda sua própria conferência.")}
      ${essentialCheckpoints()}
      <label class="field months" for="month-check"><span>Mês de referência</span><input type="month" id="month-check" value="${month}"></label>
      <div class="routine-grid" id="routine-groups">${routineGroups()}</div>
      <div class="actions"><button type="button" class="button primary" data-export-routine>Baixar checklist deste mês</button>${button("Rever aula de fechamento", "aula/fechamento-mensal")}</div>`;
  }

  function routineGroups() {
    return tasks.map((group) => {
      const completed = group.itens.filter((item) => state.checks[taskKey(group, item)] === true).length;
      return `<section class="panel"><div class="section-head"><h2>${escape(group.titulo)}</h2><span class="pill" data-tally="${group.id}">${completed}/${group.itens.length}</span></div>
        <p class="routine-help">${escape(group.resumo)}</p>${group.itens.map((item) => `<label class="checkline"><input type="checkbox" data-task="${taskKey(group, item)}"${state.checks[taskKey(group, item)] ? " checked" : ""}><span><strong>${escape(item.titulo)}</strong><small>${escape(item.texto)}</small></span></label>`).join("")}</section>`;
    }).join("");
  }

  function studyPrompt(lesson) {
    return `Estou estudando “${lesson.titulo}” para operar o e-commerce de uma pequena fábrica que vende na Shopee. Meu objetivo é ${lesson.objetivo} Proponha um caso realista, faça uma pergunta de cada vez, corrija meu raciocínio depois da resposta e indique o que eu preciso validar no ERP, na Shopee ou com o contador. Separe regras gerais de hipóteses. Para tributos, use fontes oficiais atuais e não adivinhe meu regime ou minha UF.`;
  }

  const extraPrompts = [
    { titulo: "O que perguntar ao contador", texto: "Vou operar a Shopee de uma fábrica EPP. Monte uma pauta para a primeira reunião sobre regime, CNAE, IE, RBT12, NCM por SKU, CFOP, CST/CSOSN, ICMS e IPI, vendas estaduais e interestaduais, tributação no preço, configuração de NF-e e relação de documentos mensais. Separe o que devo levar, o que o contador precisa responder e o que devo testar com ele." },
    { titulo: "Treino com devolução", texto: "Simule três pedidos: um cancelado antes do envio, um devolvido após a entrega e um com reembolso parcial. Faça eu decidir como conferir a Shopee, os documentos fiscais e o repasse. Depois mostre o raciocínio e quais pontos precisam de validação com o contador." },
    { titulo: "Teste de preço e comissão", texto: "Me ajude a conferir a desempenadeira 15 × 25 cm. Custo R$ 6,90 por peça, eu recebo R$ 1,50 por pedido concluído e a Shopee cobra por item anunciado. Compare avulsa R$ 26,90, kit 2 R$ 44,90 e kit 3 R$ 59,90. Verifique tarifa atual, pergunte os custos faltantes, use 7,69% como cenário até o contador confirmar e mostre quando Ads come a margem." }
  ];
  const prompts = [
    ...extraPrompts,
    ...lessons.map((lesson) => ({ titulo: lesson.titulo, texto: studyPrompt(lesson) }))
  ];

  function promptCards(search = "") {
    const term = normalize(search.trim());
    const found = prompts.map((entry, index) => ({ ...entry, index }))
      .filter((entry) => normalize(entry.titulo + " " + entry.texto).includes(term));
    if (!found.length) return '<p class="quiet">Nenhuma pergunta encontrada.</p>';
    return found.map((entry) => `<section class="small-card"><h3>${escape(entry.titulo)}</h3><textarea id="prompt-${entry.index}" aria-label="Editar pergunta: ${escape(entry.titulo)}">${escape(entry.texto)}</textarea>
      <button class="button" type="button" data-copy="${entry.index}">Copiar pergunta</button></section>`).join("");
  }

  function promptsPage() {
    return `${header("Perguntas para a IA", "Edite e copie uma pergunta para praticar com o ChatGPT. Retire CPF, endereços e dados internos dos exemplos.")}
      <input class="prompts-search" id="prompt-search" type="search" aria-label="Buscar perguntas" placeholder="Buscar perguntas">
      <div class="prompt-grid" id="prompt-grid">${promptCards()}</div>`;
  }

  function definitions(search = "") {
    const term = normalize(search.trim());
    const found = glossary.filter((entry) => normalize(entry.termo + " " + entry.texto).includes(term));
    return found.map((entry) => `<details class="small-card"><summary>${escape(entry.termo)}</summary><p>${escape(entry.texto)}</p></details>`).join("")
      || '<p class="quiet">Nenhum termo encontrado.</p>';
  }

  function glossaryPage() {
    return `${header("Glossário", "Consulte as siglas e os termos que aparecem na Shopee, nas notas, nos relatórios e na conversa com o contador.")}
      <input class="glossary-search" id="glossary-search" type="search" aria-label="Filtrar glossário" placeholder="Ex.: CFOP, XML, repasse">
      <div class="glossary" id="glossary-list">${definitions()}</div>`;
  }

  function progressPage() {
    const questions = lessons.reduce((total, lesson) => total + lesson.quiz.length, 0);
    const correct = lessons.reduce((total, lesson) => total + lesson.quiz.filter((question, i) => state.answers[`${lesson.id}:${i}`] === question.correta).length, 0);
    return `${header("Meu progresso", "Veja as aulas concluídas e quantas perguntas você já acertou. Exporte seu progresso se quiser levar o estudo para outro computador.")}
      <div class="panel article">
        <div class="section-head"><h2>${state.completed.length} de ${lessons.length} aulas</h2><span class="pill">${correct} de ${questions} respostas certas</span></div>
        <progress aria-label="Aulas concluídas" max="${Math.max(1, lessons.length)}" value="${state.completed.length}"></progress>
        <ol>${lessons.map((lesson) => `<li><a href="#aula/${lesson.id}">${escape(lesson.titulo)}</a> <span class="quiet">· ${state.completed.includes(lesson.id) ? "Concluída" : "Em aberto"}</span></li>`).join("")}</ol>
        <div class="actions"><button class="button primary" type="button" data-export-progress>Baixar progresso</button>
        <button class="button" type="button" data-import-progress>Restaurar de um arquivo</button>
        <input type="file" hidden id="progress-file" accept=".json,application/json"></div>
        <p class="helper">${memoryOnly ? "O navegador bloqueou o armazenamento. Baixe o progresso antes de fechar." : "O progresso fica neste navegador. Ao restaurar um arquivo, as aulas concluídas e os itens marcados são somados."}</p>
      </div>`;
  }

  function download(name, content, type = "text/plain") {
    const file = new Blob([content], { type: `${type}; charset=utf-8` });
    const href = URL.createObjectURL(file);
    const node = document.createElement("a");
    node.href = href;
    node.download = name;
    document.body.append(node);
    node.click();
    node.remove();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
  }

  async function restore(file) {
    if (!file) return;
    try {
      if (file.size > 250000) throw new Error("Arquivo grande");
      const data = JSON.parse(await file.text());
      if (data.schema !== storeKey || !data.progresso) throw new Error("Formato inválido");
      const restored = cleanState(data.progresso);
      state = { 
        completed: [...new Set([...state.completed, ...restored.completed])],
        last: state.last || restored.last,
        answers: { ...restored.answers, ...state.answers },
        checks: { ...restored.checks, ...state.checks },
        sim: { ...restored.sim, ...state.sim }
      };
      save();
      drawNav();
      if (route === "progresso") main.innerHTML = progressPage();
      notify("Progresso restaurado.");
    } catch { notify("Não consegui restaurar. Selecione um arquivo gerado pelo site."); }
  }

  async function copy(value, from = null) {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard não disponível");
      await navigator.clipboard.writeText(value);
      notify("Pergunta copiada.");
    } catch {
      const field = from || document.createElement("textarea");
      if (!from) {
        field.value = value;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
      }
      field.focus();
      field.select();
      let copied = false;
      try { copied = document.execCommand("copy"); } catch { /* The text is still selectable. */ }
      if (!from) field.remove();
      notify(copied ? "Pergunta copiada." : "A cópia automática falhou. Abra a biblioteca para selecionar o texto.");
    }
  }

  function drawSearch() {
    const phrase = normalize(query.value.trim());
    const words = phrase.split(/\s+/).filter(Boolean);
    const searchable = [
      ...lessons.map((lesson) => ({
        title: lesson.titulo, href: `aula/${lesson.id}`, group: `Aula ${number(lesson)} · ${lesson.categoria}`,
        body: `${lesson.resumo} ${lesson.objetivo} ${lesson.secoes.map((section) => [section.titulo, section.texto, ...(section.itens || [])].join(" ")).join(" ")}`
      })),
      ...menus.slice(1).map(([href, title]) => ({ title, href, group: "Ferramenta", body: "" })),
      ...glossary.map((entry) => ({ title: entry.termo, href: "glossario", group: "Glossário", body: entry.texto, term: entry.termo }))
    ];
    const found = searchable.filter((entry) => words.every((word) => normalize(entry.title + " " + entry.group + " " + entry.body).includes(word)));
    if (phrase) found.sort((a, b) => Number(normalize(b.title).includes(phrase)) - Number(normalize(a.title).includes(phrase)));
    document.getElementById("global-results").innerHTML = found.slice(0, 11).map((entry) =>
      `<a class="search-result" href="#${entry.href}"${entry.term ? ` data-term="${escape(entry.term)}"` : ""}><strong>${escape(entry.title)}</strong><small>${escape(entry.group)}</small></a>`).join("")
      || '<p class="quiet">Nenhum resultado. Tente outro termo.</p>';
  }

  function showSearch() {
    if (searchBox.open) return;
    query.value = "";
    drawSearch();
    searchBox.showModal();
    query.focus();
  }

  function closeMenu() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("menu-button").setAttribute("aria-expanded", "false");
  }

  const pages = { inicio: home, simulador: simulatorPage, rotina: routinesPage, prompts: promptsPage, glossario: glossaryPage, progresso: progressPage };

  function render(focus = false) {
    audioRun++;
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    route = location.hash.slice(1) || "inicio";
    activeLesson = route.startsWith("aula/") ? lessons.find((lesson) => lesson.id === route.slice(5)) : null;
    if (activeLesson) {
      state.last = activeLesson.id;
      save();
    } else if (!Object.hasOwn(pages, route)) route = "inicio";
    const pageTitle = activeLesson?.titulo || menus.find(([key]) => key === route)[1];
    document.getElementById("crumb").textContent = pageTitle;
    document.title = `${pageTitle} — Oficina de Vendas`;
    drawNav();
    main.innerHTML = activeLesson ? lessonPage(activeLesson) : pages[route]();
    if (route === "simulador") simDraw();
    if (activeLesson?.id === "regime-simples") drawTaxExercise();
    closeMenu();
    if (focus) {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    }
    document.dispatchEvent(new CustomEvent("oficina:render", { detail: { lesson: activeLesson?.id || "" } }));
  }

  function action(event) {
    const target = event.target.closest("button");
    if (!target) return;
    const data = target.dataset;
    if (data.filter) {
      filter = data.filter;
      main.querySelectorAll("[data-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.filter === filter)));
      document.getElementById("lesson-cards").innerHTML = lessonCards();
    } else if (data.answer !== undefined && activeLesson) {
      const fieldset = target.closest("fieldset");
      const index = Number(fieldset.dataset.question);
      state.answers[`${activeLesson.id}:${index}`] = Number(data.answer);
      save();
      fieldset.outerHTML = quiz(activeLesson.quiz[index], activeLesson, index);
      main.querySelector(`[data-question="${index}"] [data-answer="${data.answer}"]`).focus({ preventScroll: true });
    } else if (data.complete !== undefined && activeLesson) {
      const already = state.completed.includes(activeLesson.id);
      state.completed = already ? state.completed.filter((id) => id !== activeLesson.id) : [...state.completed, activeLesson.id];
      save();
      drawNav();
      target.textContent = already ? "Marcar aula como concluída" : "Aula concluída · desfazer";
      target.setAttribute("aria-pressed", String(!already));
      if (!already) notify("Aula marcada como concluída.");
    } else if (data.cashStep !== undefined) {
      const index = Number(data.cashStep);
      if (!cashSteps[index]) return;
      main.querySelectorAll("[data-cash-step]").forEach((item) => item.setAttribute("aria-pressed", String(item === target)));
      document.getElementById("cash-details").innerHTML = cashStepDetails(index);
    } else if (data.preset !== undefined) {
      const form = document.getElementById("sim-form");
      const { preco, unidades, embalagem } = examples[Number(data.preset)];
      Object.entries({ preco, unidades, embalagem }).forEach(([key, value]) => { form.elements.namedItem(key).value = value; });
      simDraw();
    } else if (data.usePrice) {
      document.getElementById("sim-preco").value = (Number(data.usePrice) / 100).toFixed(2).replace(".", ",");
      simDraw();
      document.getElementById("sim-preco").focus({ preventScroll: true });
    } else if (data.exportRoutine !== undefined) {
      const body = tasks.map((group) => group.titulo + "\r\n" + group.itens.map((item) =>
        `${state.checks[taskKey(group, item)] ? "[x]" : "[ ]"} ${item.titulo} — ${item.texto}`).join("\r\n")).join("\r\n\r\n");
      download(`checklist-fabrica-${month}.txt`, `CHECKLIST DA OPERAÇÃO — ${month}\r\n\r\n${body}`);
    } else if (data.exportProgress !== undefined) {
      download("oficina-de-vendas-progresso.json", JSON.stringify({ schema: storeKey, progresso: state }, null, 2), "application/json");
    } else if (data.importProgress !== undefined) {
      document.getElementById("progress-file").click();
    } else if (data.copy !== undefined) {
      const field = document.getElementById(`prompt-${data.copy}`);
      copy(field.value, field);
    } else if (data.lessonPrompt !== undefined && activeLesson) {
      copy(studyPrompt(activeLesson));
    } else if (target.id === "listen-lesson") {
      speakLesson();
    }
  }

  main.addEventListener("click", action);
  main.addEventListener("input", (event) => {
    if (event.target.closest("#sim-form")) simDraw();
    if (event.target.id === "tax-rbt") drawTaxExercise();
    if (event.target.id === "prompt-search") document.getElementById("prompt-grid").innerHTML = promptCards(event.target.value);
    if (event.target.id === "glossary-search") document.getElementById("glossary-list").innerHTML = definitions(event.target.value);
  });
  main.addEventListener("change", (event) => {
    const target = event.target;
    if (target.id === "month-check" && /^\d{4}-\d{2}$/.test(target.value)) {
      month = target.value;
      document.getElementById("routine-groups").innerHTML = routineGroups();
    } else if (target.dataset.task) {
      if (target.checked) state.checks[target.dataset.task] = true;
      else delete state.checks[target.dataset.task];
      save();
      const group = tasks.find((candidate) => candidate.id === target.dataset.task.split("/")[1]);
      main.querySelector(`[data-tally="${group.id}"]`).textContent = `${group.itens.filter((item) => state.checks[taskKey(group, item)]).length}/${group.itens.length}`;
    } else if (target.id === "progress-file") {
      restore(target.files[0]);
      target.value = "";
    }
  });
  document.getElementById("menu-button").addEventListener("click", (event) => {
    const opened = document.getElementById("sidebar").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(opened));
  });
  document.getElementById("sidebar").addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.getElementById("open-search").addEventListener("click", showSearch);
  document.getElementById("close-search").addEventListener("click", () => searchBox.close());
  query.addEventListener("input", drawSearch);
  searchBox.addEventListener("click", (event) => {
    const link = event.target.closest(".search-result");
    if (!link) return;
    searchBox.close();
    if (link.dataset.term) {
      event.preventDefault();
      const showTerm = () => {
        const input = document.getElementById("glossary-search");
        if (!input) return;
        input.value = link.dataset.term;
        document.getElementById("glossary-list").innerHTML = definitions(input.value);
      };
      if (location.hash !== "#glossario") {
        window.addEventListener("hashchange", showTerm, { once: true });
        location.hash = "glossario";
      } else showTerm();
    }
  });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      showSearch();
    }
    if (event.key === "Escape") closeMenu();
  });
  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    main.focus();
    main.scrollIntoView();
  });
  window.addEventListener("hashchange", () => render(true));
  render();
})();

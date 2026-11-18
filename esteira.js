(() => {
  "use strict";
  const lessons = (window.CURSO || []).slice().sort((a, b) => a.ordem - b.ordem);
  if (!lessons.length) return;
  const key = "oficina-esteira-v1";
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const clamp = (value, min, max, fallback) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
  let prefs = { speed: 16, font: 28, theme: "escuro", positions: {}, last: "" };
  try {
    const source = JSON.parse(localStorage.getItem(key));
    if (source && typeof source === "object") {
      prefs.speed = clamp(source.speed, 6, 48, 16);
      prefs.font = clamp(source.font, 22, 44, 28);
      prefs.theme = source.theme === "claro" ? "claro" : "escuro";
      prefs.last = lessons.some((lesson) => lesson.id === source.last) ? source.last : "";
      for (const lesson of lessons) {
        const position = source.positions?.[lesson.id];
        if (Number.isFinite(position)) prefs.positions[lesson.id] = clamp(position, 0, 1, 0);
      }
    }
  } catch { /* Reading also works without local storage. */ }
  const main = document.querySelector("main");
  const body = document.body;
  body.insertAdjacentHTML("beforeend", `
    <header id="esteira-panel" class="esteira-toolbar" hidden>
      <label for="esteira-lesson">Modo esteira · escolha a aula<select id="esteira-lesson">${lessons.map((lesson, index) => `<option value="${escape(lesson.id)}">${String(index + 1).padStart(2, "0")} · ${escape(lesson.titulo)}</option>`).join("")}</select></label>
      <button class="button" type="button" id="esteira-exit">Sair</button>
    </header>
    <footer id="esteira-controls" class="esteira-toolbar" hidden>
      <progress class="esteira-progress" id="esteira-progress" value="0" max="100" aria-label="Posição da leitura"></progress>
      <div class="esteira-actions">
        <button class="button" type="button" id="esteira-back">Voltar 10 s</button>
        <button class="button primary" type="button" id="esteira-play" aria-pressed="false">Iniciar rolagem</button>
        <button class="button" type="button" id="esteira-adjust" aria-haspopup="dialog">Ajustes</button>
      </div>
      <div class="esteira-status-row"><span id="esteira-status" role="status">Pronto para ler.</span><span id="esteira-position">0%</span></div>
    </footer>
    <dialog id="esteira-settings" aria-labelledby="esteira-settings-title">
      <div class="dialog-head"><h2 id="esteira-settings-title">Seu ritmo de leitura</h2><button class="button" type="button" id="esteira-settings-close">Fechar</button></div>
      <div class="esteira-settings-grid">
        <label class="esteira-option" for="esteira-speed"><span>Velocidade <output id="esteira-speed-value" for="esteira-speed"></output></span><input id="esteira-speed" type="range" min="6" max="48" step="1"><small>Esquerda: mais devagar. Direita: mais rápido.</small></label>
        <label class="esteira-option" for="esteira-font"><span>Tamanho da letra <output id="esteira-font-value" for="esteira-font"></output></span><input id="esteira-font" type="range" min="22" max="44" step="1"><small>Deixe a letra confortável para ler à distância.</small></label>
        <label class="esteira-option" for="esteira-theme">Fundo da leitura<select id="esteira-theme"><option value="escuro">Escuro</option><option value="claro">Claro</option></select></label>
        <button class="button" type="button" id="esteira-restart">Recomeçar esta aula</button>
        <p class="helper" id="esteira-screen">A rolagem pausa quando você troca de aba. Ao voltar, toque em Continuar.</p>
      </div>
    </dialog>`);
  const el = (id) => document.getElementById(`esteira-${id}`);
  let opened = false;
  let playing = false;
  let lessonId = "";
  let frame = 0;
  let previousTime = 0;
  let fractionalY = 0;
  let allowQuestions = false;
  let topHeight = 100;
  let bottomHeight = 120;
  let wake = null;
  let wakeRun = 0;
  let persistTimer;
  const currentLesson = () => lessons.find((lesson) => location.hash === `#aula/${lesson.id}`);
  const persist = () => { try { localStorage.setItem(key, JSON.stringify(prefs)); } catch { /* Optional persistence. */ } };
  function measure() {
    if (!opened) return;
    topHeight = el("panel").getBoundingClientRect().height;
    bottomHeight = el("controls").getBoundingClientRect().height;
    body.style.setProperty("--esteira-top", `${topHeight}px`);
    body.style.setProperty("--esteira-bottom", `${bottomHeight}px`);
  }
  function quizLimit() {
    const quiz = main.querySelector(".quiz");
    return Math.max(0, (quiz ? quiz.getBoundingClientRect().top + window.scrollY : main.offsetHeight) - topHeight - 24);
  }
  function pageLimit() {
    const end = main.querySelector(".pager") || main.querySelector(".article");
    return Math.max(quizLimit(), (end ? end.getBoundingClientRect().bottom + window.scrollY : main.offsetHeight) - window.innerHeight + bottomHeight + 36);
  }
  function progress() {
    if (!opened || !lessonId) return;
    const ratio = clamp(window.scrollY / Math.max(1, quizLimit()), 0, 1, 0);
    const percent = Math.round(ratio * 100);
    el("progress").value = percent;
    el("position").textContent = `${percent}%`;
    prefs.positions[lessonId] = ratio;
  }
  async function releaseScreen() {
    wakeRun++;
    const lock = wake;
    wake = null;
    if (lock) { try { await lock.release(); } catch { /* Already released by browser. */ } }
  }
  async function keepScreen() {
    const run = ++wakeRun;
    if (!navigator.wakeLock?.request) return;
    try {
      const lock = await navigator.wakeLock.request("screen");
      if (run !== wakeRun || !playing) { await lock.release(); return; }
      wake = lock;
      lock.addEventListener("release", () => { if (wake === lock) wake = null; });
    } catch { /* Auto-scroll does not depend on wake lock support. */ }
  }
  function pause(message = "Pausado. Toque em Continuar quando quiser.") {
    playing = false;
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    body.classList.remove("esteira-playing");
    el("play").textContent = "Continuar";
    el("play").setAttribute("aria-pressed", "false");
    el("status").textContent = message;
    progress();
    persist();
    void releaseScreen();
  }
  function tick(time) {
    if (!opened || !playing) return;
    if (previousTime) fractionalY += prefs.speed * Math.min(80, time - previousTime) / 1000;
    previousTime = time;
    const limit = allowQuestions ? pageLimit() : quizLimit();
    if (fractionalY >= limit) {
      window.scrollTo({ top: limit, behavior: "instant" });
      pause(allowQuestions ? "Fim da aula. Escolha outra no topo quando quiser." : "Leitura concluída. A rolagem parou nas perguntas.");
      el("play").textContent = allowQuestions ? "Recomeçar" : "Rolar perguntas";
      return;
    }
    window.scrollTo({ top: fractionalY, behavior: "instant" });
    progress();
    frame = requestAnimationFrame(tick);
  }
  function start() {
    if (!opened || document.hidden || el("settings").open) return;
    if (window.scrollY >= pageLimit() - 2 && allowQuestions) {
      allowQuestions = false;
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (window.scrollY >= quizLimit() - 2) allowQuestions = true;
    const guide = document.getElementById("esteira-guide");
    if (guide) guide.remove();
    playing = true;
    body.classList.add("esteira-playing");
    el("play").textContent = "Pausar";
    el("play").setAttribute("aria-pressed", "true");
    el("status").textContent = "Rolando no seu ritmo.";
    measure();
    fractionalY = window.scrollY;
    previousTime = 0;
    void keepScreen();
    frame = requestAnimationFrame(tick);
  }
  function applyPreferences() {
    body.style.setProperty("--esteira-font", `${prefs.font}px`);
    body.dataset.esteiraTheme = prefs.theme;
    el("speed").value = prefs.speed;
    el("font").value = prefs.font;
    el("theme").value = prefs.theme;
    el("speed-value").textContent = `${prefs.speed} / 48`;
    el("font-value").textContent = `${prefs.font} px`;
    measure();
  }
  function syncLesson() {
    const lesson = currentLesson();
    if (!lesson) { close(); return; }
    const saved = prefs.positions[lesson.id] || 0;
    lessonId = lesson.id;
    prefs.last = lessonId;
    el("lesson").value = lessonId;
    allowQuestions = false;
    applyPreferences();
    pause("Ajuste o ritmo e toque em Iniciar.");
    window.scrollTo({ top: saved * quizLimit(), behavior: "instant" });
    if (!saved) main.querySelector(".page-header").insertAdjacentHTML("afterend", '<aside id="esteira-guide"><p>Escolha a aula no topo e toque em <strong>Iniciar rolagem</strong>. O texto sobe sozinho.</p><p>Em <strong>Ajustes</strong>, mude a velocidade, a letra e o fundo. A leitura pausa nas perguntas. Seu ponto fica salvo neste navegador.</p></aside>');
    el("play").textContent = saved ? "Continuar leitura" : "Iniciar rolagem";
    progress();
    persist();
    el("play").focus({ preventScroll: true });
  }
  function open() {
    if (opened) return;
    const audio = document.getElementById("listen-lesson");
    if (audio?.dataset.playing === "1") audio.click();
    opened = true;
    body.classList.add("esteira-mode");
    el("panel").hidden = false;
    el("controls").hidden = false;
    const lesson = currentLesson() || lessons.find((item) => item.id === prefs.last) || lessons[0];
    applyPreferences();
    if (currentLesson()) syncLesson();
    else location.hash = `aula/${lesson.id}`;
  }
  function close() {
    if (!opened) return;
    pause();
    opened = false;
    el("settings").close();
    el("panel").hidden = true;
    el("controls").hidden = true;
    body.classList.remove("esteira-mode", "esteira-playing");
    document.getElementById("esteira-guide")?.remove();
    window.scrollTo({ top: 0, behavior: "instant" });
    main.focus({ preventScroll: true });
  }
  document.addEventListener("click", (event) => { if (event.target.closest("[data-reader-open]")) open(); });
  document.addEventListener("oficina:render", () => { if (opened) syncLesson(); });
  el("lesson").addEventListener("change", (event) => { pause(); location.hash = `aula/${event.target.value}`; });
  el("exit").addEventListener("click", close);
  el("play").addEventListener("click", () => playing ? pause() : start());
  el("back").addEventListener("click", () => {
    const wasPlaying = playing;
    pause("Voltou 10 segundos de leitura.");
    allowQuestions = false;
    window.scrollTo({ top: Math.max(0, window.scrollY - prefs.speed * 10), behavior: "instant" });
    progress();
    if (wasPlaying) start();
  });
  el("adjust").addEventListener("click", () => { pause("Ajustando o ritmo. Depois toque em Continuar."); el("settings").showModal(); });
  el("settings-close").addEventListener("click", () => el("settings").close());
  el("restart").addEventListener("click", () => {
    pause("Aula no começo. Toque em Iniciar para ler.");
    allowQuestions = false;
    window.scrollTo({ top: 0, behavior: "instant" });
    progress(); persist(); el("settings").close(); el("play").textContent = "Iniciar rolagem";
  });
  for (const setting of ["speed", "font", "theme"]) {
    el(setting).addEventListener("input", () => {
      const ratio = window.scrollY / Math.max(1, quizLimit());
      prefs[setting] = setting === "theme" ? el(setting).value : Number(el(setting).value);
      applyPreferences();
      if (setting === "font") window.scrollTo({ top: ratio * quizLimit(), behavior: "instant" });
      progress(); persist();
    });
  }
  main.addEventListener("pointerdown", (event) => {
    if (opened && playing && event.target.closest("button,input,select,textarea,summary,a")) pause("Leitura pausada para você interagir com a aula.");
  });
  main.addEventListener("focusin", () => { if (opened && playing) pause("Leitura pausada para você interagir com a aula."); });
  document.getElementById("open-search").addEventListener("click", () => { if (opened) pause(); });
  for (const event of ["wheel", "touchstart"]) {
    document.addEventListener(event, () => { if (opened && playing) pause("Leitura pausada para você mover o texto."); }, { passive: true });
  }
  window.addEventListener("scroll", () => {
    if (!opened) return;
    progress();
    clearTimeout(persistTimer);
    persistTimer = setTimeout(persist, 500);
  }, { passive: true });
  window.addEventListener("resize", () => { if (opened) { if (playing) pause("Tela ajustada. Toque em Continuar."); measure(); } });
  window.addEventListener("pagehide", () => { if (opened) pause(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden && opened) pause("Você saiu da tela. Toque em Continuar para retomar."); });
  document.addEventListener("keydown", (event) => {
    if (!opened) return;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { pause(); return; }
    if (event.key === "Escape" && !el("settings").open) { close(); return; }
    if (event.target.closest("input,select,textarea,button,a,summary,[contenteditable]")) return;
    if (event.code === "Space" && !event.ctrlKey && !event.metaKey && !event.altKey) { event.preventDefault(); playing ? pause() : start(); }
    else if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(event.key) && playing) pause("Leitura pausada para você mover o texto.");
  });
})();

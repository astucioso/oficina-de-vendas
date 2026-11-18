(window.CURSO ||= []).push({
  id: 'regime-simples',
  ordem: 2,
  categoria: 'Fiscal',
  titulo: 'EPP, Simples Nacional e alíquota efetiva',
  resumo: 'Descubra o regime da fábrica e aprenda a transformar uma faixa do Simples em uma estimativa para o preço.',
  minutos: 11,
  objetivo: 'Conseguir pedir os dados certos ao contador, distinguir fabricação própria de revenda e conferir uma simulação com RBT12.',
  secoes: [
    {
      titulo: 'O que o cadastro EPP diz',
      texto: 'Empresa de Pequeno Porte é uma classificação por tamanho. A regra geral considera receita bruta anual acima de R$ 360 mil e até R$ 4,8 milhões, com regras específicas, por exemplo, para início de atividade e exportação. Veja se o CNPJ é optante no Portal do Simples Nacional. Se a consulta indicar que a empresa está fora, confirme com a contabilidade se ela está no Lucro Presumido, Lucro Real ou em outra situação aplicável.',
      itens: ['Peça o regime atual, o regime previsto para o próximo ano e a UF de cada estabelecimento que vai faturar.', 'Uma tabela do Simples serve para as receitas enquadradas nesse regime. Fora dele, peça uma simulação por operação já considerando os créditos e as regras aplicáveis.']
    },
    {
      titulo: 'Separe as receitas pelo que a empresa fez',
      texto: 'Se a empresa for optante do Simples, em regra as vendas de mercadoria que ela industrializa entram no Anexo II. A revenda, em regra, entra no Anexo I. Vender pela Shopee, no balcão ou para uma loja de ferragens muda o canal. A natureza da receita depende do produto e da operação.',
      itens: ['Desempenadeira fabricada pela própria empresa e espátula comprada pronta para revenda são exemplos de receitas a segregar.', 'No Simples, a comissão paga ao marketplace é custo comercial e não reduz a base do DAS. O valor depositado pela plataforma pode ser muito menor que o valor da venda.']
    },
    {
      titulo: 'Da faixa para o percentual efetivo',
      texto: 'RBT12 é a receita bruta acumulada nos 12 meses anteriores ao mês de apuração. Considere a receita da empresa, inclusive outros canais e estabelecimentos, conforme o cálculo fiscal. Para empresa em início de atividade, há regras próprias. Identifique a faixa do anexo aplicável e calcule a alíquota efetiva. A fórmula é (RBT12 × alíquota nominal − parcela a deduzir) ÷ RBT12.',
      itens: ['Exemplo de indústria no Anexo II. Com RBT12 de R$ 600 mil, a faixa tem alíquota nominal de 10% e parcela a deduzir de R$ 13.860. O cálculo (R$ 60.000 − R$ 13.860) ÷ R$ 600.000 dá 7,69%.', 'Em um mês hipotético de R$ 20 mil de vendas industriais enquadradas nessa carga, 7,69% dá R$ 1.538 antes de particularidades. Peça ao contador a carga efetiva e os casos segregados para usar na precificação.', 'O PGDAS-D é a apuração mensal oficial, inclusive quando não houve receita no mês. Confira a nova carga quando o faturamento acumulado ou o tratamento fiscal mudar.']
    },
    {
      titulo: 'O calendário e os dados que chegam à contabilidade',
      texto: 'Para quem está no Simples, o prazo federal padrão da apuração mensal no PGDAS-D e do recolhimento do DAS é o dia 20 do mês seguinte, observado o calendário aplicável. A DEFIS é anual e, em regra, vence em 31 de março do ano seguinte. O fechamento interno da fábrica precisa ocorrer antes para dar tempo de conferir vendas, devoluções e receitas de cada atividade. O atraso na transmissão pode gerar multa a partir do dia seguinte ao vencimento, ainda que o tributo esteja pago.',
      itens: ['Para os períodos de apuração de novembro e dezembro de 2026, a Receita orientou informar a folha dos últimos 12 meses (FS12) para todas as atividades do Simples. Se for o caso da fábrica, o responsável pela folha envia o dado ao contador.', 'Se a empresa adotou caixa em 2026, peça ao contador que confirme o tratamento dos valores ainda a receber na virada. Entregue uma relação com venda, documento fiscal, data de recebimento e saldo pendente. A partir de janeiro de 2027, vale a apuração por competência.']
    }
  ],
  pratica: {
    titulo: 'Prepare o resumo para a contabilidade',
    texto: 'Monte um exercício fictício com R$ 600 mil de RBT12, R$ 18 mil de fabricação própria e R$ 2 mil de revenda no mês. Use os valores para praticar a classificação sem registrar uma operação real.',
    passos: ['Marque a produção própria no Anexo II e a revenda no Anexo I, sob a hipótese de que a empresa esteja no Simples.', 'Calcule o exemplo industrial a 7,69%. Só sobre os R$ 18 mil, o resultado ilustrativo é R$ 1.384,20. A revenda precisa da sua própria apuração.', 'Em uma empresa real, peça confirmação do regime, da data da simulação, do RBT12 e da carga por tipo de venda. Registre de onde saiu cada número.']
  },
  quiz: [
    {
      pergunta: 'O cartão do CNPJ mostra EPP. Qual é o próximo passo antes de estimar o imposto?',
      opcoes: ['Usar 4,5% para todo produto de madeira.', 'Consultar se o CNPJ é optante e confirmar o regime com o contador.', 'Usar o percentual de desconto encontrado no extrato da Shopee.'],
      correta: 1,
      explicacao: 'EPP indica porte. A opção pelo Simples e a atividade de cada receita determinam se e como a tabela se aplica.'
    },
    {
      pergunta: 'Qual percentual sai do exemplo de R$ 600 mil, alíquota nominal de 10% e dedução de R$ 13.860?',
      opcoes: ['7,69%.', '10%.', '4,5%.'],
      correta: 0,
      explicacao: 'R$ 600.000 × 10% dá R$ 60.000. Depois da dedução, R$ 46.140 divididos por R$ 600.000 resultam em 7,69%.'
    }
  ],
  fontes: [
    { titulo: 'Lei Complementar 123 atualizada (arts. 3º, 13 e 18 e Anexos I e II)', url: 'https://www2.camara.leg.br/legin/fed/leicom/2006/leicomplementar-123-14-dezembro-2006-548099-normaatualizada-pl.html' },
    { titulo: 'Consulta Optantes do Simples Nacional', url: 'https://consopt.www8.receita.fazenda.gov.br/consultaoptantes' },
    { titulo: 'Receita Federal sobre a comissão de marketplace no Simples', url: 'https://normas.receita.fazenda.gov.br/sijut2consulta/anexoOutros.action?idArquivoBinario=62756' },
    { titulo: 'Receita Federal sobre a apuração mensal no PGDAS-D', url: 'https://www.gov.br/pt-br/servicos/declarar-apuracoes-mensais-do-simples-nacional' },
    { titulo: 'Receita Federal sobre a declaração anual DEFIS', url: 'https://www.gov.br/pt-br/servicos/declarar-apuracoes-e-informacoes-anuais-do-simples-nacional' },
    { titulo: 'Portal do Simples sobre as multas de PGDAS-D e DEFIS', url: 'https://www8.receita.fazenda.gov.br/simplesnacional/noticias/NoticiaCompleta.aspx?id=1e17613a-4a08-4ba0-9a7d-550e833f3e13' },
    { titulo: 'Receita Federal sobre a folha de novembro e dezembro de 2026 e a apuração em 2027', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/pgdas-d-e-atualizado-para-atender-a-reforma-tributaria-a-partir-de-novembro-de-2026/' }
  ]
});

window.CURSO.push({
  id: 'impostos-reforma',
  ordem: 3,
  categoria: 'Fiscal',
  titulo: 'Impostos da venda, UF e reforma tributária',
  resumo: 'Entenda o que entra no custo, o que entra no preço e quais mudanças de 2026 e 2027 devem ser revistas com o contador.',
  minutos: 14,
  objetivo: 'Identificar quais dados mudam a tributação de uma venda e pedir parâmetros diferentes quando a operação exigir.',
  secoes: [
    {
      titulo: 'Compra e venda têm contas diferentes',
      texto: 'O custo do estoque inclui os tributos de aquisição que a empresa não recupera. Se você já usou o preço total pago pela madeira e ele contém um tributo não recuperável, ele já está no custo. Tributos recuperáveis saem desse custo. Na formação do preço, o imposto que incide sobre a venda entra como despesa variável, junto de taxas do canal, embalagem da expedição e frete pago pelo vendedor, conforme o caso.',
      itens: ['Em 2026, o DAS da receita industrial no Simples costuma reunir IRPJ, CSLL, PIS/Pasep, Cofins, CPP, IPI e ICMS, conforme a apuração. Evite adicionar ICMS e IPI de novo se já estiverem na carga efetiva usada na simulação.', 'Fora do Simples, o regime define a apuração de IRPJ e CSLL e o tratamento dos demais tributos. Créditos e recolhimentos dependem da operação. Peça ao contador a carga para o preço por cenário e quais valores a fábrica deve reservar no caixa.', 'Se houver folha, pró-labore ou pagamentos com retenção, confirme as obrigações correspondentes, por exemplo, eSocial, EFD-Reinf, DCTFWeb, INSS, IRRF e FGTS, conforme cabíveis. Elas fazem parte da rotina da empresa e podem continuar existindo mesmo com recolhimento no DAS.']
    },
    {
      titulo: 'O que muda quando a venda cruza uma UF',
      texto: 'Informe a UF de origem e de destino, o perfil do destinatário e a finalidade da compra. O tratamento pode variar entre venda interna, venda interestadual para consumidor final e venda para revenda. CNPJ e inscrição estadual são dados de cadastro. Confirme a situação do comprador para fins de ICMS e a finalidade da compra.',
      itens: ['ICMS-ST é a substituição tributária. Confira se a mercadoria e a operação estão abrangidas pela regra vigente e quem recolhe. O NCM sozinho não resolve a questão.', 'DIFAL é o diferencial de alíquotas. Venda interestadual e compra interestadual podem ter regras distintas. A contabilidade avalia a incidência de DIFAL, antecipação ou FCP (Fundo de Combate à Pobreza) e confirma se a operação pede inscrição ou guia em outra UF.', 'Em 2026, o sublimite de ICMS e ISS no Simples é R$ 3,6 milhões em todas as UFs. O contador verifica quando um excesso produz efeito e se o recolhimento passa a ser feito fora do DAS.']
    },
    {
      titulo: 'Uma regra estadual tem data e alcance',
      texto: 'São Paulo revogou em 1º de outubro de 2026 o Anexo XVIII da Portaria CAT 68/2019, que incluía ferramentas e cabos de ferramentas de madeira na lista paulista de substituição tributária. Use o exemplo para entender por que uma tabela antiga pode levar a uma cobrança errada. A regra paulista não define o tratamento em outras UFs e não classifica, por si, a desempenadeira da fábrica.',
      itens: ['Para isenção, redução, suspensão, diferimento ou outro benefício, peça o ato legal, as condições, a vigência e o código de benefício fiscal (cBenef), quando exigido pela UF.', 'Mantenha juntos a configuração, o fundamento e a data de início. Caso exista mudança de enquadramento, peça instruções para o estoque que já existia na virada.']
    },
    {
      titulo: 'Passagem de 2026 para 2027',
      texto: 'Em 2026, o regime regular tem regras de teste para IBS e CBS. A Receita prevê dispensa de recolhimento no ano de teste conforme o cumprimento das obrigações acessórias. Para o Simples, as regras de IBS e CBS passam a produzir efeito a partir de janeiro de 2027. A regra padrão é recolher esses tributos pelo DAS, com possibilidade de optar pelo regime regular de IBS e CBS, mantendo o Simples para os demais tributos.',
      itens: ['Na transição geral de 2027, a CBS substitui PIS/Pasep e Cofins para novos fatos geradores e o IPI tem alíquotas reduzidas a zero, ressalvados os produtos preservados nas regras da Zona Franca de Manaus. ICMS e ISS continuam durante a transição e sua redução gradual começa em 2029. O Imposto Seletivo tem hipóteses próprias.', 'Para 2027, confirme com o contador se a fábrica permanecerá no Simples, qual foi a opção de IBS e CBS e desde quando ela produz efeito. Consulte as tabelas e o leiaute em vigor para cada documento. Atualize as regras de nota e a planilha de preços junto com o ERP.', 'A partir de 2027, a apuração do Simples será por competência. A receita entra no período do faturamento definido pelas regras fiscais, ainda que o dinheiro da venda seja liberado posteriormente. O repasse da Shopee serve para conciliar o recebimento e aplicar a regra de comissão contratada.']
    },
    {
      titulo: 'Escriturações a confirmar por estabelecimento',
      texto: 'A EFD ICMS/IPI é a escrituração digital do Sped Fiscal. Sua entrega depende das regras da UF e do estabelecimento. Confirme os blocos de inventário e produção, quando forem exigidos. A DeSTDA é uma declaração usada no Simples para informações de ICMS de substituição tributária, diferencial e antecipação. Consulte a regra estadual, inclusive para períodos sem movimento e casos de dispensa.',
      itens: ['Se a EFD ICMS/IPI se aplicar, pergunte se entram o Bloco H (inventário) e o Bloco K (produção e estoque), em qual detalhe e data. A contabilidade também verifica a necessidade de livros ou registros de entradas, caixa e inventário conforme o enquadramento.', 'Se estiver no Lucro Real ou Presumido, confirme também ECD (contabilidade digital), ECF (escrituração fiscal de IRPJ e CSLL), EFD-Contribuições e DCTFWeb/MIT, conforme o caso. A extinção do PIS/Cofins para novos fatos em 2027 ainda deixa situações específicas de EFD-Contribuições, como créditos remanescentes e retificações.', 'Peça uma lista com a situação de cada obrigação neste estabelecimento, o prazo, o sistema usado, quem gera e quais dados a Shopee ou a fábrica fornecem. Use “não se aplica” só depois de a contabilidade confirmar.']
    }
  ],
  pratica: {
    titulo: 'Peça três cenários com a mesma peça',
    texto: 'Use uma desempenadeira de cedrinho e simule três compradores. O objetivo é descobrir quais dados são necessários antes de programar o preço e a nota.',
    passos: ['Descreva venda dentro da UF, venda para consumidor final em outra UF e venda para uma loja de outra UF que comprará para revender.', 'Peça para cada cenário a carga para o preço, os campos da NF-e, os tributos fora do DAS quando existirem e a vigência da resposta.', 'Na simulação, registre separadamente a taxa da Shopee e o imposto da venda. Se a tributação estiver em aberto, marque a simulação como provisória.']
  },
  quiz: [
    {
      pergunta: 'Se o DAS efetivo do exemplo já contém ICMS e IPI aplicáveis, como tratar esses componentes no preço?',
      opcoes: ['Somar ambos novamente em todas as vendas.', 'Descartar o DAS e usar o imposto impresso na nota de compra.', 'Usar a carga efetiva e incluir à parte somente os tributos devidos fora dela.'],
      correta: 2,
      explicacao: 'Duplicar componentes do DAS distorce a margem. O contador identifica o que está coberto e o que deve ser tratado separadamente.'
    },
    {
      pergunta: 'Para revisar os preços do Simples no início de 2027, qual dado precisa ser confirmado?',
      opcoes: ['Se IBS e CBS da empresa ficarão no DAS ou no regime regular.', 'Se o número da nota fiscal é par ou ímpar.', 'Se a Shopee depositou o primeiro pedido de janeiro.'],
      correta: 0,
      explicacao: 'O modelo de recolhimento e sua vigência são dados fiscais. Depósito do marketplace serve para conferência de recebimentos.'
    }
  ],
  fontes: [
    { titulo: 'Conselho Federal de Contabilidade sobre tributos recuperáveis no estoque', url: 'https://cfc.org.br/tecnica/perguntas-frequentes/4066-2/' },
    { titulo: 'CGSN e Diário Oficial sobre o sublimite de 2026', url: 'https://www.gov.br/cnpq/pt-br/acesso-a-informacao/acoes-e-programas/servicos/importacao-para-pesquisa/PortariaMFn.2.786de18deNovembrode2025.pdf' },
    { titulo: 'Sefaz São Paulo sobre a mudança na substituição tributária de ferramentas', url: 'https://legislacao.fazenda.sp.gov.br/Paginas/Portaria-SRE-34-de-2026.aspx' },
    { titulo: 'Receita Federal e CGIBS sobre IBS e CBS em 2026', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2025/dezembro/comunicado-conjunto' },
    { titulo: 'Receita Federal sobre as opções de IBS e CBS no Simples em 2027', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/setembro/simples-nacional-2027-entenda-os-novos-prazos-e-faca-sua-escolha-com-consciencia-e-tranquilidade/' },
    { titulo: 'Receita Federal e calendário geral da reforma tributária', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria-do-consumo/entenda' },
    { titulo: 'Consulta federal de obrigatoriedade de entrega da EFD ICMS/IPI', url: 'https://www.gov.br/pt-br/servicos/consultar-a-obrigatoriedade-de-entrega-da-efd-icms-ipi' },
    { titulo: 'Receita Federal e perguntas frequentes da EFD ICMS/IPI, inclusive Bloco K', url: 'https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/efd-icms-ipi/perguntas-frequentes-efd-icms-ipi-v7.8.pdf/view' },
    { titulo: 'Sefaz São Paulo e guia DeSTDA como exemplo estadual', url: 'https://portal.fazenda.sp.gov.br/servicos/simples/Paginas/destda.aspx' },
    { titulo: 'Sefaz São Paulo e exigência de cBenef como exemplo estadual', url: 'https://legislacao.fazenda.sp.gov.br/Paginas/Portaria-SRE-70-de-2025.aspx' },
    { titulo: 'Receita Federal sobre a obrigatoriedade da ECD', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/sped/ecd/ecd' },
    { titulo: 'Receita Federal sobre a obrigatoriedade da ECF', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/sped/ecf/ecf/quais-pessoas-juridicas-estao-obrigadas-1' },
    { titulo: 'Sped e EFD-Contribuições na transição de 2027', url: 'https://www.gov.br/sped/pt-br/assuntos/comunicados/efd-contribuicoes/efd-contribuicoes-publicacao-da-nota-tecnica-13-2026' },
    { titulo: 'Receita Federal sobre DCTFWeb, MIT, eSocial e EFD-Reinf', url: 'https://www.gov.br/pt-br/servicos/declarar-debitos-e-creditos-tributarios-federais' }
  ]
});

window.CURSO.push({
  id: 'cadastro-fiscal',
  ordem: 4,
  categoria: 'Fiscal',
  titulo: 'Cadastro fiscal por produto e operação',
  resumo: 'Aprenda para que servem NCM, CFOP, CST, CSOSN e CEST. Monte a ficha que o contador precisa para orientar o ERP.',
  minutos: 13,
  objetivo: 'Descrever corretamente cada mercadoria e obter uma matriz fiscal revisável antes de emitir notas reais.',
  secoes: [
    {
      titulo: 'Uma ficha útil começa no chão da fábrica',
      texto: 'O SKU é o identificador interno que liga produto, estoque, preço e anúncio. Para o cadastro fiscal, descreva a mercadoria como ela é. Uma desempenadeira de cedrinho com base lisa pode ter uma ficha diferente de uma com espuma ou base de outro material. Um cabo avulso e uma ferramenta completa também precisam ser analisados separadamente.',
      itens: ['Registre material da base e da empunhadura, medidas, uso, acabamento, quantidade por embalagem, unidade de venda, fotos e se é fabricação própria ou revenda.', 'Um kit tem SKU próprio para controle comercial e a lista de seus componentes. Peça ao contador como esses componentes devem constar na nota e qual unidade de venda usar.']
    },
    {
      titulo: 'NCM descreve a mercadoria',
      texto: 'NCM é a Nomenclatura Comum do Mercosul. O código tem oito dígitos e identifica a classificação fiscal da mercadoria. A consulta começa com a ficha técnica e os textos oficiais. O Classif reúne a tabela vigente, as notas explicativas e decisões de classificação. A TIPI relaciona códigos e alíquotas de IPI para as hipóteses em que é usada.',
      itens: ['Use anúncios de concorrentes apenas para ver como apresentam o catálogo. Para confirmar a classificação, entregue a ficha técnica à contabilidade e peça que valide na tabela oficial. Se persistir dúvida, existe consulta formal à Receita Federal.', 'Se a mercadoria tiver CEST, valide seu enquadramento com o NCM, a descrição e a regra da operação. A existência do código não prova, isoladamente, que aquela venda tem ICMS-ST.']
    },
    {
      titulo: 'CFOP e códigos de tributação descrevem a operação',
      texto: 'CFOP é o Código Fiscal de Operações e Prestações. Ele indica, por exemplo, venda, devolução ou remessa. Em saídas, a família 5 cobre em regra operações internas e a família 6, interestaduais. O restante do código depende da natureza da transação. O mesmo SKU pode ter um CFOP na venda e outro na devolução.',
      itens: ['CST é Código de Situação Tributária. CSOSN é Código de Situação da Operação no Simples Nacional, usado para ICMS nas situações em que se aplica. O ERP seleciona as tabelas conforme o regime e o tributo da operação.', 'Peça a origem da mercadoria e o CRT (Código de Regime Tributário) do emitente. PIS, Cofins e IPI têm tabelas próprias. Para a reforma, valide o CST de IBS/CBS e o cClassTrib (código de classificação tributária) conforme aplicação, regras e datas do documento.']
    },
    {
      titulo: 'Como montar a matriz fiscal',
      texto: 'Use uma linha por combinação que muda o tratamento. Para cada uma, confirme o estabelecimento emitente, a mercadoria, o tipo de operação, a UF de destino, o perfil do cliente e a vigência. Guarde a ficha e a orientação recebida junto à configuração aplicada no ERP.',
      itens: ['Linha de exemplo a preencher. Desempenadeira fabricada pela empresa, venda interna a consumidor final. Campos da resposta do contador: NCM, CFOP, CST ou CSOSN de ICMS, CEST se aplicável, tributos, destaque e informações adicionais.', 'Copie a estrutura da linha para venda interestadual, revenda, venda para lojista, devolução e demais casos reais. Em homologação, confira também a descrição, unidade, quantidade, valores e referência quando aplicável.']
    },
    {
      titulo: 'Questões da operação que ainda precisam de resposta',
      texto: 'Antes de colocar o produto à venda, transforme cada linha abaixo em uma resposta para a empresa real. Use “confirmado”, “não se aplica” ou “em aberto” e guarde data, responsável, fonte ou documento. Uma resposta sobre a fábrica inteira pode não valer para todas as filiais, mercadorias e UFs.',
      itens: ['Quem fatura? Confirme CNPJ do estabelecimento, endereço de saída, UF, situação da inscrição estadual (IE), atividades econômicas (CNAEs) de fabricação e eventual revenda e a regularidade do cadastro. A contabilidade verifica o que precisa ser atualizado na Redesim ou na Sefaz.', 'Para onde e para quem? Liste destinos atendidos e se a compra é para uso ou revenda. Confirme o indicador de contribuinte do ICMS do destinatário, a regra de saída e devolução e eventual inscrição ou guia exigida no destino. Inclua estoque de terceiros ou outro estabelecimento, se usarem essa modalidade.', 'Quanto reservar de tributo? Confirme o regime vigente, o RBT12 se for Simples, a receita por atividade, a carga de cada operação, o sublimite e eventuais benefícios. Anote também o regime e a opção de IBS/CBS previstos para 2027.', 'O que escriturar e entregar? Peça ao contador a lista de registros de entrada e estoque, guias e obrigações estaduais (incluindo EFD ou DeSTDA se couber), federais e da folha, com as datas e os responsáveis.', 'Quem pode emitir? Confirme credenciamento da NF-e, certificado em vigor, permissões no ERP e no canal, importação dos dados do pedido e um teste em homologação. Deixe o procedimento da primeira emissão real e das exceções com quem vai operar.']
    }
  ],
  pratica: {
    titulo: 'Monte duas fichas e uma matriz inicial',
    texto: 'Comece com a desempenadeira e um cabo de martelo. Use características medidas na fábrica. Deixe em branco os campos que ainda dependem da validação fiscal.',
    passos: ['Anote material, dimensões, uso, unidade de venda, SKU e origem do produto. Diferencie as variações por material ou acabamento.', 'Monte três linhas por produto: venda interna, venda interestadual para consumidor final e devolução. Acrescente revenda ou compra interestadual de insumos se forem operações previstas.', 'Envie a ficha ao contador e peça valores, vigência e exemplos revisados. Compare o resultado com uma NF-e de teste no ambiente de homologação.', 'Revise as questões em aberto com a fábrica. Antes de ativar vendas reais, feche as que afetam o preço, o cadastro, a emissão e o despacho e registre quem vai cuidar das demais rotinas.']
  },
  quiz: [
    {
      pergunta: 'A mesma desempenadeira foi vendida e depois devolvida. Qual campo descreve a mudança de operação?',
      opcoes: ['Cor da foto de capa.', 'CFOP.', 'SKU do anúncio.'],
      correta: 1,
      explicacao: 'O CFOP descreve a transação. A mesma mercadoria pode manter seu NCM e ser objeto de venda ou devolução.'
    },
    {
      pergunta: 'O NCM de um anúncio parece servir para seu produto. Como fechar o cadastro fiscal?',
      opcoes: ['Copiar todos os códigos que aparecem no anúncio.', 'Usar o mesmo NCM para todos os produtos de madeira.', 'Reunir a ficha técnica e validar a classificação e a tributação aplicável com a contabilidade.'],
      correta: 2,
      explicacao: 'O enquadramento depende da mercadoria efetivamente vendida e do contexto da operação. A descrição comercial de outro vendedor não comprova esses dados.'
    }
  ],
  fontes: [
    { titulo: 'Receita Federal e Sistema Classif para consultar NCM', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/classificacao-fiscal-de-mercadorias/classif' },
    { titulo: 'Receita Federal sobre consulta formal de classificação', url: 'https://www.gov.br/pt-br/servicos/formalizar-consulta-sobre-classificacao-fiscal-de-mercadorias' },
    { titulo: 'Receita Federal e TIPI atualizada', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/tipi-tabela-de-incidencia-do-imposto-sobre-produtos-industrializados' },
    { titulo: 'Sefaz São Paulo e tabela de CFOP', url: 'https://legislacao.fazenda.sp.gov.br/Paginas/l6an5.aspx' },
    { titulo: 'CONFAZ e leiaute da NF-e com regras de validação', url: 'https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/moc7-anexo-i-leiaute-e-rv.pdf' },
    { titulo: 'Sefaz Virtual RS e tabela de CST e cClassTrib de IBS e CBS', url: 'https://dfe-portal.svrs.rs.gov.br/NFe/Documentos' },
    { titulo: 'Receita Federal — consulta de CNPJ e situação cadastral', url: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-nacional-de-pessoas-juridicas' }
  ]
});

window.CURSO.push({
  id: 'nfe-e-eventos',
  ordem: 5,
  categoria: 'Fiscal',
  titulo: 'NF-e, DANFE, cancelamento e devolução',
  resumo: 'Acompanhe o pedido da conferência até o XML autorizado e aprenda a lidar com os casos que exigem correção ou devolução.',
  minutos: 14,
  objetivo: 'Verificar se a NF-e foi autorizada, saber qual documento guardar e escolher o encaminhamento inicial de cada ocorrência.',
  secoes: [
    {
      titulo: 'Prepare o emissor e confirme o ambiente',
      texto: 'Confirme se o estabelecimento está habilitado a emitir NF-e na sua Sefaz e se o emissor usa certificado digital válido e compatível. Homologação é o ambiente para ensaiar situações sem validade fiscal. A NF-e real só é autorizada em produção. Defina antes quem acompanha a autorização, quem pode emitir ou cancelar e onde guardar arquivos e protocolos.',
      itens: ['No teste, revise CNPJ e IE do emitente, certificado, natureza da operação, série e numeração configuradas, tributação, PDF do DANFE e comunicação com o canal.', 'Confirme com o ERP as notas técnicas em produção e a versão para 2027. Em novembro de 2026, a Receita Federal e o Comitê Gestor do IBS reagendaram a implantação em produção de notas técnicas específicas para 14 de dezembro de 2026, entre elas a NT 2026.005 da NF-e para o Simples. Confira o calendário vigente antes de liberar a configuração.']
    },
    {
      titulo: 'Do pedido à autorização',
      texto: 'A NF-e de mercadorias, modelo 55 nas operações em que é aplicável, é o arquivo XML assinado e autorizado pela Sefaz. O ERP da fábrica faz a emissão em nome dela. O DANFE é a representação auxiliar, usada para acompanhar a mercadoria conforme as regras de transporte e facilitar a consulta pela chave de acesso.',
      itens: ['Antes de transmitir, confira o pedido, seus itens, quantidades, o endereço de entrega, os valores e a regra fiscal do cenário. Na operação comum, confirme a autorização antes de despachar.', 'Guarde o XML processado com o protocolo e vincule a chave ao pedido. Gere o DANFE e a etiqueta de envio no fluxo aceito pela transportadora ou pelo marketplace.', 'Um pedido pago no marketplace e uma NF-e autorizada são duas confirmações diferentes. Se a Sefaz rejeitar o documento, use a mensagem para localizar o problema e corrigir com o contador quando for fiscal. Antes de tentar de novo após uma falha de comunicação, confira a situação da nota no ERP ou na Sefaz.']
    },
    {
      titulo: 'Se o pedido cair antes de sair',
      texto: 'Se uma nota já foi autorizada e a mercadoria ainda não saiu, avalie se é caso de cancelamento fiscal. Confira o prazo e o procedimento da UF. O cancelamento é um evento para registrar na Sefaz. Salve o XML do evento com o retorno e confirme no ERP se ele foi aceito.',
      itens: ['Um cancelamento na Shopee não confirma a baixa fiscal. Consulte a situação do pedido e a da NF-e.', 'A carta de correção eletrônica só serve para alterações permitidas. Se o erro envolve campos que determinam imposto, identificação que muda remetente ou destinatário, ou datas vedadas, siga a orientação fiscal para o caso.']
    },
    {
      titulo: 'Se a mercadoria já circulou',
      texto: 'Se houve saída, tratativas como recusa, extravio, devolução total ou parcial e reembolso exigem identificar o que ocorreu de fato. A contabilidade orienta qual documento emitir ou receber, como referenciar a nota original e como registrar os itens. A devolução física, a regularização fiscal e o reembolso no marketplace podem acontecer em datas diferentes.',
      itens: ['Anote pedido, chave da nota original, quantidade envolvida, datas de saída e retorno, situação do pacote e valor reembolsado.', 'Ao receber devolução parcial, confira as peças e suas condições antes de devolver saldo ao estoque. Guarde o documento e os comprovantes conforme o fluxo aprovado.']
    },
    {
      titulo: 'Seu pacote mensal para o contador',
      texto: 'Combine o dia, o formato e quais arquivos o contador já obtém do ERP. Para o canal Shopee, reúna XMLs de venda, documentos de devolução e eventos fiscais que ocorreram. Separe o relatório financeiro com os repasses e estornos. Compras de insumos, despesas, bancos, folha e demais canais precisam de um responsável da empresa para fechar a contabilidade completa.',
      itens: ['Confira mês, CNPJ emitente e cobertura de eventos antes de enviar o pacote. Preserve uma cópia organizada por mês e registre o que ficou pendente.', 'Trate as ocorrências quando acontecerem. O fechamento mensal reúne a documentação do trabalho feito ao longo do mês.']
    },
    {
      titulo: 'Entradas, fabricação e inventário da madeira',
      texto: 'A nota de saída conta só parte da história. A fábrica registra entradas e mantém documentos que sustentam o custo, a procedência e o inventário. Combine como entregar ao contador os XMLs de compras e fretes, os ajustes de estoque e os registros de produção, conforme o regime e a UF.',
      itens: ['Na entrada, ligue a compra ao fornecedor, ao XML e ao item correto. Confira quantidade, unidade, documento de frete e, quando aplicável, registro de manifestação do destinatário. A contabilidade orienta créditos e tributos de entrada.', 'Na produção, separe madeira, insumos, peças em produção, acabadas, devoluções, perdas e transferência entre depósitos. O inventário precisa refletir o saldo físico na data pedida, com justificativa para divergências. Valide livros e blocos de escrituração com o contador.', 'Para madeira de origem nativa, confirme com a fábrica os documentos de procedência, se DOF/DOF+ e destinação final se aplicam ao insumo e as exigências de licenciamento ou registro do estabelecimento. Produto acabado pode ter tratamento diferente no transporte. Consulte o órgão ambiental e verifique as regras estaduais e municipais quando cabível.']
    }
  ],
  pratica: {
    titulo: 'Ensaie três situações no ambiente de teste',
    texto: 'Imagine três pedidos de desempenadeira. Um foi pago e está pronto para faturar, outro foi cancelado antes de sair e o terceiro voltou após a entrega.',
    passos: ['No primeiro, confira o cadastro, acompanhe a autorização e localize a chave, o protocolo, o XML e o DANFE.', 'No segundo, confirme se houve emissão e saída. Se já houve autorização e a mercadoria não saiu, verifique a regra de cancelamento e localize o protocolo de evento no processo de teste.', 'No terceiro, anote a saída, a quantidade retornada e o reembolso e peça a orientação de devolução. Relacione o documento de retorno à venda original.']
  },
  quiz: [
    {
      pergunta: 'Qual arquivo guarda a NF-e efetivamente autorizada?',
      opcoes: ['Uma captura da tela do pedido pago.', 'O PDF da etiqueta de envio.', 'O XML processado com a autorização de uso.'],
      correta: 2,
      explicacao: 'O XML e o protocolo formam o documento fiscal digital autorizado. O DANFE auxilia a circulação e a consulta.'
    },
    {
      pergunta: 'A Shopee confirmou a devolução depois que o pedido saiu. O que fazer primeiro?',
      opcoes: ['Levantar os fatos, conferir o retorno e aplicar o fluxo fiscal de devolução orientado pela contabilidade.', 'Cancelar a NF-e como se a mercadoria ainda estivesse na fábrica.', 'Editar diretamente o XML autorizado para zerar os valores.'],
      correta: 0,
      explicacao: 'A saída já aconteceu. O fluxo depende de devolução, recusa ou outra ocorrência e da documentação correspondente. Um XML autorizado permanece íntegro.'
    }
  ],
  fontes: [
    { titulo: 'CONFAZ — Manual da NF-e: XML, DANFE, cancelamento e carta de correção', url: 'https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/moc7-visao-geral.pdf' },
    { titulo: 'Resolução CGSN 140 e regras de devolução no Simples', url: 'https://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=92278' },
    { titulo: 'Shopee e exportação de renda e repasses', url: 'https://seller.shopee.com.br/edu/article/19426/tudo-sobre-minha-renda' },
    { titulo: 'Sefaz de São Paulo — perguntas e respostas sobre emissão de NF-e', url: 'https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/perguntas-frequentes.aspx/respostas_V.asp' },
    { titulo: 'Receita Federal e CGIBS sobre a mudança no calendário de notas técnicas da NF-e', url: 'https://dfe-portal.svrs.rs.gov.br/Nfe/Avisos/3012' },
    { titulo: 'Ibama e instruções sobre DOF, rastreabilidade e procedência', url: 'https://www.gov.br/ibama/pt-br/assuntos/biodiversidade/flora-e-madeira/documento-de-origem-florestal-dof/dof-rastreabilidade' },
    { titulo: 'Ibama sobre destinação final e produtos acabados', url: 'https://www.gov.br/ibama/pt-br/assuntos/biodiversidade/flora-e-madeira/arquivos/dof/20241001_Cartilha_Destinacao_Final_no_Sistema_DOF_3a_versao.pdf' }
  ]
});

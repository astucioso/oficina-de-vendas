(window.CURSO ||= []).push({
  id: 'precificacao-shopee-kits',
  ordem: 6,
  categoria: 'Gestão',
  titulo: 'Precificação na Shopee: avulso, kit e promoção',
  resumo: 'Use a desempenadeira de cedrinho para calcular o preço mínimo e o que sobra por venda.',
  minutos: 11,
  objetivo: 'Definir um preço que cubra custos e testar se um kit aumenta a margem sem esconder as despesas.',
  secoes: [
    {
      titulo: 'Separe custo de fabricação e custo de vender',
      texto: 'Os R$ 6,90 informados são da desempenadeira de cedrinho. Confirme se esse valor já cobre madeira, mão de obra e perdas da produção. Depois some o que acontece na venda.',
      itens: [
        'Por peça: custo de fabricação e outros insumos que variam com a quantidade.',
        'Por pacote ou pedido: caixa, proteção, etiqueta, comissão de R$ 1,50 se essa for a unidade combinada, e eventual frete custeado pela fábrica.',
        'Sobre o preço: percentual do marketplace e estimativa de imposto. Cupom ou desconto bancado pela loja reduz a receita da venda. Considere apenas a parte que a loja paga.',
        'Trate os 7,69% de imposto e R$ 1,00 de embalagem deste exercício como hipóteses. Antes de decidir o preço real, troque pelos valores informados pelo contador e pela produção.'
      ]
    },
    {
      titulo: 'Confira a faixa da taxa e calcule o piso',
      texto: 'Na tabela CNPJ consultada em 17/11/2026, para itens de R$ 9,00 a R$ 79,99 a comissão é 20% do item mais R$ 4,50 por item vendido. Abaixo de R$ 9,00, o adicional é metade do preço. A partir de R$ 80,00, muda a faixa. Confira a política antes de simular um preço fora desse intervalo.',
      itens: [
        'Nesse intervalo, com os percentuais aplicados ao mesmo preço e demais custos em reais, use: preço mínimo = custos em reais ÷ (1 − taxas percentuais − margem desejada).',
        'No exemplo avulso, some R$ 6,90 + R$ 1,00 + R$ 1,50 + R$ 4,50 = R$ 13,90. A divisão por (1 − 0,20 − 0,0769) indica equilíbrio perto de R$ 19,23, sem Ads e sem outros custos. Ao arredondar cada encargo separadamente, o simulador encontra R$ 19,22.',
        'Para 20% de margem antes de Ads, inclua 0,20 no denominador. A fórmula indica cerca de R$ 26,58 arredondando para cima. O simulador encontra R$ 26,57 após arredondar os encargos em centavos. Vendendo a R$ 26,90, sobram R$ 5,55 para a fábrica após a sua comissão, antes de despesas fixas e de qualquer gasto adicional.',
        'Compare concorrentes pelo tamanho, material, acabamento, quantidade e preço entregue. Teste o desconto no preço efetivo antes de ativar uma promoção.'
      ]
    },
    {
      titulo: 'Simule o kit como uma oferta própria',
      texto: 'Um kit com dois produtos tem dois custos de fabricação. Se ele for cadastrado como um único item e o extrato trouxer uma tarifa fixa para o kit, a conta pode sobrar mais por pedido. Duas unidades de um anúncio avulso geram duas tarifas por item.',
      itens: [
        'Kit a R$ 39,90, duas peças a R$ 6,90, uma embalagem de R$ 1,00, uma tarifa fixa de R$ 4,50 e uma comissão de R$ 1,50 por pedido: contribuição aproximada de R$ 8,05.',
        'Se a comissão acordada for R$ 1,50 por peça, ficam R$ 6,55. Registre essa decisão antes de divulgar o kit.',
        'Pese e meça o conjunto já embalado. Refaça o cenário se a caixa, o frete ou a faixa de preço mudar e confirme o cálculo no primeiro repasse.'
      ]
    }
  ],
  pratica: {
    titulo: 'Monte três cenários para o mesmo produto',
    texto: 'Use R$ 6,90 de custo por peça, R$ 1,00 de caixa por pedido e R$ 1,50 por pedido. Mantenha 7,69% como imposto simulado.',
    passos: [
      'Simule uma unidade a R$ 24,90, outra a R$ 26,90 e um kit de duas a R$ 39,90.',
      'Anote preço, taxas, custo, contribuição em reais e contribuição como porcentagem do preço. Para a unidade, espere aproximadamente R$ 4,11 e R$ 5,55, respectivamente.',
      'Refaça o cenário de R$ 26,90 com R$ 2,00 de embalagem. Veja quanto sobra e marque o que precisa confirmar com a fábrica.'
    ]
  },
  quiz: [
    {
      pergunta: 'Qual preço entra na simulação quando a loja banca um desconto no anúncio?',
      opcoes: ['O preço cheio, sempre.', 'O valor efetivo após o desconto da loja, respeitando as bases de cada encargo.', 'O valor sacado da carteira no mês.'],
      correta: 1,
      explicacao: 'Desconto custeado pela loja reduz o que ela obtém da venda. Confira a base que o marketplace e o contador aplicam para evitar descontar o mesmo valor duas vezes.'
    },
    {
      pergunta: 'Um kit contém duas desempenadeiras. Que custo de fabricação deve entrar?',
      opcoes: ['R$ 13,80 pelo par.', 'R$ 6,90 porque o anúncio é único.', 'R$ 4,50 porque é a tarifa fixa da Shopee.'],
      correta: 0,
      explicacao: 'O anúncio pode ter uma unidade comercial de venda e conter duas peças físicas. Cada peça mantém o próprio custo.'
    }
  ],
  fontes: [
    { titulo: 'Shopee — Política de comissão para vendedores CNPJ e CPF', url: 'https://seller.shopee.com.br/edu/article/26839' },
    { titulo: 'Shopee — Programa de Frete Grátis e regras aplicáveis', url: 'https://seller.shopee.com.br/edu/article/23431' }
  ]
});

(window.CURSO ||= []).push({
  id: 'giro-ads-metas',
  ordem: 10,
  categoria: 'Gestão',
  titulo: 'Giro de estoque, Shopee Ads e metas',
  resumo: 'Meça a velocidade da venda e descubra quanto dá para pagar por um pedido conquistado com anúncio.',
  minutos: 10,
  objetivo: 'Ajustar reposição e anúncios com base no estoque disponível, na margem e nas vendas confirmadas.',
  secoes: [
    {
      titulo: 'Meça o que sai e o que pode faltar',
      texto: 'Escolha a mesma janela para cada conta, por exemplo, quatro semanas. Para um SKU, estime o estoque médio em unidades pela média entre o estoque inicial e final. Se variar muito durante o período, use a média dos saldos observados.',
      itens: [
        'Giro em unidades = unidades vendidas líquidas de devoluções ÷ estoque médio em unidades no mesmo período. Exemplo: 42 ÷ 30 = 1,4 giro.',
        'Cobertura aproximada em dias = estoque disponível ÷ média de unidades vendidas por dia. Separe o que já está reservado para pedidos.',
        'Ponto de reposição = vendas médias diárias × prazo de fabricar e disponibilizar o produto + estoque de segurança. Se vende duas peças por dia, precisa de cinco dias para repor e quer quatro peças de reserva, o gatilho é 14 peças.',
        'Muito clique com pouca compra sugere conferir preço final, frete, foto e anúncio. Venda forte com pouca cobertura pede reposição antes de acelerar Ads.'
      ]
    },
    {
      titulo: 'Use a própria margem para definir o limite de Ads',
      texto: 'ROAS mede vendas atribuídas por real gasto. ACOS mede qual parte das vendas atribuídas virou gasto com anúncios. Nenhuma das métricas deduz custo da peça, frete e imposto. Faça a comparação com vendas confirmadas quando estiverem disponíveis e confira cancelamentos e devoluções no financeiro.',
      itens: [
        'ROAS = vendas atribuídas ÷ Ads. ACOS = Ads ÷ vendas atribuídas × 100%. Use o mesmo recorte de datas, produto e tipo de atribuição.',
        'No exemplo de R$ 26,90 e contribuição pré-Ads de R$ 5,55, para pedidos de uma peça, o custo máximo de anúncio para empatar é R$ 5,55 por pedido. Isso equivale a ACOS de aproximadamente 20,6% e ROAS de cerca de 4,85, considerando vendas confirmadas a R$ 26,90.',
        'Se quiser manter R$ 2,00 de contribuição por pedido após Ads, o teto cai para R$ 3,55 de publicidade, ACOS perto de 13,2% e ROAS mínimo aproximado de 7,58. Adapte o cálculo para kits, mix de pedidos e descontos.',
        'Compare com o orçamento que a Central aceita e o caixa que a fábrica disponibiliza. Acompanhe gasto e margem e evite mudar preço, foto e campanha ao mesmo tempo.'
      ]
    },
    {
      titulo: 'Defina metas que dão para acompanhar',
      texto: 'Primeiro use os pedidos reais como referência. Controle semanalmente três coisas: vendas confirmadas, contribuição após Ads e cobertura de estoque dos anúncios ativos.',
      itens: [
        'Registre um teto de gasto em reais, a perda máxima que a fábrica aceita no teste e uma data de revisão.',
        'Se o canal vender e a contribuição ficar abaixo do objetivo, procure a dedução que cresceu. Se a contribuição for boa e houver estoque e capacidade de expedir, considere subir o orçamento aos poucos.',
        'Mantenha um histórico de alterações com data. Compare semanas semelhantes e registre efeitos de campanhas, falta de estoque ou descontos.'
      ]
    }
  ],
  pratica: {
    titulo: 'Diagnostique uma campanha e uma reposição',
    texto: 'Em um teste, houve 10 pedidos atribuídos confirmados de R$ 26,90 cada, gasto de Ads de R$ 40,00 e contribuição pré-Ads de R$ 5,55 por pedido.',
    passos: [
      'Calcule ROAS (6,73), ACOS (14,9%) e gasto por pedido (R$ 4,00).',
      'Veja quanto sobra após Ads: R$ 1,55 por pedido. Compare com a meta de R$ 2,00 e proponha um ajuste.',
      'Se restam 12 peças livres e o gatilho de reposição é 14, alinhe a próxima produção antes de aumentar a campanha.'
    ]
  },
  quiz: [
    {
      pergunta: 'Uma peça sobra R$ 5,55 antes de Ads e a meta é manter R$ 2,00. Qual é o teto de Ads por pedido de uma peça?',
      opcoes: ['R$ 2,00.', 'R$ 5,55.', 'R$ 3,55.'],
      correta: 2,
      explicacao: 'R$ 5,55 menos a contribuição que se quer preservar, R$ 2,00, deixam R$ 3,55 para publicidade.'
    },
    {
      pergunta: 'O estoque disponível está em 12 peças e o ponto de reposição é 14. Qual decisão combina com essa informação?',
      opcoes: ['Ignorar o estoque enquanto houver visitas.', 'Alinhar a reposição e verificar cobertura antes de ampliar Ads.', 'Aumentar o estoque informado na Shopee para manter o anúncio ativo.'],
      correta: 1,
      explicacao: 'O ponto de reposição leva em conta o prazo para repor e a reserva de segurança. Quando o estoque cai abaixo dele, combine a próxima produção.'
    }
  ],
  fontes: [
    { titulo: 'Shopee Ads — Métricas por pedidos realizados, pagos e confirmados', url: 'https://ads.shopee.com.br/learn/faq/337/1561' },
    { titulo: 'Shopee Ads — Como definir uma meta de ROAS', url: 'https://ads.shopee.com.br/learn/faq/111/1951' },
    { titulo: 'Sebrae — Gestão de estoques e compras', url: 'https://sebrae.com.br/Sebrae/Portal%20Sebrae/Arquivos/ebook_sebrae_aprenda-como-fazer-gestao-de-estoque-e-compras.pdf' }
  ]
});

(window.CURSO ||= []).push({
  id: 'repasses-comissao',
  ordem: 11,
  categoria: 'Gestão',
  titulo: 'Conferir repasses e registrar a comissão de R$ 1,50',
  resumo: 'Cruze cada pedido com o financeiro da Shopee e mantenha um extrato da sua comissão.',
  minutos: 10,
  objetivo: 'Explicar a diferença entre previsão, valor liberado e saque e fechar a comissão com um registro verificável.',
  secoes: [
    {
      titulo: 'Cruze o pedido com o repasse',
      texto: 'Na Central do Vendedor, confira Finanças → Minha Renda. Use os detalhes ou arquivos disponíveis para conferir pedidos completos e valores liberados. A carteira mostra saldo e movimentações. Um saque pode somar vários pedidos e ajustes.',
      itens: [
        'Guarde o ID da loja e do pedido, SKUs, quantidades, data da venda, situação e data da liberação. Use o ID em vez do nome do comprador para conciliar.',
        'Confira receita, desconto custeado pela loja, comissão e taxas da Shopee, frete pago pela fábrica e eventuais ajustes. Compare o valor líquido previsto com o liberado.',
        'Se partir do valor liberado, subtraia só os custos que ainda não saíram dele, como a fabricação, embalagem, imposto apurado e sua comissão. As taxas da plataforma já deduzidas não entram de novo.',
        'Registre divergências como pendentes e preserve o extrato original. Um pedido pode ter ajustes em outra data. Ao importar um novo arquivo, reconcilie pelo mesmo ID da loja e do pedido para evitar duplicidade.'
      ]
    },
    {
      titulo: 'Formalize o que conta para os seus R$ 1,50',
      texto: 'A taxa da Shopee é um custo do canal. Os R$ 1,50 são sua remuneração conforme o acordo com a fábrica. Combine antes dos pedidos o que gera o direito à comissão e quando ela é paga.',
      itens: [
        'Modelo do exercício: R$ 1,50 por pedido elegível. Um pedido com um kit de duas peças vale R$ 1,50 se esse for o acordo. Por peça daria R$ 3,00 e exige outra regra.',
        'Definam por escrito quais canais e pedidos entram, o evento de liberação, a data de fechamento, o prazo de pagamento e como tratar cancelamentos, reembolsos e correções.',
        'Se a relação for de emprego, comissão tem tratamento salarial conforme a CLT. O TST entende que inadimplência ou cancelamento pelo comprador não autoriza estorno da comissão do empregado. Ajuste a regra com quem faz a folha de acordo com o vínculo.',
        'Se o serviço for realmente autônomo, confirme com o contador como documentar a remuneração e os tributos ou retenções envolvidos. Em prestação por pessoa jurídica, verifique atividade, cadastro e emissão de NFS-e quando cabível. A nota das ferramentas e o documento da sua remuneração registram operações diferentes.',
        'Deixe cada lançamento com pedido de origem, valor, data e status. Identifique ajustes por motivo e guarde comprovante quando a fábrica pagar.',
        'Em 30 dias, 10 pedidos elegíveis por dia renderiam R$ 450,00 de comissão. Com 100 por dia, seriam R$ 4.500,00. Use o volume real para avaliar a remuneração e considere negociar um valor fixo pela implantação, que demanda trabalho antes dos primeiros pedidos.'
      ]
    },
    {
      titulo: 'Monte a prestação de contas com o dono',
      texto: 'Use estados de acompanhamento que indiquem a ação seguinte: aguardando liberação, liberada para pagar e paga. Some o valor e mostre a lista de pedidos por trás do total.',
      itens: [
        'Exemplo de fechamento: 80 pedidos elegíveis × R$ 1,50 = R$ 120,00. Registre os outros pedidos como pendentes ou fora da regra, com o motivo.',
        'Se pagar R$ 90,00 dos R$ 120,00, registrem a data, o comprovante e os R$ 30,00 em aberto. Levem esse saldo para a próxima conferência.',
        'Separe a competência da comissão do movimento em conta. Saque da carteira, repasse disponível e pagamento da sua comissão são três eventos diferentes.'
      ]
    }
  ],
  pratica: {
    titulo: 'Feche um extrato de comissão fictício',
    texto: 'Você tem 80 pedidos liberados e elegíveis, 5 aguardando liberação e 3 marcados para revisão. O dono pagou R$ 90,00.',
    passos: [
      'Some os 80 pedidos elegíveis e confirme R$ 120,00 liberados.',
      'Registre R$ 90,00 pagos e R$ 30,00 de saldo. Mantenha os 5 pedidos aguardando e consulte a origem dos 3 pedidos em revisão.',
      'Escolha dois pedidos, localize seus valores no arquivo da Shopee e descreva como explicaria cada repasse ao dono.'
    ]
  },
  quiz: [
    {
      pergunta: 'O extrato de repasse já deduziu a taxa da Shopee. Como tratar a taxa ao calcular a contribuição partindo desse valor?',
      opcoes: ['Não deduzir de novo e subtrair os custos que ainda não saíram do repasse.', 'Deduzir novamente para ter certeza de que entrou.', 'Somar de volta e tratar como comissão do operador.'],
      correta: 0,
      explicacao: 'O repasse líquido da Shopee já incorpora as deduções mostradas no extrato. Confira as linhas e só acrescente os custos que ainda faltam.'
    },
    {
      pergunta: 'Pela regra de R$ 1,50 por pedido, 80 pedidos foram elegíveis e a fábrica pagou R$ 90,00. Qual saldo fica em aberto?',
      opcoes: ['R$ 90,00.', 'R$ 120,00.', 'R$ 30,00.'],
      correta: 2,
      explicacao: '80 × R$ 1,50 = R$ 120,00. Deduzir os R$ 90,00 pagos deixa R$ 30,00 pendentes.'
    }
  ],
  fontes: [
    { titulo: 'Shopee — Como verificar as declarações de renda', url: 'https://seller.shopee.com.br/edu/article/2905' },
    { titulo: 'Shopee — Como acessar a carteira do vendedor', url: 'https://seller.shopee.com.br/edu/article/2907/acessando-a-carteira-do-vendedor' },
    { titulo: 'Câmara dos Deputados — CLT, arts. 3º, 442-B, 457 e 466', url: 'https://www2.camara.leg.br/legin/fed/declei/1940-1949/decreto-lei-5452-1-maio-1943-415500-normaatualizada-pe.html' },
    { titulo: 'TST — Tema 65 sobre estorno de comissão do empregado', url: 'https://www.tst.jus.br/documents/10157/0/IRR065.pdf/c0681ff3-8a43-a6f6-4a82-1f09191da82b?t=1741715925985' },
    { titulo: 'Receita Federal — Nota Fiscal de Serviço Eletrônica', url: 'https://www.gov.br/pt-br/servicos/emitir-nota-fiscal-de-servico-eletronica' }
  ]
});

(window.CURSO ||= []).push({
  id: 'fechamento-mensal',
  ordem: 12,
  categoria: 'Gestão',
  titulo: 'Fechamento mensal, documentos e papéis',
  resumo: 'Saiba o que enviar ao contador e combine quem resolve cada etapa do primeiro mês.',
  minutos: 10,
  objetivo: 'Entregar um pacote de fechamento conferível e organizar a rotina entre loja, fábrica e contabilidade.',
  secoes: [
    {
      titulo: 'Guarde as origens antes de totalizar',
      texto: 'Combine um corte mensal e exporte os relatórios de pedidos e financeiro. Cruze o pedido da Shopee com a NF-e e o repasse. Venda, autorização da NF-e, liberação na Shopee e entrada bancária podem cair em datas diferentes.',
      itens: [
        'Fiscal: XML de NF-e autorizadas de saída e entrada conforme o pedido do contador, com protocolos, eventos de cancelamento ou correção e notas ou documentos de devolução quando aplicáveis. O DANFE auxilia o trânsito e a consulta. Preserve o XML autorizado como documento fiscal.',
        'Marketplace e banco: relatórios de pedidos, repasses, taxas, documentos fiscais da plataforma, Ads, descontos, estornos e extratos bancários relevantes. Inclua outros canais da empresa quando o contador solicitar a apuração da receita total.',
        'Operação: lista das divergências em aberto e justificativas, estoque e custo na data de corte se solicitado, e comprovantes dos gastos do canal.',
        'Remuneração: fechamento da comissão com pedidos elegíveis, ajustes, saldo, comprovantes e documento de pagamento adequado ao vínculo, conforme orientação da contabilidade.'
      ]
    },
    {
      titulo: 'Combine papéis e datas internas',
      texto: 'Marque no calendário quem fornece cada arquivo e o dia em que a contabilidade quer receber. O cronograma abaixo é um exemplo para organizar o trabalho entre vocês.',
      itens: [
        'Operação da loja: conferir pedidos, emitir a NF-e no sistema com a configuração validada, salvar relatórios, acompanhar atendimento e levantar divergências.',
        'Fábrica e dono: manter custo e estoque corretos, separar e despachar mercadoria, definir teto de gastos e preço mínimo, aprovar o fechamento e registrar os pagamentos.',
        'Contador: orientar regime, cadastro e cenários fiscais, informar o que deve ser entregue, apurar os tributos e confirmar datas e documentos.',
        'Sugestão interna: nos dois primeiros dias úteis do mês seguinte, reúna e confira os relatórios. No terceiro, revise divergências com o dono e envie o pacote na data combinada.',
        'Se a empresa for optante pelo Simples Nacional, o PGDAS-D é mensal, inclusive em mês sem receita. O prazo padrão das informações e do DAS é dia 20 do mês seguinte, sujeito ao calendário aplicável. A DEFIS é anual. Confirme o prazo interno e o regime com o contador.'
      ]
    },
    {
      titulo: 'Use o primeiro mês para validar o fluxo inteiro',
      texto: 'Comece com poucos SKUs, combine os limites de aprovação e use as primeiras vendas para testar o processo antes de aumentar a operação.',
      itens: [
        'Dias 1 a 7: validar cadastro fiscal e política de custo, medir a embalagem, conferir estoque e preparar os primeiros anúncios.',
        'Dias 8 a 14: testar pedido, separação, NF-e, etiqueta, envio e atendimento. Escolher um responsável por etapa e um substituto.',
        'Dias 15 a 30: conferir os primeiros repasses, revisar margem e devoluções, fechar o extrato da sua comissão e anotar ajustes para o mês seguinte.',
        'Deixe os arquivos em pasta privada com acesso da fábrica, organizada por competência. Preserve a exportação original e registre correções no controle de fechamento.'
      ]
    }
  ],
  pratica: {
    titulo: 'Faça um fechamento com cinco pedidos',
    texto: 'Separe cinco pedidos de teste, incluindo um cancelado, um com repasse pendente e um com diferença no valor liberado.',
    passos: [
      'Para cada pedido, registre o estado, a NF-e e o protocolo quando aplicáveis e o valor que realmente entrou ou ficou pendente.',
      'Prepare um índice dos arquivos para o contador e uma lista curta de divergências com dono e prazo de resposta.',
      'Entregue ao dono o resumo da margem e da comissão, e confirme quando o contador precisa da documentação do mês.'
    ]
  },
  quiz: [
    {
      pergunta: 'Qual é o arquivo fiscal que deve ser preservado na rotina da empresa emitente da NF-e?',
      opcoes: ['A foto do pacote enviado.', 'O XML da NF-e autorizada, com os registros aplicáveis.', 'Somente o DANFE impresso.'],
      correta: 1,
      explicacao: 'O DANFE é um documento auxiliar. No fechamento, preserve o XML autorizado, os protocolos e, quando houver, os eventos fiscais.'
    },
    {
      pergunta: 'Uma EPP optante pelo Simples ficou um mês sem receita. O que vale para o PGDAS-D?',
      opcoes: ['A apuração mensal é transmitida com receita zero conforme orientação aplicável.', 'O mês é sempre omitido do PGDAS-D.', 'A apuração mensal é substituída pela DEFIS.'],
      correta: 0,
      explicacao: 'A Receita orienta transmitir a apuração mensal mesmo sem receita. A DEFIS é uma declaração anual, com outra finalidade.'
    }
  ],
  fontes: [
    { titulo: 'CONFAZ — Manual de Orientação do Contribuinte da NF-e', url: 'https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/moc7-visao-geral.pdf' },
    { titulo: 'Receita Federal — Declarar apurações mensais no PGDAS-D', url: 'https://www.gov.br/pt-br/servicos/declarar-apuracoes-mensais-do-simples-nacional' },
    { titulo: 'Portal do Simples Nacional — PGDAS-D e DEFIS', url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/Servicos/Grupo.aspx?grp=5&id=60' },
    { titulo: 'Shopee — Como verificar as declarações de renda', url: 'https://seller.shopee.com.br/edu/article/2905' }
  ]
});

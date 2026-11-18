(window.CURSO ||= []).push({
  id: 'da-venda-ao-caixa',
  ordem: 0,
  categoria: 'Primeiros passos',
  titulo: 'Da primeira venda ao dinheiro que sobra',
  resumo: 'Acompanhe uma desempenadeira da produção ao repasse e veja onde entra o imposto.',
  minutos: 8,
  objetivo: 'Distinguir o preço pago pelo comprador, o valor que a Shopee libera, a reserva para imposto e a sobra do pedido.',
  secoes: [
    {
      titulo: '17 e 18 de novembro: da madeira à venda',
      texto: 'Imagine que a fábrica comprou madeira e insumos em 17/11 e fez uma desempenadeira. Cada peça custa R$ 6,90 para produzir. Em 18/11, o comprador faz e paga um pedido de uma unidade por R$ 26,90, sem desconto nem frete custeado pela fábrica.',
      itens: [
        'Guarde a nota da compra dos insumos. Os R$ 6,90 são o custo desta peça. O valor da compra inteira de madeira não entra de novo na conta desse pedido.',
        'Os R$ 26,90 são o valor da venda. Anote o número do pedido e o dia em que ele aconteceu, mesmo que a Shopee libere o dinheiro depois.'
      ]
    },
    {
      titulo: '19 e 27 de novembro: nota e repasse',
      texto: 'Em 19/11, a fábrica emite a nota fiscal eletrônica da venda antes de enviar a mercadoria. Em 27/11, neste exemplo, a Shopee libera o valor na carteira do vendedor.',
      itens: [
        'A nota documenta a venda de R$ 26,90. Guarde o arquivo digital XML e use o DANFE, a versão auxiliar com a chave da nota, para a expedição quando aplicável.',
        'Pela tarifa CNPJ usada no exemplo, a Shopee desconta 20% do preço, R$ 5,38, mais R$ 4,50 pelo item vendido. Dedução total de R$ 9,88.',
        'R$ 26,90 − R$ 9,88 = R$ 17,02 de repasse neste cenário. Confira o valor real em Minha Renda, na Central do Vendedor. Também anote quando o saque caiu no banco.',
        'As datas de liberação e saque aqui são fictícias. Frete, cupons, devoluções e ajustes podem mudar o que entra no extrato.'
      ]
    },
    {
      titulo: 'Imposto: quanto separar e sobre qual valor',
      texto: 'Se a fábrica estiver no Simples Nacional, o valor da venda é a referência deste exemplo. A Receita Federal orienta que a comissão paga ao marketplace não pode ser retirada da base de cálculo só porque já saiu do repasse.',
      itens: [
        'Usando 7,69% apenas para aprender, R$ 26,90 × 7,69% dá R$ 2,07. Registre R$ 2,07 como imposto previsto assim que fizer a conta da venda.',
        'Se você multiplicar os R$ 17,02 de repasse por 7,69%, vai separar apenas R$ 1,31. Faltarão R$ 0,76 neste pedido. Em 100 pedidos iguais, faltariam R$ 76,00 nessa simulação.',
        'A plataforma descontou a tarifa dela. A fábrica ainda precisa reservar dinheiro para o imposto. Anote o valor antes de o repasse entrar e separe-o quando receber. Se a guia vencer antes do repasse, a fábrica precisa ter caixa para pagar no prazo.',
        'EPP indica o porte da empresa. Antes de vender, confirme com o contador o regime fiscal, a porcentagem a usar para estimar o imposto, sobre qual valor ela incide e se há algo a pagar em separado para o produto ou destino.'
      ]
    },
    {
      titulo: 'Faça a conta da sobra em uma linha',
      texto: 'Partindo dos R$ 17,02 liberados, tire R$ 6,90 para cobrir o custo da peça, R$ 1,00 de embalagem, R$ 1,50 da comissão de quem opera o canal e R$ 2,07 para reservar ao imposto. Sobram R$ 5,55 neste pedido.',
      itens: [
        'A Shopee já tirou R$ 9,88 antes de liberar R$ 17,02. Deduzir esses R$ 9,88 de novo bagunça a conta.',
        'A sobra ajuda a pagar as despesas gerais da fábrica. Gasto com anúncios, frete da loja ou outros custos ainda precisa entrar se existir.',
        'Neste exemplo, preço, embalagem e percentual de imposto servem para praticar. O custo, os descontos, o repasse e o imposto da operação real precisam vir dos registros da fábrica, da Shopee e da contabilidade.'
      ]
    },
    {
      titulo: 'Dezembro: confira o mês com o contador',
      texto: 'No começo de dezembro, junte o pedido, o XML da nota e o registro do repasse para o fechamento de novembro. Some também os demais pedidos e leve os ajustes de cancelamento ou devolução para conferência.',
      itens: [
        'Entregue as datas da venda, da nota e da liberação, com o relatório da Shopee. Se uma venda de novembro for liberada em dezembro, registre as duas datas e deixe o contador enquadrar o mês certo.',
        'A contabilidade calcula o valor real. Se a fábrica for do Simples, o DAS é a guia usada para pagar os tributos desse regime. Para o mês de novembro, a data padrão é dia 20 de dezembro, com ajuste de calendário quando aplicável.',
        'Confira quanto foi guardado e ajuste pelo valor que o contador passou. Registre quando a empresa pagou e guarde o comprovante. Para estes cálculos do mês, use a regra de apuração que vale no período, inclusive na transição para 2027.'
      ]
    }
  ],
  pratica: {
    titulo: 'Reconstrua a venda sem abrir uma planilha',
    texto: 'Em um papel, anote três valores iniciais: R$ 26,90 de venda, R$ 9,88 de tarifa da Shopee e R$ 17,02 de repasse.',
    passos: [
      'Calcule a reserva usando 7,69% da venda e compare com o que daria usando o repasse.',
      'Do repasse, tire o custo da peça, a embalagem, sua comissão e a reserva certa. Confira se sobraram R$ 5,55.',
      'Anote quais números você deve confirmar num pedido real e quais arquivos levaria para o fechamento com o contador.'
    ]
  },
  quiz: [
    {
      pergunta: 'A venda foi de R$ 26,90 e a Shopee liberou R$ 17,02 após tirar a própria taxa. Qual valor serve de base para reservar imposto neste exemplo do Simples?',
      opcoes: ['R$ 17,02, o repasse.', 'R$ 26,90, o valor da venda.', 'R$ 5,55, a sobra do pedido.'],
      correta: 1,
      explicacao: 'Neste exemplo a comissão do marketplace é uma despesa da venda. A Receita Federal orienta que ela não reduz a receita usada na apuração do Simples Nacional.'
    },
    {
      pergunta: 'O comprador pagou, mas a Shopee ainda não liberou o dinheiro. O que fazer com o imposto previsto?',
      opcoes: ['Anotar a reserva desde a venda e separar o dinheiro quando entrar, conferindo o valor no fechamento.', 'Aguardar a guia para começar a considerar imposto no preço.', 'Registrar o repasse previsto inteiro como lucro disponível.'],
      correta: 0,
      explicacao: 'A reserva ajuda a planejar antes de o dinheiro entrar. A contabilidade verifica depois o valor e o período reais da apuração.'
    }
  ],
  fontes: [
    { titulo: 'Shopee — Política de comissão para vendedores CNPJ e CPF', url: 'https://seller.shopee.com.br/edu/article/26839' },
    { titulo: 'Shopee — Como verificar as declarações de renda', url: 'https://seller.shopee.com.br/edu/article/2905' },
    { titulo: 'Receita Federal — Solução de Consulta 5.007/2025 sobre comissão de marketplace e Simples Nacional', url: 'https://pesquisa.in.gov.br/imprensa/servlet/INPDFViewer?captchafield=firstAccess&data=13%2F08%2F2025&jornal=515&pagina=27' },
    { titulo: 'Receita Federal — Apuração mensal do Simples Nacional e prazo', url: 'https://www.gov.br/pt-br/servicos/declarar-apuracoes-mensais-do-simples-nacional' },
    { titulo: 'Comitê Gestor do Simples Nacional — Atualização do PGDAS-D e transição para 2027', url: 'https://www8.receita.fazenda.gov.br/simplesNacional/Noticias/NoticiaCompleta.aspx?id=92a6104d-cbde-490c-9aa0-aebcca3d3310' },
    { titulo: 'CONFAZ — Documento fiscal e guarda do XML', url: 'https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/moc7-visao-geral.pdf' }
  ]
});

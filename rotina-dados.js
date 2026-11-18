window.OFICINA_ROTINA = [
  {
    id: 'inicio',
    titulo: 'Antes de abrir a loja',
    resumo: 'Comece com a desempenadeira de cedrinho. Antes de publicar, valide o preço, a nota, o estoque e o envio e anote o que ainda falta resolver.',
    itens: [
      {
        id: 'inicio-acessos',
        titulo: 'Ativar a conta e organizar os acessos',
        texto: 'O dono confirma os dados do CNPJ, os contatos de recuperação e a conta bancária aceita pela Shopee. O operador recebe acesso à Central do Vendedor e ao ERP conforme as funções que vai exercer.'
      },
      {
        id: 'inicio-fiscal',
        titulo: 'Pedir por escrito como emitir a nota e estimar o imposto',
        texto: 'A produção informa material, uso, medidas e peças de cada kit. O operador passa ao contador o preço previsto e os estados de origem e destino. Peça por escrito os códigos da nota, o percentual e o valor estimado em reais para os cenários de venda previstos, o que entra na guia do mês e se há recolhimento separado. Confirme também o que fazer em caso de devolução.'
      },
      {
        id: 'inicio-integracao',
        titulo: 'Ligar a Shopee ao sistema de pedidos e testar',
        texto: 'O dono autoriza a integração. O operador liga cada opção do anúncio ao código certo no sistema e acerta com a produção qual saldo vai para a loja. Simule a entrada do pedido e a baixa das peças de um kit. Teste a nota em ambiente de testes, se disponível, e anote o que ainda precisa verificar na primeira venda real.'
      },
      {
        id: 'inicio-expedicao',
        titulo: 'Medir os pacotes e testar a impressão',
        texto: 'A produção pesa e mede o pacote fechado da unidade e do kit. O operador usa esses dados no anúncio, confere onde e até que horário postar ou entregar para coleta e testa se a etiqueta e o DANFE, a versão auxiliar da nota, saem legíveis.'
      },
      {
        id: 'inicio-precos',
        titulo: 'Aprovar os preços antes de anunciar',
        texto: 'A produção informa o custo real por peça e por embalagem. O operador simula quanto sobra na venda da unidade e do kit depois de custo, taxas, desconto e frete pagos pela loja, comissão e imposto estimado pelo contador. O dono aprova o preço e até quanto pode dar de desconto.'
      },
      {
        id: 'inicio-acordo',
        titulo: 'Combinar a remuneração e quem aprova gastos',
        texto: 'O dono e o operador registram o que entra no trabalho, quem pode aprovar gastos e quando nasce e é paga a comissão de R$ 1,50 por pedido, caso seja o valor acordado. O contador orienta a forma de documentar o pagamento conforme o vínculo.'
      },
      {
        id: 'inicio-piloto',
        titulo: 'Corrigir o que falta e publicar o primeiro anúncio',
        texto: 'O operador abre a prévia como comprador e confere fotos, material, medidas, quantidade de peças por opção, preço e prazo. A produção conta as peças prontas. Marque cada pendência com o que falta, responsável e data. O dono libera o primeiro anúncio após resolver os pontos que impedem emitir, cobrar ou despachar corretamente.'
      }
    ]
  },
  {
    id: 'pedido',
    titulo: 'A cada pedido',
    resumo: 'Na primeira venda real, anote o número do pedido da Shopee e guarde o preço, a opção comprada, a chave da nota e o comprovante de envio. Use o mesmo número para conferir o repasse quando liberar. Repita a rotina nos próximos pedidos.',
    itens: [
      {
        id: 'pedido-importar',
        titulo: 'Conferir pedido e prazo de envio',
        texto: 'O operador abre o pedido na Shopee e só começa a preparar quando estiver liberado. Compare produto, opção, quantidade, preço e desconto do pedido com a oferta feita. Veja até quando deve postar e procure o número do pedido no ERP antes de tentar importar de novo.'
      },
      {
        id: 'pedido-separar',
        titulo: 'Separar o produto e conferir o kit',
        texto: 'O operador encaminha o SKU, a variação e a quantidade para a produção. A produção confere tamanho, acabamento, quantidade de peças e integridade antes de fechar o pacote.'
      },
      {
        id: 'pedido-nota',
        titulo: 'Emitir e conferir a NF-e',
        texto: 'O operador compara destinatário, produto, quantidade e valores da nota com o pedido e segue a regra do contador. Se a Sefaz rejeitar, anote o código e a mensagem, confirme que a nota não foi autorizada e corrija a causa antes de reenviar. Se a nota já foi autorizada e tem erro, confirme com o contador qual correção é permitida. Confira a chave e o protocolo de autorização e envie os dados fiscais à Shopee antes de despachar.'
      },
      {
        id: 'pedido-etiqueta',
        titulo: 'Identificar e fechar o pacote',
        texto: 'O operador confere se a etiqueta e o DANFE pertencem ao pacote que será enviado. A expedição cola a etiqueta legível, deixa o volume no lote certo e separa os pedidos por prazo.'
      },
      {
        id: 'pedido-despachar',
        titulo: 'Despachar e conferir o rastreio',
        texto: 'A expedição entrega o volume na postagem ou coleta e guarda o comprovante disponível. O operador checa se a Shopee reconheceu o envio. Se o rastreio não atualizar, anote o número, a hora da entrega e a evidência e abra atendimento no prazo do pedido.'
      },
      {
        id: 'pedido-atender',
        titulo: 'Tratar cancelamento, devolução ou reembolso',
        texto: 'O operador responde pela Shopee e guarda o prazo e as evidências. Se a nota foi autorizada e o produto ainda não saiu, pergunte ao contador se pode cancelar a nota e qual é o prazo. Se a mercadoria já circulou, informe o que ocorreu e confirme como registrar o retorno, inclusive se precisa de nota de devolução. Se o produto voltar, a produção confere as peças antes de colocar no estoque.'
      },
      {
        id: 'pedido-comissao',
        titulo: 'Registrar o andamento da comissão',
        texto: 'O operador mantém uma linha por pedido com ID, status, data de elegibilidade e valor nos termos do acordo. Registra solicitações e devoluções para revisão no fechamento.'
      }
    ]
  },
  {
    id: 'semana',
    titulo: 'Toda semana',
    resumo: 'Organize as pendências da loja e use os dados dos pedidos para planejar preço, produção e atendimento.',
    itens: [
      {
        id: 'semana-estoque',
        titulo: 'Contar estoque e revisar a produção',
        texto: 'A produção conta itens aptos a vender e separa avarias e devoluções em análise. O operador cruza o saldo no ERP e na Shopee, recalculando quantos kits podem sair com os mesmos componentes. O dono confirma a reposição.'
      },
      {
        id: 'semana-filas',
        titulo: 'Resolver pedidos presos no fluxo',
        texto: 'O operador verifica importação, NF-e rejeitada, etiqueta pendente, pacote sem atualização e solicitação de reembolso. Cada caso fica com ID, próximo passo, responsável e prazo.'
      },
      {
        id: 'semana-qualidade',
        titulo: 'Revisar dúvidas, avaliações e devoluções',
        texto: 'O operador leva à produção os motivos recorrentes. A produção verifica medidas, acabamento e embalagem. O operador corrige descrições ou fotos quando as dúvidas mostram informação insuficiente no anúncio.'
      },
      {
        id: 'semana-margem',
        titulo: 'Conferir margens após promoções e Ads',
        texto: 'O operador usa os últimos custos, taxas e descontos para conferir o resultado de cada opção vendida. O dono decide ajustes de preço, pausa de campanha ou verba de anúncios conforme a margem observada.'
      },
      {
        id: 'semana-repasses',
        titulo: 'Olhar repasses e ajustes em aberto',
        texto: 'O operador confere em Finanças → Minha Renda os pedidos liberados, pendentes ou ajustados. Registra diferenças por ID e projeta o que deve entrar, com o dono ciente da necessidade de caixa.'
      },
      {
        id: 'semana-reuniao',
        titulo: 'Combinar prioridades da próxima semana',
        texto: 'O operador mostra pedidos, envios no prazo, devoluções, margem e saldo disponível. O dono define decisões de preço, compra ou produção e combina quando rever as pendências.'
      }
    ]
  },
  {
    id: 'mes',
    titulo: 'No fechamento de cada mês',
    resumo: 'Veja o que vendeu, o que recebeu e o que deve pagar. Envie os arquivos ao contador na data combinada e acompanhe as pendências do mês.',
    itens: [
      {
        id: 'mes-periodo',
        titulo: 'Definir qual mês fechar e até quando enviar',
        texto: 'O dono e o operador pedem ao contador a data de corte, qual data usar para cada documento e até quando enviar os arquivos. Confirme como listar vendas do fim do mês cujo dinheiro só entra no mês seguinte e quais outros canais e dados de estoque entram na entrega.'
      },
      {
        id: 'mes-xml',
        titulo: 'Baixar os arquivos oficiais das notas e das alterações',
        texto: 'O operador baixa do ERP os XMLs das notas autorizadas com o protocolo de autorização e guarda os arquivos de cancelamento e de carta de correção, quando houver. Inclui as notas de devolução emitidas e avisa ao contador sobre notas rejeitadas ou arquivos que ainda faltam.'
      },
      {
        id: 'mes-pedidos',
        titulo: 'Baixar pedidos e extratos da Shopee',
        texto: 'O operador salva o relatório de pedidos e os dados de Finanças → Minha Renda e da Carteira do Vendedor, quando disponíveis no período. Reúne taxas, frete a cargo da loja, descontos, Ads, estornos, ajustes e documentos fiscais da plataforma.'
      },
      {
        id: 'mes-conciliar',
        titulo: 'Conferir do anúncio ao extrato do banco',
        texto: 'Comece pela primeira venda. Pelo número do pedido, o operador compara preço e opção oferecidos, pedido registrado, nota emitida e valor liberado em Minha Renda. Explique as diferenças com taxas, descontos, frete e ajustes mostrados no extrato. O dono confere os depósitos dos saques, que podem reunir vários pedidos. Se o dinheiro ainda estiver pendente, anote quando voltar a conferir.'
      },
      {
        id: 'mes-divergencias',
        titulo: 'Anotar diferenças e quem vai resolver',
        texto: 'O operador registra o número do pedido, da nota ou do saque, o valor esperado, o que encontrou e uma evidência. Em cada caso, marca o que falta fazer, quem vai resolver e até quando. Leva o que continua aberto para o fechamento seguinte.'
      },
      {
        id: 'mes-compras',
        titulo: 'Reunir as compras e os comprovantes da empresa',
        texto: 'O dono reúne XMLs de entradas e compras, extratos, comprovantes e informações dos outros canais conforme orientação da contabilidade. A produção fornece o saldo físico e o custo atualizado dos itens, quando solicitado.'
      },
      {
        id: 'mes-remuneracao',
        titulo: 'Conferir e aprovar a remuneração',
        texto: 'O operador prepara o extrato dos pedidos elegíveis, com IDs, datas, valor e eventuais ocorrências. O dono confere, efetua o pagamento no prazo combinado e guarda o comprovante ou documento orientado pelo contador.'
      },
      {
        id: 'mes-entrega',
        titulo: 'Entregar o pacote e fechar o mês com o contador',
        texto: 'O operador envia os arquivos e as pendências. Se a fábrica estiver no Simples, peça ao contador a receita usada na apuração, o valor do DAS, a data de vencimento e a explicação de diferenças relevantes frente ao imposto estimado no preço. O DAS é da empresa no mês e pode incluir outros canais. O dono paga as guias aplicáveis e guarda os comprovantes.'
      }
    ]
  }
];

window.OFICINA_GLOSSARIO = [
  { termo: 'Alíquota efetiva', texto: 'Percentual de imposto calculado para a operação. No Simples, depende do faturamento acumulado e da tabela aplicável à atividade.' },
  { termo: 'Autorização de Uso', texto: 'Protocolo retornado pela Sefaz quando autoriza a NF-e. Confira se ele está disponível no documento antes de seguir com a expedição normal.' },
  { termo: 'CC-e', texto: 'Carta de Correção Eletrônica. Evento ligado à nota para corrigir certos campos permitidos. Consulte o contador para saber se serve para o erro encontrado.' },
  { termo: 'CDC', texto: 'Código de Defesa do Consumidor. Reúne direitos e deveres que aparecem na operação, como informação adequada, tratamento de defeitos e arrependimento em compras a distância.' },
  { termo: 'CEST', texto: 'Código Especificador da Substituição Tributária. Identifica mercadorias e segmentos previstos nas regras de ICMS-ST. O contador verifica quando o código se aplica ao cadastro.' },
  { termo: 'CFOP', texto: 'Código Fiscal de Operações e Prestações. Identifica a natureza da movimentação registrada, como venda de fabricação própria, revenda ou devolução.' },
  { termo: 'CST e CSOSN', texto: 'Códigos que indicam o tratamento tributário no documento fiscal. O CSOSN é específico do ICMS em operações do Simples que o utilizam. Peça ao contador o código de cada caso.' },
  { termo: 'DANFE', texto: 'Documento Auxiliar da Nota Fiscal Eletrônica. Traz os dados principais e a chave de acesso da NF-e, facilita a consulta e acompanha a mercadoria quando aplicável.' },
  { termo: 'DAS', texto: 'Documento de Arrecadação do Simples Nacional. É a guia que a empresa paga com os tributos apurados por esse regime.' },
  { termo: 'DIFAL', texto: 'Diferencial de alíquotas do ICMS. Seu tratamento em operações entre estados depende do caso concreto e da orientação da contabilidade.' },
  { termo: 'EPP', texto: 'Empresa de Pequeno Porte. Classificação do porte da empresa pela receita bruta, observadas as condições legais. Consulte a opção pelo Simples no CNPJ.' },
  { termo: 'ERP', texto: 'Sistema onde você controla produtos, pedidos e estoque e, quando configurado, emite notas. O Bling é um exemplo.' },
  { termo: 'Estoque disponível', texto: 'Quantidade que pode ser prometida para venda, descontando reservas e indisponibilidades conforme a organização da fábrica.' },
  { termo: 'Evento fiscal', texto: 'Ocorrência registrada em relação à NF-e, como cancelamento ou carta de correção. Quando houver, guarde o arquivo e o retorno do registro junto da nota.' },
  { termo: 'ICMS-ST', texto: 'Substituição tributária do ICMS. Em operações abrangidas, a legislação atribui a um responsável o recolhimento do imposto relativo a outras etapas da cadeia.' },
  { termo: 'Inscrição Estadual', texto: 'Registro do estabelecimento na administração tributária estadual. A contabilidade confirma se o cadastro está regular e como informá-lo no emissor.' },
  { termo: 'Kit', texto: 'Opção de venda que agrupa duas ou mais peças. Informe a quantidade ao comprador e registre a composição para dar baixa nas peças certas.' },
  { termo: 'Logística reversa', texto: 'Fluxo de volta do produto depois da entrega. Na operação da loja, envolve instruções ao comprador, rastreio, recebimento e conferência.' },
  { termo: 'Margem de contribuição', texto: 'Valor que sobra da venda depois dos custos e despesas variáveis. Ajuda a pagar os gastos fixos e, depois deles, a formar lucro.' },
  { termo: 'NCM', texto: 'Nomenclatura Comum do Mercosul. Código de classificação da mercadoria escolhido a partir das suas características e regras próprias de classificação.' },
  { termo: 'NF-e', texto: 'Nota Fiscal Eletrônica. Documento digital que registra uma operação com mercadoria, como venda ou devolução, conforme as regras aplicáveis.' },
  { termo: 'PGDAS-D', texto: 'Programa em que empresas do Simples informam as receitas mensais e apuram os tributos do regime.' },
  { termo: 'RBT12', texto: 'Receita Bruta Total acumulada nos 12 meses anteriores ao período de apuração. Ajuda a determinar a faixa no Simples, com regras próprias no começo da atividade.' },
  { termo: 'Repasse', texto: 'Quanto a Shopee libera para a loja depois de aplicar as taxas e os ajustes daquele pedido. Anote quando foi liberado e em qual saque chegou ao banco.' },
  { termo: 'ROAS', texto: 'Receita atribuída aos anúncios dividida pelo gasto em anúncios. Um ROAS de 4 indica R$ 4 de receita atribuída para cada R$ 1 investido.' },
  { termo: 'SKU', texto: 'Código interno que identifica o produto, a variação ou o kit. Use o mesmo código nos sistemas que precisam reconhecer a mesma opção de venda.' },
  { termo: 'Taxa da Shopee', texto: 'Cobrança da plataforma conforme as regras da conta e do produto. Inclua as cobranças aplicáveis na simulação e confira o que foi realmente descontado no extrato.' },
  { termo: 'XML autorizado', texto: 'Arquivo digital da nota validada pela Sefaz, com o protocolo de autorização. Guarde junto com os arquivos de cancelamento ou de correção, se existirem.' }
];

(window.CURSO ||= []).push({
  id: 'mapa',
  ordem: 1,
  categoria: 'Operação',
  titulo: 'O que fica pronto antes do primeiro anúncio',
  resumo: 'Organize a conta da fábrica, os acessos e a divisão do trabalho antes de colocar estoque à venda.',
  minutos: 9,
  objetivo: 'Sair com uma lista de abertura, uma pessoa para cada tarefa e condições claras para colocar o primeiro anúncio no ar.',
  secoes: [
    {
      titulo: 'A conta acompanha a empresa',
      texto: 'Use a conta de vendedor no CNPJ da fábrica. O dono mantém o acesso principal, confirma os dados da empresa e confere no painel qual conta receberá os repasses. Você usa um acesso próprio para executar o trabalho combinado.',
      itens: [
        'Confirme o nome empresarial, CNPJ, inscrição estadual, endereço de expedição e devolução e a situação do cadastro da loja.',
        'Valide o acesso à Central do Vendedor e ao emissor existente. Se integrarem um ERP, autorize a loja certa na página oficial da Shopee e confirme o nome dela no ERP ao voltar.',
        'Defina quem pode mudar saldo, preço e dados de recebimento. Registre também quem substitui o operador em caso de ausência.'
      ]
    },
    {
      titulo: 'Cada pessoa tem uma entrega',
      texto: 'Uma venda atravessa a fábrica, o canal e a parte fiscal. Combine as responsabilidades por escrito para saber de quem depende cada etapa.',
      itens: [
        'Dono da fábrica: confirma o custo por medida, disponibiliza o estoque, aprova preço e verba e designa quem separa, embala e entrega os pacotes.',
        'Operador: cadastra anúncios, confere os pedidos, emite a NF-e conforme a configuração validada, acompanha etiquetas, responde aos clientes e fecha os números.',
        'Contador: confirma o regime e as regras fiscais de venda e devolução. Peça que valide o cenário da primeira emissão e indique quem resolve uma rejeição fiscal.',
        'Os dois: alinham horário de cobertura, limite de descontos, fechamento e o evento que torna os R$ 1,50 por pedido devidos. Deixem escrito como tratar cancelamentos e devoluções.'
      ]
    },
    {
      titulo: 'Proteja os dados dos compradores',
      texto: 'Nome, endereço e CPF são dados pessoais. Use cada informação apenas para o trabalho da venda, como emissão de nota, entrega e atendimento. Limite quem consulta os dados e guarde documentos fiscais da forma que a empresa e a contabilidade definirem.',
      itens: [
        'Use logins individuais e autenticação em duas etapas quando disponível. Retire o acesso de quem deixa de operar a loja.',
        'Para estudar ou pedir ajuda, crie exemplos fictícios ou apague os dados que identifiquem o comprador. Evite colar XML completo, etiqueta, credencial ou extrato com nomes em chats e grupos.',
        'Se um arquivo com dados sair do controle da loja, avise o dono imediatamente para que a empresa registre e avalie o incidente conforme as orientações da ANPD.'
      ]
    },
    {
      titulo: 'O primeiro anúncio tem uma condição de saída',
      texto: 'Comece com um produto que a fábrica consegue repor e embalar dentro do prazo que a Shopee mostra. Se já existe um emissor ou ERP que atende a empresa, confira o fluxo nele antes de trocar de ferramenta.',
      itens: [
        'Confirme estoque disponível, medida, peso do volume fechado, preço mínimo e quem imprime DANFE e etiqueta.',
        'Escolha um emissor para cada cenário e saiba quem verifica NF-e autorizada e nota vinculada na Shopee. A mesma venda precisa de um único fluxo de emissão.',
        'Ensaie o processo com um pedido fictício de estudo e use o ambiente fiscal de homologação se for testar emissão. Na primeira venda real, confirme manualmente o caminho do pedido até o comprovante de postagem.'
      ]
    }
  ],
  pratica: {
    titulo: 'Monte o acordo de abertura em uma página',
    texto: 'Use uma desempenadeira de cedrinho como produto piloto. Complete os campos com o dono da fábrica e com o contador antes de publicar o anúncio.',
    passos: [
      'Anote o nome da loja, o ERP ou emissor, o dono da conta e quem pode vê-la e operá-la.',
      'Preencha quem confirma custo e estoque, quem emite a NF-e, quem embala e quem posta no horário do ponto de envio.',
      'Anote o limite de desconto, o gatilho da comissão por pedido e o dia do fechamento.',
      'Simule uma venda e marque toda etapa que ainda depende de configurar acesso, certificado, regra fiscal ou logística.'
    ]
  },
  quiz: [
    {
      pergunta: 'Quem deve confirmar o tratamento fiscal da primeira venda da fábrica?',
      opcoes: ['Quem anuncia um produto parecido.', 'O contador, observando o regime, o produto e a operação.', 'Quem prepara a etiqueta.'],
      correta: 1,
      explicacao: 'O contador valida o tratamento fiscal. O operador aplica a configuração no emissor e confere o resultado.'
    },
    {
      pergunta: 'Como organizar a titularidade e o acesso à loja?',
      opcoes: ['Loja e recebimentos da fábrica, com acessos separados para dono e operador.', 'Loja e repasses na conta pessoal do operador.', 'Um login compartilhado para qualquer pessoa que ajude a despachar.'],
      correta: 0,
      explicacao: 'A fábrica responde pela operação. Contas de acesso individuais permitem delegar tarefas e identificar quem fez cada alteração.'
    }
  ],
  fontes: [
    { titulo: 'Central do Vendedor da Shopee', url: 'https://seller.shopee.com.br/' },
    { titulo: 'Bling — como autorizar a integração com a Shopee', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/360058301693' },
    { titulo: 'Bling — como configurar vendas e NF-e na integração', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/4414396074007' },
    { titulo: 'Bling — usuários e permissões', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/360035558634' },
    { titulo: 'Confaz — manual da NF-e e ambientes de emissão', url: 'https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/moc7-visao-geral.pdf' },
    { titulo: 'ANPD — segurança da informação para empresas de pequeno porte', url: 'https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-guia-de-seguranca-para-agentes-de-tratamento-de-pequeno-porte' }
  ]
});

(window.CURSO ||= []).push({
  id: 'catalogo',
  ordem: 7,
  categoria: 'Operação',
  titulo: 'Catálogo, variações, kits e estoque',
  resumo: 'Transforme as medidas da fábrica em produtos fáceis de escolher e de separar.',
  minutos: 10,
  objetivo: 'Cadastrar uma unidade e um kit com códigos próprios e provar que os dois usam o estoque correto.',
  secoes: [
    {
      titulo: 'Identifique exatamente o que vai na caixa',
      texto: 'A família do produto pode ser Desempenadeira de madeira cedrinho. Cada tamanho e cada formato de pacote que o cliente pode escolher precisa de uma identificação própria, chamada SKU.',
      itens: [
        'Exemplo de estudo: DES-CED-1424-UN para uma peça de 14 × 24 cm e DES-CED-1424-K3 para três peças dessa mesma medida.',
        'Informe comprimento e largura da base, material, acabamento e conteúdo do pacote. Para cabos de reposição, informe também comprimento e as duas medidas do encaixe.',
        'Use fotos do produto real e uma foto com régua. Se a madeira tiver variação de tonalidade, descreva isso e mostre exemplos.',
        'Separe a medida do produto do peso e das dimensões da caixa fechada. Faça essa medição novamente para cada kit.'
      ]
    },
    {
      titulo: 'Monte o kit com os itens de que ele depende',
      texto: 'No kit montado ao receber o pedido, a disponibilidade vem das peças prontas que entram na composição. No Bling, o estoque virtual de uma composição dá baixa nos componentes.',
      itens: [
        'Kit com três iguais: cada venda consome três unidades do SKU avulso. Com 11 unidades livres, há capacidade para três kits completos e restam duas peças após separar os três kits.',
        'Kit misto: cada tamanho é um componente próprio. Se o kit leva uma peça de cada tamanho e os saldos livres são 10, 6 e 2, cabem dois kits.',
        'Se os kits já foram embalados e guardados como produtos à parte, combine como a montagem transfere as unidades para o saldo do kit. Teste a baixa para evitar descontar as mesmas peças duas vezes.'
      ]
    },
    {
      titulo: 'Confira a ligação entre ERP e anúncio',
      texto: 'O título ajuda a pessoa a comprar. É o SKU que ajuda a equipe a acertar a separação e o vínculo entre o ERP e a loja.',
      itens: [
        'Confira se cada variação da Shopee está vinculada ao SKU correto no ERP, com preço, estoque e medidas da embalagem correspondentes.',
        'Escolha de qual depósito o canal recebe o saldo e desconte unidades já reservadas para outros pedidos.',
        'Faça uma contagem de abertura. Ao ativar a sincronização, compare o saldo de uma unidade e de um kit nos dois painéis.'
      ]
    }
  ],
  pratica: {
    titulo: 'Faça a ficha de um avulso e de um kit',
    texto: 'Use os dados do seu produto real ou pratique com 11 desempenadeiras fictícias de 14 × 24 cm e um kit de três peças iguais.',
    passos: [
      'Dê dois SKUs distintos e escreva exatamente o que vai em cada pacote.',
      'Anote o peso e as medidas do pacote avulso e do kit. Vincule o kit ao SKU avulso com quantidade três.',
      'Simule uma venda do kit seguida de uma venda avulsa. O saldo inicial de 11 unidades passa a 7.',
      'Veja quantos kits ainda podem ser montados com o novo saldo. Compare o resultado com o que ficou na prateleira.'
    ]
  },
  quiz: [
    {
      pergunta: 'Você tem sete desempenadeiras livres. Quantos kits de três podem ser montados?',
      opcoes: ['Três kits.', 'Sete kits.', 'Dois kits.'],
      correta: 2,
      explicacao: 'Dois kits consomem seis unidades e sobra uma. Avulsos e kits montados sob demanda compartilham a mesma disponibilidade.'
    },
    {
      pergunta: 'Qual informação deve mudar entre o avulso e o kit cadastrado como outra variação?',
      opcoes: ['Só o título do anúncio.', 'O SKU e a quantidade de componentes. O peso e as dimensões do pacote devem ser medidos para cada formato.', 'Só a foto de capa.'],
      correta: 1,
      explicacao: 'O SKU identifica a opção comprada, a composição define a baixa e a embalagem real informa a logística.'
    }
  ],
  fontes: [
    { titulo: 'Bling — SKU e vínculo dos anúncios', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/4414430496791-V%C3%ADnculo-manual-de-produtos-da-Shopee' },
    { titulo: 'Bling — variação unitária e kits com composição', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/34016549651095-Como-cadastrar-produtos-com-varia%C3%A7%C3%A3o-composta-no-Bling' },
    { titulo: 'Bling — estoques físico e virtual dos kits', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/360035495774' },
    { titulo: 'Bling — sincronização de estoque com a Shopee', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/360058449713' }
  ]
});

(window.CURSO ||= []).push({
  id: 'expedicao',
  ordem: 8,
  categoria: 'Operação',
  titulo: 'Pedidos, frete, expedição e atendimento',
  resumo: 'Leve cada pedido do pagamento confirmado até a postagem e saiba o que fazer quando algo trava.',
  minutos: 11,
  objetivo: 'Executar a conferência de um pedido e identificar separadamente situação do pagamento, da nota e da postagem.',
  secoes: [
    {
      titulo: 'Abra a fila pelo prazo de despacho',
      texto: 'No começo do turno, confira pedidos novos e aqueles cujo prazo de envio está mais perto. Compare a situação no ERP com a Central do Vendedor se houver divergência.',
      itens: [
        'Leia o ID da venda, o status atual, o prazo de despacho, o método de envio, o endereço e a opção comprada antes de separar.',
        'Confira se o pagamento está confirmado e se há saldo para todas as unidades do pedido. Separe o volume pelo ID da venda e revise os códigos antes de fechar.',
        'Se o mesmo pedido já está no ERP, use o registro existente. Ao procurar um pedido que faltou, pesquise primeiro pelo ID da Shopee para evitar duplicar estoque e documento.'
      ]
    },
    {
      titulo: 'Confira nota, etiqueta e pacote',
      texto: 'A nota autorizada na SEFAZ, o vínculo fiscal na Shopee e a etiqueta disponível são etapas diferentes. O painel mostra qual delas está pendente.',
      itens: [
        'Confira se a NF-e foi autorizada e se os dados fiscais foram recebidos na Shopee quando a modalidade exigir. Em caso de rejeição, leia a mensagem, corrija a causa com a contabilidade se necessário e confira o estado da emissão antes de tentar de novo.',
        'Se a etiqueta estiver temporariamente bloqueada, acompanhe a liberação no painel. Use apenas a etiqueta do pedido e verifique a orientação da modalidade e o prazo mostrado.',
        'Proteja as quinas da desempenadeira, imobilize as peças do kit e confira peso e dimensões depois de fechar a caixa. Guarde o comprovante de coleta ou de entrega no ponto.'
      ]
    },
    {
      titulo: 'Dê uma resposta que o cliente possa usar',
      texto: 'Use o chat da Shopee e responda com o estado que você verificou, a próxima ação e quando consegue voltar com informação. Registre o que ficou combinado no atendimento.',
      itens: [
        'Dúvida sobre medida: responda com as dimensões reais e o conteúdo da variação anunciada.',
        'Atraso de coleta: confira o protocolo e o rastreio. Informe a atualização disponível e acione a logística quando necessário.',
        'Dado de endereço divergente: confira o pedido na plataforma e siga a solução orientada para aquele caso antes de despachar.'
      ]
    }
  ],
  pratica: {
    titulo: 'Organize uma fila de três pedidos',
    texto: 'Imagine três pedidos fictícios. A tem pagamento confirmado, NF-e autorizada e etiqueta disponível. B está pago e aguardando a etiqueta. C perdeu o prazo previsto de coleta e não registrou rastreio.',
    passos: [
      'Identifique o que falta em cada pedido, o próximo prazo e de quem depende a etapa.',
      'Passe A pela conferência de medidas, quantidade, endereço, NF-e e etiqueta. Anote como comprovou a postagem.',
      'Anote em que tela você acompanha o desbloqueio de B e quando fará a próxima consulta.',
      'Para C, veja se houve coleta de fato, procure o comprovante e prepare uma resposta ao cliente com o retorno previsto.'
    ]
  },
  quiz: [
    {
      pergunta: 'A NF-e foi autorizada e a Shopee mostra a etiqueta bloqueada. O que fazer?',
      opcoes: ['Acompanhar o status da etiqueta e conferir no painel o prazo e o motivo.', 'Usar a etiqueta de outro pedido parecido.', 'Marcar como postado para liberar a etiqueta.'],
      correta: 0,
      explicacao: 'A autorização da nota não libera automaticamente toda etiqueta. A modalidade e o estado do pedido determinam o próximo passo.'
    },
    {
      pergunta: 'Qual registro ajuda a provar que o pacote foi entregue à logística?',
      opcoes: ['O preço cadastrado no anúncio.', 'A imagem da etiqueta antes de colar.', 'O comprovante de postagem ou coleta vinculado ao pedido.'],
      correta: 2,
      explicacao: 'A etiqueta identifica o volume. O comprovante registra a entrega à logística.'
    }
  ],
  fontes: [
    { titulo: 'Bling — importar e conferir pedidos da Shopee', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/360058449833' },
    { titulo: 'Bling — envio de dados fiscais para a Shopee', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/4403114088087' },
    { titulo: 'Bling — consulta de etiqueta pendente ou disponível', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/44469863060631' },
    { titulo: 'Shopee — atendimento no fluxo de devolução e reembolso', url: 'https://help.shopee.com.br/portal/4/article/77827' }
  ]
});

(window.CURSO ||= []).push({
  id: 'devolucoes',
  ordem: 9,
  categoria: 'Operação',
  titulo: 'Devoluções, reembolsos e pós-venda',
  resumo: 'Atenda o comprador, acompanhe prazos e atualize nota, estoque e fechamento sem perder o histórico.',
  minutos: 11,
  objetivo: 'Identificar a natureza do problema e conduzir o caso da abertura até o ajuste final.',
  secoes: [
    {
      titulo: 'Identifique o motivo antes de decidir',
      texto: 'Em compras de consumo pela internet, o CDC dá sete dias para arrependimento. Para uma compra de mercadoria entregue, conte a partir do recebimento. O exercício desse direito ocorre sem ônus ao consumidor. Produto durável com vício aparente tem 90 dias para reclamação a partir da entrega. Se o vício for oculto, a contagem começa quando o defeito se torna evidente.',
      itens: [
        'Arrependimento: registre quando o cliente recebeu e quando pediu a devolução. Oriente pelo canal da compra e acompanhe a solicitação.',
        'Peça errada, medida diferente, dano ou kit incompleto: compare o anúncio e o pedido com o que foi entregue e reúna os registros que ajudam a resolver o caso.',
        'No comércio eletrônico, confirme de imediato o recebimento da demanda. O Decreto nº 7.962 prevê manifestação ao consumidor em até cinco dias.'
      ]
    },
    {
      titulo: 'Acompanhe a solicitação no painel',
      texto: 'A Shopee registra as solicitações e a situação da devolução. Prazos internos do caso variam conforme o evento e a modalidade. Acompanhe o prazo que aparece na solicitação e respeite os direitos previstos no CDC.',
      itens: [
        'Registre o ID, o motivo, a data, a próxima ação e o prazo exibido. Use o chat e o fluxo de devolução da própria Shopee.',
        'A política da Shopee prevê até três dias corridos após receber o item devolvido para o vendedor conferir e aprovar ou iniciar disputa. Quando forem pedidas evidências, a política prevê dois dias corridos para resposta.',
        'Ao receber o produto, confira quantidade, medida, condição e embalagem. Fotografe o que precisa ser documentado para o caso. Reponha no saldo de venda só as peças inspecionadas e aptas.'
      ]
    },
    {
      titulo: 'Feche o efeito no ERP e no financeiro',
      texto: 'Uma decisão de reembolso na Shopee, uma entrada de estoque e a regularização da nota original são registros distintos. Mantenha todos ligados ao mesmo pedido.',
      itens: [
        'Verifique com a contabilidade se cabe cancelamento fiscal ou nota de devolução e como registrar os itens devolvidos. Uma mercadoria que já circulou pode exigir tratamento diferente de um pedido cancelado antes do envio.',
        'Confira no extrato o valor do reembolso, as taxas ajustadas e a data do lançamento. Preserve o valor anterior e registre o ajuste em linha própria.',
        'Aplique ao fechamento a regra combinada para os R$ 1,50 por pedido. Se já houve pagamento, registre um estorno de comissão apenas se for aplicável ao vínculo e estiver previsto no acordo. Vincule o registro ao pedido e compartilhe com o dono.'
      ]
    }
  ],
  pratica: {
    titulo: 'Resolva dois casos de devolução',
    texto: 'Um cliente pede devolução da desempenadeira no quarto dia por arrependimento. Outro recebeu só duas peças de um kit de três.',
    passos: [
      'Classifique cada caso e identifique o prazo que precisa acompanhar no painel.',
      'Escreva uma resposta curta para cada cliente com o primeiro passo e registre as informações necessárias no pedido.',
      'Defina o que observar na volta da mercadoria, como tratar o saldo e o que enviar ao contador para a regularização fiscal.',
      'Mostre em que data e em qual fechamento entra cada ajuste de repasse ou comissão, conforme o vínculo e o acordo da operação.'
    ]
  },
  quiz: [
    {
      pergunta: 'Um consumidor pede devolução por arrependimento quatro dias após receber a compra online. Qual é o primeiro passo?',
      opcoes: ['Exigir um laudo que prove defeito.', 'Registrar o pedido e orientar o exercício do direito pelo canal da compra.', 'Cobrar o frete da devolução para liberar o processo.'],
      correta: 1,
      explicacao: 'O arrependimento dentro do prazo legal não exige motivo. O direito é exercido sem ônus ao consumidor.'
    },
    {
      pergunta: 'O reembolso foi confirmado. O que fazer com o estoque?',
      opcoes: ['Dar entrada apenas nas peças recebidas e verificadas, conforme o procedimento de estoque e fiscal.', 'Repor todas as peças assim que o reembolso aparecer.', 'Criar um novo pedido para recuperar a quantidade original.'],
      correta: 0,
      explicacao: 'O estoque vendável depende do retorno físico e da condição das peças. O evento financeiro, sozinho, não comprova nenhum dos dois.'
    }
  ],
  fontes: [
    { titulo: 'Código de Defesa do Consumidor — arts. 18, 26 e 49', url: 'https://www2.camara.leg.br/legin/fed/lei/1990/lei-8078-11-setembro-1990-365086-normaatualizada-pl.html' },
    { titulo: 'Decreto nº 7.962 — atendimento e arrependimento no comércio eletrônico', url: 'https://legis.senado.gov.br/norma/413161/publicacao/15762397' },
    { titulo: 'Shopee — política de devolução e reembolso', url: 'https://help.shopee.com.br/portal/4/article/77827' },
    { titulo: 'Bling — nota de devolução de uma venda registrada', url: 'https://ajuda.bling.com.br/hc/pt-br/articles/360037180494' },
    { titulo: 'TST — Tema 65 sobre estorno de comissão do empregado', url: 'https://www.tst.jus.br/pt/indice-tematico-precedentes-qualificados-tst' }
  ]
});

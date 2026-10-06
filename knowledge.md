# Base de Conhecimento — Pré OPP | CS
> Fonte: Guia Pré OPP & CS (Intelipost)
> Formato estruturado para uso em bot de IA

---

## 0. Instruções de comportamento do bot

Você é um assistente interno da Intelipost para o time de CS e Presales. Siga sempre estas diretrizes:

**Tom e formato:**
- Respostas diretas e objetivas — sem introduções longas nem repetir o que o usuário já disse
- Vá direto ao ponto: situação → conclusão → próximos passos
- Use listas numeradas apenas para próximos passos ou ações concretas
- Sem enrolação, sem firulas

**Regras importantes:**
- Nunca mencione custo, estimativa de valor ou precificação nas orientações de próximos passos — isso é papel do time Comercial/AE
- Quando o assunto envolver custo, valor ou contrato, sempre orientar: *"Antes de informar qualquer valor ao cliente, consulte o AE responsável pela conta."*
- Nunca oriente o envio de API KEY antes de avaliação técnica do Presales
- Sempre classifique claramente se é Problema (→ Suporte) ou Oportunidade (→ Pré OPP)
- Em casos de mudança de arquitetura ou novo sistema, sempre encaminhar para Presales

**Quando o sistema não estiver na base:**
Nunca inventar ou presumir informações. Responder sempre:
> "Esse sistema não consta na nossa base de integrações. Recomendo verificar com o time de Presales ou no canal cs-preopp-dúvidas."

**Perguntas de qualificação — sempre fazer antes de responder casos de nova integração ou API KEY:**
- O cliente já tem o módulo contratado?
- É uma troca de sistema ou inclusão de novo sistema?
- O sistema solicitado tem integração homologada com a Intelipost?

Essas perguntas devem aparecer na resposta quando o contexto não deixar claro. Se a informação já estiver na pergunta do usuário, não precisa repetir.

**Exemplo do tom esperado:**
> "A Shopee possui integração nativa com a Intelipost. Com o cancelamento da Anymarket como HUB, o cliente precisará integrar a Shopee diretamente ao TMS. Isso não é suporte — é uma nova oportunidade (Pré OPP), pois envolve mudança de arquitetura.
> Próximos passos:
> 1. Abrir uma Pré OPP no HubSpot (cenário de troca de sistema)
> 2. Encaminhar para Presales para avaliação técnica"

---

## 1. Papéis e responsabilidades

### CS (Customer Success)
**Responsabilidades:**
- Identificar oportunidades de expansão nos clientes da base (Cross Sell / novas operações)
- Apresentar os módulos conforme necessidade e interesse do cliente
- Direcionar para as áreas responsáveis
- Ser facilitador em conversas com clientes (temas direcionados)
- Agendar reuniões técnicas

**Não é responsabilidade do CS:**
- Seguir com OPP sem validação técnica ou alinhamento comercial
- Enviar C20

---

### Sales (AE)
**Responsabilidades:**
- Apresentar os módulos conforme necessidade e interesse do cliente
- Apoiar CS na precificação (se necessário)
- Precificar projeto
- Agendar reuniões técnicas

**Não é responsabilidade de Sales:**
- Enviar C20 sem validação técnica ou alinhamento prévio

---

### Presales
**Responsabilidades:**
- Apoiar tecnicamente nas oportunidades identificadas e validadas
- Realizar reuniões de arquitetura e documentações técnicas dos escopos alinhados
- Direcionar o time de CS em dúvidas técnicas — apenas quando a dúvida estiver vinculada a novas oportunidades ou mudanças de arquitetura

**Não é responsabilidade de Presales:**
- Apoio técnico após projeto implantado (suporte operacional)
- Precificação de projeto
- Marcar reuniões com o cliente
- Entrar em reunião de última hora sem agendamento prévio

---

## 2. Canal de comunicação — Slack

- Todas as dúvidas (técnicas ou não) devem ser centralizadas no grupo: **cs-preopp-dúvidas**
- Estrutura da mensagem:
  - **Título:** incluir o tema e o cliente — ex: "TROCA DE PLATAFORMA (cliente) de Tray para Shopify"
  - **Contexto:** dentro da thread, nos comentários
- O grupo serve para direcionar o CS: se é um problema para suporte, nova OPP ou qualquer outro alinhamento necessário

---

## 3. Como identificar: Problema vs Oportunidade de Negócio

### Perguntas iniciais (entendimento da demanda)
- Existe algum problema atual no processo ou é uma nova necessidade do negócio?
- Isso está impactando alguma operação hoje?
- Quando essa necessidade surgiu?
- Existe algum prazo ou projeto interno relacionado a isso?
- Esse tema já foi discutido antes com alguém do time?

**Sinal de alerta:** se o cliente fala muito de erro, falha, atraso ou impacto operacional → provavelmente é um problema.

---

### Para identificar se é um PROBLEMA
- O que exatamente não está funcionando?
- Quando o problema começou?
- O problema ocorre sempre ou em casos específicos?
- Existe algum impacto financeiro ou operacional?
- Quantos pedidos/transportes/processos estão sendo afetados?
- O cliente possui exemplo ou evidência do problema?
- Isso impacta SLA ou experiência do cliente final?

---

### Para identificar se é uma OPORTUNIDADE
- Essa demanda faz parte de algum novo projeto do cliente?
- O cliente está expandindo operação (CD, transportadora, país, canal)?
- Existe interesse em automatizar ou melhorar um processo atual?
- O cliente quer ganho de eficiência ou redução de custo?
- Existe alguma nova funcionalidade ou integração necessária?
- Essa demanda envolve novo escopo ou desenvolvimento?
- O cliente mencionou ROI, ganho operacional ou escala?

---

### Checklist rápido de classificação

| Tipo | Sinais | Ação |
|---|---|---|
| **Problema** | Algo parou de funcionar / processo que funcionava antes / impacto operacional imediato / reclamação, erro, falha | Direcionar para **Suporte** |
| **Oportunidade** | Novo projeto / nova integração / novo fluxo logístico / expansão de operação / cliente quer melhorar processo | Direcionar para o **fluxo de Pré OPP** (envolvendo Comercial e Presales) |

---

## 4. Cenários e saídas esperadas

### Cenário A — Inclusão de nova operação
Ex: cliente quer incluir operação B2B usando módulos já contratados (fluxo novo)

**CS → Comercial:** não compartilhar estimativa de valor antes de avaliação técnica
**CS → Presales:** encaminhar para avaliação técnica (viabilidade e esforço)

---

### Cenário B — Inclusão de novo módulo (aquisição ou inclusão em renegociação)

**CS → Comercial:**
- O CS pode compartilhar uma estimativa inicial com o cliente para todos os módulos — deixando claro que o valor final será definido após avaliação técnica e alinhamento com o AE
- Antes de qualquer valor ser informado ao cliente, consultar o AE responsável pela conta

**CS → Presales:** todos os módulos necessitam de validação técnica — agendar reunião de arquitetura com o time de Presales

**Importante:** sempre reforçar ao cliente que o valor compartilhado é uma estimativa inicial, sujeita à avaliação técnica e comercial.

---

### Cenário C — Inclusão de novo sistema (plataforma, marketplace, ERP, HUB etc.)

**CS → Comercial:** pode enviar prévia de valor — reforçar que o valor final será enviado pelo AE após análise técnica
**CS → Presales:** determinadas inclusões podem seguir sem validação técnica, mediante termo de aceite (ver Seção 5)

---

### Cenário D — Troca de sistema (ERP, plataforma, HUB etc.)

**CS → Comercial:** pode enviar prévia de valor — reforçar que o valor final será enviado pelo AE após análise técnica
**CS → Presales:** encaminhar para avaliação técnica (viabilidade e esforço)

---

## 5. Termo de aceite — Self Service (não necessita de Presales)

As seguintes atividades podem ser feitas sem envolvimento de Presales:

- Adição de Marketplace (exceto Shopee)
- Adição de transportadora
- Adição de CD/CNPJ
- Adição de Webhook
- Adição de lojas (Omnichannel)
- Integração plataforma - cotação de frete
- Adição de mensagerias (SMS e WhatsApp)
- Plataformas: Azap, Braavo, D Loja virtual, Dooca Commerce, Fastcommerce, Moovin, Tray Corp, Trovata, Vitrina, wBuy

---

## 6. Facilitadores por área

| Área | Responsável | Contato |
|---|---|---|
| Presales | Camila Lima | Slack |
| Suporte | Kleber Souza | Slack |
| Comercial | Gabriela Ramalho | Slack |
| RevOps Sr | Larissa Godoy | Slack |

---

## 7. Agendamento de reunião de arquitetura

**Regras gerais:**
- Respeitar os slots direcionados para reunião de arquitetura (agenda de Raphael e Wendell compartilhada)
- Ao sugerir horário ao cliente, reservar imediatamente o slot na agenda
- Se reunião for cancelada ou reagendada, cancelar o convite na agenda
- Horário sugerido sem reserva poderá ser ocupado por outro CS/AE — prioridade para quem agendar primeiro

**Não serão aceitas:**
- Reuniões fora dos slots disponíveis (exceto casos previamente negociados)
- Reuniões de última hora sem contexto
- Convites sem escopo ou objetivo descrito

**Obrigatório:** qualquer reunião de arquitetura agendada deve ter uma Pré OPP cadastrada.

---

### Informações mínimas para o convite

**Título:** [CS] Nome do cliente + objetivo — ex: "[CS] Cliente X — Troca de plataforma / Inclusão sistema XPTO"

**Corpo do convite deve incluir:**
- ID da conta do cliente (sysnode)
- Se for adição de módulo: qual(is) módulo(s)
- Troca de sistema: saindo de qual para qual
- Inclusão de canal de venda: qual ou quais

---

## 8. Solicitação de API KEY

**Regra geral: a API KEY nunca deve ser enviada diretamente ao cliente.**

Antes de qualquer encaminhamento, é necessário entender o contexto da solicitação:
1. É uma nova oportunidade?
2. Envolve uma nova integração?
3. Se sim → passar pelo fluxo de Pré OPP e agendar reunião de arquitetura com o time de Presales

**Se o cliente pede API KEY por:**

| Motivo | Resposta |
|---|---|
| Integração desconectou | Encaminhar para **Suporte** |
| Quer endpoint para consumir dados | Informar que não disponibilizamos endpoint de consulta de dados; cliente precisa contratar Torre de Controle |
| Quer integrar novo marketplace, nova plataforma ou trocar de sistema | Entender se é nova oportunidade → abrir Pré OPP → agendar reunião de arquitetura com o time de Presales → usar resposta padrão validada (ver texto abaixo) |

**Resposta padrão para solicitação de API KEY:**

> Olá [Nome do cliente], tudo bem?
> Agradecemos por nos procurar para realizar uma nova integração!
> Por política interna da Intelipost, o acesso à nossa API é concedido somente após um processo de validação. Essa etapa inclui todos os testes e acompanhamentos necessários para garantir uma homologação segura e eficiente.
> Esse processo de implantação possui um custo, que será estimado após analisarmos a demanda com mais detalhes. Com a aprovação da proposta, daremos início à abertura do projeto internamente.
> Sabemos o quanto agilidade e autonomia são essenciais para sua operação. Justamente por isso, seguimos esse fluxo: ele existe para assegurar a estabilidade e segurança da sua integração.
> Contamos com a sua compreensão! Qualquer dúvida, seguimos por aqui.

---

## 9. Integrações homologadas e funcionalidades por sistema

### Como usar esta seção
Ao receber uma pergunta sobre um sistema, consulte abaixo para:
1. Verificar se o sistema tem integração homologada
2. Informar quais funcionalidades são suportadas

### Regra para sistemas SEM integração homologada
Vale para qualquer tipo de sistema: ERP, plataforma, marketplace, HUB etc.

**Responsabilidade total do cliente:**
- Desenvolver a integração
- Arcar com os custos junto ao sistema que não possui integração conosco

**Papel da Intelipost nesses casos:**
- Apenas apoio em dúvidas
- Apoio em testes

### Regra importante — Marketplaces

A integração com marketplaces funciona **somente para pedidos em que a logística de transporte é de responsabilidade do embarcador** — nunca do marketplace.

Para todos os marketplaces, a cotação é **sempre por produto** — nunca por volume.

**Validação de arquitetura:** a adição de marketplace **não requer reunião de arquitetura com Presales** — pode seguir via termo de aceite. A única exceção é a **Shopee** — Homologado
⚠️ Antes de responder sobre a integração com a Shopee, faça sempre estas duas perguntas de qualificação:

1. **O cliente possui os módulos de Operação e Entregas contratados com a Intelipost?**
   - Sim → pode seguir
   - Não → informar: *"A contratação dos módulos de Operação e Entregas é uma premissa para a integração com a Shopee. O cliente precisa primeiramente contratar esses módulos para depois seguir com a integração."*

2. **O cliente possui gerente de contas na Shopee?**
   - Sim → pode seguir
   - Não → informar: *"Ter um gerente de contas na Shopee é uma premissa do marketplace. Sem esse contato, não é possível seguir com a integração."*

Somente após confirmação positiva nas duas perguntas, apresentar as informações abaixo:

- Cotação: por produto
- Entregas: rastreamento via webhook
- 📌 Logística: a integração funciona somente para pedidos em que a logística é de responsabilidade do embarcador.
- 📌 ERP: o rastreamento via webhook requer validação técnica do time de arquitetura — para que o status seja atualizado na Shopee, o ERP do cliente precisa enviar os campos corretos no momento da criação do pedido na Intelipost.
- ⚠️ Próximo passo obrigatório: *"Por gentileza, agende uma reunião de arquitetura técnica com o time de Presales para continuar com o processo."*

**Frete no produto (Empreender)** *(também: Empreender)* — Homologado
- Cotação: apenas por volume
- Operação: sem etiqueta
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Temos integração com a parte de parcelamento. https://parcelamento.sak.com.br/como-integrar-com-o-intelipost

**OMS FullComm** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: tracking code
- Cria pedido de reversa: não
- 📌 Obs: O cliente precisa pagar 40 dólares para utilizar o aplicativo
Para criação do pedido é obrigatório a configuração do ERP

#### Crm

**Netsuite** — Não Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Somente via consultoria RunSmart

#### Erp

**Abacos Cloud** — Descontinuado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**Abacos Local** — Descontinuado
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**Alternativa Sistemas** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, pedidos Shopee, etiqueta PDF
- Entregas: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: O cliente pode configurar regras de frete específicas com base no tipo de cliente. 
Alternativa permite escolher entre as opções 'jurídico' (empresa) ou 'pessoa física'para definir as condições de frete adequadas a cada perfil de cliente
O parceiro não recebe informações de rastreamento de pedidos que não foram criados pelo sistema alternativa.
Não existe opção de criar pedido com mais de um volume
Tem um custo mensal de utilização do módulo de integração da Intelipost, o valor é negociável.
O parceiro se identifica como "master" na requisição
Captura informação de embalagem no retorno da cotação de frete

**Aton (Ambar X)** — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não existe custo, na contratação do Aton ERP, o Seller tem acesso a todas as integrações disponíveis no sistema. 
O ERP não consegue realizar cotação para os marketplaces.

**BSeller** — Homologado
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking code, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: consulta de status, atualização de status micro
- Cria pedido de reversa: sim
- 📌 Obs: Logistica reversa somente com Correios

**Bling** — Homologado
- Cotação: por produto e por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, etiqueta PDF
- Entregas: rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: tracking code, tracking URL
- Cria pedido de reversa: não
- 📌 Obs: O ERP realiza atualização de Marketplace apenas com o status “Entregue”. 
É possível realizar cotação de frete entre Marketplace x Bling x Intelipost. 
O parceiro BLING informa que não é obrigatório o envio com nota fiscal, entretanto, caso o pedido tenha uma nota gerada, exigimos que seja emitida.
O parceiro Bling consegue enviar de forma automática criação de pedidos na Intelipost. 
A Shopee recomendou pra Bling que seja sempre feita a organização de envio primeiro com eles, porque se ele enviar antes para a intelipost, eles não conseguem saber que o pedido será despachado.  
Na integração desenvolvida pelo Bling, ele não atualiza os status das ocorrências nem modifica a cor do pedido.
O status é atualizado apenas na parte logística que está integrada ao pedido
se o cliente tiver um CNPJ de matriz cadastrado no TMS e precisar adicionar um CNPJ de filial, ele pode usar a mesma conta do ERP.
se o cliente tiver um CNPJ de matriz diferente (ou seja, outro CNPJ), não será possível usar a mesma conta. Nesse caso, será necessário configurar uma nova conta no sistema para o novo CNPJ.
Se o cliente possuir mais de uma conta Bling no mesmo canal de venda (como Shopify, por exemplo), o Bling não consegue diferenciar os canais individualmente, como "Shopify 1" e "Shopify 2". 
O vendedor consegue configurar no Bling a mesma chave API Key da Intelipost em diferentes contas, mesmo com CNPJs diferentes cadastrados no Bling.
O vendedor não consegue criar várias contas no Bling com o mesmo CNPJ, cada conta no Bling precisa ter um CNPJ diferente, e nesta conta ele consegue adicionar filiais da mesma raiz de CNPJ.

**Bremen Sistemas (Wingraph)** — Homologado
- Cotação: por produto e por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, etiqueta PDF
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Para realizar a integração com a Intelipost, é necessário plano para ativação da integração
O ERP realiza cotação por produto, quando já tem grupos de produtos vinculados em embalagens dentro da Intelipost. 
O ERP usa a opção por volume quando precisa definir manualmente os volumes de cada produto

**Cantu & Stage (Zada)** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, consulta de status, atualização de status micro
- ⚠️ Não suporta: tracking code, rastreamento via webhook, atualização de status macro
- Cria pedido de reversa: não
- 📌 Obs: Para integrar-se ao sistema, o cliente pode optar por adquirir uma licença por compra ou locação, proporcionando maior flexibilidade na aquisição. Além disso, módulos específicos
podem ser licenciados separadamente, conforme a necessidade.
Caso o cliente possua duas contas na Zada e utilize uma única conta na Intelipost para
integração, não haverá impactos na integração relacionados ao parceiro.

**Consisa** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, etiqueta PDF
- Entregas: rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: tracking code, consulta de status, atualização de status micro
- Cria pedido de reversa: não

**Datasul** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Datasul pertence ao grupo Totvs

**Eccosys** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking code, rastreamento via webhook, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: consulta de status
- Cria pedido de reversa: não
- 📌 Obs: A opção de Múltiplo CNPJ é disponível conforme o plano contratual. 
Realiza gestão de ranges de “tracking_code” dos correios, se o seller configurar o próprio contrato de correios no sistema

**Eive** — Não Homologado
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**Guarani Sistemas** — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, etiqueta PDF
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: A intelipost não recebe o valor do custo do produto com desconto do cupom do consumidor final ou vendedor
O número do pedido (order_number) sempre corresponde à origem e ao número
do pedido de venda.
No momento em que a nota fiscal do pedido é gerada, o pedido passa a estar pronto para que seja solicitado o envio à Intelipost. Assim, no ciclo seguinte do integrador, a requisição de criação do pedido na Intelipost é enviada automaticamente. 
A informação de volume é enviada com base no cadastro das embalagens no sistema da Intelipost. Em seguida, o pedido é criado com as informações de embalagem armazenadas no sistema Guarani Sistemas

**Idealeware** — Não Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**Millennium** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, múltiplo CNPJ, pedidos Shopee, sem etiqueta
- Entregas: consulta de status
- ⚠️ Não suporta: rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Para efetuar a integração com a Millenium, o custo que eles cobram não é da integração e sim do treinamento quando o cliente não quer ou não consegue fazer sozinho a instalação do módulo

**Net1 Tecnologias** *(também: Net1)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Para adicionar a Intelipost no ERP Net 1 Tecnologias existe um custo adicional.

**Nexus Cloud** — Homologado
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, etiqueta PDF
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não existe particularidades

**Notazz** — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, consulta de status, atualização de status micro
- ⚠️ Não suporta: tracking code, rastreamento via webhook, atualização de status macro
- Cria pedido de reversa: não
- 📌 Obs: Para que o parceiro disponibilize a integração, é necessário que o cliente assine o plano Ouro ou qualquer outro plano acima, por meio do site.

**Olist ERP (Antiga Tiny)** *(também: Tiny)* — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, sem etiqueta
- Entregas: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Consulta pedidos,  recebe apenas um status "Entregue"e para realização de cotação por multi-cd, precisa existir uma conta para cada CD. A Tiny não consegue enviar a PLP para as transportadoras quando o pedido é criado no sistema Intelipost.

**Omie** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, pedidos Shopee, etiqueta PDF
- Entregas: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: O parceiro OMIE não é multiempresa, ou seja, não permite gerenciar mais de uma empresa em uma única conta.
O HUB de mercado não faz integração com o ERP OMIE.
Para clientes com site próprio, é possível criar pedidos via API, mas é necessário realizar uma cotação manual para importar o pedido na Intelipost.

**Onclick** — Não Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, múltiplo CNPJ, etiqueta PDF
- Entregas: consulta de status
- Cria pedido de reversa: não
- 📌 Obs: Não temos webhook para o ERP Onclick, e sim uma ação ativa do próprio ERP em realizar GET na nossa API e consultar os status. O cliente que trabalha com multi-cd id 40.115. Para que o cliente realize a integração entre Intelipost e Onclick é necessário que o cliente tenha contratado o módulo na implantação.

**Protheus** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Protheus pertence ao grupo Totvs. Não é nativo , precisa de desenvolvimento .

**Qbert** — Não Homologado
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**SAP Hana** *(também: SAP)* — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: SAP Hana pertence ao grupo SAP

**Santri** — Não Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**SysEmp** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, etiqueta PDF e ZPL
- Entregas: tracking code, tracking URL, consulta de status, atualização de status macro
- ⚠️ Não suporta: rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não

**Target** — Não Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**Uno Soluções** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Além da contratação do sistema, há um valor de contratação de serviço adicional de R$2.840,00.

**i7 (Totvs)** *(também: i7)* — Não Homologado
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Temos integração a partir do plugin da I7, módulos habilitados de acordo com a consultoria; Não temos integração nativa, o que temos é um SDK, nada plugin & play.

#### Erp e hub

**Id. Works** — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, entrega agendada, sem etiqueta
- Entregas: rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: tracking code, tracking URL
- Cria pedido de reversa: sim
- 📌 Obs: Oferece a opção no retorno da cotação de frete o serviço de retira loja do sistema e os pedidos não são enviados para a Intelipost. O parceiro ID.WORKS consegue realizar a cotação de frete antes de gerar o pedido, mas não informa na criação do pedido o id da cotação ou o custo que o cliente precisa pagar a transportadora;

#### Hub

**AnyMarket** *(também: Anymarket)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, pedidos Shopee, sem etiqueta
- Entregas: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Any realiza match para atualização do pedido o id de volume e pedido. 
O cliente pode escolher na Anymarket em qual status deseja enviar o pedido "Criado" ou "Despachado".
Any consegue consultar o rastreamento no Bling, para que seja possível o cliente precisa garantir que os dados do rastreamento estejam na nota fiscal que ele vai emitir no Bling. 
Any realiza a cotação para cada centro de distribuição de acordo com SKU. 
Any não consegue se conectar com a tray commece devido a questões contratuais. 
Any consegue realizar recotação automática de pedidos quando o sistema não consegue encontrar o ID da cotação para vincular ao pedido

**Base. (Antiga BaseLinker)** *(também: BaseLinker)* — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, entrega agendada, etiqueta PDF
- Entregas: tracking code, tracking URL, consulta de status, atualização de status macro
- ⚠️ Não suporta: rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: sim
- 📌 Obs: O marketplace não consegue contatar o parceiro BaseLinker para receber as informações de frete da Intelipost.
A cotação é feita de acordo com a associação do produto no inventário ao pedido e nas configurações de listagem, onde a sincronização de estoque serve como base para efetuar o débito de quantidade. Com isso, o sistema saberá de onde deve partir do estoque para calcular o frete.
O parceiro realiza cálculo de frete antes do faturamento do pedido

**Business Integration** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, etiqueta PDF
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não consegue realizar leilão de frete para múltiplas origens. Não trabalha com Tabela de Contingência.

**Citel** — Não Homologado
- Operação: envio de pedido, sem etiqueta
- Entregas: rastreamento via webhook, consulta de status
- Cria pedido de reversa: não
- 📌 Obs: Este parceiro é somente Hub

**Hub2b** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Recebe apenas o status "Entregue"

**IDCommerce** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não consegue realizar leilão de frete para múltiplas origens. Não trabalha com Tabela de Contingência.

**IHub** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não consegue realizar leilão de frete para múltiplas origens. Não trabalha com Tabela de Contingência.

**INTEGRAI** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, sem etiqueta
- Entregas: rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não tem uma interface para testes

**Ideris** *(também: Wake)* — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: consulta de status
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Este parceiro trabalha com etiqueta e get de rastreamento. Hub somente realiza cotação, caso tenha pedido, ou seja, recotação.

**Integra.do** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Atende multi-cd nativamente. Não consegue realizar leilão de frete para múltiplas origens. Não trabalha com Tabela de Contingência.

**MAGIS5** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: O Marketplace realiza a cotação de frete diretamente na Intelipost ou através de um plugin na Intelipost, a cotação não passa pelo sistema da MAGIS5. Após o cálculo de frete, o Marketplace envia o método de envio e o preço da cotação de frete.
A Magis5 não devolve rastreamento para os marketplaces (Info.E-mai)
Se o pedido do Marketplace for criado na MAGIS5 sem o preço do frete e o método da transportadora, a MAGIS5 deverá realizar a cotação de frete.
Se o sistema de criação do pedido for ERP/API, a MAGIS5 realiza a cotação de frete e por meio de regras da cotação, o parceiro identifica o melhor método de envio e aguarda o Faturamento. Quando reconhece o faturamento, dispara a criação do pedido para o TMS da Intelipost;
Integração entre Magis5 e Bling: a Magis5 busca o pedido de venda no Marketplace, o pedido já vem com as informações do valor de frete. O HUB envia o pedido para o Bling para ser realizado o faturamento, recupera a nota fiscal e envia a nota fiscal do pedido para o Marketplace.

**OmniOne** — Homologado
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, opt-in, etiqueta PDF
- Entregas: tracking code, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Omnione se integra com o marketplace shopee

**Plugg.to** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, sem etiqueta
- Entregas: tracking code, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: A plugg.to não aceita a inclusão do campo "tracking_code" da Intelipost. 
O parceiro plugg.to não permite a atualização de pedidos em seu sistema com informações de rastreamento de um pedido que não tenha sido inicialmente criado por seu sistema. Além disso, na integração atual, não há suporte para a integração de múltiplos CDs (Centros de Distribuição) e CNPJs. 
Em reunião com a Plugg.to, foi confirmado que é possível cadastrar mais de um Centro de Distribuição (CD). No entanto, há algumas considerações importantes a serem feitas. 
A Plugg.to só fará a cotação de frete com a Intelipost se o cliente tiver um estoque conectado à Plugg.to.
Quando a Plugg.to recebe uma solicitação de cotação de uma plataforma que pode ter múltiplos CDs associados (ou seja, diferentes CEPs de origem), eles verificam primeiramente o estoque disponível. Somente após essa verificação, eles consultam os valores de frete na Intelipost.

**Shopping De Precos** *(também: ShoppingDePrecos)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, múltiplo CNPJ, etiqueta PDF
- Entregas: tracking code, tracking URL, consulta de status, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Cota para marketplaces — clientes podem conectar marketplaces via Shopping de Preços sem necessidade de validação técnica adicional, desde que o HUB já esteja integrado na Intelipost.

**Skyhub** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não consegue realizar leilão de frete para múltiplas origens. Não trabalha com Tabela de Contingência.

**VTRINA** — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, múltiplo CNPJ, entrega agendada, etiqueta PDF
- Entregas: rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: O parceiro envia pedidos com o campo shipped_date

**WeHub** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Entregas: consulta de status
- ⚠️ Não suporta: rastreamento via webhook
- Cria pedido de reversa: não

#### Integrador
- 📌 Obs: Não trabalha com Entrega Agendada. Atende multi-cd nativamente. Não consegue realizar leilão de frete para múltiplas origens. Trabalha com Tabela de Contingência.

**VTEX (SMART CONNECTOR)** — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: tracking code, consulta de status, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: E-mails sem criptografia: Permite a utilização de notificações de e-mail pelo TMS.
Captura de produtos: Coleta o array de produtos com todos os dados relevantes associados a cada pedido.
Dados fiscais completos: Incluindo a série correta conforme a chave da nota fiscal.
Informações adicionais: Integra a forma de pagamento e status do pedido conforme registrado na plataforma VTEX, com possibilidades de capturar até os cupom de desconto que foi aplicado por pedido.
Valor do frete: Garante que o valor do frete pago pelo cliente seja corretamente integrado através do campo ""customer_shipping_costs"" no pedido.
Facilidades de manipulação: Com o desenvolvimento da integração via Smart, as alterações e mapeamentos de campos, se tornou mais simples e rápido, conforme a necessidade de nossos clientes, podendo ser alterados a qualquer momento."
Tracking Code:Para pedidos destinados à transportadora Correios, é necessário que os pedidos na VTEX já possuam o código de rastreio no momento em que o pedido for faturado.
Etiqueta:A Intelipost só consegue disponibilizar a etiqueta se o cliente solicitar o Master Data na VTEX. Caso contrário, não será possível gerar a etiqueta. Outra alternativa é o cliente ter ativada a funcionalidade Picking Pack da VTEX, que também permite acessar a etiqueta.
Cotação em Tempo Real: Essa funcionalidade está disponível apenas com a integração via Ollie.
Cotação Offline: A Intelipost possibilita realizar a recotação de frete antes de criar o pedido, permitindo a obtenção de informações relacionadas aos custos de envio

#### Locker

**Boxit** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: rastreamento via webhook
- Cria pedido de reversa: não

#### Marketplace

**Amazon** — Não Homologado
- Cotação: por produto
- 📌 Obs: É um gerador de tabelas (plugin no chrome) que pega as tabelas que estão na IP e gera a tabela para o embarcador fazer o upload na Amazon

**Americanas** — Não Homologado
- Cotação: por produto
- 📌 Obs: Para webhook somente sellers que usam a integração via skyhub

**Carrefour** — Homologado
- Cotação: por produto
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Casas Bahia** — Não Homologado
- Cotação: por produto
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente.

**Centauro** — Não Homologado
- Cotação: por produto
- 📌 Obs: Criação de pedido e webhook somente  com a integração Pegaki

**Fast Shop** — Não Homologado
- Cotação: por produto
- 📌 Obs: Para usar cotação de frete com esse Marketplace precisa ser cliente Intelipost ou contratar nosso modulo de cotação de frete

**GIMBA** — Homologado
- Cotação: por produto
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**GPA** — Não Homologado
- Cotação: por produto
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Kabum** — Homologado
- Cotação: por produto
- Entregas: rastreamento via webhook, atualização de status macro
- 📌 Obs: Para usar cotação de frete com esse Marketplace precisa ser cliente Intelipost ou contratar nosso modulo de cotação de frete

**Leroy Merlin** — Homologado
- Cotação: por produto
- Cotação: por produto
- 📌 Obs: Homologado. Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Madeira Madeira** — Homologado
- Cotação: por produto
- Cotação: por produto
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Magazine Luiza** *(também: Integracommerce)* — Não Homologado
- Cotação: por produto
- 📌 Obs: Integracommerce integra Magalu vice-versa

**Mercado Shops** — Homologado
- Cotação: por produto
- 📌 Obs: Formato de cotação específico

**MercadoLivre** — Homologado
⚠️ Antes de responder sobre a integração com o Mercado Livre, faça esta pergunta de qualificação:

1. **A logística de transporte dos pedidos é de responsabilidade do embarcador (modo ME1)?**
   - Sim → pode seguir
   - Não → informar: *"A integração com o Mercado Livre funciona somente no modo ME1, onde a logística é de responsabilidade do embarcador. Pedidos no modo ME2 (logística do próprio Meli) não são compatíveis com a Intelipost."*

Somente após confirmação, apresentar as informações abaixo:

- Cotação: por produto
- Entregas: não suportado — integração de status com o Mercado Livre não está ativa
- 📌 Segue via termo de aceite — não requer reunião de arquitetura com Presales

**Mobly** — Homologado
- Cotação: por produto
- 📌 Obs: Possível desenvolvimento de criação de pedido e rastreamento para o ano/23

**Shopee** — Homologado
⚠️ Antes de responder sobre a integração com a Shopee, faça sempre estas duas perguntas de qualificação:

1. **O cliente possui os módulos de Operação e Entregas contratados com a Intelipost?**
   - Sim → pode seguir
   - Não → informar: *"A contratação dos módulos de Operação e Entregas é uma premissa para a integração com a Shopee. O cliente precisa primeiramente contratar esses módulos para depois seguir com a integração."*

2. **O cliente possui gerente de contas na Shopee?**
   - Sim → pode seguir
   - Não → informar: *"Ter um gerente de contas na Shopee é uma premissa do marketplace. Sem esse contato, não é possível seguir com a integração."*

Somente após confirmação positiva nas duas perguntas, apresentar as informações abaixo:

- Cotação: por produto
- Entregas: rastreamento via webhook
- 📌 Logística: a integração funciona somente para pedidos em que a logística é de responsabilidade do embarcador.
- 📌 ERP: o rastreamento via webhook requer validação técnica do time de arquitetura — para que o status seja atualizado na Shopee, o ERP do cliente precisa enviar os campos corretos no momento da criação do pedido na Intelipost.
- 📌 Obs: Para utilização deste parceiro é necessário que o cliente tenha os módulos de Cotação e Entregas

**Tiffins** — Não Homologado
- Cotação: por produto
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Trabalha com Tabela de Contingência.

**Via Varejo / CNOVA** *(também: Casas Bahia Marketplace)* — Não Homologado
- Cotação: por produto
- 📌 Obs: Desenvolvimento realizado pela via varejo

**Webcontinental** — Não Homologado
- Cotação: por produto
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Zoom / Buscapé** — Não Homologado
- Cotação: por produto

#### Middleware
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**ATOS DATA** — Homologado
- Cotação: por produto e por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, múltiplo CNPJ, opt-in, etiqueta PDF
- Entregas: consulta de status, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: tracking code, rastreamento via webhook
- Cria pedido de reversa: não

**Azape** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não

**Jitterbit** *(também: Jitterbit (Wevo))* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Entregas: rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Toda a integração é CUSTOMIZADA

**Predize** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- ⚠️ Não suporta: rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Temos cotação,  mas só funciona para o mercadolivre   - - Ex. consumidor pergunta no chat o valor do frete e eles consultam o frete

#### Notification

**UPSTREAM** — Homologado
- Operação: sem etiqueta
- Entregas: consulta de status
- ⚠️ Não suporta: tracking code, rastreamento via webhook, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Este parceiro é responsável por consultar pedidos na IP através da consulta do pedido ou consulta do pedido de venda para coletar os dados de rastreamento e notificar ao consumidor final.

#### Oms

**Linx OMS** — Não Homologado
- Operação: envio de pedido, sem etiqueta
- Entregas: rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Não temos integração com o ERP Seta da Linx

**Síntese** — Homologado
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking code, tracking URL, consulta de status, atualização de status micro
- ⚠️ Não suporta: rastreamento via webhook, atualização de status macro
- Cria pedido de reversa: não
- 📌 Obs: Para o cliente realizar integração com sistema Síntese é cobrado o custo de Implantação.

#### Platform

**00K** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Atende multi-cd nativamente.

**Bagy** *(também: Dooca Commerce)* — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- ⚠️ Não suporta: tracking code, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não

**BetaLabs** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, etiqueta PDF
- Entregas: rastreamento via webhook, consulta de status
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente.

**Bis2Bis** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Recebe somente o status "Entregue" e consulta o status do pedido

**Braavo** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, sem etiqueta
- Entregas: consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Atende multi-cd nativamente. Não consegue realizar leilão de frete para múltiplas origens. Não trabalha com Tabela de Contingência — impossibilita retorno de cálculo de frete em caso de instabilidade na API.

**Cartpanda** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não há particularidades que impossibilitem a integração com a Intelipost.

**Climba** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, etiqueta PDF
- Entregas: tracking code, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente.

**Convertize** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente.

**DB1** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: consulta de status
- Cria pedido de reversa: não
- 📌 Obs: Rastreamento é realizado através de um GET

**Digital Manager Guru** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, dimensões, peso, sem etiqueta
- Entregas: tracking code, tracking URL, consulta de status, atualização de status macro
- ⚠️ Não suporta: rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: É obrigatório que o cliente assine um plano mensal (ou anual) na plataforma:
https://digitalmanager.guru/pricing
É possível integrar mais de uma conta da plataforma em uma única conta da Intelipost. O
número do pedido é gerado de forma aleatória, portanto não haverá conflitos na
importação dos pedidos. A plataforma permite configurar a apresentação da cotação para destacar a
transportadora mais rápida ou mais barata. Também é possível definir um valor
fixo de frete.

**E-completo** — Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, múltiplo CNPJ, sem etiqueta
- Entregas: tracking code, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Para o cliente utilizar o serviço de Auditoria é necessário o cliente mencionar o valor antes do envio do pedido. 
O parceiro recebe apenas os seguintes status: Cancelado, Falha na entrega e Entregue.  
Atualiza os marketplaces com os principais status: logística, enviado, entregue, cancelado

**EZ Commerce Octopus** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Trabalha com HUB

**Fastcommerce** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- ⚠️ Não suporta: tracking code, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: O Parceiro Fastcommerce não suporta multi-cd nativamente. Este suporte precisa ser
implementado ou através do plugin universal de cálculo de frete e prazo.

**Flexy** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Genius Return** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, atualização de status micro
- Cria pedido de reversa: sim
- 📌 Obs: Não existe particularidades na integração. A Genius realiza integração com  Vtex, Shopify, Tray, Linx Commerce, Oracle e Wake em desenvolvimento

**Godeep (Antiga F1 Soluções)** *(também: F1 Soluções)* — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: tracking code, consulta de status, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não há particularidades que impossibilitem a integração com a Intelipost.

**Irroba** — Não Homologado
- Cotação: apenas por volume
- Operação: sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Jet** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Entregas: rastreamento via webhook, consulta de status
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não atende multi-cd nativamente. Não trabalha com Tabela de Contingência.

**Jet Evolution** *(também: Jet)* — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Entregas: rastreamento via webhook, consulta de status
- Cria pedido de reversa: não

**Linx Commerce** *(também: Ezcommerce)* — Homologado
- Cotação: por produto e por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, entrega agendada, sem etiqueta
- Entregas: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: A Linx oferece um serviço chamado Linx ITEC, um ERP projetado para o segmento farmacêutico.
Atualmente, o Linx Commerce possui uma integração nativa com o ITEC. 
Caso o cliente solicite a integração do Linx ITEC e não esteja utilizando a plataforma Linx Commerce, será necessário desenvolver uma integração entre o Linx ITEC e a Intelipost.
O custo de integração é cobrado se o cliente não realizar a configuração seguindo documentações, solicitando uma equipe dedicada para implantar a integração.
Na cotação por produto a Linx envia todos os produtos do carrinho de compras com suas respectivas dimensões para que a Intelipost faça o cálculo e retorne as melhores possibilidades de transportadoras.
Na cotação por volume (Ao ativar a utilização de pacotes), a Linx seleciona o melhor pacote, agrupando todos os itens para enviar à Intelipost.
Leilão de frete: O cliente pode escolher a cotação que preferir: a mais barata, a que oferece o menor prazo de entrega, ou simplesmente a primeira na lista das transportadoras retornadas.

**LojComm** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Cria pedido de reversa: não

**Loja Mestre** — Não Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, etiqueta PDF
- Cria pedido de reversa: não

**Magento 1** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não
- 📌 Obs: A adobe não realiza manutenção na versão do magento 1 e não é possivel realizar downgrade da versão.

**Magento 2 (Bizcommerce)** *(também: Magento 2)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: É obrigatório o envio do quote_id na requisição do pedido com a utilização do nosso plugin. 
O nosso plugin atende todos os clientes que tem Magento 2.3 + ou inferior.
Não existe a possibilidade de ter dois produtos armazenados em centros de distribuição diferentes com o plugin MAGENTO 2. A premissa é que os produtos sairão de um único centro de distribuição por loja.
O plugin MAGENTO 2 aciona a API da Intelipost sempre que necessita obter uma cotação de frete para o Marketplace. Nesse contexto, é possível realizar o cálculo de frete na vitrine, no carrinho de compras e durante o checkout. Importante notar que a execução da cotação de frete pode variar conforme as especificidades de cada Marketplace
O Magento 2 envia o campo "Origin_warehouse_code"

**Moovin** — Homologado
- Cotação: por produto e por volume
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, sem etiqueta
- Entregas: tracking code, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: consulta de status, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: O parceiro realiza cotação de frete para os marketplaces através do HUB Moovin, mas para integração de pedidos com a Intelipost não foi mapeada a possibilidade de integração. 
O parceiro recebe os status “Criado”, “Em trânsito”, “Falha na Entrega” e “Entregue”. 
O parceiro MOOVIN oferece a capacidade de registrar diversos CNPJs em uma única conta. No entanto, até o momento, não existe a funcionalidade que permite a divisão de compras por CNPJ. Dessa forma, todas as transações realizadas serão associadas a um único CNPJ

**NOX** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, sem etiqueta
- Entregas: rastreamento via webhook, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: tracking code, consulta de status
- Cria pedido de reversa: não

**Nuvemshop V1** *(também: Nuvemshop)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, etiqueta PDF
- Entregas: tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: tracking code
- Cria pedido de reversa: não
- 📌 Obs: O cliente apenas consegue se integrar ao parceiro se houver o plano “Next” da Nuvemshop. 
Não trabalhamos multi-origem na versão1.
A Nuvemshop armazena a referência da cotação de frete dentro do pedido para envio dos dados da cotação de frete. Se a Nuvemshop não guarda a referência do id da cotação de frete, não é possível crar o pedido. 
O nosso aplicativo só recebe status dos pedidos que forem criados pela plataforma.
Para realizar a atualização de pedido na nuvemshop, os pedidos precisam passar pelo app da intelipost

**Nuvemshop V2** *(também: Nuvemshop)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, etiqueta PDF
- Entregas: tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- ⚠️ Não suporta: tracking code
- Cria pedido de reversa: não
- 📌 Obs: O cliente apenas consegue se integrar ao parceiro se houver o plano “Next” da Nuvemshop. 
A Nuvemshop armazena a referência da cotação de frete dentro do pedido para envio dos dados da cotação de frete. Se a Nuvemshop não guarda a referência do id da cotação de frete, não é possível crar o pedido.
O nosso aplicativo só recebe status dos pedidos que forem criados pela plataforma.
Para habilitar a opção de recotação de frete após o recebimento da nota fiscal é necessário acionar a logmanager para habilitar essa opção. A recotação de frete serve para atualizar somente a data estimada de entrega
Criação de pedido automático na Intelipost
Para realizar a atualização de pedido na nuvemshop, os pedidos precisam passar pelo app da intelipost

**Openk** — Não Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Cria pedido de reversa: não

**Oracle Cloud Commerce** — Não Homologado
- Cotação: apenas por volume
- Operação: sem etiqueta
- Cria pedido de reversa: não

**Pieta.tech** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- ⚠️ Não suporta: tracking code, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não trabalha com Multi-origem. Trabalha com Tabela de Contingência.

**PrestaShop** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, tracking URL, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: A Prestashop é responsável por exibir o nome da transportadora na cotação de frete. Não é possível utilizar segmentos de campo customizados no
retorno da API, pois a plataforma associa o nome da transportadora ao ID do método de entrega e o exibe na cotação de frete.
O PrestaShop possui suas próprias configurações para a ordenação das transportadoras. Ele pode ordenar por preço ou por uma ordem manual
definida pelo lojista, mas essa configuração não faz parte do Plugin.
O nome da transportadora armazenado no pedido é baseado em um mapeamento pré-definido nas configurações da transportadora. Ou seja, o
nome da transportadora não é obtido diretamente do campo "description" retornado na cotação de frete, mas sim do nome configurado nas definições da transportadora na Prestashop. Se no carrinho de frete houver mais de um produto no mesmo CD, o sistema
assume esse CD no pedido. Caso os produtos não estejam no mesmo CD, ao fechar o pedido, ele salva as duas cotações de frete e apresenta a soma do frete e o maior prazo.
Quando uma pessoa insere um cupom de frete e já tinha realizado a cotação de frete, o plugin não chama a intelipost automaticamente para realizar a cotação.
Para que seja realizada a cotação de frete, o cliente precisa informar o cupom e simular o frete de novo.
O PrestaShop não captura as informações da data de entrega fornecidas pela Intelipost. A apresentação da data ou dos dias segue o formato configurado no simulador de frete instalado no módulo. O cálculo do prazo de entrega é realizado com base em dias úteis.
No Prestashop, não foi possível implementar a funcionalidade de tracking_url devido a algumas limitações da própria plataforma.
O plugin não possui validação da sequência lógica de status. Ele atualiza o status do pedido conforme os dados recebidos.
Atualização de status é realizada em nível de pedido, não sendo suportada a atualização por volume individual

**Rakuten** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**Shopify** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Plano Grow mensal e Basic (mensal e anual): é necessário solicitar e pagar os US$20 adicionais por mês.
Plano Grow anual, Advanced e Plus no plano mensal: já incluem a funcionalidade sem custo extra.

Se o cliente tiver instalado tanto o aplicativo da Intelipost quanto o da Yampi, o checkout utilizado será o da Yampi. O app da intelipost somente irá funcionar se o checkout for da Shopify.
Um pedido é criado na Intelipost através da Yampi apenas quando o processo de checkout é finalizado utilizando a Yampi como forma de pagamento.
Não é possível apresentar entrega em minutos.  
Como salva o id da cotação de frete: após a confirmação do pedido e a escolha da transportadora, nosso aplicativo recupera as cotações recentes de frete, verifica se o endereço e os produtos correspondem ao pedido, e tenta associar automaticamente essas informações no fulfillment.  
Para atualizar o pedido na Shopify, o número do pedido enviado para intelipost precisa ser o número da order ou do fullfilment order da shopify
Se o cliente quiser usar o ID da cotação de frete gerado após a cotação, nossa equipe de implantação precisa solicitar a liberação dessa opção à Disco via Slack

**Simplo 7** *(também: D Loja Virtual (Simplo 7))* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, etiqueta PDF
- Entregas: rastreamento via webhook
- ⚠️ Não suporta: tracking code
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não trabalha com Multi-origem. Trabalha com Tabela de Contingência.

**Smart Sistemas** — Não Homologado
- Cotação: apenas por volume
- Operação: sem etiqueta
- Cria pedido de reversa: não

**Tray Commerce** *(também: Tray)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Entregas: tracking code, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: tracking URL, consulta de status, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Status: Cancelado, Falha na entrega, Despachado, Em trânsito e Entregue

**Trovata** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- ⚠️ Não suporta: tracking code, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Não trabalha com Entrega Agendada. Não trabalha com mais de um CD em uma única conta. Não consegue realizar leilão de frete para múltiplas origens. Não trabalha com múltiplo CNPJ em uma única conta. Não trabalha com Tabela de Contingência.

**Uappi (Wapstore)** *(também: Wapstore)* — Homologado
- Cotação: apenas por produto
- Operação: múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: tracking code, consulta de status, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: A disponibilidade da cotação de frete é definida pela própria loja, quando o layout do site
é projetado

**VNDA** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, sem etiqueta
- Entregas: tracking code, tracking URL, consulta de status, atualização de status macro
- ⚠️ Não suporta: rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Na plataforma, o vendedor pode escolher entre três formas de exibir o prazo de entrega no site: dias corridos (padrão), dias úteis ou dias exatos.

**VTEX** — Homologado (somente conversão de tabelas)
- ⚠️ Cotação em tempo real: NÃO disponível — não possui integração para cotação de frete
- Solução disponível: apenas conversão de tabelas — a Intelipost converte a tabela de frete do embarcador para o formato VTEX
- 📌 Para qualquer demanda VTEX: informar ao cliente que não há cotação em tempo real → acionar o AE antes de qualquer alinhamento de valor → agendar reunião de arquitetura com Presales

**Vertis** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

**Visual E-commerce** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, múltiplo CNPJ, pedidos Shopee, etiqueta PDF e ZPL
- Entregas: tracking code, tracking URL, consulta de status, atualização de status macro
- ⚠️ Não suporta: rastreamento via webhook, atualização de status micro
- Cria pedido de reversa: não

**WDNA** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, canal de vendas, entrega agendada, etiqueta PDF
- ⚠️ Não suporta: tracking code, tracking URL, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não

**Wake (Tray Corp)** *(também: Wake)* — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, sem etiqueta
- Entregas: tracking code, rastreamento via webhook, atualização de status micro
- ⚠️ Não suporta: tracking URL, consulta de status, atualização de status macro
- Cria pedido de reversa: não
- 📌 Obs: O parceiro não envia o status "Despachado", não consegue enviar o código de tracking_code dos correios e disponibiliza tabela de contingência apenas para Correios. O parceiro realiza cotação para cada seller na cotação de frete. O parceiro TRAY CORP (WAKE) recebe os status “Criado” e “Entregue”
O parceiro Wake não informa o nome da loja do cliente no campo canal de vendas

**Wbuy** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, múltiplo CNPJ, opt-in, sem etiqueta
- Entregas: tracking URL, rastreamento via webhook, atualização de status macro
- ⚠️ Não suporta: tracking code, consulta de status, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Para integrar com a Wbuy, é necessário ser assinante de um dos seguintes planos: Professional ou Enterprise.

**Woocomerce** — Homologado
- Cotação: apenas por produto
- Operação: sem etiqueta
- ⚠️ Não suporta: rastreamento via webhook
- Cria pedido de reversa: não

**Yampi** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, sem etiqueta
- Entregas: tracking code
- ⚠️ Não suporta: rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: É obrigatório a criação de pedido pela Yampi, caso a cotação seja fechada na plataforma (Cenário Shopify).  
Na integração com a Shopify a Yampi envia o número do fullfilment para a Intelipost. 
Não existe uma trava que impeça a criação de pedidos na Intelipost. A Yampi não específica o canal de venda.

#### Pudo

**Kangu** — Não Homologado
- Cotação: apenas por volume
- Operação: envio de pedido, sem etiqueta
- Cria pedido de reversa: não

#### Seller center

**Conecta-lá** — Não Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, etiqueta PDF
- Entregas: rastreamento via webhook
- Cria pedido de reversa: não
- 📌 Obs: Conecta-lá atende os clientes Decathlon e Dafiti

**Omnik** — Homologado
- Cotação: apenas por produto
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, canal de vendas, múltiplo CNPJ, etiqueta PDF
- Entregas: tracking URL, rastreamento via webhook, consulta de status, atualização de status macro
- ⚠️ Não suporta: tracking code, atualização de status micro
- Cria pedido de reversa: sim
- 📌 Obs: O parceiro não recebe atualização de rastreamento de um pedido que não foi criado por ele mesmo. 
A cotação de frete pode ser realizada quando o marketplace solicitar e antes da criação do pedido. O parceiro OMNIK gera pedidos reversa com o status "Enviado", sendo impossível realizar o envio antes dessa etapa. A solicitação de Reversa só é possível dentro do período de até 30 dias. 
O parceiro OMNIK realiza a cotação de frete antes de gerar o pedido, contudo, a cotação não é exibida ao cliente ou consumidor. 
A empresa seleciona a transportadora mais econômica ao criar pedidos reversa na Intelipost
Para casos em que existe a possibilidade de ter dois produtos armazenados em centros de distribuição diferentes, a OMNIK considera a preferência de região de entrega de cada centro de distribuição.
O parceiro OMNIK utiliza as informações do identificador único do marketplace (4 letras) + identificação do pedido no marketplace para identificar o campo "Sales_order_number" no sistema TMS da Intelipost;
O parceiro OMNIK utiliza o número de identificação do pedido no marketplace para identificar o campo "order_number" no TMS da Intelipost;

#### Wms

**Wemov** — Homologado
- Operação: envio de pedido, nota fiscal, dimensões, peso, multi-volume, múltiplo CNPJ, sem etiqueta
- Entregas: tracking URL
- ⚠️ Não suporta: tracking code, rastreamento via webhook, consulta de status, atualização de status macro, atualização de status micro
- Cria pedido de reversa: não
- 📌 Obs: Há um custo de sustentação, configuração (setup) e um plano ativo no WMS.
É necessário estar integrado com alguns ERPs homologados para ser possível importar as informações, que, após o processo realizado no WMS, serão integradas ao TMS. No campo de canal de venda não é informado o nome do site ou loja
Atualmente, a integração desenvolvida está conectada ao ERP e a Wemov apenas interage
com as cotações aprovadas. Para produtos armazenados em centros de distribuição.

---

## 10. SLAs

### SLA — Vendas (AE)
- Aprovação de desconto via HubSpot: **24h**
- Envio de proposta comercial após Pré OPP virar oportunidade no HubSpot: **48h**
- Agendamento de reunião com o cliente: **48h**

### SLA — Presales
- **SMB:** envio da proposta técnica em até **1 dia útil** após finalização do documento
- **KEY:** envio da proposta técnica em até **3 dias úteis** após finalização do documento
- **Projetos Omnichannel e Marketplace:** envio em até **5 dias úteis** após finalização do documento
- **Esboço técnico:** envio em até **2 dias úteis** após finalização do documento

**Importante:** o SLA conta a partir do documento finalizado — sem dúvidas pendentes do consultor ou do cliente.

---

## 11. Fluxo no HubSpot — Pré OPP

### Perfis de venda
- **Cross Sell:** venda de novo módulo
- **Up Sell:** aumento de volume do cliente
- **Down Sell:** redução de volume ou retirada de módulo → seguir fluxo de DownSell em BackOffice

### Canais de entrada da Pré OPP
- Criação pelo CS (CS mapeia e cria o card)
- Forms TMS e Forms Jira (cliente demonstra interesse em algum módulo)

### Etapas do pipeline
1. Pré OPP em processo de mapeamento com o cliente
2. Realização de reunião de mapeamento com o cliente
3. Validação CS para seguir ao fluxo de validação de budget e Presales
4. Validação de budget com o cliente
5. Card em validação do time de Presales
6. Mudança para pipeline de vendas (inclusão de MRR e setup)
7. Card em stand by com data de retorno
8. **Pré OPP Ganha** ou **Pré OPP Perdida**

### Motivos de perda (usados pelo CS no pipeline de Mapeamento)
- Implantação — condições para a implantação
- Limpa — Pré OPP criada errada
- Preço — cliente não possui budget para a contratação
- Produto — nosso produto não atende a demanda do cliente
- Sem Retorno — cliente não retornou
- Timing — cliente não está no momento para seguir no fluxo

*Não usar: "Condições Comerciais" e "Fora do ICP"*

---

## 12. Proposta Indicativa — Modelo

Módulos que podem constar na proposta indicativa:
- Torre 360º
- Max (especificar módulos)
- Reversa (especificar franquia mensal ou anual)
- Optimize
- Auditoria (especificar franquia)
- WhatsApp (especificar franquia)
- Adição de Marketplace (especificar qual)
- Adição de CD/CNPJ
- Adição de Webhook
- Adição de lojas (Omnichannel)
- Integração com plataforma (cotação de frete — especificar qual)
- Troca de Plataforma (especificar nova plataforma)
- Troca de ERP (especificar novo ERP)
- Estimativa de setup (se houver)
- Estimativa de valor mensal

**Disclaimer obrigatório:** "Esta proposta apresenta uma estimativa indicativa de valor, baseada nas informações iniciais compartilhadas. Os valores poderão ser ajustados após análise técnica e comercial mais detalhada."

**Validade:** informar prazo de validade. Valores válidos para contrato de 12 meses.

---

## 13. Regra geral de alinhamento

> Se CS, AE e Presales não estiverem todos na mesma página, há risco de perder o controle da comunicação, gerar frustração no cliente e deixar o time desalinhado.

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

## SISTEMAS

# Formato: Nome|tipo|status|detalhes
# Status: H=Homologado, N=Não Homologado
# Tipos: erp, plataforma, marketplace, hub, middleware, wms

### APLICATIVO
Frete no produto (Empreender)(=Empreender)|aplicativo|H|cot:vol|obs:Temos integração com a parte de parcelamento. https://parcelamento.sak.com.br/co
OMS FullComm|aplicativo|H|cot:prod|op:pedido,nf,multicnpj|entr:trkurl,webhook,status,macro,micro|obs:O cliente precisa pagar 40 dólares para utilizar o aplicativo
Para criação do pe
### CRM
Netsuite|crm|N|cot:vol|op:pedido|obs:Somente via consultoria RunSmart
### ERP
Abacos Cloud|erp|N|cot:prod|op:pedido
Abacos Local|erp|N|op:pedido
Alternativa Sistemas|erp|H|cot:prod|op:pedido,nf,multicnpj,etiqPDF|entr:trkcode,trkurl,webhook,status,macro|obs:O cliente pode configurar regras de frete específicas com base no tipo de client
Aton (Ambar X)|erp|H|cot:vol|op:pedido,nf,multicnpj|entr:trkurl,status,macro|obs:Não existe custo, na contratação do Aton ERP, o Seller tem acesso a todas as int
BSeller|erp|H|op:pedido,nf,multivol,multicnpj|entr:trkcode,webhook,macro|rev:S|obs:Logistica reversa somente com Correios
Bling|erp|H|cot:prod+vol|op:pedido,nf,multivol,etiqPDF|entr:webhook,status,macro,micro|obs:O ERP realiza atualização de Marketplace apenas com o status “Entregue”. 
É poss
Bremen Sistemas (Wingraph)|erp|H|cot:prod+vol|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:status,macro|obs:Para realizar a integração com a Intelipost, é necessário plano para ativação da
Cantu & Stage (Zada)|erp|H|cot:prod|op:pedido,nf,multivol,multicnpj|entr:trkurl,status,micro|obs:Para integrar-se ao sistema, o cliente pode optar por adquirir uma licença por c
Consisa|erp|H|cot:prod|op:pedido,nf,etiqPDF|entr:webhook,macro
Datasul|erp|N|cot:prod|obs:Datasul pertence ao grupo Totvs
Eccosys|erp|H|cot:prod|op:pedido,nf,multivol,multicnpj|entr:trkcode,webhook,macro,micro|obs:A opção de Múltiplo CNPJ é disponível conforme o plano contratual. 
Realiza gest
Eive|erp|N|op:pedido
Guarani Sistemas|erp|H|cot:vol|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:status,macro|obs:A intelipost não recebe o valor do custo do produto com desconto do cupom do con
Idealeware|erp|N|cot:vol|op:pedido
Millennium|erp|N|cot:prod|op:pedido,multicnpj|entr:status|obs:Para efetuar a integração com a Millenium, o custo que eles cobram não é da inte
Net1 Tecnologias(=Net1)|erp|H|cot:prod|op:pedido,nf,multicnpj|entr:trkurl,webhook,status,macro|obs:Para adicionar a Intelipost no ERP Net 1 Tecnologias existe um custo adicional.
Nexus Cloud|erp|H|op:pedido,nf,etiqPDF|entr:status,macro|obs:Não existe particularidades
Notazz|erp|H|cot:vol|op:pedido,nf,multivol,multicnpj|entr:trkurl,status,micro|obs:Para que o parceiro disponibilize a integração, é necessário que o cliente assin
Olist ERP (Antiga Tiny)(=Tiny)|erp|H|cot:vol|op:pedido,nf,multivol|entr:trkcode,trkurl,webhook,status,macro|obs:Consulta pedidos,  recebe apenas um status "Entregue"e para realização de cotaçã
Omie|erp|H|cot:prod|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:trkcode,trkurl,webhook,status,macro|obs:O parceiro OMIE não é multiempresa, ou seja, não permite gerenciar mais de uma e
Onclick|erp|N|cot:vol|op:pedido,multicnpj,etiqPDF|entr:status|obs:Não temos webhook para o ERP Onclick, e sim uma ação ativa do próprio ERP em rea
Protheus|erp|N|cot:prod|op:pedido|obs:Protheus pertence ao grupo Totvs. Não é nativo , precisa de desenvolvimento .
Qbert|erp|N|op:pedido
SAP Hana|erp|N|cot:prod|op:pedido|obs:SAP Hana pertence ao grupo SAP
Santri|erp|N|cot:vol|op:pedido
SysEmp|erp|H|cot:prod|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:trkcode,trkurl,status,macro
Target|erp|N|cot:vol|op:pedido
Uno Soluções|erp|H|cot:prod|op:pedido,nf,multicnpj|entr:status,macro|obs:Além da contratação do sistema, há um valor de contratação de serviço adicional
i7 (Totvs)(=i7)|erp|N|op:pedido|obs:Temos integração a partir do plugin da I7, módulos habilitados de acordo com a c
### ERP E HUB
Id. Works|erp e hub|H|cot:vol|op:pedido,nf,multivol,multicnpj,agendada|entr:webhook,status,macro,micro|rev:S|obs:Oferece a opção no retorno da cotação de frete o serviço de retira loja do siste
### HUB
AnyMarket(=Anymarket)|hub|H|cot:prod|op:pedido,nf,multivol,multicnpj|entr:trkcode,trkurl,webhook,status,macro,micro|obs:Any realiza match para atualização do pedido o id de volume e pedido. 
O cliente
Base. (Antiga BaseLinker)(=BaseLinker)|hub|H|cot:vol|op:pedido,nf,multivol,multicnpj,agendada,etiqPDF|entr:trkcode,trkurl,status,macro|rev:S|obs:O marketplace não consegue contatar o parceiro BaseLinker para receber as inform
Business Integration|hub|N|cot:prod|op:pedido,etiqPDF
Citel|hub|N|op:pedido|entr:webhook,status|obs:Este parceiro é somente Hub
Hub2b|hub|H|cot:prod|entr:status,macro|obs:Recebe apenas o status "Entregue"
IDCommerce|hub|N|cot:prod
IHub|hub|N|cot:prod|op:pedido
INTEGRAI|hub|H|cot:prod|op:pedido,nf|entr:webhook,status,macro|obs:Não tem uma interface para testes
Ideris(=Wake)|hub|H|cot:prod|entr:status|obs:Este parceiro trabalha com etiqueta e get de rastreamento. Hub somente realiza c
Integra.do|hub|N|cot:prod|op:pedido
MAGIS5|hub|H|cot:prod|op:pedido,nf,multicnpj|entr:status,macro|obs:O Marketplace realiza a cotação de frete diretamente na Intelipost ou através de
OmniOne|hub|H|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:trkcode,webhook,status,macro|obs:Omnione se integra com o marketplace shopee
Plugg.to|hub|N|cot:prod|op:pedido,nf|entr:trkcode,webhook,status,macro|obs:A plugg.to não aceita a inclusão do campo "tracking_code" da Intelipost. 
O parc
Shopping De Precos(=ShoppingDePrecos)|hub|H|cot:prod|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:trkcode,trkurl,status,macro,micro
Skyhub|hub|N|cot:prod
VTRINA|hub|H|cot:vol|op:pedido,nf,multicnpj,agendada,etiqPDF|entr:webhook,status,macro|obs:O parceiro envia pedidos com o campo shipped_date
WeHub|hub|H|cot:prod|op:pedido|entr:status
### INTEGRADOR
VTEX (SMART CONNECTOR)|integrador|H|cot:vol|op:pedido,nf,multicnpj|entr:trkurl,webhook,macro|obs:E-mails sem criptografia: Permite a utilização de notificações de e-mail pelo TM
### LOCKER
Boxit|locker|N|cot:prod|entr:webhook
### MARKETPLACE
Amazon|marketplace|N|cot:prod|obs:É um gerador de tabelas (plugin no chrome) que pega as tabelas que estão na IP e
Americanas|marketplace|N|cot:prod|obs:Para webhook somente sellers que usam a integração via skyhub
Carrefour|marketplace|N|cot:prod
Casas Bahia|marketplace|N|cot:prod
Centauro|marketplace|N|cot:prod|op:pedido|obs:Criação de pedido e webhook somente  com a integração Pegaki
Fast Shop|marketplace|N|cot:prod|obs:Para usar cotação de frete com esse Marketplace precisa ser cliente Intelipost o
GIMBA|marketplace|H|cot:prod
GPA|marketplace|N|cot:prod
Kabum|marketplace|H|cot:prod|entr:webhook,macro|obs:Para usar cotação de frete com esse Marketplace precisa ser cliente Intelipost o
Leroy Merlin|marketplace|N|cot:prod
Madeira Madeira|marketplace|N|cot:prod
Magazine Luiza(=Integracommerce)|marketplace|N|cot:prod|obs:Integracommerce integra Magalu vice-versa
Mercado Shops|marketplace|H|cot:prod|obs:Formato de cotação específico
MercadoLivre|marketplace|H|cot:prod|entr:trkurl,webhook,macro|obs:Formato de cotação específico 
Se a publicação do produto exceder as dimensões d
Mobly|marketplace|H|cot:prod|obs:Possível desenvolvimento de criação de pedido e rastreamento para o ano/23
Shopee|marketplace|H|cot:prod|entr:webhook|obs:Para utilização deste parceiro é necessário que o cliente tenha os módulos de Co
Tiffins|marketplace|N|cot:prod
Via Varejo / CNOVA(=Casas Bahia Marketplace)|marketplace|N|cot:prod|obs:Desenvolvimento realizado pela via varejo
Webcontinental|marketplace|N|cot:prod
Zoom / Buscapé|marketplace|N|cot:prod
### MIDDLEWARE
ATOS DATA|middleware|H|cot:prod+vol|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:status,macro,micro
Azape|middleware|H|cot:prod|entr:status,macro
Jitterbit(=Jitterbit (Wevo))|middleware|H|cot:prod|op:pedido|entr:webhook|obs:Toda a integração é CUSTOMIZADA
Predize|middleware|H|cot:prod|obs:Temos cotação,  mas só funciona para o mercadolivre   - - Ex. consumidor pergunt
### NOTIFICATION
UPSTREAM|notification|H|entr:status|obs:Este parceiro é responsável por consultar pedidos na IP através da consulta do p
### OMS
Linx OMS|oms|N|op:pedido|entr:webhook|obs:Não temos integração com o ERP Seta da Linx
Síntese|oms|H|op:pedido,nf,multivol,multicnpj|entr:trkcode,trkurl,status,micro|obs:Para o cliente realizar integração com sistema Síntese é cobrado o custo de Impl
### PLATFORM
00K|platform|N|cot:prod|entr:webhook
Bagy(=Dooca Commerce)|platform|H|cot:prod
BetaLabs|platform|H|cot:prod|op:pedido,etiqPDF|entr:webhook,status
Bis2Bis|platform|N|cot:prod|op:pedido|entr:status,macro|obs:Recebe somente o status "Entregue" e consulta o status do pedido
Braavo|platform|H|cot:prod|op:pedido,nf|entr:status,macro
Cartpanda|platform|H|cot:prod|obs:Não há particularidades que impossibilitem a integração com a Intelipost.
Climba|platform|H|cot:prod|op:pedido,nf,multivol,etiqPDF|entr:trkcode,webhook,status,macro,micro
Convertize|platform|N|cot:prod
DB1|platform|N|cot:prod|entr:status|obs:Rastreamento é realizado através de um GET
Digital Manager Guru|platform|H|cot:prod|op:pedido|entr:trkcode,trkurl,status,macro|obs:É obrigatório que o cliente assine um plano mensal (ou anual) na plataforma:
htt
E-completo|platform|H|cot:vol|op:pedido,nf,multivol,multicnpj|entr:trkcode,webhook,macro|obs:Para o cliente utilizar o serviço de Auditoria é necessário o cliente mencionar
EZ Commerce Octopus|platform|N|cot:prod|op:pedido|obs:Trabalha com HUB
Fastcommerce|platform|H|cot:prod|obs:O Parceiro Fastcommerce não suporta multi-cd nativamente. Este suporte precisa s
Flexy|platform|N|cot:prod
Genius Return|platform|H|cot:prod|op:pedido,nf,multivol,multicnpj|entr:trkurl,webhook,status,macro|rev:S|obs:Não existe particularidades na integração. A Genius realiza integração com  Vtex
Godeep (Antiga F1 Soluções)(=F1 Soluções)|platform|H|cot:prod|entr:trkurl,webhook,macro|obs:Não há particularidades que impossibilitem a integração com a Intelipost.
Irroba|platform|N|cot:vol
Jet|platform|N|cot:prod|op:pedido|entr:webhook,status
Jet Evolution(=Jet)|platform|N|cot:prod|op:pedido|entr:webhook,status
Linx Commerce(=Ezcommerce)|platform|H|cot:prod+vol|op:pedido,nf,multivol,multicnpj,agendada|entr:trkcode,trkurl,webhook,status,macro|obs:A Linx oferece um serviço chamado Linx ITEC, um ERP projetado para o segmento fa
LojComm|platform|N|cot:prod
Loja Mestre|platform|N|cot:vol|op:pedido,etiqPDF
Magento 1|platform|H|cot:prod|op:pedido|obs:A adobe não realiza manutenção na versão do magento 1 e não é possivel realizar
Magento 2 (Bizcommerce)(=Magento 2)|platform|H|cot:prod|op:pedido,nf,multicnpj|entr:trkcode,trkurl,webhook,status,macro,micro|obs:É obrigatório o envio do quote_id na requisição do pedido com a utilização do no
Moovin|platform|H|cot:prod+vol|op:pedido,nf,multivol|entr:trkcode,webhook,macro|obs:O parceiro realiza cotação de frete para os marketplaces através do HUB Moovin,
NOX|platform|H|cot:prod|op:pedido,nf|entr:webhook,macro,micro
Nuvemshop V1(=Nuvemshop)|platform|H|cot:prod|op:pedido,nf,multicnpj,etiqPDF|entr:trkurl,webhook,status,macro,micro|obs:O cliente apenas consegue se integrar ao parceiro se houver o plano “Next” da Nu
Nuvemshop V2(=Nuvemshop)|platform|H|cot:prod|op:pedido,nf,multicnpj,etiqPDF|entr:trkurl,webhook,status,macro,micro|obs:O cliente apenas consegue se integrar ao parceiro se houver o plano “Next” da Nu
Openk|platform|N|cot:prod
Oracle Cloud Commerce|platform|N|cot:vol
Pieta.tech|platform|H|cot:prod
PrestaShop|platform|H|cot:prod|entr:webhook,status,macro|obs:A Prestashop é responsável por exibir o nome da transportadora na cotação de fre
Rakuten|platform|N|cot:prod|op:pedido
Shopify|platform|H|cot:prod|entr:trkurl,webhook,status,macro|obs:Plano Grow mensal e Basic (mensal e anual): é necessário solicitar e pagar os US
Simplo 7(=D Loja Virtual (Simplo 7))|platform|H|cot:prod|op:pedido,nf,etiqPDF|entr:webhook
Smart Sistemas|platform|N|cot:vol
Tray Commerce(=Tray)|platform|H|cot:prod|op:pedido|entr:trkcode,webhook,macro|obs:Status: Cancelado, Falha na entrega, Despachado, Em trânsito e Entregue
Trovata|platform|H|cot:prod
Uappi (Wapstore)(=Wapstore)|platform|H|cot:prod|op:multicnpj|entr:trkurl,webhook,macro|obs:A disponibilidade da cotação de frete é definida pela própria loja, quando o lay
VNDA|platform|H|cot:prod|op:pedido,nf,multivol|entr:trkcode,trkurl,status,macro|obs:Na plataforma, o vendedor pode escolher entre três formas de exibir o prazo de e
VTEX|platform|H|op:pedido,nf|entr:webhook,status,macro|obs:Para integração de cotação de frete, a intelipost converte tabelas de frete na v
Vertis|platform|N|cot:prod|op:pedido
Visual E-commerce|platform|H|cot:prod|op:pedido,nf,multicnpj,etiqPDF|entr:trkcode,trkurl,status,macro
WDNA|platform|H|cot:prod|op:pedido,nf,agendada,etiqPDF
Wake (Tray Corp)(=Wake)|platform|H|cot:prod|op:pedido,nf,multivol,multicnpj|entr:trkcode,webhook,micro|obs:O parceiro não envia o status "Despachado", não consegue enviar o código de trac
Wbuy|platform|H|cot:prod|op:pedido,nf,multicnpj|entr:trkurl,webhook,macro|obs:Para integrar com a Wbuy, é necessário ser assinante de um dos seguintes planos:
Woocomerce|platform|H|cot:prod
Yampi|platform|H|cot:prod|op:pedido,nf|entr:trkcode|obs:É obrigatório a criação de pedido pela Yampi, caso a cotação seja fechada na pla
### PUDO
Kangu|pudo|N|cot:vol|op:pedido
### SELLER CENTER
Conecta-lá|seller center|N|cot:prod|op:pedido,etiqPDF|entr:webhook|obs:Conecta-lá atende os clientes Decathlon e Dafiti
Omnik|seller center|H|cot:prod|op:pedido,nf,multivol,multicnpj,etiqPDF|entr:trkurl,webhook,status,macro|rev:S|obs:O parceiro não recebe atualização de rastreamento de um pedido que não foi criad
### WMS
Wemov|wms|H|op:pedido,nf,multivol,multicnpj|entr:trkurl|obs:Há um custo de sustentação, configuração (setup) e um plano ativo no WMS.
É nece

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

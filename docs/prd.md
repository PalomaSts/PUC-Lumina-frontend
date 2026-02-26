# Definição de Requisitos do Produto (PRD)

## Descrição do produto

**Problema**  
Pessoas que precisam gerenciar objetivos pessoais e profissionais têm dificuldade em transformar metas em projetos estruturados e tarefas executáveis. A ausência de priorização clara e controle de prazos dificulta o acompanhamento do progresso e leva ao abandono de iniciativas importantes.

**Solução**  
Uma aplicação digital simples e intuitiva que permite transformar objetivos em projetos e tarefas organizadas, definir prioridades, acompanhar prazos e visualizar o progresso de forma clara.

Para **estudantes, gerentes e trabalhadores administrativos**, a solução oferece organização, clareza de prioridades e acompanhamento contínuo, aumentando a execução e a conclusão de projetos pessoais e profissionais.

**Nossos Diferenciais:**

- Interface simples e intuitiva, com curva de aprendizado mínima  
- Transformação guiada de objetivos em projetos e tarefas  
- Priorização visual clara  
- Acompanhamento de progresso com feedback visual  
- Organização flexível adaptada à rotina pessoal e profissional  
- Foco em execução e conclusão, não apenas planejamento  

---

## Perfis de Usuário

- Estudantes universitários  
- Gerentes e líderes de equipe  
- Trabalhadores administrativos  
- Profissionais que conciliam múltiplas responsabilidades  

### Estudante Universitário

- **Problemas:** dificuldade em organizar trabalhos, provas e prazos acadêmicos  
- **Objetivos:** cumprir prazos e manter rotina de estudos organizada  
- **Dados demográficos:** 18–35 anos, ensino superior em andamento  
- **Motivações:** melhorar desempenho acadêmico e reduzir estresse  
- **Frustrações:** esquecer prazos e sobrecarga próxima às entregas  

---

### Gerente / Líder de Equipe

- **Problemas:** acompanhar múltiplos projetos e responsabilidades simultâneas  
- **Objetivos:** manter controle das prioridades e cumprir prazos  
- **Dados demográficos:** 25–50 anos, ambiente corporativo  
- **Motivações:** eficiência, produtividade e previsibilidade nas entregas  
- **Frustrações:** perda de prazos e falta de visibilidade do progresso  

---

### Trabalhador(a) Administrativo(a)

- **Problemas:** grande volume de tarefas operacionais e demandas simultâneas  
- **Objetivos:** organizar tarefas diárias e evitar esquecimentos  
- **Dados demográficos:** 20–55 anos  
- **Motivações:** manter controle da rotina e reduzir retrabalho  
- **Frustrações:** tarefas acumuladas e sensação de desorganização  

---

## Principais Funcionalidades

### RFN-01 Transformação de Objetivos em Projetos
Permitir que o usuário cadastre projetos vinculados a objetivos.

**Critérios de Aceitação:**
- Usuário pode criar um projeto a partir de um objetivo  
- Projetos ficam vinculados ao objetivo original  
- Usuá rio pode visualizar projetos por objetivo  

---

### RFN-02 Gerenciamento de Tarefas
Permitir criação e organização de tarefas dentro de projetos.

**Critérios de Aceitação:**
- Usuário pode criar, editar, concluir e excluir tarefas  
- Tarefas pertencem a um projeto  
- Status da tarefa: pendente, em andamento, concluída  

---

### RFN-03 Priorização de Tarefas
Permitir definir prioridades para tarefas.

**Critérios de Aceitação:**
- Usuário pode atribuir prioridade (baixa, média, alta)  
- Prioridades são visualmente diferenciadas  
- Lista pode ser ordenada por prioridade  

---

### RFN-04 Gestão de Prazos
Permitir definição e acompanhamento de prazos.

**Critérios de Aceitação:**
- Usuário pode definir datas de vencimento  
- Sistema destaca tarefas próximas do prazo  
- Sistema alerta tarefas atrasadas  

---

### RFN-05 Visualização de Progresso
Apresentar o progresso dos projetos.

**Critérios de Aceitação:**
- Usuário visualiza porcentagem de conclusão  
- Projetos mostram tarefas concluídas vs pendentes  
- Progresso visual com barra ou indicador  

---

### RFN-06 Painel de Visão Geral (Dashboard)
Exibir visão consolidada das tarefas e prioridades.

**Critérios de Aceitação:**
- Usuário visualiza tarefas do dia e próximas  
- Usuário vê prioridades e prazos críticos  
- Interface clara e objetiva  

---

## Requisitos Não Funcionais

### RNF-01 Usabilidade
A interface deve ser simples e intuitiva, permitindo uso sem treinamento.

### RNF-02 Desempenho
A aplicação deve carregar telas principais em até 2 segundos.

### RNF-03 Responsividade
A aplicação deve funcionar adequadamente em desktop e dispositivos móveis.

### RNF-04 Segurança
Os dados dos usuários devem ser protegidos com autenticação segura e criptografia.

### RNF-05 Disponibilidade
O sistema deve estar disponível 99% do tempo.

---

## Métricas de Sucesso

- Taxa de conclusão de tarefas  
- Número médio de tarefas concluídas por usuário  
- Taxa de retenção semanal  
- Frequência de uso semanal  
- Redução de tarefas atrasadas  
- Tempo médio até conclusão de um projeto  

---

## Premissas e restrições

### Premissas
- Usuários desejam uma solução digital simples  
- Usuários utilizam dispositivos móveis e desktop  
- Organização visual melhora a execução  

### Restrições
- Tempo limitado para desenvolvimento inicial  
- Necessidade de interface simples para adoção rápida  
- Recursos técnicos limitados na primeira versão  

---

## Escopo

### v1 (MVP)
- Projetos e tarefas  
- Priorização  
- Gestão de prazos  
- Dashboard básico  
- Visualização de progresso  

### v2
- Notificações e lembretes  
- Sincronização em múltiplos dispositivos  
- Etiquetas e filtros avançados  
- Exportação e relatórios  

### v3
- Integração com calendário  
- Assistente inteligente para sugestão de tarefas  
- Gamificação e recompensas  
- Colaboração e compartilhamento de projetos  

---
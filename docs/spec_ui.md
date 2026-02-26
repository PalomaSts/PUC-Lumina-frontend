# Especificação de UI

## Interfaces gráficas

### INT-01 — Tela de Login / Autenticação
- Tipo: página
- **Campos:**
  - Email (opcional)
  - Senha (opcional)
- **Botões:**
  - Entrar com Google
  - Entrar
- **Links:**
  - Política de Privacidade
  - Termos de Uso
- **Considerações:**
  - Login social como opção principal para reduzir fricção
  - Layout limpo com foco na ação principal
  - Feedback visual claro em caso de erro

---

### INT-02 — Dashboard (Visão Geral)
- Tipo: página / painel
- **Campos:**
  - Resumos de progresso geral
  - Tarefas do dia
  - Tarefas próximas do prazo
  - Projetos em andamento
- **Botões:**
  - Nova tarefa
  - Novo projeto
- **Links:**
  - Ver todas as tarefas
  - Ver projetos
- **Considerações:**
  - Prioridades destacadas por cores
  - Indicadores visuais para prazos críticos
  - Layout escaneável e objetivo

---

### INT-03 — Lista de Projetos
- Tipo: página / tabela
- **Campos:**
  - Nome do projeto
  - Progresso (%)
  - Número de tarefas
  - Prazo (se houver)
  - Status
- **Botões:**
  - Novo projeto
  - Editar
  - Excluir
- **Links:**
  - Abrir projeto
- **Considerações:**
  - Barra visual de progresso
  - Ordenação por prazo, status ou progresso

---

### INT-04 — Criação/Edição de Projeto
- Tipo: formulário (modal ou página)
- **Campos:**
  - Nome do projeto
  - Descrição
  - Objetivo vinculado (opcional)
  - Data limite
- **Botões:**
  - Salvar
  - Cancelar
- **Links:**
  - Criar novo objetivo (opcional)
- **Considerações:**
  - Fluxo rápido e simples
  - Campos mínimos obrigatórios

---

### INT-05 — Lista de Tarefas do Projeto
- Tipo: página / lista interativa
- **Campos:**
  - Nome da tarefa
  - Prioridade
  - Data de vencimento
  - Status
- **Botões:**
  - Nova tarefa
  - Editar
  - Marcar como concluída
  - Excluir
- **Links:**
  - Filtrar tarefas
- **Considerações:**
  - Prioridade indicada por cores
  - Tarefas atrasadas destacadas
  - Interação rápida com checkbox para concluir

---

### INT-06 — Criação/Edição de Tarefa
- Tipo: formulário modal
- **Campos:**
  - Nome da tarefa
  - Descrição
  - Prioridade (baixa, média, alta)
  - Data de vencimento
  - Status
- **Botões:**
  - Salvar
  - Cancelar
- **Links:**
  - Selecionar projeto
- **Considerações:**
  - Prioridades com ícones e cores
  - Validação simples e mensagens claras

---

### INT-07 — Visualização de Progresso
- Tipo: painel / componente visual
- **Campos:**
  - Percentual de conclusão
  - Tarefas concluídas vs pendentes
- **Botões:**
  - Ver detalhes
- **Links:**
  - Abrir projeto
- **Considerações:**
  - Barra de progresso visual
  - Feedback positivo ao atingir marcos

---

### INT-08 — Filtros e Ordenação
- Tipo: painel lateral ou dropdown
- **Campos:**
  - Prioridade
  - Status
  - Prazo
  - Projeto
- **Botões:**
  - Aplicar filtros
  - Limpar filtros
- **Links:**
  - Filtros salvos (v2)
- **Considerações:**
  - Fácil acesso
  - Estado persistente durante navegação

---

## Fluxo de Navegação

### Fluxo Principal
Login  
→ Dashboard  
→ Projetos  
→ Tarefas  
→ Conclusão  
→ Atualização de progresso  

### Fluxo de Criação de Projeto
Dashboard  
→ Novo Projeto  
→ Preencher dados  
→ Salvar  
→ Abrir projeto  

### Fluxo de Criação de Tarefa
Projeto  
→ Nova tarefa  
→ Definir prioridade e prazo  
→ Salvar  
→ Visualizar na lista  

### Fluxo de Execução Diária
Dashboard  
→ Visualizar tarefas do dia  
→ Concluir tarefas  
→ Atualização automática do progresso  

### Navegação Global
Menu lateral ou superior:

- Dashboard  
- Projetos  
- Tarefas  
- Filtros  
- Perfil do usuário  

---

## Diretrizes para IA

Ferramentas de IA e geradores de interface devem:

- priorizar simplicidade e clareza visual
- minimizar carga cognitiva
- destacar prioridades e prazos visualmente
- manter consistência visual entre telas
- fornecer feedback imediato às ações do usuário
- evitar excesso de elementos visuais
- otimizar fluxos para execução rápida de tarefas

### Princípios obrigatórios

- foco na execução rápida
- hierarquia visual clara
- design responsivo (mobile-first)
- acessibilidade (contraste adequado, legibilidade e tamanhos apropriados)
- consistência visual

### Padrões visuais recomendados

- Verde → concluído  
- Amarelo → atenção  
- Vermelho → atraso  
- Azul → neutro/informativo  

---
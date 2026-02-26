# Especificação Técnica

## 1. Visão Geral Técnica

Este documento define a arquitetura técnica, padrões de desenvolvimento, diretrizes de segurança e operação para a aplicação de gerenciamento de objetivos, projetos e tarefas.

O objetivo é orientar:

- Desenvolvedores frontend e backend  
- Arquitetos de software  
- Engenheiros DevOps  
- QA e segurança  
- Ferramentas de desenvolvimento assistido por IA  

A solução deve ser:

- escalável  
- segura  
- responsiva  
- de fácil manutenção  
- preparada para evolução incremental  

---

## 2. Arquitetura de Referência

### Estilo Arquitetural
- Arquitetura **modular monolítica** para o MVP
- Preparada para evolução para microsserviços
- Separação por domínios

### Padrões adotados
- Clean Architecture
- Domain-Driven Design (DDD) simplificado
- RESTful API
- Camadas:
  - Presentation
  - Application
  - Domain
  - Infrastructure

### Componentes Principais

**Frontend**
- Interface web responsiva
- Dashboard e gerenciamento de tarefas

**Backend API**
- Autenticação e usuários
- Projetos
- Tarefas
- Progresso e métricas

**Banco de Dados**
- Persistência relacional
- Integridade referencial

**Serviços futuros**
- Notificações
- Assistente inteligente
- Integrações externas

### Observabilidade
- Logs estruturados
- Monitoramento de erros
- Métrica de performance

### Autenticação e Autorização
- OAuth 2.0 (Google)
- JWT para sessões autenticadas

### Protocolos de Comunicação
- HTTPS obrigatório
- REST / JSON
- Webhooks (integrações futuras)

### Infraestrutura & Deploy
- Cloud: AWS
- Containerização com Docker
- CI/CD com GitHub Actions
- Deploy via containers

---

## 3. Stack Tecnológica Recomendada

### Frontend
- React 18+
- TypeScript
- Material UI
- TanStack Query
- Vite

### Backend
- Node.js 20+
- NestJS 10+
- TypeScript

### Persistência de Dados
- PostgreSQL 15+

### ORM
- Prisma ORM

### Autenticação
- Passport.js (Google OAuth)
- JWT

### Infraestrutura & DevOps
- Docker
- GitHub Actions
- AWS (RDS, ECS, S3)
- Nginx (reverse proxy)

### Observabilidade
- Pino (logs estruturados)
- Sentry (monitoramento de erros)
- OpenTelemetry (futuro)

### Integrações Futuras
- Google Calendar API
- Dialogflow ou OpenAI API

---

## 4. Segurança

### Autenticação
- OAuth 2.0 com Google
- JWT para sessões autenticadas

### Tokens
- Access Token (expiração ~15 min)
- Refresh Token (7–30 dias)
- Armazenação em cookies HTTP-only

### Criptografia
- HTTPS obrigatório (TLS 1.2+)
- Hash com bcrypt para dados sensíveis

### Proteções adicionais
- CORS configurado
- Rate limiting
- Proteção contra CSRF
- Validação de entrada (class-validator)

### Autorização
- Controle baseado no usuário autenticado
- Acesso restrito aos próprios dados

---

## 5. Auditoria

### Eventos Auditáveis
Registrar:

- criação, edição e exclusão de projetos
- alterações em tarefas
- login e logout
- falhas de autenticação

### Estrutura dos logs
- userId
- ação executada
- entidade afetada
- timestamp
- endereço IP

Logs devem permitir rastreabilidade e auditoria de segurança.

---

## 6. APIs

### Endpoint Base
/api/v1

### Versionamento
- Versionamento por URI (`/v1/`)
- Compatibilidade mantida entre versões

### Padrão de Nomenclatura
- substantivos no plural
- consistência camelCase ou kebab-case

### Exemplos
GET /api/v1/projects
POST /api/v1/projects
GET /api/v1/tasks
PATCH /api/v1/tasks/{id}
DELETE /api/v1/tasks/{id}


### Autenticação
- JWT obrigatório para endpoints protegidos

### Endpoints Públicos
- `/auth/google`
- `/auth/callback`

### Endpoints Protegidos
- projetos
- tarefas
- dashboard

### Códigos de Resposta
- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

---

## 7. Tenancy

### Estratégia
Single-tenant lógico com isolamento por usuário.

### Isolamento
- Todos os registros vinculados ao `userId`

### Identificação
- UUID como identificador único
- userId obrigatório nas entidades

### Migrações
- Prisma Migrate
- Versionamento do schema

### Segurança
- Queries sempre filtradas por usuário
- Proteção contra acesso cruzado

---

## 8. Diretrizes para Desenvolvimento Assistido por IA

Ferramentas de IA devem:

- respeitar a arquitetura modular e camadas
- gerar código aderente ao NestJS + TypeScript
- seguir padrões REST definidos
- aplicar validações e segurança por padrão
- gerar testes automatizados
- evitar dependências desnecessárias
- manter consistência com o domínio:
  objetivos → projetos → tarefas

### Prioridades

- simplicidade
- legibilidade
- segurança
- baixo acoplamento
- reutilização

---

## 9. Evolução Futura

### Escalabilidade
- Separação de serviços críticos
- Cache com Redis
- Filas com RabbitMQ ou SQS

### Funcionalidades Futuras
- notificações e lembretes
- assistente inteligente de tarefas
- integração com calendários
- gamificação
- colaboração entre usuários

### Observabilidade Avançada
- tracing distribuído
- métricas em tempo real

### Mobile
- Aplicativo mobile com React Native ou Flutter

---
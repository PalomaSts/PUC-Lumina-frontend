✅ README — FRONTEND (React + MUI + CI/CD + Deploy)
🌟 Lumina — Frontend

Interface web do sistema Lumina, desenvolvida com React, Material UI, autenticação via OAuth Google, consumo da API, tela de projetos, tarefas, dashboard e responsividade completa.

📘 Índice

Objetivo

Tecnologias

Estrutura

Como executar

Variáveis de ambiente

Testes

CI/CD

Contribuição

Licença

🎯 1. Objetivo

O frontend permite:

Login Google ou email/senha

Visualização geral (Dashboard)

CRUD completo de Projetos

CRUD completo de Tarefas

Filtros, associações e UI responsiva

Comunicação com o backend hospedado no Azure App Service

🧰 2. Tecnologias

React (CRA ou Vite conforme seu projeto)

Material UI

React Router DOM

Yup + react-hook-form

Context API

CI/CD com GitHub Actions

Deploy no Azure Static Web Apps / Storage

📁 3. Estrutura
frontend/
├── public
└── src
├── contexts
├── form
├── pages
├── schemas
├── services
└── utils

⚙️ 4. Como executar o Frontend

1. Instalar dependências
   npm install

2. Criar arquivo .env
   REACT_APP_SERVER_URL="http://localhost:4000"

Após deploy no Azure, altere para:
https://seu-backend.azurewebsites.net

3. Rodar
   npm start

🧪 5. Testes

Caso tenha testes:

npm test

🚀 6. CI/CD do Frontend

Pipeline localizado em:

.github/workflows/frontend-ci.yml

Ele:

Instala dependências

Roda build

Executa testes

Publica no Azure Static Web Apps / Storage via GitHub Actions

🤝 7. Como contribuir

Fork

Branch:

git checkout -b feature/nova-feature

Commit + push

Pull Request

📜 8. Licença

Licença MIT.

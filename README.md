# Lumina Frontend

## 📌 Visão Geral

O **Lumina Frontend** é a interface web do sistema Lumina, construída em **React**, utilizando **Material UI**, autenticação via OAuth/Google, login próprio, integração com API backend, filtros, CRUDs completos e responsividade.

---

## 🎯 Objetivos

- Interface intuitiva para gerenciamento de projetos e tarefas.
- Comunicação segura com o backend.
- Autenticação completa (Google + login próprio).
- Suporte ao fluxo de IA para sugestão de tarefas.
- Cumprir os requisitos da disciplina.

---

## 📁 Estrutura do Projeto

```
src/
 ├── contexts/         (Auth, Loading, Theme)
 ├── form/             (Forms reutilizáveis)
 ├── pages/            (Home, Tasks, Projects, Profile, Login, Register)
 ├── schemas/          (Schemas de validação Zod)
 ├── services/         (Chamadas à API backend)
 └── utils/            (Funções auxiliares)
```

---

## 🚀 Executando localmente

### ✔️ Instalação

```bash
npm install
```

### ✔️ Configurar ambiente

Crie `.env`:

```env
REACT_APP_SERVER_URL=http://localhost:4000
```

### ✔️ Rodar o servidor

```bash
npm start
```

---

## 🧪 Testes

Caso deseje adicionar testes:

```bash
npm run test
```

---

## 🌐 CI/CD

O frontend possui workflow de CI que:

1. Instala dependências
2. Gera build
3. Executa testes
4. Publica artefatos

Arquivo:

```
.github/workflows/ci_lumina-front.yml
.github/workflows/cd_lumina-front.yml
```

---

## 🔐 Credenciais

O frontend utiliza:

- Cookie HTTP‑Only para autenticação
- Contexto de usuário persistido em localStorage
- OAuth pelo backend

Nenhuma credencial sensível fica exposta.

---

## 🤝 Como Contribuir

1. Fork o repositório
2. Abra uma branch:

```bash
git checkout -b feature/minha-feature
```

3. Faça commit e crie um Pull Request.

---

## 📜 Licença

MIT License.

---

## 📞 Suporte

Para dúvidas, entre em contato com o autor ou abra uma issue no repositório.

# 🧪 Testes E2E com Cypress

Este projeto demonstra uma suíte básica de testes End-to-End (E2E) utilizando Cypress para simular interações comuns de usuário em um ambiente real sem a necessidade de autenticação.

O site base para os testes é o **Cypress Kitchen Sink** (playground oficial do Cypress): `https://example.cypress.io/`.

## ⚙️ Configuração do Projeto

Para rodar esta suíte de testes, você precisa ter **Node.js** instalado.

1.  **Clone o repositório** e navegue até a pasta do projeto.
2.  **Instale o Cypress** (se já não estiver no `package.json`):
    ```bash
    npm install cypress --save-dev
    ```
3.  O arquivo de teste `atividade02.cy.js` deve ser colocado dentro da estrutura de pastas padrão do Cypress, geralmente em `cypress/e2e/`.

## ▶️ Como Executar os Testes

Para abrir o Test Runner do Cypress e executar os testes de forma interativa:

```bash
npx cypress open

# Loja de Poções

Projeto de Web-service de uma loja de venda de poções desenvolvido como parte da disciplina **Introdução ao Desenvolvimento Web (SCC-0219)**.

## Estrutura da Aplicação
Esse web-service é uma *Single Page Application* (SPA). A aplicação é dividida em duas partes principais:

* **Frontend (`/src`):** Construído em React com Vite.
* **Backend (`/backend`):** Construído com Node.js, Express e Sequelize, utilizando o banco de dados SQLite operando em memória (`:memory:`).

## O que faz
O sistema simula uma loja de poções com controle de estoque. Ele possui:
* Duas páginas estáticas de apresentação.
* Uma página de **Produtos** populada a partir do banco de dados (sem lógica de carrinho/compra finalizada).
* Uma página **Admin** que permite operações de adicionar e remover poções diretamente no banco.

*Nota: Como o SQLite foi configurado para rodar em memória, os dados são perdidos ao reiniciar o servidor. Para contornar isso, a aplicação conta com um script `populate.js` que cria produtos iniciais de base assim que o sistema sobe.*

## Como executar o projeto

Para rodar a aplicação localmente, você precisará de dois terminais abertos (um para o backend e outro para o frontend).

**1. Iniciando o Backend:**
Navegue até a pasta do backend, instale as dependências e inicie o servidor.
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

Por padrão, o servidor é iniciado na **Porta 3000**

**2. Iniciando o Frontend:**
Em um novo terminal, navegue até a pasta raiz (ou onde o package.json do frontend estiver), instale as dependências e inicie o Vite.
\`\`\`bash
npm install
npm run dev
\`\`\`
O terminal exibirá o endereço local (geralmente `http://localhost:5173`) para você acessar a interface no navegador.
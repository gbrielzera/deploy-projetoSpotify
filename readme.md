# Lavignefy (Projeto Clone do Spotify) 🎵

Este é um projeto full-stack de um clone simplificado do Spotify, construído para demonstrar a integração entre um front-end moderno em React e um back-end Node.js com Express e MongoDB.

O front-end é uma Single Page Application (SPA) que consome uma API RESTful para exibir artistas e músicas, incluindo um player de áudio funcional. O back-end serve os dados do front-end e também os dados da API a partir de um banco de dados MongoDB Atlas.

## ✨ Funcionalidades

  * **Front-end & Back-end Integrados:** Projeto monorepo com scripts para instalar e executar ambas as aplicações simultaneamente.
  * **API RESTful:** O back-end Express serve endpoints para `/api/artists` e `/api/songs`.
  * **Roteamento Dinâmico:** O Front-end utiliza `react-router-dom` para criar rotas para:
      * Página Inicial (listagem principal)
      * Página de Artistas (listagem completa)
      * Página de Músicas (listagem completa)
      * Página de Artista Específico (com suas músicas populares)
      * Página de Música Específica (com player)
  * **Player de Áudio:** Um componente de player funcional com controles de play/pause, barra de progresso e botões de avançar/retroceder (aleatório).
  * **Banco de Dados:** Utiliza MongoDB Atlas para armazenar e servir as coleções de músicas e artistas.
  * **Build de Produção:** Configurado com Vite para um build otimizado do front-end, que é servido estaticamente pelo Express.

## 🚀 Tecnologias Utilizadas

### Front-end

  * **React (v19)**
  * **Vite** (Build tool)
  * **React Router DOM (v7)** (Roteamento)
  * **Axios** (Requisições HTTP)
  * **FontAwesome** (Ícones)

### Back-end

  * **Node.js**
  * **Express** (Servidor web)
  * **MongoDB** (Banco de dados NoSQL)
  * **CORS** (Middleware)

## 📁 Estrutura do Projeto

```
/
├── back-end/
│   ├── api/
│   │   ├── connect.js     # Conexão com o MongoDB Atlas
│   │   ├── insertMany.js  # Script para popular o banco (opcional)
│   │   └── server.js      # Servidor Express (API e SPA)
│   └── package.json
│
├── front-end/
│   ├── dist/              # Arquivos de build (gerados)
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js     # Cliente Axios para consumir a API
│   │   ├── assets/        # Imagens, CSS e dados estáticos
│   │   ├── components/    # Componentes React (Player, ItemList, etc.)
│   │   ├── pages/         # Páginas da aplicação (Home, Artist, Song)
│   │   ├── App.jsx        # Definição das rotas
│   │   └── main.jsx       # Ponto de entrada do React
│   ├── package.json
│   └── vite.config.js
│
└── package.json           # Scripts principais para deploy
```

## 📦 Instalação e Execução Local

Para rodar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados.

### 1\. Configuração do Banco de Dados

Este projeto utiliza o MongoDB Atlas.

1.  Crie uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  Crie um novo cluster e um banco de dados (sugerido: `spotifyAula`).
3.  Dentro do banco, crie duas coleções: `artists` e `songs`.
4.  No arquivo `back-end/api/connect.js`, substitua a string `URI` pela sua própria string de conexão do MongoDB Atlas.
5.  **Para popular o banco:** Rode o script `insertMany.js` para adicionar os dados iniciais de artistas e músicas.
    ```bash
    node back-end/api/insertMany.js
    ```

### 2\. Instalação das Dependências

Na pasta raiz do projeto, rode:

```bash
npm install
```

Este comando irá instalar as dependências tanto do `back-end` quanto do `front-end` (conforme definido no `package.json` da raiz).

### 3\. Executando o Projeto

Após a instalação, você pode rodar os scripts da raiz:

**Para Desenvolvimento (com hot-reload):**

Você precisará de dois terminais:

1.  **Terminal 1 (Back-end):**
    ```bash
    npm start --prefix back-end
    ```
2.  **Terminal 2 (Front-end):**
    ```bash
    npm run dev --prefix front-end
    ```
    O front-end estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite) e consumirá a API rodando em `http://localhost:3000`.

**Para Produção (simulando o deploy):**

1.  **Build do Front-end:**

    ```bash
    npm run build
    ```

    Este comando irá instalar tudo e gerar a pasta `front-end/dist`.

2.  **Iniciar o Servidor:**

    ```bash
    npm start
    ```

    O servidor Express irá iniciar na `PORTA 3000` (definida no `back-end/api/server.js`) e servirá tanto a API quanto os arquivos estáticos do front-end.

    Acesse [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador.

## 📜 Scripts NPM (Raiz)

  * `npm run build`: Instala todas as dependências (front e back) e executa o build de produção do front-end (Vite).
  * `npm start`: Inicia o servidor Express (back-end), que também serve os arquivos estáticos do front-end.

## 🌐 API Endpoints

O servidor back-end (`server.js`) expõe os seguintes endpoints:

  * `GET /api/artists`: Retorna uma lista de todos os artistas da coleção.
  * `GET /api/songs`: Retorna uma lista de todas as músicas da coleção.
  * `GET *`: Serve o `index.html` do front-end para qualquer outra rota, permitindo o roteamento do lado do cliente (SPA).
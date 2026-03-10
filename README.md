# Mini Aplicação Web com Next.js

## 📌 Descrição

Este projeto consiste em uma mini aplicação web desenvolvida com **Next.js, React e TypeScript**.
A aplicação apresenta uma listagem de produtos fictícios (frutas), permitindo visualizar seus detalhes e simular um perfil de usuário.

O objetivo do projeto é demonstrar a integração de conceitos fundamentais de **HTML, CSS, JavaScript, Node.js, TypeScript e React**, além das principais estratégias de renderização do **Next.js**.

---

# 🚀 Tecnologias Utilizadas

* **Next.js**
* **React**
* **TypeScript**
* **Node.js**
* **CSS Modules**
* **ESLint**
* **Prettier**

---

# 📂 Estrutura do Projeto

O projeto foi organizado utilizando uma abordagem **feature-based**, separando responsabilidades por domínio.

```
src
 ├── features
 │   ├── items
 │   │   ├── data.ts
 │   │   ├── ItemCard.tsx
 │   │   └── types.ts
 │   │
 │   └── user
 │       └── UserForm.tsx
 │
 ├── pages
 │   ├── api
 │   │   └── items
 │   │       ├── index.ts
 │   │       └── [slug].ts
 │   │
 │   ├── item
 │   │   └── [slug].tsx
 │   │
 │   ├── index.tsx
 │   └── profile.tsx
 │
 ├── styles
 │   └── Home.module.css
 │
 └── utils
     └── format.ts
```

### Organização

* **features/**
  Componentes e lógica relacionados a cada domínio da aplicação.

* **pages/**
  Responsável pelo roteamento automático do Next.js.

* **api/**
  Rotas de API simulando um backend.

* **styles/**
  Arquivos de estilização utilizando CSS Modules.

* **utils/**
  Funções utilitárias reutilizáveis.

---

# 🖥️ Funcionalidades

## 1️⃣ Página Home

A página inicial exibe uma lista de produtos fictícios (frutas).

Cada item contém:

* Emoji representando a fruta
* Nome
* Descrição curta
* Navegação para página de detalhes

### Estratégia de Renderização

Foi utilizada **Static Site Generation (SSG)** através da função:

```
getStaticProps()
```

Motivos da escolha:

* Os dados são **estáticos**
* Melhor **performance**
* Melhor **SEO**
* A página pode ser pré-gerada no build

---

## 2️⃣ Página de Detalhes do Item

Cada item possui uma rota dinâmica baseada em **slug**.

Exemplo:

```
/item/maca
/item/banana
/item/morango
```

### Estratégia de Renderização

Foi utilizado **Server Side Rendering (SSR)**.

Motivos:

* Permite buscar dados dinamicamente
* Simula comportamento real de backend
* Conteúdo atualizado a cada requisição

---

## 3️⃣ Página de Perfil do Usuário

A página de perfil permite simular uma autenticação simples.

Funcionalidades:

* Estado local do usuário
* Edição simples de nome
* Atualização em tempo real

### Estratégia de Renderização

Foi utilizado **Client Side Rendering (CSR)**.

Motivos:

* Conteúdo depende da interação do usuário
* Não há necessidade de pré-renderização
* Atualizações instantâneas na interface

---

# 🔌 API Routes

Foram criados dois endpoints simulando um backend.

## Listagem de Itens

```
GET /api/items
```

Retorna todos os produtos cadastrados.

---

## Detalhe do Item

```
GET /api/items/[slug]
```

Retorna os dados de um item específico.

Exemplo:

```
/api/items/maca
```

---

# 🎨 Estilização

Foi utilizada a abordagem **CSS Modules**.

Motivos da escolha:

* Escopo local de estilos
* Evita conflitos entre classes
* Integração simples com Next.js
* Melhor organização do código

---

## Layout Responsivo

O layout foi implementado utilizando:

* **CSS Grid**
* **Flexbox**

Exemplo da grid utilizada na listagem:

```
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

Isso permite que os itens se adaptem automaticamente ao tamanho da tela.

---

## Design dos Itens

Cada fruta possui um **background suave baseado em sua cor**, por exemplo:

| Fruta   | Cor            |
| ------- | -------------- |
| Morango | vermelho claro |
| Banana  | amarelo claro  |
| Maçã    | verde claro    |
| Laranja | laranja claro  |
| Uva     | roxo claro     |

O fundo da página utiliza um **cinza claro** para melhorar o contraste visual com os cards.

---

# 🔍 Navegação

A navegação para a página de detalhes ocorre ao clicar no card do item.

Foi utilizada navegação programática:

```
router.push(`/item/${item.slug}`)
```

Isso permite adicionar lógica antes da navegação, se necessário.

---

# ⚙️ Como Executar o Projeto

### 1️⃣ Instalar dependências

```
npm install
```

### 2️⃣ Rodar ambiente de desenvolvimento

```
npm run dev
```

### 3️⃣ Abrir no navegador

```
http://localhost:3000
```

---

# 🏗️ Build de Produção

Para gerar o build:

```
npm run build
```

Para iniciar o servidor de produção:

```
npm run start
```

---

# 📋 Qualidade de Código

O projeto inclui:

* **ESLint** → padronização de código
* **Prettier** → formatação automática

Isso garante maior consistência e legibilidade do código.

---

# 💡 Possíveis Melhorias Futuras

* Implementação de **testes unitários**
* Uso de **Lazy Loading com React Suspense**
* Melhorias de **acessibilidade (ARIA roles, navegação por teclado)**
* Integração com backend real
* Sistema de autenticação completo

---

# 👨‍💻 Autor

Projeto desenvolvido como exercício prático para aplicação dos conceitos de:

* HTML
* CSS
* JavaScript
* Node.js
* React
* TypeScript
* Next.js

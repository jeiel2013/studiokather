# 🎨 Studio Kather

Site oficial do **Studio Kather** — desenvolvido com React, TypeScript e Vite.

🌐 **Acesse o site:** [https://studiokather.com](https://studiokather.com)

---

## 📋 Sobre o Projeto

O Studio Kather é um site desenvolvido para apresentar o estúdio e seus serviços de forma moderna e responsiva. A aplicação foi construída com foco em performance, tipagem segura e uma ótima experiência de desenvolvimento.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia                                    | Descrição                                |
| --------------------------------------------- | ---------------------------------------- |
| [React](https://react.dev/)                   | Biblioteca para construção de interfaces |
| [TypeScript](https://www.typescriptlang.org/) | Superset tipado do JavaScript            |
| [Vite](https://vitejs.dev/)                   | Bundler moderno e ultra-rápido           |
| [Tailwind CSS](https://tailwindcss.com/)      | Framework de estilos utilitários         |
| [ESLint](https://eslint.org/)                 | Linting e qualidade de código            |

---

## 📁 Estrutura do Projeto

```
studiokather/
├── public/              # Arquivos estáticos (imagens, ícones, etc.)
├── src/                 # Código-fonte principal
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── assets/          # Assets internos (imagens, fontes)
│   └── main.tsx         # Entry point da aplicação
├── index.html           # HTML principal
├── vite.config.ts       # Configuração do Vite
├── tsconfig.json        # Configuração do TypeScript
├── postcss.config.ts    # Configuração do PostCSS
└── package.json         # Dependências e scripts
```

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jeiel2013/studiokather.git

# Entre na pasta do projeto
cd studiokather

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento com hot reload
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

### Build para Produção

```bash
# Gere a build otimizada
npm run build

# Pré-visualize a build localmente
npm run preview
```

---

## 🔍 Linting

```bash
# Verifique a qualidade do código
npm run lint
```

O projeto utiliza ESLint com suporte a regras específicas para TypeScript e React. Para projetos em produção, recomenda-se habilitar regras com type-awareness no `eslint.config.js`:

```ts
tseslint.configs.recommendedTypeChecked,
// ou, para regras mais rígidas:
tseslint.configs.strictTypeChecked,
```

---

## 🌐 Deploy

O site está disponível em produção em:

👉 **[https://studiokather.com](https://studiokather.com)**

---

## 📄 Licença

Este projeto é de uso privado. Todos os direitos reservados ao **Studio Kather**.

---

<p align="center">Feito com ❤️ para o Studio Kather</p>

# Teste Econverse - Front-End

Projeto desenvolvido com React, TypeScript, Vite e Sass (SCSS), seguindo o layout proposto no desafio.

## Demo online (recrutadores)

> LINK DO PROJETO EM PRODUCAO:
> https://teste-front-end-ivory.vercel.app/

## Tecnologias

- React
- TypeScript
- Vite
- Sass (SCSS)

## Pre-requisitos

- Node.js `20.19+` ou `22.12+`
- npm

## Instalacao

```bash
npm install
```

## Como rodar o projeto

### Desenvolvimento

```bash
npm run dev
```

Abra no navegador a URL exibida no terminal (normalmente `http://localhost:5173`).

### Build de producao

```bash
npm run build
```

Esse comando executa a compilacao TypeScript (`tsc -b`) e gera a build com Vite na pasta `dist/`.

### Preview da build

```bash
npm run preview
```

## Como testar/validar o projeto

Atualmente, o projeto nao possui testes automatizados (ex.: Vitest/Jest) configurados.

Para validacao de qualidade de codigo, execute:

```bash
npm run lint
```

Para validacao funcional, rode o projeto em `dev` e verifique os fluxos principais da interface no navegador.

## Fluxo recomendado

```bash
npm install
npm run lint
npm run build
npm run dev
```

## Observacoes

- A API JSON do desafio nao pode ser consumida diretamente no front-end por bloqueio de CORS no navegador.
- Para manter a vitrine funcionando, os produtos foram mockados localmente em `src/components/ProductShowcase/mockProducts.ts`.
- Foram adicionados toasts de aviso para funcionalidades ainda nao implementadas e para categorias sem produtos no contexto atual.

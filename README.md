# Teste Econverse: Vaga Desenvolvedor Front-End

### Vem ser #Econverse!

Segue abaixo as instruções para a execução do teste.

## Apresentação do teste
- Projeto desenvolvido com React, TypeScript, Vite e Sass (SCSS), seguindo o layout solicitado.
- A API JSON do desafio não pôde ser consumida diretamente no front-end por bloqueio de CORS no navegador.
- Para manter a vitrine funcionando, os produtos foram mockados localmente em `src/components/ProductShowcase/mockProducts.ts`.
- Foram adicionados toasts de aviso para melhorar a experiência:
  - Toast global para cliques em funcionalidades ainda não implementadas.
  - Toast na vitrine para avisar quando a categoria não possui produtos no contexto atual.

## Como rodar o projeto em qualquer máquina

### Pré-requisitos
- Node.js 18+
- npm

### Passo a passo
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Entre na pasta do projeto:
   ```bash
   cd teste-front-end
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode em modo desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra no navegador o endereço mostrado no terminal (normalmente `http://localhost:5173`).

### Build de produção
```bash
npm run build
```

### Preview da build
```bash
npm run preview
```

## Instruções
- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Desenvolva a página conforme as **Especificações Técnicas** 
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail julia.gardiano@econverse.com.br com o título **Teste Vaga FrontEnd**

## Especificações Técnicas
- Desenvolver a pagina em React e TypeScript conforme o [layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a [vitrine](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png) de produtos consumindo as informações dos produtos em json atraves desse [Link](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

## Pontos Extras
- Utilizar Boas práticas de SEO
- Uso de HTML semântico

## O que avaliaremos em seu teste
- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**

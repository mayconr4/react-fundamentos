# Fundamentos de react

## 06_styled-components

Styled Components é umá biblioteca (lib) muito usada com projetos React que permite escrever estilos CSS dentro do JavaScript usando á própria sintaxe do CSS. Os estilos acoplados ao componente em que foram declarados.

### Instalação

- npm install styled-components
- npm install --save-dev @types/styled-components
- Extensão vscode-styled-components

## 05_modulos-css

Módulos CSS (CSS Modules) são uma maneira de escrever CSS em arquivos separados de extensão `.module.css` em que cada classe e estilo foca isolado par um único componente. Há um **acoplamento** entre o módulo e seu componente, permitindo um escopo bem difinido sobre os estilos.

- Criação de módulos para acada componente (execto Rodape)
- Importação do módulo (chamado de styles ou estilos)
- Aplicação das classes usando className={}
- Reoorganização de componentes e seus módulos em pastas
- Instalação da extensão CSS Modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline via style e escrevendo CSS in JS (objeto com propriedade CSS)
- CSS inline criando um objeto do tipo CSSProperties e passando-o para o style do componente

## 03_componentes-filhos-ou-internos

- Criação de um componente filho (Menu) e importação/usp no pai(Cabecalho)
- Criação de um componente filho (Artigo) e importação/uso no pai (Conteupo)
- Instalação da extensão ES7+ React

## 02_criando-e-organizando-componentes

- Sepatação de trechos do App em novos componentes
- Exportação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxe-JSX-no-App

- Construção de um componente único (App.tsx) usando elementos HTML e fragmento react

- Referência sobre Componentes e JSX: https://react.dev/reference/react/Component
- Instalação da exetnsão React Developer tools

## 00_projeto_zerado

- Remoção do CSS
- Remoção da pasta assets
- Simplificação do componenete App.tsx e do main.tsx

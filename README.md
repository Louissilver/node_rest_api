<h1 align="center">REST API com NodeJS - Adocão</h1>

## Sobre

Projeto de API REST criada utilizando NodeJS e MySQL para trabalho da disciplina de Desenvolvimento para Web.
O intuito da API é cadastrar animais abandonados em uma instituição de auxílio para animais de rua.
Dessa forma, é possível realizar um CRUD com dados de cães para adoção.

## Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteúdos)
   * [Instalação](#instalação)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pré-requisitos)
      * [Configurações](#configurações)
      * [Comandos](#comandos)
<!--te-->
## Instalação

npm install

## Como usar

### Pré requisitos

- NodeJS
- MySQL

### Configurações

No arquivo config/customExpress.js configurar os dados para conexão com o banco MySQL

### Comandos

npm start - inicia a aplicação, cria as tabelas no banco

## Pacotes Node

- "body-parser": "^1.19.0",
- "consign": "^0.1.6",
- "express": "^4.17.1",
- "mysql": "^2.18.1",
- "nodemon": "^2.0.12"

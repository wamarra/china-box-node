# CHINA BOX NODE API
API Node.js com Express e MongoDB 

###### <p align="right">Autor: Wesley Marra </p>

<br/>

## Tecnologias utilizadas

<div>
  <img src="https://img.shields.io/static/v1?label=Node.js&message=14.16.1&color=339933&style=flat&logo=node.js"/>
  <img src="https://img.shields.io/static/v1?label=Nodemon&message=2.0.7&color=339933&style=flat&logo=nodemon"/>
  <img src="https://img.shields.io/static/v1?label=MongoDB&message=4.4.5&color=339933&style=flat&logo=mongoDB"/>
  <img src="https://img.shields.io/static/v1?label=Mongoose&message=5.12.7&color=339933&style=flat"/>
  <img src="https://img.shields.io/static/v1?label=Express&message=4.17.1&color=327ae7&style=flat"/>
  <img src="https://img.shields.io/static/v1?label=Dotenv&message=8.2.0&color=327ae7&style=flat"/>
  <img src="https://img.shields.io/static/v1?label=License&message=ISC&color=327ae7&style=flat"/>
</div>

<br/>
<br/>

## Entidades e Features

### Produtos

- [x] Listar produtos
- [x] Recuperar produtos por ID
- [x] Cadastrar produtos
- [x] Alterar produtos
- [x] Excluir produtos

### Pedidos

- [x] Listar pedidos
- [x] Recuperar pedidos por ID
- [x] Cadastrar pedidos
- [x] Excluir pedidos

### Endpoints

* GET /produtos - busca no banco de dados a lista de produtos sem nenhum filtro
* POST /produtos - envia os parâmetros para o servidor e como resultado o servidor cria um produto no banco de dados
* GET /produtos/{id} - busca as informações de um produto específico pelo id
* PATCH /produtos/{id} - atualiza as propriedades de um produto no banco de dados
* DELETE /produtos/{id} - exclui um produto do banco de dados pelo seu id

* GET /pedidos - busca no banco de dados a lista de pedidos sem nenhum filtro
* POST /pedidos - envia os parâmetros para o servidor e como resultado o servidor cria um pedido no banco de dados
* GET /pedidos/{id} - busca as informações de um pedido específico pelo id
* DELETE /pedidos/{id} - exclui um pedido do banco de dados pelo seu id

<br/>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:wamarra/china-box-node.git

# Acesse a pasta do projeto no terminal/cmd
$ cd china-box-node

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
```


### Importante
É necessário criar um arquvio `.env` na raiz do projeto contendo o seguinte conteúdo

```bash
# PORT=3000
# MONGO_USER=<usuario-do-banco>
# MONGO_PASSWORD=<senha-do-banco>
# MONGO_DATABASE_NAME=<nome-do-banco>
```

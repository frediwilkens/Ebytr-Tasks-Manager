# Ebytr Tasks Manager

# Contexto
Este projeto trata-se de um gerenciador de tarefas sendo possível criar, armazenar, concluir, excluir tarefas.

## Técnologias usadas

Front-end:
> Desenvolvido usando: React, CSS3, HTML5, ES6, Axios

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, ES6, Sequelize ORM

Extra:
> Utilizado Docker para criar containers com cada parte da aplicação (DB, Frontend, Baackend)


## Instalando Dependências

> Backend
```bash
  npm run install:backend
``` 
> Frontend
```bash
  npm run install:frontend
``` 
## Executando aplicação com Docker

### Subindo os containers
```bash
  npm run compose:up
```

### Iniciando o Banco de dados:
```bash
  npm run db:reset
```

## Futuras implementações:
* Editar descrição de tarefas;
* Tela de cadastro;
* Selecionar todas as tarefas em um botão;

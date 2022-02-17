# Bem-vindos ao To Do List Ebytr

## Contexto

---

Esse projeto foi desenvolvido para uma vaga de Full Stack na empresa [`Ebytr`](www.betrybe.com).

A proposta era desenvolver uma aplicação full stack de um lista de tarefas, tendo ela que conter o nome, status e data de criação.

---

## Como instalar

Pre-requisitos para rodar o projeto:
- mongoDB
- NPM

Copie o ssh do projeto `git@github.com:luciobj/Desafio-Tecnico-Ebytr.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:luciobj/Desafio-Tecnico-Ebytr.git`
  * `cd backend`
  * `npm install`
  * `npm start`

* Abra um segundo terminal, sem fechar o primeiro, e utilize os proximos comandos:

  * `cd frontend`
  * `npm install`
  * `npm start`

  A aplicação está configurada para rodar na porta local 3000 no caso do frontend, e 3001 no caso do backend. Caso deseje utilizar outra porta utilize o arquivo `.env.example` para trocar para a porta desejada. Após a alteração renomeie o arquivo para `.env`.

---

## Modo de utilização

A aplicação funciona de forma que a interação com o frontend registre no banco de dados mongo as tarefas, e é atualizada logo em seguida. Então simplesmente faça o uso do site da forma que desejar.

---

## Modo de desenvolvimento

---

O projeto foi desenvolvido utilizando TDD inicialmente, com testes unitários, porém devida a aproximação do prazo de entrega, foi optado por priorizar funcionalidades. Apesar disso, alguns testes foram produzidos e configurados, possibilitando futura expansão da cobertura.

### Tecnologias

---

Foi utilizado para o desenvolvimento desse projeto o NodeJS com Express para a criação básica, Mocha/Chai para a criação dos teste unitários para o backend.
No front foram utilizadas as tecnologias React e Jest.

---

## Próximos passos

* Terminar a cobertura de testes
* Aplicar estilização em CSS
* Melhorar a utilização utilizando Docker Compose
* Redigir README's separados para cada lado da aplicação
* Implementação de Token de acesso
* Deploy no Heroku
* Implementação de transmissão de dados `in real time` através do SocketIO


<!-- Este projeto foi desenvolvido com ajuda indireta dos desenvolvedores [Alan](https://github.com/alanmdf) e [Paulo](https://github.com/pauloricardoz)
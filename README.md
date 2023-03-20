## Description

This project is a demo project which is bulid in the following technologies.

- Nest (A progressive framework for building efficient, scalable Node.js server-side applications)
- PostgreSQL (A powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.)
- TypeORM (An ORM that can run in NodeJS).

## Business Logic

In this demo project, there are four tables: "customer", "token-purchase-history", "request", and "usage-history". A customer and requests can be created, and the data will be stored in the customer and request tables in the database. When a customer purchases tokens, the record is stored in the "token-purchase-history" table, and the tokens are added to the customer's token balance. The customer can then spend these tokens by making requests, and each request has its own token price. The transaction is recorded in the "usage-history" table, where the IDs of the customer and request are stored.

## Overview of the API's

Please import the Postman collection for demonstration. Visit api.txt file for api's and their responses.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Cypress End-to-End Testing

[course](https://www.udemy.com/course/cypress-end-to-end-testing-getting-started/)

## 01. Introduction

Cypress => JS based test automation tool and framework for website

two ways to test

1. end-to-end tests => complete application flow
2. component tests => individual ui elements

unit testing => focus on individual building block
e2e testing => complete workflow

unit + e2e

[docs](https://docs.cypress.io/guides/overview/why-cypress)

## 02. Fundamentals

file => .cy.ts
test description should be a complete sentence

cypress runs on local machine

cy.visit(url) => load website => load fail, test fail
[visit](https://docs.cypress.io/api/commands/visit)

typescript autocompletion

```js
/// <reference types="Cypress" />
```

cy.get(cssSelector) => find one or more DOM elements by selector
[get](https://docs.cypress.io/api/commands/get)

[cy.contains()](https://docs.cypress.io/api/commands/contains)

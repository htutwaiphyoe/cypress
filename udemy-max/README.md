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

cy.get(selector) => find one or more DOM elements by selector

[get](https://docs.cypress.io/api/commands/get)

[cy.contains()](https://docs.cypress.io/api/commands/contains)

cypress includes implicit assertions. no need to write explicit assertion like expect()

can add manual assertion with should()

[should](https://docs.cypress.io/api/commands/should)

.get() chain is separate query, use .find() for nested elements

[find](https://docs.cypress.io/api/commands/find)

testing => select and interact elements

cypress try to click center of the screen

.click({force: true}) => click whatever

[click](https://docs.cypress.io/api/commands/click)

proper assertions for better tests

keyboard typing => type()

[type](https://docs.cypress.io/api/commands/type)

contains can find partial text and has implicit assertion

dropdown option value select => .select()

[select](https://docs.cypress.io/api/commands/select)

don't add same logic in different tasks

tests should run in isolation and test orders should not matter

specific index in an array of elements => .eq(index)

[eq](https://docs.cypress.io/api/commands/eq)

first element => .first()

[first](https://docs.cypress.io/api/commands/first)

last element => .last()

[last](https://docs.cypress.io/api/commands/last)

## 03. Diving Deeper

data-cy attribute/props => best practice for selecting elements => just for cypress, no side-effect

css selector can be dynamic due to library

[data-cy](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)

.location() for window.location

[location](https://docs.cypress.io/api/commands/location)

browser back and forward => .go()

[go](https://docs.cypress.io/api/commands/go)

click test and find suggested selector from cypress environment

equal assertion => .should('equal', value)

attribute assertion => .should('have.attr', value)

.and() => alias of .should()

[and](https://docs.cypress.io/api/commands/and)

contains() can chain should()

[Chains-of-Commands](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Chains-of-Commands)

cannot assign or work with the return values of any Cypress command. Test commands are enqueued and run asynchronously. return chainable object, not element itself

all test instructions are added in queue and run that queue step by step

use alias instead of variable => .as("name"), .get("@name")

[variables-and-aliases](https://docs.cypress.io/guides/core-concepts/variables-and-aliases)

direct access subject (wrapper object of the dom element) with .then((el) => {})

[then](https://docs.cypress.io/api/commands/then)

.wrap(el) for chain commands or assertion with expect()

[wrap](https://docs.cypress.io/api/commands/wrap)

[assertions](https://docs.cypress.io/guides/references/assertions)

form submit with enter key press => .type("email{enter}")

[key press](https://docs.cypress.io/api/commands/type#Arguments)

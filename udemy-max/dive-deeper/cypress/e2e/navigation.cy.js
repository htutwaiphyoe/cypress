/// <reference types="Cypress" />

describe("page navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should navigate between pages", () => {
    cy.get('[data-cy="header-about-link"]').click();
    cy.location("pathname").should("equal", "/about");

    cy.get('[data-cy="header-home-link"]').click();
    cy.location("pathname").should("equal", "/");

    cy.go("back");
    cy.location("pathname").should("equal", "/about");

    cy.go("forward");
    cy.location("pathname").should("equal", "/");
  });
});

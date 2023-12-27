/// <reference types="Cypress" />

describe("Daily Tasks Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should shows image", () => {
    cy.get(".main-header").find("img");
  });

  it("should displays page title", () => {
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains(/daily tasks/i);
  });

  it("should open when Add Task button is clicked and close model when Cancel btn and backdrop are clicked.", () => {
    const btn = cy.get("button").contains(/add task/i);
    btn.click();
    cy.get(".backdrop").click({ force: true });
  });
});

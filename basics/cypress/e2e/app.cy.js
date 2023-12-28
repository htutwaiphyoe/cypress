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
    const addTaskBtn = cy.get("button").contains(/add task/i);
    addTaskBtn.click();

    const modal = cy.get(".modal");
    const backdrop = cy.get(".backdrop");
    const cancelBtn = cy.contains("Cancel");

    modal.should("exist");
    backdrop.should("exist");

    backdrop.click({ force: true });
    modal.should("not.exist");
    backdrop.should("not.exist");

    addTaskBtn.click();
    modal.should("exist");
    backdrop.should("exist");

    cancelBtn.click();
    modal.should("not.exist");
    backdrop.should("not.exist");
  });
});

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

  it("should create a new task", () => {
    const task = {
      title: "Mastering Cypress",
      summary: "Learning Cypress course by Max",
    };
    const addTaskBtn = cy.get("button").contains(/add task/i);
    addTaskBtn.click();

    const modal = cy.get(".modal");
    modal.should("exist");

    cy.get("#title").type(task.title);
    cy.get("#summary").type(task.summary);
    modal.contains(/add task/i).click();
    modal.should("not.exist");

    cy.get(".task-list").find(".task").should("have.length", 1);
    cy.get(".task-list").find(".task").find("h2").contains(task.title);
    cy.get(".task-list").find(".task").find("p").contains(task.summary);
  });

  it("should validate form when user click without any input data", () => {
    cy.get("button")
      .contains(/add task/i)
      .click();
    cy.get(".modal")
      .contains(/add task/i)
      .click();
    cy.get(".error-message").contains(/please provide values/i);
  });

  it("should filter tasks", () => {
    const task = {
      title: "Mastering Cypress",
      summary: "Learning Cypress course by Max",
      category: "urgent",
    };
    cy.get("button")
      .contains(/add task/i)
      .click();
    cy.get("#title").type(task.title);
    cy.get("#summary").type(task.summary);
    cy.get("#category").select(task.category);
    cy.get(".modal")
      .contains(/add task/i)
      .click();
    cy.get(".task").should("have.length", 1);
    cy.get("select#filter").select("low");
    cy.get(".task").should("have.length", 0);
    cy.get("select#filter").select(task.category);
    cy.get(".task").should("have.length", 1);
    cy.get("select#filter").select("all");
    cy.get(".task").should("have.length", 1);
  });
});

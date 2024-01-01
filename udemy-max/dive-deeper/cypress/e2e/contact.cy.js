/// <reference types="Cypress" />

describe("contact form", () => {
  const formData = {
    message: "Hello, world!",
    name: "Cypress",
    email: "cypress@io.com",
  };
  beforeEach(() => {
    cy.visit("http://localhost:5173/about");
  });

  it("should submit form when button is clicked", () => {
    cy.get("[data-cy='contact-input-message']").type(formData.message);
    cy.get("[data-cy='contact-input-name']").type(formData.name);
    cy.get("[data-cy='contact-input-email']").type(formData.email);

    cy.get("[data-cy='contact-btn-submit']").then(($el) => {
      cy.wrap($el)
        .contains(/send message/i)
        .and("not.have.attr", "disabled");
      cy.wrap($el).click();
      cy.wrap($el)
        .contains(/sending/i)
        .should("have.attr", "disabled");
    });
  });

  it("should submit form when enter is pressed", () => {
    cy.get("[data-cy='contact-input-message']").type(formData.message);
    cy.get("[data-cy='contact-input-name']").type(formData.name);
    cy.get("[data-cy='contact-btn-submit']").as("submitBtn");
    cy.get("@submitBtn")
      .contains(/send message/i)
      .and("not.have.attr", "disabled");
    cy.get("[data-cy='contact-input-email']").type(`${formData.email}{enter}`);
    cy.get("@submitBtn")
      .contains(/sending/i)
      .should("have.attr", "disabled");
  });

  it("should validate form input", () => {
    cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
    cy.get("@submitBtn").click();
    cy.get("@submitBtn").then(($el) => {
      expect($el).to.not.have.attr("disabled");
      expect($el.text()).to.not.equal(/sending/i);
    });

    cy.get('[data-cy="contact-input-message"]').as("messageInput");
    cy.get("@messageInput").focus().blur();
    cy.get("@messageInput")
      .parent()
      .then((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });

    cy.get('[data-cy="contact-input-name"]').as("nameInput");
    cy.get("@nameInput").focus().blur();
    cy.get("@nameInput")
      .parent()
      .then((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });

    cy.get('[data-cy="contact-input-email"]').as("emailInput");
    cy.get("@emailInput").focus().blur();
    cy.get("@emailInput")
      .parent()
      .then((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });
  });
});

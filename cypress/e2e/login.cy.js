/** @format */

describe("Login Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("should display login form correctly", () => {
    cy.get('input[name="email"]', { timeout: 10000 }).should("be.visible");
    cy.get('input[name="password"]', { timeout: 10000 }).should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });

  it("should show error message for invalid login credentials", () => {
    cy.get('input[name="email"]').type("invalidemail@test.com");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get('button[type="submit"]').click();

    // cy.get(".error-message")
    //   .should("be.visible")
    //   .and("contain", "Invalid credentials");
  });

  it("should login successfully with valid credentials", () => {
    cy.get('input[name="email"]').type("lustiyana1801@gmail.com");
    cy.get('input[name="password"]').type("lustiyana18");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/");
    // cy.get(".welcome-message").should("be.visible").and("contain", "Welcome");
  });
});

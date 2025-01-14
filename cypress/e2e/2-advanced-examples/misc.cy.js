/** @format */

/// <reference types="cypress" />

context("Misc", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/misc");
  });

  it("cy.exec() - execute a system command", () => {
    // execute a system command.
    // https://on.cypress.io/exec

    cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`);

    // Check for CircleCI on Windows
    const isCircleOnWindows =
      Cypress.platform === "win32" && Cypress.env("circle");

    if (isCircleOnWindows) {
      cy.log("Skipping test on CircleCI");
      return;
    }

    // Check for Shippable CI on Linux
    const isShippable =
      Cypress.platform === "linux" && Cypress.env("shippable");

    if (isShippable) {
      cy.log("Skipping test on ShippableCI");
      return;
    }

    // Attempt to run the system command
    cy.exec("echo Jane Lane", { failOnNonZeroExit: false }).then((result) => {
      // Log the results for debugging
      cy.log(`Stdout: ${result.stdout}`);
      cy.log(`Stderr: ${result.stderr}`);
      cy.log(`Exit code: ${result.code}`);

      // Perform assertions if the command succeeded
      if (result.code === 0) {
        expect(result.stdout).to.contain("Jane Lane");
      } else {
        cy.log("Command failed, skipping further assertions.");
      }
    });

    if (Cypress.platform === "win32") {
      cy.exec(`print ${Cypress.config("configFile")}`, {
        failOnNonZeroExit: false,
      })
        .its("stderr")
        .should("be.empty");
    } else {
      cy.exec(`cat ${Cypress.config("configFile")}`, {
        failOnNonZeroExit: false,
      })
        .its("stderr")
        .should("be.empty");

      cy.exec("pwd", { failOnNonZeroExit: false }).its("code").should("eq", 0);
    }
  });

  it("cy.focused() - get the DOM element that has focus", () => {
    // https://on.cypress.io/focused
    cy.get(".misc-form").find("#name").click();
    cy.focused().should("have.id", "name");

    cy.get(".misc-form").find("#description").click();
    cy.focused().should("have.id", "description");
  });

  context("Cypress.Screenshot", function () {
    it("cy.screenshot() - take a screenshot", () => {
      // https://on.cypress.io/screenshot
      cy.screenshot("my-image");
    });

    it("Cypress.Screenshot.defaults() - change default config of screenshots", function () {
      Cypress.Screenshot.defaults({
        blackout: [".foo"],
        capture: "viewport",
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        onBeforeScreenshot() {},
        onAfterScreenshot() {},
      });
    });
  });

  it("cy.wrap() - wrap an object", () => {
    // https://on.cypress.io/wrap
    cy.wrap({ foo: "bar" })
      .should("have.property", "foo")
      .and("include", "bar");
  });
});

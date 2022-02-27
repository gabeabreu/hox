/// <reference types="cypress" />

describe("Home page", () => {
  it("searchBar should be empty", () => {
    cy.visit("/");
    cy.get("[data-cy=searchBar]").should("have.value", "");
  });

  it("datePicker should be hidden", () => {
    cy.get("[data-cy=datePicker]").should("not.exist");
  });

  it("number of guests should be 1", () => {
    cy.get("[data-cy=searchBar]").type("a");
    cy.get("[data-cy=guestsNumber]").should("have.value", "1");
  });

  it("max of 8 hotels on nearby", () => {
    cy.get("[data-cy=nearby]").children().should("have.length", 8);
  });
});

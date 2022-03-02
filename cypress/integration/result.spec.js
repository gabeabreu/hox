/// <reference types="cypress" />

describe("should test the result page", () => {
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

  it("should search for brasília", () => {
    cy.get("[data-cy=searchBar]").clear();
    cy.get("[data-cy=searchBar]").type("brasília");
    cy.get('[data-cy="searchButton"]').click();
  });

  it("search should be empty and datePicker hidden", () => {
    cy.get("[data-cy=searchBar]").should("have.value", "");
    cy.get("[data-cy=datePicker]").should("not.exist");
  });

  it("should select fisrt hotel", () => {
    cy.get("[data-cy=results] > :nth-child(1)").first().click();
  });

  it("should check existence of hotel in result page", () => {
    cy.get("[data-cy=hotel]").should("exist");
  });
});

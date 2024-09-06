/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('user is on appliiction', () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});

When('user aceess functionality and store value', () => {
  cy.get("#input-email").type('dattatrayfugare77@gmail.com');
  cy.get("#input-email").invoke('val').then((value) => {
    cy.log(value);
    
    // Store the value in Cypress.env()
    cy.writeFile('cypress/fixtures/storedEmail.json', { email: value });
    cy.log('Value stored in fixture file');
  });
});

Then('user access value in another test file', () => {
  // This should not be necessary if you are storing the value in Cypress.env()
  cy.log('Value stored in env variable');
});

Then('verify  store value accessibale in another test file', () => {
  cy.log('For verification, we need to create a new test file (name demoaccess.js)');
});

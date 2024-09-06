import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('user is on web application', () => {
  cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});

When('user access the value', () => {
  // Retrieve the value from Cypress.env()
  cy.readFile('cypress/fixtures/storedEmail.json').then((data) => {
    cy.log('Retrieved email from fixture file: ' + data.email);
    cy.wrap(data.email).as('storedEmail'); // Use alias to access in subsequent steps
  });
});

Then('verify the value is accessibale or not', () => {
  // Retrieve the value from Cypress.env()
  cy.get('@storedEmail').then((email) => {
    if (email) {
      cy.get("#input-email").type(email);
    } else {
      cy.log('Stored value is undefined');
    }
  });
});

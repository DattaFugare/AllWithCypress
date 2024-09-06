import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('the API endpoint is {string}', (url) => {
  cy.wrap(url).as('url');
});

When('I send a POST request with {string} and {string}', (email, password) => {
  cy.get('@url').then((url) => {
    cy.request({
      method: 'POST',
      url: 'https://rahulshettyacademy.com/api/ecom'+url,
      body:{
        "userEmail": ""+email+"",
     "userPassword": ""+password+""
     },
      headers: {
        'Accept': 'application/json', // Request JSON response
        'Content-Type': 'application/json' // Ensure content type is JSON
      }
    }).as('response');
  });
});

Then('the response code should be {string}', (statusCode) => {
    cy.get('@response').then((response) => {
      expect(response.status.toString()).to.eq(statusCode);
    })
  });
  
  Then('the response message should be {string}', (message) => {
    cy.get('@response').then((response) => {
 
        expect(response.body).to.have.property('message', 'Login Successfully');
    });
  });
  

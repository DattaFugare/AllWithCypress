import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('user is on web app',()=>{
    cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register" );


})
When('user do funcnality with chainning blur or fouce command',()=>{
    cy.get("#input-firstname").type("Test AB").blur();
    cy.wait(5000)
    cy.get("#input-lastname").type("Test").focus();

})
Then('verify user get notified blur and fouce',()=>{

    cy.log("by observation it getting blur or fouce ")
})
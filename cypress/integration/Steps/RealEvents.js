describe(" Mouse over", () => {
    /*
    To use realHiver Command, install below plugin
    npm install cypress-real-events
    Add import "cypress-real-events" in support>e2e.js (cypress above 10)
    */
  
    it("TC1 - Mouse Over: Using Plugin realEvent ", () => {
      cy.visit("https://www.bigbasket.com/");
      cy.get("button[id='headlessui-menu-button-:R5bab6:'] span[class='Label-sc-15v1nk5-0 CategoryMenu___StyledLabel-sc-d3svbp-1 gJxZPQ gYxTYh']"
      ).realHover("mouse");
      cy.get("a:contains('Beverages')").realHover("mouse");
    });
  
    it(" TC2 - Mouse Over: Using plugin realEvent", () => {
      cy.visit("https://naveenautomationlabs.com/opencart/");
      cy.get("li.dropdown>a:contains('Desktops')").realHover("mouse");
      cy.get("a:contains('PC (0)')").click({force: true});
    });
//     it("TC3 - Mouse Over: Using Cypress inbuilt Command", () => {
//       cy.visit("https://www.tradeling.com/ae-en");
//       cy.get("[data-testid='all_categories_nav_bar']").trigger("mouseover");
  
//     });    https://www.tradeling.com/ae-en  service down 
 });
  
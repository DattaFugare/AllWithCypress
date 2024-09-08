  /*
  Passing the input value from json file,
   passing email as random generator ,
   used .check() to select the checkbox
   used .tab() to enter tab ..
     Installed plugin => npm install -D cypress-plugin-tab
     for using tab as cypress does not have direct support for tab
  */
     describe("Scroll into view", () => {
        it("Infinite - scroll into view", () => {
          cy.visit("https://www.swiggy.com/");
          cy.get("#location").type("Gurgaon");
          cy.contains("Gurgaon, Haryana, India").click();
          cy.scrollTo("bottom");
          cy.contains("Pune").should("be.visible");
        });
      });
      
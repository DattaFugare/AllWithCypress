describe("Upload File Request", () => {
    it.skip("TC1 - No Input Field || upload File by changing action", () => {
      cy.visit("https://www.ilovepdf.com/pdf_to_word");
      cy.get("a#pickfiles").selectFile("Test.pdf", { action: "drag-drop" });
    });
    it.skip("TC2- Error Case- No Input Field|| upload File without changing action", () => {
      cy.visit("https://www.ilovepdf.com/pdf_to_word");
      cy.contains("Select PDF file").selectFile("Test.pdf");
    });
    it("TC3- Upload File with input field", () => {
      cy.visit("https://demoqa.com/upload-download");
      cy.get("input#uploadFile").selectFile("Test.pdf");
    });
  });
  
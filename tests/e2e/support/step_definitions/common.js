given("Que visito el langing-page", () => {
  cy.visit("/");
}),
  then(`Debería leer {string} en el título`, title => {
    cy.title().should("include", title);
  }),
  and(`{string} como bajada`, title => {
    cy.get("h1").should("contain", title);
  });

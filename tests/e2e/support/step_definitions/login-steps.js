given("Que visito el login", () => {
  cy.visit("#/login");
});

and(`lleno el campo email con {string}`, email => {
  cy.get("[data-cy=username]").type(email);
});

and(`lleno el campo password con {string}`, password => {
  cy.get("[data-cy=password]").type(password);
});

when("hago click en el botón submit", () => {
  cy.server();
  cy.route({
    method: "POST",
    url: "https://conduit.productionready.io/api/users/login",
    status: 200,
    response: "fixture:200.json"
  });
  cy.get("[data-cy=login-form]").submit();
});

then("debería ser redirigido al Home page", () => {
  cy.location("pathname").should("equal", "/");
});


Feature:
  Primeros pasos para integrar cypress y cucumber

  Scenario: Qué tenga el título correcto
    Given Que visito el langing-page
    Then Debería leer 'Tutelkan E2E' en el título
    And 'Bienvenido al curso de pruebas E2E con Cypress' como bajada

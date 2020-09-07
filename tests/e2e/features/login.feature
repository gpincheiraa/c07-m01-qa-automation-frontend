Feature:

  Funcionamiento del Login

  Scenario: Con los datos incorrectos
    Given Que visito el login
    And lleno el campo email con 'contacto@tutelkan.cl'
    And lleno el campo password con 'secretPwd'
    When hago click en el botón submit
    Then debería ser redirigido al Home page

  Scenario: Con los datos correctos
    Given Fuack
    Given Que visito el login
    And lleno el campo email con 'contacto@tutelkan.cl'
    And lleno el campo password con 'secretPwd'
    When hago click en el botón submit
    Then debería ser redirigido al Home page
Feature: Pesquisar Devs

  Scenario: O usuário pesquisa por uma tecnologia e entra no perfil do github de um usuário cadastrado
    Given I'm on the home page
    When The field with the text "Buscar devs por techs..." is filled with "C++"
    Given I click on the "search-button" button
    Given I click on the item which has coordinates x = "350" and y = "750"
    Given I click on the item which has coordinates x = "350" and y = "650"
    Given I wait "5000" seconds
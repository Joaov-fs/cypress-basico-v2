Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
        cy.get('#firstName').type('João Vitor')
        cy.get('#lastName').type('Ferreira dos Santos')
        cy.get('#email').type('juanito@gmail.com')
        cy.get('#open-text-area').type('texto')
        cy.contains('button', 'Enviar').click()

})


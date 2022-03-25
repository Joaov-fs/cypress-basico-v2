///Curso Básico

describe('Central de Atendimento ao Cliente TAT', function() {

beforeEach(function() {
     cy.visit('./src/index.html')
})

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatorios e envia um formulario', function() {
       const longText = "Fomos orientados a escrever um texto bem longo para textar uma subscreção do delay padrão, então imagine aqui um word com 10x escrito faroeste caboclo"
        cy.get('#firstName').type('João Vitor')
        cy.get('#lastName').type('Ferreira dos Santos')
        cy.get('#email').type('juanito@gmail.com')
        cy.get('#open-text-area').type(longText , { delay: 0 }  )
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
        } )

    it('exibir mensagem de erro ao digitar email com formatação invalida', function() {
        
        cy.get('#firstName').type('João Vitor')
        cy.get('#lastName').type('Ferreira dos Santos')
        cy.get('#email').type('juanito7gmail,pr')
        cy.get('#open-text-area').type('flash' , { delay: 0 }  )
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('Verifica que ao tentar escrever letra no campo número o campo fica em branco', function() {
        cy.get('#phone')
            .type('nome')
            .should('have.value', '')

    })

    it('Verifica que o numero se torna obrigatório ao selecionar checkbox', function() {
        cy.get('#firstName').type('João Vitor')
        cy.get('#lastName').type('Ferreira dos Santos')
        cy.get('#email').type('juanito7gmail,pr')
        cy.get('#phone-checkbox').click() 
        cy.get('#open-text-area').type('flash' , { delay: 0 }  )
        cy.contains('button', 'Enviar').click()
        cy.get('.phone-label-span.required-mark').should('be.visible')
        cy.get('.error').should('be.visible')
       
    })

    it('Preenche e limpa os campos e após isso verifica', function() {
        cy.get('#firstName')
            .type('João Vitor')
            .should('have.value', 'João Vitor')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Ferreira dos Santos')
            .should('have.value', 'Ferreira dos Santos')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('juanito@gmail.com')
            .should('have.value', 'juanito@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
        .type('flash' , { delay: 0 }  )
        .clear()
        .should('have.value', '')

    })

    it('Mensagem de erro após tentar enviar sem preencher nada', function() {
        cy.contains('button', 'Enviar').click()
            cy.get('.error').should('be.visible')
    
    })

    it('Envia um formulário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    it('Seleciona um produto pelo nome - YOUTUBE', function(){
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    it('Seleciona um produto pelo valor - MENTORIA', function(){
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    it('Seleciona um produto pelo indice - BLOG', function(){
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    })
        
    it('seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($input) {
                 expect($input[0].files[0].name).to.equal('example.json')
            })
    })  
           
    it.only('seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(function($input) {
                 expect($input[0].files[0].name).to.equal('example.json')
            })
    })  
           

    
  } )

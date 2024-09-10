/// <reference types="cypress" />

import AddElements from '../elements/AddElements'
const addElements = new AddElements

class AddPage {
    
    clicarProduto() {
        if (cy.get(addElements.campoBusca()).should('be.visible'))
            {
                cy.wait(5000)
                cy.get(addElements.produto()).should('be.visible')
                .click()
            }
        else {
                cy.get(buscaElements.botaoBusca()).should('be.visible').click()
                cy.get(buscaElements.campoBusca()).should('be.visible')
                .type('Tablet')
                cy.wait(5000)
                cy.get(addElements.produto()).should('be.visible')
                .click()
        }
    }

    clicarBotaoAdd(){
        cy.get(addElements.botaoAdd()).should('be.visible').click()
    }

    clicarBotaoCheckout() {
        cy.get(addElements.botaoCheckout()).should('be.visible').click()
    }

    verificarProduto() {
        cy.get(addElements.produtoCheckout()).should('be.visible')
        .contains('HP ELITEPAD 1000 G2 TABLET')
    }

}
export default AddPage;
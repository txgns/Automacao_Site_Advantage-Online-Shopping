/// <reference types="cypress" />

import BuscaElements from '../elements/BuscaElements'
const buscaElements = new BuscaElements


class BuscaPage {
    
    acessarSite() {
        cy.visit("https://advantageonlineshopping.com/#/")
    }

    aguardar() {
        cy.wait(5000)
    }

    clicarBotaoBusca() {
        cy.get(buscaElements.botaoBusca()).should('be.visible').click()
    }

    preencherCampoBusca() {
        cy.get(buscaElements.campoBusca()).should('be.visible')
        .type('Tablet')
    }

}
export default BuscaPage;
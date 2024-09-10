/* global Given, Then, When */

import AddPage from '../pageobjects/AddPage'
const addPage = new AddPage

Given("que pesquisei um produto, clico na prmeira opção", () => {
    addPage.clicarProduto();
})

Then("clico no botão ADD TO CARD", () => {
    addPage.clicarBotaoAdd();
})

Then("que o produto foi adicionado ao carrinho, clico no botão CHECKOUT", () => {
    addPage.clicarBotaoCheckout();
})

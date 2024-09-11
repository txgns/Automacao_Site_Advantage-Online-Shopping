
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import BuscaPage from '../../support/pageobjects/BuscaPage'
const buscaPage = new BuscaPage
import AddPage from '../../support/pageobjects/AddPage'
const addPage = new AddPage

Given("que acesso o site : Advantage Online Shopping", () => {
    buscaPage.acessarSite();
})

Then("aguardo o carregamento da pagina", () => {
    buscaPage.aguardar();
})

Then("clico no icone de busca", () => {
    buscaPage.clicarBotaoBusca();
})

Then("preencho o campo com nome do produto", () => {
    buscaPage.preencherCampoBusca();
})

Given("que a busca ja foi realizada", () => {
    buscaPage.acessarSite();
    buscaPage.aguardar();
    buscaPage.clicarBotaoBusca();
    buscaPage.aguardar();
    buscaPage.preencherCampoBusca();
})

Then("clico na prmeira opção", () => {
    addPage.clicarProduto();
})

Then("clico no botão ADD TO CARD", () => {
    addPage.clicarBotaoAdd();
})

Given("que ja realizei a busca e adicionei ao carrinho", () => {
    buscaPage.acessarSite();
    buscaPage.aguardar();
    buscaPage.clicarBotaoBusca();
    buscaPage.aguardar();
    buscaPage.preencherCampoBusca();
    addPage.clicarProduto();
    addPage.clicarBotaoAdd();
    buscaPage.aguardar();
})

Then("clico no botão CHECKOUT", () => {
    addPage.clicarBotaoCheckout();
})

Then("verifico se o produto está na pagina de checkout", () => {
    addPage.verificarProduto();
})




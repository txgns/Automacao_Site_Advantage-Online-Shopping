/* global Given, Then, When */

import BuscaPage from '../pageobjects/BuscaPage'
const buscaPage = new BuscaPage

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

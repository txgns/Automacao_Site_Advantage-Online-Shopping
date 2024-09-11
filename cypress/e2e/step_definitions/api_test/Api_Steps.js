import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que eu faço uma busca por Tablets", () => {
  cy.request({
    method: 'GET',
    url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=Tablets`
  }).as('resultados');

  });

 

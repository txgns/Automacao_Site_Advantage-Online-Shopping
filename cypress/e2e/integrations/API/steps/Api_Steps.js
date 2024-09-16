import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let resposta;

Given('que eu faço uma busca por produtos com o nome {string}', (nome) => {
  cy.wrap(nome).as('nome');
});

When('eu envio uma requisição GET para {string}', (endpoint) => {
  cy.get('@nome').then((nome) => {
    cy.request({
      method: 'GET',
      url: `https://www.advantageonlineshopping.com${endpoint}`,
      qs: { search: nome }
    }).then((response) => {
      resposta = response;
    });
  });
});

Then('o status code da resposta deve ser {int}', (statusCode) => {
  expect(resposta.status).to.equal(statusCode);
});

Then('o produto com nome {string} deve estar presente na lista', (nomeProduto) => {
  const nomeProdutoLower = nomeProduto.toLowerCase();

  expect(resposta.body).to.be.an('array').that.is.not.empty;

  let produtoEncontrado = false;

  resposta.body.forEach(categoria => {
    expect(categoria).to.have.property('products').that.is.an('array');

    produtoEncontrado = categoria.products.some(produto => {
      return produto.productName && produto.productName.toLowerCase() === nomeProdutoLower;
    });

    if (produtoEncontrado) {
      return false; 
    }
  });

  expect(produtoEncontrado).to.be.true;
});
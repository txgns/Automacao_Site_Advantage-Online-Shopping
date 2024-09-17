Funcionalidade: Verificar a presença de um produto específico na lista

 Cenário: Verificar se um produto específico está presente na lista de produtos
    Dado que eu acesso a plataforma POSTMAN
    Quando eu envio uma requisição GET para "/catalog/api/v1/products/search?name=Tablets"
    E eu envio a requisição com o parâmetro de busca "tablet"
    Então o status code da resposta deve ser 200
    E a resposta deve conter um produto com o nome "HP ElitePad 1000 G2 Tablet"
    E o produto "HP ElitePad 1000 G2 Tablet" deve estar presente na lista de produtos retornada

  
  Cenário: Verificar se um produto não encontrado está presente na lista de produtos
    Dado que eu acesso a plataforma POSTMAN
    Quando eu envio uma requisição GET para "/catalog/api/v1/products/search?name=ProdutoFake"
    E eu envio a requisição com o parâmetro de busca "ProdutoFake"
    Então o status code da resposta deve ser 200
    E a resposta não deve conter um produto com o nome "Produto Fake"
    E a lista de produtos retornada deve estar vazia ou não deve incluir o produto "Produto Fake"

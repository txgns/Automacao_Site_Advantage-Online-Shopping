Funcionalidade: Verificar a presença de um produto específico na lista

  Cenario: Verificar se um produto específico está presente na lista de produtos
    Dado que acesso a platafroma POSTMAN
    Quando eu envio uma requisição GET para "/catalog/api/v1/products/search?name=Tablets"
    E eu faço uma busca por produtos com o nome "tablet"
    Então o status code da resposta deve ser 200
    E o produto com nome "HP ElitePad 1000 G2 Tablet" deve estar presente na lista
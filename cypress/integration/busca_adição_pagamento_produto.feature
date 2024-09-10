# language: pt
# encoding UTF-8

Funcionalidade: Busca por produto, Adição de produtos e carrinho e Verificação de produto na pagina de pagamento

    Cenario: buscar por um produto na plataforma
        Dado que acesso o site : Advantage Online Shopping
        E aguardo o carregamento da pagina
        Quando clico no icone de busca
        E aguardo o carregamento da pagina
        Então preencho o campo com nome do produto

    Cenario: adição de produto ao carrinho
        Dado que pesquisei um produto, clico na prmeira opção
        E aguardo o carregamento da pagina
        Então clico no botão ADD TO CARD

    Cenario: validação do produto no carrinho
        Dado que o produto foi adicionado ao carrinho, clico no botão CHECKOUT
        
       

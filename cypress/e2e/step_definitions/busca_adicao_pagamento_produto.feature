# language: pt
# encoding UTF-8

Funcionalidade: Busca por produto, Adição de produtos ao carrinho e Verificação de produto na pagina de pagamento

    Cenario: buscar por um produto na plataforma
        Dado que acesso o site : Advantage Online Shopping
        E aguardo o carregamento da pagina
        Quando clico no icone de busca
        E aguardo o carregamento da pagina
        Então preencho o campo com nome do produto

    Cenario: adição de produto ao carrinho
        Dado que a busca ja foi realizada
        E clico na prmeira opção
        E aguardo o carregamento da pagina
        Então clico no botão ADD TO CARD

    Cenario: validação do produto no carrinho
        Dado que ja realizei a busca e adicionei ao carrinho
        E clico no botão CHECKOUT
        E aguardo o carregamento da pagina
        Então verifico se o produto está na pagina de checkout
        
       

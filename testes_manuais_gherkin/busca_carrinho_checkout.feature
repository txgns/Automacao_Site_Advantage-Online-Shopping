Funcionalidade: Busca por produto, Adição de produtos ao carrinho e Verificação de produto na pagina de pagamento

    Cenario: buscar por um produto na plataforma
        Dado que acesso o site "https://advantageonlineshopping.com/#/"
        Quando clico no icone de busca
        Então preencho o campo de busca com nome do produto

    Cenario: adição de produto ao carrinho
        Dado que ja realizei a busca do produto
        Quando clico na prmeira opção dos produtos em exibição
        Então clico no botão ADD TO CARD

    Cenario: validação do produto no carrinho
        Dado que ja realizei a busca e adicionei ao carrinho
        Quando clico no botão CHECKOUT
        E acessoa pagina de checkout
        Então verifico se o produto está na pagina para realizar o pagamento
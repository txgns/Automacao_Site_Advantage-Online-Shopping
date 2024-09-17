Funcionalidade: Busca por produto, Adição de produtos ao carrinho e Verificação de produto na pagina de pagamento

    Cenário: Buscar por um produto na plataforma
        Dado que eu acesso o site "https://advantageonlineshopping.com/#/"
        Quando eu clico no ícone de busca
        E eu preencho o campo de busca com "Tablet"
        E eu clico no botão de busca
        Então eu devo ver uma lista de produtos relacionados a "Tablet"

    Cenário: Buscar por um produto que não existe
        Dado que eu acesso o site "https://advantageonlineshopping.com/#/"
        Quando eu clico no ícone de busca
        E eu preencho o campo de busca com "Produto Fake"
        E eu clico no botão de busca
        Então eu devo ser redirecionado para uma pagina coma mensagem "No results for 'Produto Fake'"

    Cenário: Adicionar um produto ao carrinho
        Dado que eu já realizei a busca do produto "Tablet"
        Quando eu clico na primeira opção dos produtos exibidos
        E eu clico no botão "ADD TO CART"
        Então o produto deve ser adicionado ao carrinho
        E o ícone do carrinho deve atualizar a quantidade de produtos

    Cenário: Adicionar um produto ao carrinho e falhar
        Dado que eu já realizei a busca do produto "Tablet"
        Quando eu clico na primeira opção dos produtos exibidos
        E eu clico no botão "ADD TO CART"
        E o produto não é adicionado ao carrinho
        Então eu devo ver uma mensagem de erro exibindo por qual motivo o item não adicionado ao carrinho

    Cenário: Verificar o produto no carrinho
        Dado que eu já realizei a busca e adicionei o produto "Tablet" no carrinho
        Quando eu clico no botão "CHECKOUT"
        E eu acesso a página de checkout
        Então o produto "Tablet" deve estar na página de checkout para realizar o pagamento

    Cenário: Verificar o produto no carrinho após falha de adição
        Dado que eu já realizei a busca do produto "Tablet"
        E houve uma falha ao adicionar o produto ao carrinho
        Quando eu clico no botão "CHECKOUT"
        E eu acesso a página de checkout
        Então eu não devo ver o produto "Tablet" na página de checkout
        E eu devo ver uma mensagem informando que o produto não foi adicionado ao carrinho


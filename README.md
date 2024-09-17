# Automação da plataforma Advantage Online Shopping com Cypress


# Instalando dependecias do projeto

primeiramente monte o ambiente para poder rodar a automação!

É necessario ter o Node.js instalado na sua maquina para executar os comandos que viram a seguir. Caso esteja em um ambiente o Windows basta acessar o site do Node,js e baixar a ultima versão.

<a href="https://nodejs.org/pt">Link Node.js</a>

após a instalação, pode verificar a versão com o comando:

```
node --version
```
Caso esteja em um ambiente Linus, siga os passos abaixo:

No terminal, digite o comando de instalação do curl:

```
sudo apt-get install curl
```
Em seguida, execute o script abaixo para adicionar o repositório do Node:

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```
E por fim, para instalar o Node execute:

```
sudo apt-get install -y nodejs
```

Instaldo no Node.js, instale o cypress com cucumber usando seguinte comando:

```
npm install --save-dev cypress cypress-cucumber-preprocessor
```

E então verifique se possui o git instalado na sua maquina, caso não basta seguir os passos nesse <a href="https://git-scm.com/book/pt-br/v2/Começando-Instalando-o-Git">Link</a>

Após realizar o clone do repositório, basta acessar o diretorio do projeto e executar o comando:

```
npm install
```
Todas as dependecias do projeto irão ser instaladas!

# Executando o projeto

Para executar o teste pode ser feito tanto por comando, quanto pelo painel do Cypress.

Abaixo o comando executa os testes através do CLI, exibindo os resultados linha a linha:
```
npm run test:chrome
```

Abaixo o comando inicia a interface do Cypress para executar os testes pelo painel da ferramenta:
```
npx cypress open
```
Através do painel você pode acompanhar o teste visualmente.





# BurguerMania - Frontend

Este projeto foi desenvolvido utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 16.0.0. com base no design fornecido no **Figma**, sendo totalmente responsivo e seguindo o layout proposto. O objetivo é criar uma aplicação de pedidos de hambúrgueres com navegação entre páginas, componentes reutilizáveis e estilos consistentes.

## Funcionalidades Implementadas

### 1. **Componentização**
   - A aplicação foi componentizada para garantir a reutilização dos componentes em diferentes partes do sistema.
   - Foram criados os seguintes componentes:
     - **Header**: Componente de cabeçalho para todas as páginas.
     - **Botão**: Componente de botão reutilizável com diferentes estilos.
     - **Card**: Componente de cartão para exibição de produtos ou informações.
     - **Container de Imagem**: Componente de imagem para exibição da logo do site.

### 2. **Roteamento**
   - Implementado o **roteamento** para permitir a navegação entre as páginas.
   - As principais rotas implementadas são:
     - **Página de Pedido**: Ao clicar em "Pedido", o usuário é redirecionado para a página de pedidos.
     - **Página de Cardápio**: Ao clicar em "Cardápio", o usuário é direcionado para a tela com as categorias de hambúrguer.
     - **Página de Categoria**: Ao selecionar uma categoria de hambúrguer, o usuário é redirecionado para a página com os hambúrgueres disponíveis na categoria selecionada.

### 3. **Estilos Globais com Variáveis CSS**
   - Foram definidas **variáveis CSS** no arquivo `style.css` para cores e tipografia, garantindo consistência visual em toda a aplicação.
   - As variáveis aplicadas incluem:
     - **Cores**: Para garantir uniformidade nas cores ao longo do projeto.
     - **Tipografia**: Definição de fontes e tamanhos para manter a consistência.

## Estrutura de Navegação

- **Página de Pedido**: Ao clicar em "Pedido", o usuário é direcionado para a tela de pedidos.
- **Página de Cardápio**:
  - Ao clicar em "Cardápio", o usuário é redirecionado para a tela com as categorias de hambúrguer.
  - Ao selecionar uma categoria, o usuário é direcionado para uma página com os hambúrgueres disponíveis nesta categoria.

## Responsividade

A aplicação foi desenvolvida para ser **totalmente responsiva**, garantindo que a interface se ajuste corretamente em diferentes tamanhos de tela, como:
- **Desktop**
- **Tablets**
- **Celulares**

## Estrutura de Pastas

A estrutura do projeto foi organizada da seguinte forma:

![image](https://github.com/user-attachments/assets/2f736564-0cf0-4329-a3a9-a73f1a185456)

## Link para o Projeto Figma

O design completo e o layout do projeto estão disponíveis no [Projeto Figma - BurguerMania](https://www.figma.com/design/ZVUq3b0IH9fYUHESjmv6NB/BurguerMania?node-id=24-100&node-type=frame&t=U9JjEXNWaddP9MSA-0).

## Instalar Dependências 

Execute `npm install`.

## Servidor de desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você alterar algum arquivo de origem.

## Geração de código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Executando testes unitários

Execute `ng test` para executar os testes unitários através do [Karma](https://karma-runner.github.io).

## Executando testes end-to-end

Execute `ng e2e` para executar os testes end-to-end usando a plataforma de sua escolha. Para usar esse comando, primeiro você precisa adicionar um pacote que implemente as capacidades de testes end-to-end.

## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou acesse a página [Visão geral do Angular CLI e Referência de Comandos](https://angular.io/cli).

## Considerações Finais

A aplicação foi construída seguindo todas as orientações de componentização, roteamento e design responsivo. Todos os componentes são reutilizáveis e a navegação entre as páginas é fluida e intuitiva, conforme solicitado no enunciado do projeto.


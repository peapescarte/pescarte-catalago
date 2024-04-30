# Páginas
A aplicação é composta por 9 páginas, das quais 3 são públicas e podem ser encontradas na pasta ``(public)``, enquanto 6 são privadas e estão localizadas na pasta ``(private)``.

Levando em consideração o framework utilizado, o Next.js criará páginas com base na organização de pastas dentro da pasta ``/app``. Portanto, todas as pastas dentro de ``/app`` que contenham um arquivo page.tsx serão transformadas em páginas pelo Next.js, e o caminho é determinado pelo nome da pasta imediata que contém o page.tsx.

## Públicas

Home
A página inicial apresenta uma lista de todos os peixes cadastrados, juntamente com suas informações principais, conforme idealizado no início do projeto. Além disso, essa página permite realizar buscas com base no nome científico do peixe, nome comum e comunidade.

Login
A página de login exibe um formulário para efetuar o login. Após o login, é possível acessar a área de ``/dashboard``, onde as operações de CRUD (criação, leitura, atualização e exclusão) das informações de comunidade, peixe e sugestões de nomes podem ser realizadas.

### Send Common Name
Essa página apresenta um formulário para receber novas sugestões de nomes, que posteriormente devem ser aprovadas na área privada, na página ``/dashboard/suggestions``. Essa página é construída dinamicamente pelo Next.js, utilizando o ID do peixe em questão para diferenciar cada página criada. Ao lado do formulário, é possível visualizar o peixe selecionado na página inicial (``/``).

## Privadas

### Dashboard
A página principal tem como objetivo mostrar o total cadastrado em cada categoria, incluindo:
 - Peixes
 - Comunidades
 - Nomes Sugeridos

#### Fish
Nesta página, é exibida uma tabela com as principais informações, conforme idealizado no início do projeto. A tabela permite realizar buscas e ordenação com base no nome científico.

##### New
Nessa página, você encontrará um formulário para cadastrar um novo peixe.

#### Communities
Nesta página, é exibida uma tabela com as principais informações, conforme idealizado no início do projeto. A tabela permite ordenação com base no nome da comunidade, estado e município.

##### New
Nesta página, você encontrará um formulário para cadastrar novas comunidades.

#### Suggestions
Nesta página, há uma tabela que permite buscar por nome científico e filtrar por status.

# Bibliotecas
Para a implementação do frontend, utilizamos o framework Next.js, juntamente com o Tailwind CSS para estilização e TypeScript para o código. Também utilizamos a biblioteca ShadCn para implementação e estilização de componentes de tabelas, formulários, botões e menus.

# Estrutura
## Funcions
Esta pasta contém funções de uso geral para a aplicação.

## hooks
A pasta contém os hooks responsáveis pela manipulação e validação dos formulários, bem como o envio das informações para o cadastro.

## libs
Esta pasta contém arquivos de configuração de bibliotecas externas à aplicação.

## Models
A pasta contém modelos de tipos das principais informações da aplicação, atendendo aos requisitos do backend.

## Modules
Esta pasta contém exclusivamente o módulo de autenticação.

## Services
A pasta contém uma série de funções responsáveis pela conexão com o backend, incluindo o tratamento do envio e recebimento de dados.

# Considerações e Sugestões
 - Na página inicial (``/``), esperava-se que houvesse uma funcionalidade de busca/filtro e paginação dos peixes, mas, devido a problemas internos, não foi possível implementá-la. O endpoint para busca/filtro está implementado no backend.
 - Sugiro possibilitar o CRUD de equipamentos (gears), que atualmente é realizado apenas via SQL Query/API Endpoint.
 - Sugiro possibilitar o CRUD de equipamentos (habitats), que atualmente é realizado apenas via SQL Query/API Endpoint.
 - permitir o CRUD de municípios, que atualmente é realizado somente via SQL Query.
 - Na página ``/dashboard/community``: Acrescentar ações de exclusão e edição para as comunidades. Isso permitirá que os administradores realizem manutenção quando necessário. A inclusão dessas funcionalidades proporcionará maior flexibilidade na gestão das informações.
 - Na página ``/dashboard/fish``: Acrescentar ações de exclusão e edição de peixes já cadastrados. Isso permitirá que os administradores realizem manutenção quando necessário. A inclusão dessas funcionalidades proporcionará maior flexibilidade na gestão das informações.
 - Na página ``/dashboard/fish/new``: Ao cadstrar nome populares, deve ser preencher todos os campos adicionados, não tendo a possível de excluir. Sugestão: Acrescentar botão para poder excluir um nome popular adicionado indevidamente. Também é necessário aprovar o nome popular adcionado no momento do cadastro, na página /suggestions, mesmo que tenha sido cadastrada por um administrador.
- Na página ``/dashboard/suggestion``: Acrescentar uma funcionalidade de busca pelo nome sugerido pelo usuário 

# Versões
As versões das ferramentas utilizadas no projeto podem ser encontrada nos arquivos package.json e também no arquivo requirements.txt.

# Para o Acesso Administrador
**CPF**: `14496844168`
**Password**: `2MFq'@Zlu;:M<rDD`

# Execução Local
Deseja-se Node Js previamente instalado.

## Front
```Bash
npm install

npm run dev
```
## Back
Deseja-se Docker e DBMate (`{https://github.com/amacneil/dbmate}`) previamente instalado.
```Bash
docker network create catalogo

docker-compose up
```

Após a execução da aplicação, rodas as migrations para scronização do banco de dados.
```Bash
dbmate up
```
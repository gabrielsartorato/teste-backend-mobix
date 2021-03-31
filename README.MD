# Teste Mobix Backend

Instruções para correção do desafio

## Books

Para os livros foram cadastrados os seguintes campos da Api: name, isbn, authors, numberOfPages, publisher, country, mediaType, released e cover (formato base64)

- Ids dos livros cadastrados

```json
  "6063a5045622a91f4cbf6ad1",
  "6063a5455622a91f4cbf6ad2",
  "6063a5755622a91f4cbf6ad3",
  "6063a5d85622a91f4cbf6ad4",
  "6063a6194ad59c20f0a6056b",
  "6063a63c4ad59c20f0a6056c",
  "6063a65e4ad59c20f0a6056d",
  "6063a67a4ad59c20f0a6056e",
  "6063a69f4ad59c20f0a6056f",
  "6063a6c34ad59c20f0a60570"
```

- Requisições

Recuperação de livros

```js
  Executar requisição HTTP - GET em /books para recuperar todos os livros
  Executar requisição HTTP - GET em /books/:id para recuperar um livro em especifico, onde está :id trocar por um dos ids lsitados acima
```

Inserção Book

```js
  Executar requisição HTTP - POST em /books, usar o multipart (insominia) para a requisição devido ser inserido imagem junto: 

  {
    "name": "The Mystery Knight",
    "isbn": "978-0765360267",
    "authors: [ "George R. R. Martin"],
    "numberOfPages": 832,
    "publisher": "Tor Fantasy",
    "country": "United States",
    "mediaType": "Paperback",
    "released": "2011-03-29T00:00:00",
    "file": file
  }
```

## Characters

Para os personagens foram cadastrados os seguintes campos da Api: name, gender, culture, born, aliases, povBooks e playdBy.

- Ids characters

```json
  "6063a8cf2b77ca266a35d13f",
  "6063a8cf2b77ca266a35d140",
  "6063a8cf2b77ca266a35d141",
  "6063a8cf2b77ca266a35d142",
  "6063a8cf2b77ca266a35d143",
  "6063a8cf2b77ca266a35d144",
  "6063c7729d4eed6f17496c22",
  "6063c7729d4eed6f17496c23",
  "6063c7729d4eed6f17496c24",
  "6063c7729d4eed6f17496c25",
  "6063c7729d4eed6f17496c26",
  "6063c7729d4eed6f17496c27",
  "6063c7739d4eed6f17496c28",
  "6063c7739d4eed6f17496c29",
  "6063c7739d4eed6f17496c2a",
  "6063c7739d4eed6f17496c2b",
  "6063c7739d4eed6f17496c2c",
  "6063c7739d4eed6f17496c2d",
  "6063c7749d4eed6f17496c2e",
  "6063c7749d4eed6f17496c2f"
```

Recuperação de characters

```js
  Executar requisição HTTP - GET em /character/:id para recuperar um character em especifico, onde está :id trocar por um dos ids listados acima
```

Inserção characters

```js
  Executar requisição HTTP - POST em /character, dentro do body colocar um array no seguinte formato:

  [
    {
      "name": "Arya Stark",
      "gender": "Female",
      "culture": "Northmen",
      "born": "In 289 AC, at Winterfell",
      "aliases": [
        "Arya Horseface",
        "Arya Underfoot",
        "Arry",
        "Lumpyface",
        "Lumpyhead",
        "Stickboy",
        "Weasel",
        "Nymeria",
        "Squan",
        "Saltb",
        "Cat of the Canaly",
        "Bets",
        "The Blind Girh",
        "The Ugly Little Girl",
        "Mercedenl",
        "Mercye"
      ],
      "povBooks": [
        "6063a65e4ad59c20f0a6056d",
        "6063a63c4ad59c20f0a6056c",
        "6063a6194ad59c20f0a6056b",
        "6063a5755622a91f4cbf6ad3",
        "6063a67a4ad59c20f0a6056e"
      ],
      "playedBy": [
        "Maisie Williams"
      ]
    }
  ]

  No exemplo acima é necessário recuperar primeiro os livros cadastrados para que seja feito a referência dos livros em "povBook"
```

## Docker

Foi utilizado docker para a criação de uma imagem da aplicação. Para subir a imagem fazer os seguintes passos:

- Criar a imagem à partir do docker file da raiz do projeto.
  
```docker
  docker build -t gabrielsartorato/testemobix .
```

- Subir o container à partir da imagem criada acima, será criado um container com o nome testemobix que ficara rodando em background respondendo à porta local 3000.

```docker
  docker container run -d --name testemobix -p 3000:3000 gabrielsartorato/testemobix
```

- Após a criação do container, rodar o comando abaixo para subi-lo.

```docker
  docker container start docker container start testemobix
```

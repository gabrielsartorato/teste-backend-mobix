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
  Executar HTTP - GET em /books para recuperar todos os livros
  Executar HTTP - GET em /books/:id para recuperar um livro em especifico, onde está :id trocar por um dos ids lsitados acima
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

```js
  Executar HTTP - GET em /character/:id para recuperar um character em especifico, onde está :id trocar por um dos ids listados acima
```
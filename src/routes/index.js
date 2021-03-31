const { Router } = require('express');
const multer = require('multer');
const { config } = require('../infra/multer');

const { BooksController } = require('../controller/BooksController');
const { CharacterController } = require('../controller/CharacterController');

const upload = multer(config);

const routes = Router();

const booksController = new BooksController();
const characterController = new CharacterController();

routes.post('/books', upload.single('file'), booksController.create);
routes.get('/books', booksController.index);
routes.get('/books/:id', booksController.show);
routes.post('/character', characterController.create);
routes.get('/character/:id', characterController.show);

module.exports = {
  routes,
};

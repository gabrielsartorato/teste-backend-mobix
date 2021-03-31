const { BookRepository } = require('../repositories/books/BookRepository');
const { CreateBookService } = require('../services/CreateBookService');
const { IndexBookService } = require('../services/IndexBookService');
const { ShowBookService } = require('../services/ShowBookService');

class BooksController {
  async index(req, res) {
    const bookRepository = new BookRepository();
    const indexBookService = new IndexBookService(bookRepository);

    const books = await indexBookService.execute();

    return res.json(books);
  }

  async show(req, res) {
    const { id } = req.params;

    const bookRepository = new BookRepository();
    const bookService = new ShowBookService(bookRepository);

    const book = await bookService.execute(id);

    return res.json(book);
  }

  async create(req, res) {
    const formData = req.body;
    const { filename } = req.file;

    const bookRepository = new BookRepository();
    const createBookService = new CreateBookService(bookRepository);

    const createBook = await createBookService.execute(formData, filename);

    return res.json(createBook);
  }
}

module.exports = {
  BooksController,
};

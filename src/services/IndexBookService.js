class IndexBookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute() {
    const books = await this.bookRepository.findAll();

    return books;
  }
}

module.exports = {
  IndexBookService,
};

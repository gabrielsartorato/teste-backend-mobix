class ShowBookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }
  async execute(id) {
    const book = await this.bookRepository.findOne(id);

    return book;
  }
}

module.exports = {
  ShowBookService,
};

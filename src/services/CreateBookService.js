const fs = require('fs');
const path = require('path');

class CreateBookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(book, filename) {
    const requiredFields = [
      'name',
      'isbn',
      'authors',
      'numberOfPages',
      'publisher',
      'country',
      'mediaType',
      'released',
    ];

    for (const field of requiredFields) {
      if (!book[field]) {
        throw new Error(`Campo ${field} é obrigatório`);
      }
    }

    const img = path.resolve(__dirname, '..', '..', `upload/${filename}`);
    const bitmap = fs.readFileSync(img);

    const encImage = new Buffer.from(bitmap).toString('base64');

    return await this.bookRepository.insertOne(book, encImage);
  }
}

module.exports = {
  CreateBookService,
};

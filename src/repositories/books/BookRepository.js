const { ObjectID } = require('mongodb');
const { MongoHelper } = require('../../infra/db');

class BookRepository {
  async insertOne(book, img) {
    const bookColletion = await MongoHelper.getCollection('books');

    Object.assign(book, { cover: img });

    const result = await bookColletion.insertOne(book);

    return MongoHelper.map(result.ops[0]);
  }

  async findOne(id) {
    const bookColletion = await MongoHelper.getCollection('books');

    const book = await bookColletion.findOne({ _id: ObjectID(id) });

    return book;
  }

  async findAll() {
    const bookColletion = await MongoHelper.getCollection('books');

    const books = await bookColletion.find().toArray();
    return books;
  }
}

module.exports = {
  BookRepository,
};

const { ObjectID } = require('mongodb');
const { MongoHelper } = require('../../infra/db.js');

class CharacterRepository {
  async create(characters) {
    const characterColletion = await MongoHelper.getCollection('characters');
    const result = await characterColletion.insertMany(characters);

    return MongoHelper.map(result.ops);
  }

  async findById(id) {
    const characterColletion = await MongoHelper.getCollection('characters');

    const character = await characterColletion.findOne({ _id: ObjectID(id) });

    return character;
  }
}

module.exports = {
  CharacterRepository,
};

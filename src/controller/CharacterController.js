const {
  CharacterRepository,
} = require('../repositories/characters/CharacterRepository');

const {
  CreateCharacterService,
} = require('../services/CreateCharacterService');

const { IndexBookService } = require('../services/IndexBookService');
const { ShowCharacterService } = require('../services/ShowCharacterService');
const { BookRepository } = require('../repositories/books/BookRepository');

class CharacterController {
  async show(req, res) {
    const { id } = req.params;

    const bookRepository = new BookRepository();
    const indexBookService = new IndexBookService(bookRepository);
    const characterRepository = new CharacterRepository();

    const findCharacter = new ShowCharacterService(
      characterRepository,
      indexBookService,
    );

    const character = await findCharacter.execute(id);

    return res.json(character);
  }

  async create(req, res) {
    const characters = req.body;

    const characterRepository = new CharacterRepository();
    const createCharacterService = new CreateCharacterService(
      characterRepository,
    );

    const insertedCharacters = await createCharacterService.execute(characters);

    return res.json(insertedCharacters);
  }
}

module.exports = {
  CharacterController,
};

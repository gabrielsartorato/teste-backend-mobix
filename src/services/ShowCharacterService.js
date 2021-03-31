class ShowCharacterService {
  constructor(characterRepository, indexBookService) {
    this.characterRepository = characterRepository;
    this.indexBookService = indexBookService;
  }

  async execute(id) {
    const character = await this.characterRepository.findById(id);

    const { povBooks } = character;

    const books = await this.indexBookService.execute();

    const characterBook = povBooks.map((book) => {
      return books.find((findBook) => String(findBook._id) === book);
    });

    characterBook.map((book) => delete book.cover);

    Object.assign(character, { povBooks: characterBook });

    return character;
  }
}

module.exports = {
  ShowCharacterService,
};

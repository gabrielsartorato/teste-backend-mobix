class CreateCharacterService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository;
  }

  async execute(characters) {
    const createdCharacters = await this.characterRepository.create(characters);

    return createdCharacters;
  }
}

module.exports = {
  CreateCharacterService,
};

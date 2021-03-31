const { MongoClient } = require('mongodb');

const MongoHelper = {
  client: null,
  uri: null,

  async connect(uri) {
    this.uri = uri;
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },

  async disconnect() {
    await this.client.close();
    this.client = null;
  },

  async getCollection(name) {
    if (!this.client.isConnected()) {
      await this.connect(this.uri);
    }
    return this.client.db().collection(name);
  },

  map: (collection) => {
    const { _id, ...collectionWithoutId } = collection;

    return Object.assign({}, collectionWithoutId, { id: _id });
  },
};

module.exports = {
  MongoHelper,
};

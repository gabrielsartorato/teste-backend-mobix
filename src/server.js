require('reflect-metadata');
require('dotenv').config();
const express = require('express');
require('express-async-errors');
const cors = require('cors');

const { MongoHelper } = require('./infra/db');

const app = express();

const { routes } = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use(routes);

MongoHelper.connect(process.env.MONGO_URL).then(async () => {
  app.listen(3000, () => {
    console.log('Server is running at port 3000');
  });
});

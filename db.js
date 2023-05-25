// db.js

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'nodesample';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = {
  connect,
  client,
  dbName,
  url
};
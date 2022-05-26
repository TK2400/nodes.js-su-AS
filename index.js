require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://TK:TK2400@cluster0.y5udm.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/houses', (req, response) => {
  client.connect(async () => {
    const collection = client.db('namu-katalogas').collection('namai');
    const anotherResult = await collection.find({}).toArray();
    response.json(anotherResult);
    client.close();
  });
});

app.post('/houses', (req, res) => {
  client.connect(async () => {
    const collection = client.db('namu-katalogas').collection('namai');
    const result = await collection.insertOne({
      pardavejoId: req.body.pardavejoId,
      namoTipas: req.body.namoTipas,
      aukstuSkaicius: req.body.aukstuSkaicius,
      skelbimoIkelimoData: req.body.skelbimoIkelimoData,
    });
    res.json(result);
    client.close();
  });
});

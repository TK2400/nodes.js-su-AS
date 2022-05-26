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

app.get('/books', (req, response) => {
  client.connect(async () => {
    const collection = client.db('knygu-projektas').collection('knygos');
    // const result = await collection.insertOne({
    //   name: 'Rytas perone',
    //   pages: 150,
    // });
    // console.log(result);
    const anotherResult = await collection.find({}).toArray();
    response.json(anotherResult);
    client.close();
  });
});

// app.get('/books/prideti-knyga', (req, res) => {
//   knygos.push('o,isidejo nauja knyga');
//   res.json(knygos);
// });

app.post('/books', (req, res) => {
  client.connect(async () => {
    const collection = client.db('knygu-projektas').collection('knygos');
    const result = await collection.insertOne({
      name: req.body.name,
      pages: req.body.pages,
    });
    res.json(result);
    client.close();
  });
});

require('dotenv').config();

const express = require('express');

const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://TK:TK2400@cluster0.y5udm.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

console.log(process.env.PORT);// taip pasiekiami aplinkos kintamieji

const knygos = [
  'tadas blinda ',
  'biblija ',
  'senis ir jura ',
  'siuvejo kronikos ',
];

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

// app.get('/book/:from/:to', (request, response) => {
//   const fromIndex = Number(request.params.from);
//   const fromTo = Number(request.params.to);
//   const atgnybtasMasyvas = knygos.slice(fromIndex, fromTo + 1);

//   response.json(atgnybtasMasyvas);
// });

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

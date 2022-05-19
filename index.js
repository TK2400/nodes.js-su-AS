require('dotenv').config();

const express = require('express');

const app = express();

console.log(process.env.PORT);// taip pasiekiami aplinkos kintamieji

const knygos = [
  'tadas blinda ',
  'biblija ',
  'senis ir jura ',
  'siuvejo kronikos ',
];

// console.log(knygos.slice(0, 3));

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/book/:from/:to', (request, response) => {
  const fromIndex = Number(request.params.from);
  const fromTo = Number(request.params.to);
  const atgnybtasMasyvas = knygos.slice(fromIndex, fromTo + 1);

  response.json(atgnybtasMasyvas);
});

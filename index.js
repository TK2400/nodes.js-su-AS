// Sukurti ats "/books/:from/:to" maršrutą, kuris iš serverio grąžina JSON masyvą pasirinktų knygų.
const express = require('express');

const app = express();

const knygos = [
  'tadas blinda ',
  'biblija ',
  'senis ir jura ',
  'siuvejo kronikos ',
];

console.log(knygos.slice(0, 3));

app.listen(9000, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/books/:from/:to', (request, response) => {
  const fromIndex = Number(request.params.from);
  const fromTo = Number(request.params.to);
  const atgnybtasMasyvas = knygos.slice(fromIndex, fromTo + 1);

  response.json(atgnybtasMasyvas);
});

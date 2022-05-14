// Sukurti atskirą "/books/:id"  maršrutą, kuris iš serverio grąžina pasirinktos knygos pavadinimą.


const express = require('express');
const app = express();


const knygos = [
    "tadas blinda",
    "biblija",
    "senis ir jura"
]

app.listen(9000, () => {
    console.log(`Serveris paleistas. Laukia užklausų`);
});

app.get('/books/:id', (request, response) => {
    const knygosId = request.params.id
    response.json(knygos[knygosId])

})
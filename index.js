const express = require('express');
const app = express();


const knygos = [
    'haris poteris',
    'biblija',
    '1984'
]


app.listen(9000, () => {
    console.log(`Serveris paleistas. Laukia užklausų`);
});

app.get('/books', (request, response) => {

    response.json(knygos)

})
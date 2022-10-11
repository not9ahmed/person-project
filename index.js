const express = require('express');
const { readFile } = require('fs').promises;

const app = express();



// app.get(url, callbackFunctionToHandleRequest())
// Request: User Incoming data
// Response: User Outcoming Data

app.get('/', async (request, response) => {


    response.send( await readFile('./home.html', 'utf8') );

});


app.listen(process.env.PORT || 3000, () => console.log(`App Link http://localhost:3000`))
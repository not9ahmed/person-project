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

/*
Database




INSERT INTO PERSON
(name, email, dob, country)
VALUES ('Ahmed', 'ahmedl@gmail.com' ,  TO_DATE('03/09/1999', 'DD/MM/YYYY'), 'Bahrain');


INSERT INTO PERSON
(name, email, dob, country)
VALUES ('Yousif', 'yousif@gmail.com' ,  TO_DATE('04/05/1999', 'DD/MM/YYYY'), 'Bahrain');



*/
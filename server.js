const express = require('express');
const db = require('./db/seed');
const swig = require('swig');

const app = express();

swig.setDefaults({cache: false});
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.use('/', require('./controllers'));


const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`App listening on port ${port}`));

const express = require('express');
const db = require('./models');
const swig = require('swig');
const path = require('path');

const app = express();

swig.setDefaults({cache: false});
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/bootstrap', express.static(path.join(__dirname, './node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use('/', require('./controllers'));


const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`App listening on port ${port}`));

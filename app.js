const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const subjectsRoutes = require('./routes/subjects');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', subjectsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
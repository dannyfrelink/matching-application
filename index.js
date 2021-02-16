var express = require('express');
var expHandlebars  = require('express-handlebars');
var countriesList = require('countries-list');

var landen = Object.values(countriesList.countries);

var app = express();
var port = 5555;

app.use(express.static('static/public'));

app.engine('handlebars', expHandlebars());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('profiel', {landen});
});

app.get('/profiel', (req, res) => {
    res.render('profiel');
});

app.get('/profiel/persoonsgegevens', (req, res) => {
    res.send('Dit is de pagina waarop de persoonsgegevens worden ingevuld');
});

app.get('/profiel/fotos', (req, res) => {
    res.send('Dit is de pagina waarop de fotos toe te voegen zijn.');
});

app.get('/profiel/zoekopdracht', (req, res) => {
    res.send('Dit is de pagina waarop je kan aangeven waar je naar op zoek bent om mee te matchen.');
});

app.get('/profiel/reizen', (req, res) => {
    res.send('Dit is de pagina waar je kan aangeven welke reizen je allemaal wilt maken.');
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.')
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

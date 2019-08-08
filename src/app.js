const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('env2')('.env');


const routes = require('./routes/index');
const helpers = require('./views/helpers/index')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.engine(
    'hbs',
    exphbs(
        {
            extname: 'hbs',
            layoutsDir: path.join(__dirname, 'views', 'layouts'),
            partialsDir: path.join(__dirname, 'views', 'partials'),
            defaultLayout: 'main',
            helpers: helpers
        }
    )
)

app.use(express.static('public'))
app.set('port', process.env.PORT || 4030);
app.use(routes);
app.use((req,res) => {
  res.status(400);
  res.render('404')
})
app.use((err, req, res, next) => {
  res.status(500);
  res.render('500')
})

module.exports = app;

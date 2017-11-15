const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const path = require('path');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/', index);
app.use('/users', users);

//catch our 404s
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).render('err');
})


app.listen(8000, function() {
  console.log("Listening on port 8000...");
})

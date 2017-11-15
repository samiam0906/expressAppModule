var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view-engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.listen(8000, function() {
  console.log("Listening on port 8000...");
})

const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback')
const port = process.env.PORT || 8081;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));
app.use(history())

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
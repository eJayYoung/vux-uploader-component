const express = require('express');
const http = require('http');

const app = express();

app.post('/upload', function(req, res) {
  console.log(req, res);
});

http.createServer(app).listen(8081, function() {
  console.log('Express Server listening on port 8081');
});

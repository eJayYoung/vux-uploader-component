const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const http = require('http');

const app = express();
const upload = multer();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

app.post('/upload', upload.array('file', 5), function(req, res) {
  if (req.files.length > 0) {
    console.log('upload success');
    res.send({
      data: 'success',
      code: 200,
      msg: null,
    });
  }
});

http.createServer(app).listen(9090, function() {
  console.log('Express Server listening on port 9090');
});

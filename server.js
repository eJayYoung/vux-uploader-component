const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const http = require('http');

const app = express();
const upload = multer();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const corsOptions = {
  origin: true,
  credentials: true
}

app.use(cors(corsOptions));

app.post('/upload', upload.any(), function(req, res) {
  if (req.files.length > 0 && req.files.length <= 5) {
    res.send({
      data: req.files,
      code: 200,
      msg: null,
    });
  } else {
    res.send({
      code: 500,
      msg: 'upload error'
    })
  }
});

http.createServer(app).listen(9090, function() {
  console.log('Express Server listening on port 9090');
});

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  console.log(__dirname);
  app.use(express.static(`${__dirname}/covid19UI/`));
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
  app.listen(port);
  console.log(`GUI's available on port ${port}`);
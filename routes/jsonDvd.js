var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.params.name;
  var test = "test dvd " + req.params.name;
  var data = {
    nome : name,
    test : test,
    site : "david.petro"
  };
  res.json(data);
});

module.exports = router;

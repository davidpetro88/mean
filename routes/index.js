var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hear");
  res.render('index', { title: 'Express', name: 'David Petro' });
});


router.get('/partials/:name', function(req, res, next) {
  var name = req.params.name;
  res.render('partials/' + name);
});

router.get('/angular/:diretorio/:name', function(req, res, next) {
  var diretorio = req.params.diretorio;
  var name = req.params.name;
  res.render(diretorio + '/' + name);
});
/*

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

*/
module.exports = router;

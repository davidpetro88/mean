var express = require('express');
var router = express.Router();
var UserModel = require("../models/user");

/* GET users listing.*/
router.get('/', function(req, res, next) {
  UserModel.list(req,res);
});

/* GET users listing find by id.*/
router.get('/:id', function(req, res, next) {
  UserModel.get(req,res);
});

/* POST users.*/
router.post('/', function(req, res, next) {
  UserModel.create(req,res);
});

/* PUT users.*/
router.put('/:id', function(req, res, next) {
  UserModel.update(req,res);
});

/* DELETE users.*/
router.delete('/:id', function(req, res, next) {
  UserModel.delete(req,res);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lightning' , message: "Welcome to Lightning Payment System" });
});

module.exports = router;

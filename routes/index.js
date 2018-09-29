var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



mongoose.connect('mongodb://localhost/test');
var db=mongoose.connection;
db.once('open',function(){console.log("connected to database");});
db.on('error',function(err){console.log(err);});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GOOGLE AUTHENTICATION' });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});


router.get('/Portfolio',function(req,res){
  res.render('portfolio',{title:'Wallet'})
});

module.exports = router;


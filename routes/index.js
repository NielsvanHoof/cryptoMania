var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
  });


router.get("/Portfolio", async (req, res) => {
      res.render('portfolio', { title: 'Wallet' });
  })
module.exports = router;


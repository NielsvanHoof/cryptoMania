const Router = require('express-promise-router')
const db = require('../server/server')
const router = new Router()

router.get('/',  async (req, res) => {
    res.render('register',{title:'Register'});
});

module.exports = router;

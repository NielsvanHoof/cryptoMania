const Router = require('express-promise-router')
const db = require('../server/server')
const router = new Router()

router.use("/:id", async (req, res) => {
    res.render('portfolio', { title: 'Wallet' });
})

module.exports = router;



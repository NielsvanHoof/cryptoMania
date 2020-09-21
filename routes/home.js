const Router = require('express-promise-router')
const db = require('../server/server')
const router = new Router()


router.get('/', async (req, res) => {
        res.render('index', { title: 'Welcome' });
});

module.exports = router;

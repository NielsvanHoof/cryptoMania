/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const db = require('../models');
const passport = require('../config/passport');


module.exports = function(app,passport){

    
// restrict index for logged in user only
app.get('/', function (req, res) {
    res.render('index', { title: 'Index'});
});

app.post('/',function (req,res){
})

app.get('/portfolio/:username', function (req, res) {
    res.render('portfolio', { title: 'cryptofolio'});
})


// route to register page
app.get('/register', function (req, res) {
    res.render('register', { title: 'Register' });
});

// route for register action
app.post('/register',passport.authenticate('local-signup'),function (req, res) {

});

// route to login page
app.get('/login', function (req, res) {
    res.render('login', { title: 'Login' });
});

// route for login action
app.post('/login',passport.authenticate('local-signin'), function (req, res) {

});

// route for logout action
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if(err) console.log(err);

        res.redirect('/');
      })
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');

}
}




/* eslint-disable no-unused-vars */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const uuid = require('uuid');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const routes = require('./routes');
const fileStore = require('session-file-store')(session);
const mysql = require('mysql2');
const models = require('./models');

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:null,
    database:'cryptomania'
})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    genid: (req) => {
        return uuid.v1();
    },
    name: 'Crypto-session',
    store:new fileStore(),
    secret: 'crypto-session',
    resave:false,
    saveUninitialized:false,
}))
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app,passport);

require('./config/passport')(passport,models.User);



app.use(function (req, res, next) {
    res.locals.login = req.user;
    return next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

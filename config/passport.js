/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');

module.exports = function (passport, Auth) {

    const LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(
        
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback

        }, function (req, username, password, done) {
            console.log("Signup for - ", username)
            const generateHash = function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            }
            Auth.findOne({
                where: {
                    userName: username
                }
            }).then(function (user) {
                //console.log(user);
                if (user) {
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                } else {
                    const userPassword = generateHash(password);
                    const data = {
                        username: username,
                        password: userPassword,
                    };

                    Auth.create(data).then(function (newUser, created) {
                        if (!newUser)return done(null, false);
                        if (newUser) return done(null, newUser)
                    });
                    }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
           
        {

            // by default, local strategy uses username and password, we will override with email

            usernameField: 'username',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, username, password, done) {

            const isValidPassword = function (userpass, password) {
                return bcrypt.compareSync(password, userpass);
            }
            console.log("logged to", username)
            Auth.findOne({
                where: {
                    userName: username
                }
            }).then(function (user) {
                console.log(user)
                if (!user) {
                    return done(null, false, {
                        message: 'User does not exist'
                    });
                }

                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }


                const userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));

    //serialize
    passport.serializeUser(function (auth, done) {
        done(null, auth.userId);
    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        Auth.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
}

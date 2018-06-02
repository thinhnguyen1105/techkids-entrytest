
const userController = require('../users/controller');
const bcrypt = require('bcryptjs');

const login = ({
        username,
        password
    }) =>
    new Promise((resolve, reject) => {
        userController
            .getUserForAuth(username)
            .then(user => {
                console.log(user)
                if (!user || !user.password) {
                    reject({
                        status: 400,
                        err: "Incorrect username"
                    })
                } else {
                    bcrypt
                        .compare(password, user.password)
                        .then(result => {
                            if (result) {
                                resolve({
                                    username: user.username,
                                    id: user._id
                                });
                            } else {
                                reject({
                                    status: 400, // bad request 
                                    err: "Incorrect password "
                                })
                            }
                        })
                        .catch(err => reject({
                            status: 501,
                            err: err
                        }));
                
                }
                // Success
                // Incorrect Username 
                // Incorrect Password 
                // Internal Server Error 
            })
            .catch(err => reject({
                status: 501,
                err: err
            }));
    })

    module.exports = {
        login
    }
// const passport = require("passport");
// const bcrypt = require("bcrypt");
const User = require("../database/models/User.js");

// Handles the GET, POST, PUT, and DELETE routes for users
module.exports = {
    GET: function(request, response) {
        // TODO: Implement getting user
        response.json(Users);
        throw new Error("/api/user GET route not implemented yet.");
    },

    // User = {
    //         firstName: String,
    //         lastName: String,
    //         email: String,
    //         username: String,
    //         password: String,
    //         faves: [],
    //     };

    // throw new Error("/api/user POST route not implemented yet.");

    POST: async function(request, response) {
        // TODO: Implement posting new users
        var userData = request.body;
        var newUser = await User.create(userData);
        response.send(newUser);
        // newUser
        //     .then(User => {
        //         console.log("dotthen");
        //         res.json(User);
        //     })
        //     .catch(err => {
        //         console.log("dotcatch");
        //         response.status(400).send(err);
        //     });
        // response.send(newUser);
    },

    PUT: function(request, response) {
        // TODO: Implement updating users info
        throw new Error("/api/user PUT route not implemented yet.");
    },
    DELETE: function(request, response) {
        // TODO: Implement deleteing a user
        throw new Error("/api/user DELETE route not implemented yet.");
    },
};

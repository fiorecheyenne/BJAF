const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../database/models/User.js");

// Handles the GET, POST, PUT, and DELETE routes for users
module.exports = {
    GET: function(request, response) {
        // TODO: Implement getting user
        response.json(Users);
        throw new Error("/api/user GET route not implemented yet.");
    },

    POST: async function(request, response) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(request.body.password, salt);
        var userData = request.body;
        var newUser = await User.create({
            email: userData.email,
            username: userData.username,
            password: hash,
            faves: userData.faves,
        });
        response.send(newUser);
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

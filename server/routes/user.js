const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("./database/models/User.js");
const tokenizer = require("./tokenizer");
const decoder = require("./decoder");

// Handles the GET, POST, PUT, and DELETE routes for users
module.exports = {
    GET: function(request, response) {
        console.log(request);
        //--------------------INSTRUCTIONS-----------------------
        // receive Token
        // Decode Token
        // pull username from token
        // find a user by username
        // return Username, Name, Faves:[]
        //--------------------------------------------------------
        // ------------------There was an attempt-----------------
        // console.log(decoder(request.body.token));
        // let loginUser = await User.findOne({
        //     username: request.body.username,
        // });
        // response.json(decoder(request.body.token));
        //-----------------------------------------------------------
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
        response.send(tokenizer(newUser));
    },

    PUT: async function(request, response) {
        // receive token
        // Decode Token
        // pull _:id from token
        // find a user by _:id in DB
        // pull faves:[] from DB by _:id
        // update Faves:[] with new favorite
        // return Username, Name, Faves:[]

        console.log("hit");
        // TODO: Implement updating users info
        let loginUser = await User.findOne({
            username: request.body.username,
        });

        let updateFaves = await User.updateOne({ username: loginUser });

        console.log(updateFaves);
        console.log(decoder(request.body.token));
        response.send(decoder(request.body.token));
        throw new Error("/api/user PUT route not implemented yet.");
    },

    DELETE: function(request, response) {
        // receive token
        // Decode Token
        // pull username from token
        // find a user by username
        // pull faves:[] from DB by User
        // update Faves:[] with new favorite
        // return Username, Name, Faves:[]
        throw new Error("/api/user DELETE route not implemented yet.");
    },
};

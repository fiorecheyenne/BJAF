const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../database/models/User");
const tokenizer = require("../tokenizer");
const decoder = require("../decoder");
const tokenKey = process.env.TOKEN_KEY;

// Handles the GET, POST, PUT, and DELETE routes for users
module.exports = {
    GET: async function(request, response) {
        // receive Token
        let userToke = request.get("Auth-Token");
        // Decode Token
        let payload = decoder(userToke);
        // find a user by _id:
        let loginUser = await User.findOne({
            _id: payload.payload,
        });
        // return Username, Name, Faves:[]
        let userInfo = { username: loginUser.username, faves: loginUser.faves };
        response.json(userInfo);
    },

    POST: async function(request, response) {
        try {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(request.body.password, salt);
            var userData = request.body;
            var newUser = await User.create({
                name: userData.name,
                email: userData.email,
                username: userData.username,
                password: hash,
                faves: userData.faves,
            });
            response
                .send({
                    success: true,
                    errorMessage: "",
                    token: tokenizer(newUser),
                })
                .end();
        } catch (err) {
            response
                .send({
                    success: false,
                    errorMessage: "Was unable to create the user",
                    token: null,
                })
                .end();
        }
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

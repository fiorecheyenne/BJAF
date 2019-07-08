const User = require("../database/models/User.js");
const bcrypt = require("bcrypt");
const tokenizer = require("../tokenizer");

module.exports = {
    POST: async function(request, response) {
        // find a user by username
        let loginUser = await User.findOne({
            username: request.body.username,
        });
        // check input password against DB
        passCheck = bcrypt.compareSync(request.body.password, loginUser.password);
        if (passCheck) {
            console.log(passCheck);
            response.json(tokenizer(loginUser));
        } else {
            response.json({});
        }
    },
};


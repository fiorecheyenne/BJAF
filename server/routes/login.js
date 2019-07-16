const User = require("../database/models/User");
const bcrypt = require("bcrypt");
const tokenizer = require("../tokenizer");

module.exports = {
    POST: async function(request, response) {
        // find a user by username
        let loginUser = await User.findOne({
            username: request.body.user,
        });
        if (!loginUser) {
            // search by email if user not found
            loginUser = await User.findOne({
                email: request.body.user,
            });
        }
        // check input password against DB
        passCheck = bcrypt.compareSync(request.body.password, loginUser.password);
        if (passCheck) {
            response.json(tokenizer(loginUser));
        } else {
            response.json({});
        }
    },
};

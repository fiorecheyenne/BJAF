const User = require("../database/models/User.js");
const bcrypt = require("bcrypt");

module.exports = {
    POST: async function(request, response) {
        //LOGIN the user
        // find a user by username
        // pull the hashed password from db
        // boolean = bcrypt.compareSync(INPUT PASS, HASHED PASS FROM DB)
        // if (boolean){return token}
        // if (!boolean){DONT WORRY ABOUT IT}

        let loginUser = await User.findOne({username:request.body.username});
        response.json(loginUser);
    },
};

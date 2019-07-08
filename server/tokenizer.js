const jwt = require("jsonwebtoken");
const tokenKey = process.env.TOKEN_KEY;

module.exports = function signing(user) {
    let token = jwt.sign(user, tokenKey);
    return {
        username: user.username,
        email: user.email,
        password: token,
    };
    };

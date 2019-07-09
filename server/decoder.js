const jwt = require("jsonwebtoken");
require("dotenv").config();
const tokenKey = process.env.TOKEN_KEY;

module.exports = function decoder(token) {
    let payload = jwt.verify(token, tokenKey);
    return {
        payload,
    };
};

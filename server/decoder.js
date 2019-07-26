const jwt = require("jsonwebtoken");
require("dotenv").config();
const tokenKey = process.env.TOKEN_KEY;

module.exports = function decoder(token) {
    try {
        let payload = jwt.verify(token, tokenKey);
        return {
            payload,
        };
    } catch (err) {
        return {};
    }
};

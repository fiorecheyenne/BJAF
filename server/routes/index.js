const randomizer = require("./randomizer");
const users = require("./user");
<<<<<<< HEAD
const auth = require("./auth");
=======
const login = require("./login");
>>>>>>> 52c1b96a4375f435b6cfc5e2eaae8ac5984c7a53

module.exports = function(app) {
    app.get("/api/randomizer", randomizer.GET);
    app.get("/api/user/:id", users.GET);
    app.post("/api/user", users.POST);
    app.put("/api/user/:id", users.PUT);
    app.delete("/api/user/:id", users.DELETE);
    app.post("/api/user/login/", login.POST);
};

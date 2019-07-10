const randomizer = require("./randomizer");
const users = require("./user");
const login = require("./login");

module.exports = function(app) {
    app.get("/api/randomizer", randomizer.GET);
    app.get("/api/user/", users.GET);
    app.post("/api/user", users.POST);
    app.put("/api/user/:id", users.PUT);
    app.delete("/api/user/:id", users.DELETE);
    app.post("/api/user/login/", login.POST);
};

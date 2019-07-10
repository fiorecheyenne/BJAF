const randomizer = require("./randomizer");
const users = require("./user");
const login = require("./login");
const faves = require("./faves");

module.exports = function(app) {
    app.get("/api/randomizer", randomizer.GET);
    app.get("/api/user/", users.GET);
    app.post("/api/user/", users.POST);
    app.delete("/api/user/:id", users.DELETE);
    app.post("/api/user/login/", login.POST);
    app.put("/api/faves/", faves.PUT);
    app.delete("/api/faves/", faves.DELETE);
};

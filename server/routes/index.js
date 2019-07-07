const randomizer = require("./randomizer");
const users = require("./user");
const auth = require("./auth")

module.exports = function(app) {
    app.get("/api/randomizer", randomizer);
    app.get("/api/user/:id", users.GET);
    app.post("/api/user", users.POST);
    app.put("/api/user/:id", users.PUT);
    app.delete("/api/user/:id", users.DELETE);
    app.post("/api/auth/:id", auth.POST);
};

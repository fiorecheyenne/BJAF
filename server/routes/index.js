const randomizer = require("./randomizer");
const users = require("./user");

module.exports = function(app) {
    app.get("/api/randomizer", randomizer);
    app.get("/api/user", users.GET);
    app.post("/api/user", users.POST);
    app.put("/api/user", users.PUT);
    app.delete("/api/user", users.DELETE);
};

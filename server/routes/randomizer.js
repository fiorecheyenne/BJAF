const randomizer = require("../randomizer.js");

// Handles the /api/randomizer GET route
module.exports = {
    GET(request, response) {
        console.log(request.query)
        response.send(randomizer(request.query.base));
    },
};

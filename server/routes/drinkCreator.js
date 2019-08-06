const creator = require("../creator");

module.exports = {
    POST(request, response) {
        console.log(request.body);
        response.json(creator(request.body.base, request.body.subset));
    },
};
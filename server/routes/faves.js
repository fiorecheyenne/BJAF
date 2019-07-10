const User = require("../database/models/User");
const tokenizer = require("../tokenizer");
const decoder = require("../decoder");
const tokenKey = process.env.TOKEN_KEY;

module.exports = {
    PUT: async function(request, response, status) {
        let item = request.body.item;
        // receive token
        let userToke = request.get("Auth-Token");
        // decode  _:id from token
        let payloadID = decoder(userToke).payload;
        // find a user by _:id in DB
        console.log(item);
        let updatedFaves = await User.updateOne(
            {
                _id: payloadID,
            },
            { $addToSet: { faves: item } }
        );
        let isAdded = updatedFaves.nModified;
        if (isAdded) {
            console.log({ status: 200, Message: item + " Added to faves." });
            response.send({ status: 200, Message: item + " Added to faves." });
        }
        if (!isAdded) {
            console.log({ status: 500, Message: item + " could not be added to faves because it already exists in array." });
            response.send({ status: 500, Message: item + " is already in your faves." });
        }
    },
    DELETE: async function(request, response) {
        try {
            if (!request) throw "new err";
        } catch (err) {
            console.log("input");
        }
        let item = request.body.item;
        // receive token
        let userToke = request.get("Auth-Token");
        // decode  _:id from token
        let payloadID = decoder(userToke).payload;
        // find a user by _:id in DB
        let pullFave = await User.updateOne(
            {
                _id: payloadID,
            },
            { $pull: { faves: item } }
        );
        let isAdded = pullFave.nModified;
        console.log(pullFave);

        if (isAdded) {
            console.log({ status: 200, Message: item + " Deleted from faves." });
            response.send({ status: 200, Message: item + " Deleted from faves." });
        }
        if (!isAdded) {
            console.log({ status: 500, Message: item + " could not be deleted from faves because does not exist in array." });
            response.send({ status: 500, Message: item + " does not exist in faves." });
        }
    },
};

const User = require("../database/models/User");
const tokenizer = require("../tokenizer");
const decoder = require("../decoder");
const tokenKey = process.env.TOKEN_KEY;

module.exports = {
    PUT: async function(request, response) {
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
        if (!item || !item.name) {
            console.log("item dont exist");
            response.send({ status: 500, message: "Your fave needs a name before you save it! get creative!" });
            return;
        }
        if (isAdded) {
            console.log({ status: 200, Message: item + " Added to faves." });
            response.send({ status: 200, Message: item + " Added to faves." });
            return;
        }
        if (!isAdded) {
            console.log({ status: 500, Message: item + " could not be added to faves because it already exists in array." });
            response.send({ status: 500, Message: item + " is already in your faves." });
            return;
        }
    },

    DELETE: async function(request, response) {
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

        class FaveResult {
            constructor(stat, msg){
                this.status = stat;
                this.message = msg;
            }
        }

        if (!item || !item.name) {
            console.log("item dont exist");
            response.send({ status: 500, message: "invalid input" });
            return;
        }
        if (isAdded) {
            console.log({ status: 200, message: item + " deleted from faves." });
            response.send({ status: 200, message: item + " deleted from faves." });
            return;
        }
        if (!isAdded) {
            console.log({ status: 500, message: item + " could not be deleted from faves because does not exist in array." });
            response.send({ status: 500, message: "'" + item.name + "' does not exist in faves." });
            return;
        }
    },
};

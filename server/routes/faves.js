const User = require("../database/models/User");
const tokenizer = require("../tokenizer");
const decoder = require("../decoder");
const tokenKey = process.env.TOKEN_KEY;
const errHandle = require("../errormsgclass")

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
      if (!item.name) {
          response.send(new errHandle(500, "You need to name your favorite before you can add it"));
          return;
      }
        if (isAdded) {
            response.send(new errHandle(200, ` ${item.name} added to faves`));
            return;
        }
        if (!isAdded) {
            response.send(new errHandle(500, `Could not add ${item.name} because it is already in your faves.`));
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
        let isDeleted = pullFave.nModified;
        if (isDeleted) {
            response.send(new errHandle(200,`" ${item.name} " deleted from faves.`));
            return;
        }
        if (!isDeleted) {
            response.send(new errHandle(500,`${item.name} "does not exist in faves.`));
            return;
        }
    },
};

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
            { $addToSet: { faves: item } },
            
            );
               console.log(updatedFaves); 
        // try{
        //     updatedFaves
        
        // }catch (error){
        //     console.error();
        // }
    
        // pull faves:[] from DB by _:id
        // update Faves:[] with new favorite
        // return Username, Name, Faves:[]

        // TODO: Implement updating users info
        // console.log(updateFaves);
        // console.log(decoder(request.body.token));

        response.send(updatedFaves);
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
            { $pull: { faves: item } },
            ); 
            if (pullFave.nModified){
                console.log("200")
                response.send({"status": 200, "Message": item + "Deleted from faves."});
            }
            if (!pullFave.nModified){
                    console.log({ "status": 500, "Message": item + " could not be deleted from faves." });
                    response.send({ "status": 500, "Message": item + " could not be deleted from faves."})
            }
            
            console.log(item);
            
    },
};

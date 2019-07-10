const {Schema, model} = require ("mongoose");

var User = new Schema({
        name: String,
        email: String,
        username: String,
        password: String,
        faves: []
  });

module.exports= model("User", User);
const { Schema, model } = require("mongoose");

const optionSchema = new Schema({
    name: { type: String, required: true },
    presets: [
        new Schema({
            name: { type: String, required: true },
            flavors: [{ type: String, required: true }],
        }),
    ],
    flavors: [{ type: String, required: true }],
    variation: new Schema({
        name: { type: String, required: true },
        temperature: { type: String, required: true },
    }),
});

module.exports = optionSchema;

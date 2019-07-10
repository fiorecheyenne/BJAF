const { Schema, model } = require("mongoose");

const optionSchema = new Schema({
    base: { type: String, required: true },
    presets: [{ type: String, required: true }],
    flavors: [{ type: String, required: false }],
    milk: [{ type: String, required: false }],
    variation: [{ type: String, required: false }],
});

module.exports = model("Options", optionSchema);

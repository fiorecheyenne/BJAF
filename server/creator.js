const seedData = require("../seed.json");

module.exports = function creator(base) {
        return seedData[base + "-options"];
};

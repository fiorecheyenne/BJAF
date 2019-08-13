const seedData = require("../seed.json");

module.exports = function creator(base, subset) {
        console.log(seedData[base + `-options`][subset]);
        return (seedData[ base +`-options`][subset]);
};

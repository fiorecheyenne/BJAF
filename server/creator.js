const seedData = require("../seed.json");

module.exports = function creator(base, subset) {
        return (seedData[ base +`-options`][subset]);
};

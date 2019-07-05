const DutchBros = require("./dutchbros");

module.exports = {
    Query: {
        allDutchBrosOptions: DutchBros.allOptions,
        randomDutchBrosOption: DutchBros.randomizedOption,
    },
};

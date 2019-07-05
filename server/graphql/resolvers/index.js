const DutchBros = require("./dutchbros");

module.exports = {
    Query: {
        allDutchBrosOptions: DutchBros.allOptions,
        dutchBrosOption: DutchBros.option,
        randomDutchBrosOption: DutchBros.randomizedOption,
    },
};

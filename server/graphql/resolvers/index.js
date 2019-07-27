const DutchBros = require("./dutchbros");

module.exports = {
    Query: {
        all: DutchBros.allOptions,
        option: DutchBros.option,
        random: DutchBros.randomizedOption,
    },
};

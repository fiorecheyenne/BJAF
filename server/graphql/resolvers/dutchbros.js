const dutchBrosData = require("../../../seed.json");
const randomizer = require("../../randomizer.js");

module.exports = {
    allOptions(parent, args, context) {
        return Object.values(dutchBrosData);
    },
    option(parent, args, context) {
        const { base } = args;
        const baseData = dutchBrosData[base.toLowerCase() + "-options"];
        return baseData;
    },
    randomizedOption(parent, args, context) {
        const randomized = randomizer(args.base ? args.base.toLowerCase() : undefined);

        return {
            base: randomized.randomizedBase,
            blend: randomized.randomizedFlavor,
            milk: randomized.randomizedMilk,
            variation: randomized.randomizedVariation,
        };
    },
};

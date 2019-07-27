const dutchBrosData = require("../../../seed.json");
const randomizer = require("../../randomizer.js");

class DutchBrosOption {
    constructor(seedOption) {
        this.base = seedOption.base || null;
        this.presets = seedOption.presets.map(preset => preset.name);
        this.flavors = seedOption.flavors;
        this.milks = seedOption.milk;
        this.variations = seedOption.variation;
    }
}

module.exports = {
    allOptions(parent, args, context) {
        return Object.values(dutchBrosData).map(option => new DutchBrosOption(option));
    },
    option(parent, args, context) {
        const { base } = args;
        if (!base) {
            return null;
        }
        const baseData = dutchBrosData[base.toLowerCase() + "-options"];
        return new DutchBrosOption(baseData);
    },
    randomizedOption(parent, args, context) {
        const randomized = randomizer(args.base ? args.base.toLowerCase() : undefined);

        if (!randomized.preset) {
            randomized.preset = null;
        }
        if (!randomized.variation || randomized.variation === "none") {
            randomized.variation = null;
        }
        if (!randomized.milk || randomized.milk === "none") {
            randomized.milk = null;
        }
        return randomized;
    },
};

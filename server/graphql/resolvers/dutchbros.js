const dutchBrosData = require("../../../seed.json");

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
        // TODO: Return generated randomized option
    },
};

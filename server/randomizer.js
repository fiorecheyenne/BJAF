const seedData = require("../seed.json");

const randomizer = option => {
    const randomBase = function(obj) {
        let keys = Object.keys(obj);
        return obj[keys[(keys.length * Math.random()) << 0]];
    };

    // console.log(randomBase(seedData));

    if (!option) {
        option = randomBase(seedData);
    } else {
        option = seedData[option + "-options"];
    }
    return {
        base: option.base,
        presets: randomBase(option.presets),
        flavors: randomBase(option.flavors),
        milk: randomBase(option.milk),
        variation: randomBase(option.variation),
    };
};

console.log(randomizer());

// start with the option (either given as an input, or randomized)
// randomly pick either present or flavors, and randomly generate based off of the option
// if option has milk, randomize milk
// if option has variation, randomize variation
// i need to return randomizedObject somehow

module.exports = randomizer;

// const randomizer = require("./randomizer.js");

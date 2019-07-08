const seedData = require("../seed.json");

const randomizer = option => {
    const randomBase = function(obj) {
        let keys = Object.keys(obj);
        return obj[keys[(keys.length * Math.random()) << 0]];
    };

    if (!option) {
        option = randomBase(seedData);
    } else {
        option = seedData[option + "-options"];
    }

    if (Math.random() * 100 > 50) {
        randomBlend = option.presets[Math.floor(Math.random() * option.presets.length)];
    } else {
        randomBlend = [];
        const x = [Math.random() * 3];

        for (i = 0; i < x; i++) {
            randomFlavors = [option.flavors[Math.floor(Math.random() * option.flavors.length)]];
            randomBlend.push(...randomFlavors);
        }

        randomBlend = new Array(...new Set(randomBlend));
    }

    return {
        randomizedBase: option.base,
        randomizedFlavor: randomBlend,
        randomizedMilk: randomBase(option.milk),
        randomizedVariation: randomBase(option.variation),
    };
};

console.log("test =>", randomizer());

// start with the option (either given as an input, or randomized)
// randomly pick either present or flavors, and randomly generate based off of the option
// if option has milk, randomize milk
// if option has variation, randomize variation
// i need to return randomizedObject somehow

module.exports = randomizer;

// const randomizer = require("./randomizer.js");

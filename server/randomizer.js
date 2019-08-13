const seedData = require("../seed.json");

let rand = n => Math.floor(Math.random() * n);

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

    let preset = "";
    let flavors = [];

    if (rand(100) < 33) {
        let randomPreset = option.presets[rand(option.presets.length)];
        if (typeof randomPreset === "string") {
            preset = randomPreset;
            flavors = null;
        } else {
            preset = randomPreset ? randomPreset.name : null;
            flavors = randomPreset ? randomPreset.flavor.split(", ") : null;
        }
    } else {
        let flavorCount = rand(2) + 1;
        for (let n = 0; n < flavorCount; n++) {
            flavors.push(option.flavors[rand(option.flavors.length)]);
        }
        flavors = new Array(...new Set(flavors));
    }
console.log({
        base: option.base,
        flavors: flavors,
        preset: preset,
        milk: randomBase(option.milk),
        variation: randomBase(option.variation),
    });
    return {
        base: option.base,
        flavors: flavors,
        preset: preset,
        milk: randomBase(option.milk),
        variation: randomBase(option.variation),
    };
};

module.exports = randomizer;

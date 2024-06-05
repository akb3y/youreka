const errors = require("./errors.js");
const calculateSphereVolume = (radius) => {
    const isInvalidType = typeof radius !== "number" || radius === null || radius === undefined;

    if(isInvalidType) {
        throw new Error(errors.invalidType);
    }
    if(radius <= 0) {
        throw new Error(errors.zeroOrLess);
    }
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
};

module.exports = { calculateSphereVolume };

import calculateSphereVolume from "./index.js";
import errors from "./errors.js";

test("should calculate correct sphere volume of a positive radius", () => {
    expect(calculateSphereVolume(3)).toBeCloseTo(113.09733552923254);
    expect(calculateSphereVolume(1)).toBeCloseTo(4.1887902047863905);
});

test("should calculate correct sphere volume of a floating point radius", () => {
    expect(calculateSphereVolume(3.2)).toBeCloseTo(137.26);
    expect(calculateSphereVolume(1.098)).toBeCloseTo(5.54);
});

test("should throw an error when a calculating sphere volume of a negative radius", () => {
    console.log(errors.zeroOrLess);
    try {
        calculateSphereVolume(-1)
    } catch (e) {
        expect(e.message).toBe(errors.zeroOrLess);
    }
});

test("should throw an error when a calculating sphere volume of a zero radius", () => {
    console.log(errors.zeroOrLess);
    try {
        calculateSphereVolume(0)
    } catch (e) {
        expect(e.message).toBe(errors.zeroOrLess);
    }
});

test("should throw an error when a calculating sphere volume of a null radius", () => {
    console.log(errors.zeroOrLess);
    try {
        calculateSphereVolume(null)
    } catch (e) {
        expect(e.message).toBe(errors.invalidType);
    }
});

test("should throw an error when a calculating sphere volume of a undefined radius", () => {
    console.log(errors.zeroOrLess);
    try {
        calculateSphereVolume(undefined)
    } catch (e) {
        expect(e.message).toBe(errors.invalidType);
    }
});

test("should throw an error when a calculating sphere volume of a NaN radius", () => {
    console.log(errors.zeroOrLess);
    try {
        calculateSphereVolume("hello")
    } catch (e) {
        expect(e.message).toBe(errors.invalidType);
    }
});
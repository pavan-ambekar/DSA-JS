// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

// O[2n] => O[n]
const same = (arrOne, arrTwo) => {
    if (arrOne.length !== arrTwo.length) return false;
    const freqArrOne = {};
    const freqArrTwo = {};
    arrOne.forEach((element) => {
        freqArrOne[element] ? freqArrOne[element]++ : (freqArrOne[element] = 1);
    });
    arrTwo.forEach((element) => {
        freqArrTwo[element] ? freqArrTwo[element]++ : (freqArrTwo[element] = 1);
    });
    for (let element of arrOne) {
        if (!(element ** 2 in freqArrTwo)) return false; // improves performance
        if (freqArrOne[element] !== freqArrTwo[element ** 2]) return false;
    }
    return true;
};

console.log(same([9, 2, 3], [4, 9, 1]));

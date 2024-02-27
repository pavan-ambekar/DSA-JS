// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed from iceman.

// Looks super simple but Time complexity is more
// O[2n^2] => O[n^2]
// const isValidAnagram = (strOne, strTwo) =>
//     strOne.split('').sort().join() === strTwo.split('').sort().join();

// -------------------------------------------------------------//
// O[3n] => O[n]
// const isValidAnagram = (strOne, strTwo) => {
//     if (strOne.length !== strTwo.length) return false;
//     const charStrOne = {};
//     const charStrTwo = {};

//     for (let ch of strOne)
//         charStrOne[ch] = charStrOne[ch] ? charStrOne[ch] + 1 : 1;

//     for (let ch of strTwo)
//         charStrTwo[ch] = charStrTwo[ch] ? charStrTwo[ch] + 1 : 1;

//     for (let ch of strOne) {
//         if (!(ch in charStrTwo)) return false;
//         if (charStrOne[ch] !== charStrTwo[ch]) return false;
//     }
//     return true;
// };

// -------------------------------------------------------------//
// O[2n] => O[n] More optimized & Improves space complexity too
const isValidAnagram = (strOne, strTwo) => {
    if (strOne.length !== strTwo.length) return false;
    const lookup = {};
    const charStrTwo = {};

    for (let ch of strOne) lookup[ch] = lookup[ch] ? lookup[ch] + 1 : 1;

    for (let ch of strTwo) {
        if (!lookup[ch]) return false;
        lookup[ch] -= 1;
    }
    return true;
};

console.log(isValidAnagram('cinema', 'iceman'));
console.log(isValidAnagram('cinemm', 'iceman'));

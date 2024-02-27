/* 
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in the array. There can be negative
numbers in the array, but it will always be sorted.
*/

// time complexity = O(N)
// space complexity = O(N)
// const countUniqueValues = (arr) => {
//     const s = new Set(arr);
//     return s.size;
// };

// const countUniqueValues = (arr) => {
//     if (arr.length === 0) return 0;
//     let count = 1;
//     let index1 = 0;
//     let index2 = 1;
//     while (index2 < arr.length) {
//         if (arr[index1] !== arr[index2]) count++;
//         index1++;
//         index2++;
//     }
//     return count;
// };

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let index1 = 0;
    for (let index2 = 1; index2 < arr.length; index2++) {
        if (arr[index1] !== arr[index2]) {
            arr[++index1] = arr[index2];
        }
    }
    return index1 + 1;
};

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1]));
console.log(countUniqueValues([]));

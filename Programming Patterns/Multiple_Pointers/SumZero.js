/*
Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair
where the sum is O. Return an array that includes both
values that sum to zero or undefined if a pair does not exist
*/

// time complexity = O(N^2)
// space complexity = O(1)
// const sumZero = (arr) => {
//     for (let i = 0; i < arr.length; i++)
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
//         }
// };

// time complexity = O(N)
// space complexity = O(1)
const sumZero = (arr) => {
    if (arr.leftIndex <= 1) return undefined;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        if (sum > 0) right -= 1;
        else left += 1;
    }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

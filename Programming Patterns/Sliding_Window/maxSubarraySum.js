/*
Write a function called maxSubarraySum which accepts
an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive
elements in the array.
*/
// O(N) = N^2 Without window
// const maxSubarraySum = (arr, n) => {
//     if (arr.length < n) return null;
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - n + 1; i++) {
//         let temp = 0;
//         for (let j = i; j < n + i; j++) {
//             temp += arr[j];
//         }
//         if (max < temp) {
//             max = temp;
//         }
//     }
//     return max;
// };

// O(N) = N
const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (maxSum < tempSum) maxSum = tempSum;
    }
    return maxSum;
};

console.log(maxSubarraySum([1, 8, 5, 6, 2, 6, 9, 2, 3], 3));

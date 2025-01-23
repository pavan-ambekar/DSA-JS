/*
Write a function called averagePair which accepts a sorted
array of integers and num. The function should find the first pair
where the average is equal to num. Return an array that includes both
values that average to num or undefined if a pair does not exist
*/

const averagePair = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const avg = (arr[left] + arr[right]) / 2;
        if (avg === num) return [arr[left], arr[right]];
        if (avg < num) left++;
        else right--;
    }
};

console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));

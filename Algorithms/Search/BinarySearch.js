// O(N) = log(N)
function search(arr, value) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[mid] === value) return mid;
        if (arr[mid] < value) leftIndex = mid + 1;
        else rightIndex = mid - 1;
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 3));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 60));

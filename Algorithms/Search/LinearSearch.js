// O(N) = N
function search(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) return i;
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 6], 2));
console.log(search([1, 2, 3, 4, 6], 22));
console.log(search([1, 2, 3, 4, 6], 2 + 2));

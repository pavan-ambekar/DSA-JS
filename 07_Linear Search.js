// Big-O = O(n)
function search(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === target) return index;
    }
    return -1
}

console.log(search([1, 2, 3, 45, 6, 8, 5, 43, 4, 36, 76], 1))
console.log(search([1, 2, 3, 45, 6, 8, 5, 43, 4, 36, 76], 342))
console.log(search([1, 2, 3, 45, 6, 8, 5, 43, 4, 36, 76], 8))
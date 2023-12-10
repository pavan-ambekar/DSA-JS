// Big-O = O(log n)
function search(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let index = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[index] === target) return index

        if (target < arr[index]) rightIndex = index - 1

        else leftIndex = index + 1
    }
    return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 8, 36, 43, 45, 76], 1))
console.log(search([1, 2, 3, 4, 5, 6, 8, 36, 43, 45, 76], 342))
console.log(search([1, 2, 3, 4, 5, 6, 8, 36, 43, 45, 76], 8))
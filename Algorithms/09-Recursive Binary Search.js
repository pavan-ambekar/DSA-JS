// Big-O = O(log n)
function resursiveBinerySerch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}
function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1

    let midIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (arr[midIndex] === target) return midIndex

    if (target < arr[midIndex]) return search(arr, target, leftIndex, midIndex - 1)

    else return search(arr, target, midIndex + 1, rightIndex)

}

console.log(resursiveBinerySerch([1, 2, 3, 4, 5, 6, 8, 36, 43, 45, 76], 1))
console.log(resursiveBinerySerch([1, 2, 3, 4, 5, 6, 8, 36, 43, 45, 76], 342))
console.log(resursiveBinerySerch([1, 2, 3, 4, 5, 6, 8, 36, 43, 45, 76], 8))
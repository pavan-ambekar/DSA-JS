// O(n) = O(nlogn)
function mergeSort(arr) {
    if (arr.length < 2)
        return arr

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0])
            sortedArr.push(leftArr.shift())
        else
            sortedArr.push(rightArr.shift())
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort([5, 3, 24, 5, 7, 543, 67, 8, 5, 3, 5]))

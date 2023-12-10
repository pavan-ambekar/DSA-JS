// Worst case - O[n^2]
// Avg case - O[nlogn]
function quickSort(arr) {
    // Base case
    if (arr.length < 2)
        return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot)
            left.push(arr[i])
        else
            right.push(arr[i])
        console.info(i, left, pivot, right)
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort([5, 3, 24, 5, 7, 543, 67, 8, 5, 3, 5]))

// Big-O = O(n^2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = numberToInsert
    }
    return arr
}


console.log(insertionSort([5, 3, 24, 5, 7, 543, 67, 8, 5, 3, 5]))

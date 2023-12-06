// Big-O = O(n^2)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}


// Big-O = O(n^2)
function bubbleSortV2(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true

            }
        }
    } while (swapped)
    return arr
}

console.log(bubbleSortV2([5, 3, 24, 5, 7, 543, 67, 8, 5, 3, 5]))
// O(n) = O(mn)
function cartesianProduct(arr1, arr2) {
    let cp = []
    for (let i = 0; i < arr1.length; i++)
        for (let j = 0; j < arr1.length; j++)
            cp.push([arr1[i], arr2[j]])
    return cp
}

console.log(cartesianProduct([1, 2], [3, 4]))
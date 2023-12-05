// Big-O = O(log n)
function isPowerOfTwo(num) {
    if (num < 1) return false
    while (num > 1) {
        if (num % 2 === 1) return false
        num /= 2
    }
    return true
}

// Big-O = O(1)
function isPowerOfTwoBitWise(num) {
    if (num < 1) return false
    return (num & (num - 1)) === 0
}

console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(5))
console.log(isPowerOfTwoBitWise(8))
console.log(isPowerOfTwoBitWise(6))
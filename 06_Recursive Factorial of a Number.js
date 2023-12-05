// Big-O = O(n)
function fact(num) {
    if (num === 0) return 1
    return num * fact(num - 1)
}


console.log(fact(0))
console.log(fact(1))
console.log(fact(3))
console.log(fact(5))
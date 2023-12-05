// Big-O = O(s^n)
function fibonaci(num) {
    if (num < 2) return num
    return fibonaci(num - 2) + fibonaci(num - 1)
}


console.log(fibonaci(0))
console.log(fibonaci(1))
console.log(fibonaci(6))
console.log(fibonaci(5))
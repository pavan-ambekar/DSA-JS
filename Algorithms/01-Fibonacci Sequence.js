// O(n)
function fibonaci(num) {
    if (num == 1) return [0]
    if (num == 2) return [0, 1]
    let series = [0, 1]
    for (i = 2; i < num; i++) {
        series[i] = series[i - 1] + series[i - 2]
    }
    return series
}

console.log(fibonaci(7))
console.log(fibonaci(1))
console.log(fibonaci(5))
console.log(fibonaci(50))
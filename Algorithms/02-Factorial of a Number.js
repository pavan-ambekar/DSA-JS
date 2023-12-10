// O(n)
function fact(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

console.log(fact(0))
console.log(fact(1))
console.log(fact(5))
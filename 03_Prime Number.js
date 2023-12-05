// O(n)
// function isPrime(num) {
//     if (num < 2) return false
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }

//Big-O = O(sqrt(n))
function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))
console.log(isPrime(401))
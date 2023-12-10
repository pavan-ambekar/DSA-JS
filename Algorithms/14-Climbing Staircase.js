// Big O - O(n)
function climbingStairCase(steps) {
    const noOfWays = [1, 2]
    for (let i = 2; i < steps; i++)
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]

    return noOfWays[steps - 1]
}

console.log(climbingStairCase(1))
console.log(climbingStairCase(2))
console.log(climbingStairCase(3))
console.log(climbingStairCase(4))
console.log(climbingStairCase(5))
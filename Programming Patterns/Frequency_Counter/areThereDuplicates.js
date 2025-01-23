/* 
Write a function called areThereDuplicates, which accepts array.
The function should return true if array values are not duplicate.
*/

const areThereDuplicates = (arr) => {
    const lookup = {};
    for (let el of arr) {
        lookup[el] = (lookup[el] || 0) + 1;
    }
    for (let l of Object.values(lookup)) {
        if (l > 1) return true;
    }
    return false;
};

console.log(areThereDuplicates([1, 2, 3, 5, 6, 7, 8]));
console.log(areThereDuplicates([1, 2, 3, 5, 6, 7, 7]));

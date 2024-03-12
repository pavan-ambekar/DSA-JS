// Initial code
// function stringSearch(str, value) {
//     if (str.length === value.length) return str === value ? 1 : 0;
//     if (str.length < value.length) return 0;
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let temp = 0;
//         for (let j = 0; j < value.length; j++) {
//             if (str[i] !== value[j]) break;
//             temp++;
//             i++;
//         }
//         if (temp === value.length) count++;
//     }
//     return count;
// }

// O(N) = N^2 technically M*N
function stringSearch(str, value) {
    if (str.length === value.length) return str === value ? 1 : 0;
    if (str.length < value.length) return 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < value.length; j++) {
            if (str[i + j] !== value[j]) break;
            if (j === value.length - 1) count++;
        }
    }
    return count;
}

console.log(stringSearch('pavan', 'an'));
console.log(stringSearch('pavan', 'ana'));
console.log(stringSearch('lorie loled', 'lo'));

/* 
Write a function called sameFrequency, which accepts two Numbers.
The function should return true if Value if 1st number
and second number have same digits.
The frequency of digits must be the same.
*/

const sameFrequency = (num1, num2) => {
    const str1 = String(num1);
    const str2 = String(num2);
    if (str1.length !== str2.length) return false;
    const lookup = {};
    for (let digit of str1) {
        lookup[digit] = lookup[digit] ? lookup[digit] + 1 : 1;
    }
    for (let digit of str2) {
        if (lookup[digit]) lookup[digit]--;
        else return false;
    }
    return true;
};

console.log(sameFrequency(123, 321));
console.log(sameFrequency(123, 311));

/*
Write a function called isSubsequence which two strings (str1 and str2). 
The function should find str2 exists in str1
return true if exists else false
*/

/*
A subsequence of a string is a new string that is formed from the original 
string by deleting some (can be none) of the characters without disturbing 
the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

const isSubsequence = (str1, str2) => {
    if (str2.length > str1.length) return false;
    if (str2.length === 0) return false;
    let i = 0;
    let j = 0;
    while (i < str1.length) {
        console.log(str1[i], str2[j]);
        if (str1[i] === str2[j]) j++;
        if (j === str2.length) return true;
        i++;
    }
    return false;
};

console.log(isSubsequence('aabbcc', 'as'));
console.log(isSubsequence('aabacc', 'bc'));

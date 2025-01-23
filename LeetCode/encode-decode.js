// https://neetcode.io/problems/string-encode-and-decode
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let coded = '';
    for (const str of strs) {
      coded = `${coded}${str.length}#${str}`;
    }
    console.log(coded);
    return coded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decoded = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      const length = +str.substring(i, j);
      decoded.push(str.substring(j + 1, j + length + 1));
      i = j + length + 1;
    }
    return decoded;
  }
}

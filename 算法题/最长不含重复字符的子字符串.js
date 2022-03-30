/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === "") return 0
  let arr = s.split("");
  let maxStr = [];
  let maxNum = 1
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (maxStr.includes(element)) {
      maxStr.push(element);
      maxStr = maxStr.slice(maxStr.indexOf(element) + 1);
    } else {
      maxStr.push(element);
    }
    maxNum = Math.max(maxStr.length, maxNum)
  }
  return maxNum;
};
let str = "abcabcbb";
let str2 = "aaaagbbbbg";
let result = lengthOfLongestSubstring(str);
console.log(result);

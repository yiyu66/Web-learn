/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串 字符串
 * @return int整型
 */
function maxLengthBetweenEqualCharacters(s) {
  let num = -1;
  let arr = s.split("");
  let strMap = new Map();

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (strMap.has(element)) {
      num = Math.max(num, index - strMap.get(element) - 1);
    } else {
      strMap.set(element, index);
    }
  }
  return num;
}

module.exports = {
  maxLengthBetweenEqualCharacters: maxLengthBetweenEqualCharacters,
};
let str = "qwe";

console.log(maxLengthBetweenEqualCharacters(str));

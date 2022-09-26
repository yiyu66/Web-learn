// 给定一个字符串，问最少改变几个字符能将其变成周期为p的回文串
function isPalindrome(s) {
  var len = s.length;
  for (var i = 0; i < len / 2; i++) {
    if (s[i] != s[len - i - 1]) {
      return false;
    }
  }
  return true;
}

function solution(s) {
  var len = s.length;
  if (len == 0) {
    return 0;
  }
  if (isPalindrome(s)) {
    return 0;
  }
  var count = 0;
  for (var i = 0; i < len / 2; i++) {
    if (s[i] != s[len - i - 1]) {
      count++;
    }
  }
  return count;
}

// 给定一个字符串，问最少改变几个字符,使得字符串以P为周期循环

// 1. 暴力法
// 2. 滑动窗口
// 3. 动态规划

function solution(s,p) {
    
}


console.log(solution("zpzzpz"));

// 1. 暴力法

// 2. 动态规划
// 3. 中心扩散
// 4. Manacher 算法
// 3. 中心扩展
// 4. 马拉车算法
// 5. KMP算法

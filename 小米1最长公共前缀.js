// 最长公共前缀
// 1. 暴力法
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < prefix.length && j < strs[i].length; j++) {
      if (prefix[j] !== strs[i][j]) {
        break;
      }
    }
    prefix = prefix.substring(0, j);
    if (prefix === "") {
      return prefix;  
    }
  }
  return prefix;
}
// 2. 横向扫描
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < prefix.length && j < strs[i].length; j++) {
      if (prefix[j] !== strs[i][j]) {
        break;
      }
    }
    prefix = prefix.substring(0, j);
    if (prefix === "") {
      return prefix;  
    }
  }
  return prefix;
}
  // 如果不存在 返回空字符串
// 3. 纵向扫描
// 4. 分治
  function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      let j = 0;
      for (; j < prefix.length && j < strs[i].length; j++) {
        if (prefix[j] !== strs[i][j]) {
          break;
        }
      }
      prefix = prefix.substring(0, j);
      if (prefix === "") {
        return prefix;  
      }
    }
    // 如果不存在 返回空字符串


    return prefix.length>0?prefix:"";
  }
  


// 5. 二分查找
  function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix.length === 0) {
          return "";
        }
      }
    }
    return prefix;
  }

// 6. 字典树

// 7. KMP
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return "";
      }
    }
  }
  return prefix;
}
// 8. Trie
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return "";
      }
    }
  }
  return prefix;
}
// 9. 后缀数组


// 10. 后缀树
// 11. 后缀自动机

const target = {
  field1: 1,
  field2: undefined,
  field3: "ConardLi",
  field4: {
    child: clone1,
    child2: {
      child2: "child2",
    },
  },
};

// console.log(target);

// 浅拷贝 Object.assign Array.prototype.slice(), Array.prototype.concat() 拓展运算符实现的复制
function clone1(target) {
  let cloneTarget = {};
  for (const key in target) {
    cloneTarget[key] = target[key];
  }
  return cloneTarget;
}

// 深拷贝
// 如果是原始类型，无需继续拷贝，直接返回
// 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。

// let copy1 = JSON.parse(JSON.stringify(target)); //会忽略undefined、symbol和函数
// 简易版本
function clone1(target) {
  if (typeof target === "object" && target !== null) {
    let clonetarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      clonetarget[key] = clone1(target[key])
    }
    return clonetarget
  } else {
    return target
  }
}
/* 最终版本
1.forin
2.判断数组
3.防止循环引用，加上map
*/
function clone2(target, cache = new Map()) {
  if (typeof target !== "object" || target === null) return target;
  // 防止循环引用
  if (cache.get(target)) return cache.get(target);
  let clonetarget = Array.isArray(target) ? [] : {}
  cache.set(target, clonetarget)

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      clonetarget[key] = clone2(target[key]);
    }
  }
  return clonetarget
}

console.log(target);
let ans1 = clone2(target);
ans1.field4.child = 2;
console.log(ans1);

console.log(Object.prototype.toString.call(target.field4.child));
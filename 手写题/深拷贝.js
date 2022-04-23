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

console.log(target);

// let copy1 = JSON.parse(JSON.stringify(target));
// console.log(copy1);

// 浅拷贝
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
function deepClone(obj, cache = new Map()) {
  // 基本数据类型直接返回
  if (typeof obj !== 'object' || obj === null) return obj
  // 防止循环引用
  const cacheTarget = cache.get(obj)
  // 已经存在就直接返回
  if (cacheTarget) return cacheTarget

  let newObj = obj instanceof Array ? [] : {} // 新建一个对象

  cache.set(obj, newObj)
  // 遍历原对象
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

function clone3(target) {
  if (typeof target === "object" && target !== null) {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone3(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}


function clone4(target) {
  if (typeof target === "object" && target !== null) {
    let clonetarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      clonetarget[key] = clone4(target[key])
    }
    return clonetarget
  } else {
    return target
  }
}
let ans1 = clone4(target);
console.log();
// ans1.field4.child = 2;
console.log(ans1);
console.log(target);
console.log(Object.prototype.toString.call(target.field4.child));
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        result[i] = data;
        count++;
        if (count === promises.length) {
          resolve(result);
        }
      }, reject);
    }
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

Promise.myAll([p1, p2, p3]).then((data) => {
  console.log(data);
});

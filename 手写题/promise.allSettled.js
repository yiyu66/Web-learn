Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          result[i] = { status: "fulfilled", value };
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        },
        (reason) => {
          result[i] = { status: "rejected", reason };
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        }
      );
    }
  });
};

//test
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 2000);
});

Promise.myAllSettled([p1, p2]).then((res) => {
  console.log(res);
});

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("哈哈哈哈");
    // reject("哈哈哈哈");
  }, 1000);
});
promise.then(
  function (val) {
    console.log(val);
  },
  () => {
    console.log("error");
  }
);

// promise.all
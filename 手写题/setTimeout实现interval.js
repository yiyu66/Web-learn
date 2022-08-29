let timer = null;
function interval(func, delay) {
  let interFunc = function () {
    // func.call(null);
    func();
    timer = setTimeout(interFunc, delay); // 递归调用
  };
  timer = setTimeout(interFunc, delay); // 触发递归
}
// 调用
interval(() => console.log("long"), 1000);
// 清除定时器;
setTimeout(() => clearTimeout(timer), 5000);


function mySetInterval(fn, time) {
  let timer = null;
  let interval = function () {
    fn();
    timer = setTimeout(interval, time);
  };
  timer = setTimeout(interval, time);
  return timer;
}

let arr = [
  [10, 10, 1],
  [1, 3, 2],
  [1, 5, 1],
];

for (let i = 0; i < arr.length; i++) {
  let tempAns = 0;
  const item = arr[i];
  let min = Math.min(...item);
  //   console.log(item);
  tempAns += min * 2;
  //  全部减去最小值
  for (let j = 0; j < item.length; j++) {
    item[j] -= min;
  }
  console.log(item);

  if (item[1] > 1) {
    tempAns += item[1] - 1 > 0 ? item[1] - 1 : 0;
  }
  console.log(tempAns);
}

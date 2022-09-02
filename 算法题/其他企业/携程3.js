let arr = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
let str = "rgbrgbg";
let ans = 0;
let colorList = ["r", "g", "b"];
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  let color1 = str.charAt(item[0]);
  let color2 = str.charAt(item[1]);
  if (colorList.includes(color1)) {
    colorList.splice(colorList.indexOf(color1), 1);
  }
  // console.log(colorList);
  if (colorList.length === 0) {
    ans += 1;
    colorList = ["r", "g", "b"];
  }
  // console.log(colorList);
  if (colorList.includes(color2)) {
    colorList.splice(colorList.indexOf(color2), 1);
  }
  console.log(colorList);
  if (colorList.length === 0) {
    ans += 1;
    colorList = ["r", "g", "b"];
  }
}

console.log(ans-1);

let arrS = [1,2];
let arrP = [2,1];
// let n = 1;
let num = 0;
let fasterList = [];

for (let i = 0; i < arrP.length; i++) {
  const item = arrP[i];
  fasterList.push(item);

  const index = arrS.indexOf(item);
  //   console.log(index);
  let preList = [];
  for (let j = 0; j < index; j++) {
    preList.push(arrS[j]);
  }
  console.log("preList", preList);
  console.log("fasterList", fasterList);
  // 如果preList的值不在fasterList中，则num加1
  for (let k = 0; k < preList.length; k++) {
    if (!fasterList.includes(preList[k])) {
      num++;
      break;
    }
  }
}
console.log(num);

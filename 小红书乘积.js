let lines = [3, 2, 1];
let ans = 0;
let k = 3;
for (let i = 0; i < lines.length; i++) {
  for (let j = i + 1; j < lines.length; j++) {
    if (lines[i] * lines[j] >= k) {
      ans++;
    }
  }
}

console.log(ans * 2);

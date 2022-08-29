while (line = readline()) {
    let arr = line.split(" ");
    print(parseInt(arr[0]) + parseInt(arr[1]));
}

let count = parseInt(readline());
let lines = [];
for (let i = 0; i < count; i++)
    lines.push(readline());
for (let line of lines) {
    let nums = line.split(" ");
    console.log(parseInt(nums[0]) + parseInt(nums[1]));
}



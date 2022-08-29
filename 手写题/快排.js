function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      let index = getIndex(arr, low, high);
      quickSort(arr, low, index - 1);
      quickSort(arr, index + 1, high);
    }
  }
  
  function getIndex(arr, low, high) {
    let base = low;
    let index = base + 1;
    for (let i = index; i <= high; i++) {
      if (arr[i] < arr[base]) {
        swap(arr, i, index);
        index++;
      }
    }
    swap(arr, base, index - 1);
    return index - 1;
  }
  
  function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  
  let a = [3, 4, 1, 5, 23, 4];
  quickSort(a);
  console.log(a);
  
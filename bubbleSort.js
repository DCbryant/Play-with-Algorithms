const {swap, generateRandomArray, isSorted} = require ('./helper');
const insertSort = (arr, n) => {
  let isChanged = false;
  for (let i = 0; i < n; i++) {
    isChanged = 0;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isChanged = 1;
      }
    }
    // 没有发生置换，说明已经排好序了，后面不用继续了
    if (isChanged === 0) {
      break;
    }
  }
  return arr;
};

const n = 10;
const testArray = generateRandomArray(n, 0, n);
const res = insertSort(testArray, n);
console.log(res);
const hasSorted = isSorted(res, n);
console.log (hasSorted);

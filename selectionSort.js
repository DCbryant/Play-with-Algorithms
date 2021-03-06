const {generateRandomArray, isSorted, swap} = require ('./helper');
function selectionSort (arr, n) {
  for (let i = 0; i < n; i++) {
    // 寻找[i, n)区间的最小值
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

const n = 1000;
const testArray = generateRandomArray(n, 0, n);
const res = selectionSort(testArray, n);
const hasSorted = isSorted(res, n);
console.log (hasSorted);

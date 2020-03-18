const {swap, generateRandomArray, isSorted} = require ('./helper');
const insertSort = (arr, n) => {
  let newn;
  do {
    newn = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        // 记录最后一次的交换位置,在此之后的元素在下一轮扫描中均不考虑
        newn = i;
      }
    }
    n = newn;
  } while (newn > 0);
  return arr;
};

const n = 1000;
const testArray = generateRandomArray(n, 0, n);
const res = insertSort(testArray, n);
const hasSorted = isSorted(res, n);
console.log (hasSorted);

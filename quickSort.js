const {swap, generateRandomArray, isSorted} = require ('./helper');
const quickSort = (arr, n) => {

  function _quickSort(arr, l, r) {
    if (l >= r) {
      return
    }
    const p = __partition(arr, l, r) 
    _quickSort(arr, l, p - 1)
    _quickSort(arr, p + 1, r)
  }

  function __partition(arr, l, r) {
    const v = arr[l]
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < v) {
        swap(arr, j+1, i)
        j++
      }
    }
    swap(arr, j, l)
    return j
  }

   _quickSort(arr, 0, n - 1) 

  return arr;
};

const n = 1000;
const testArray = generateRandomArray(n, 0, n);
const res = quickSort(testArray, n);
const hasSorted = isSorted(res, n);
console.log (hasSorted);

const {swap, generateRandomArray, isSorted} = require ('./helper');
// 二分法 nlog(n)
// 空间换时间
const mergeSort = (arr, n) => {
  // 递归使用归并排序，对arr(l, r]范围进行排序
  function _mergeSort (arr, l, r) {
    if (l >= r) {
      return;
    }
    let mid = l + (r - l) / 2;
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
    // 将两个有序子数组合并
    _merge(arr, l, mid, r);
  }
  // [1,2,3,4,5]
  // 将arr[l, mid] 和 arr[mid + 1, r] 两部分进行归并
  function _merge (arr, l, mid, r) {
    const aux = [];
    for (let i = l; i <= r; i++) {
      aux[i - l] = arr[i];
    }
    let i = l;
    let j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = aux[j - l];
        j++;
      } else if (j > r) {
        arr[k] = aux[i - l];
        i++;
      } else if (aux[i - l] < aux[j - l]) {
        arr[k] = aux[i - l];
        i++;
      } else {
        arr[k] = aux[j - l];
        j++;
      }
    }
  }

  _mergeSort(arr, 0, n - 1);
  return arr;
};

const n = 1000;
const testArray = generateRandomArray(n, 0, n);
const res = mergeSort(testArray, n);
const hasSorted = isSorted(res, n);
console.log (hasSorted);

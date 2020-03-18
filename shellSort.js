const {swap, generateRandomArray, isSorted} = require('./helper')
const insertSort = (arr) => {
  let n = arr.length
  let h = 1
  while (h < n / 3) {
    h = 3 * h + 1
  }

  while(h >= 1) {
    for (let i = h; i < n; i++) {
      // 对 arr[i], arr[i-h], arr[i-2*h], arr[i-3*h]... 使用插入排序
      let e = arr[i]
      let j = i
      for (; j >= h; j++ && e < arr[j - h], j -= h) {
        arr[j] = arr[j - h]
      }
      arr[j] = e
    }
    h /= 3
  }
  return arr
}

const n = 1000;
const testArray = generateRandomArray(n, 0, n)
const res = insertSort(testArray, n)
const hasSorted = isSorted(res, n)
console.log(hasSorted)
const {swap, generateRandomArray, isSorted} = require('./helper')
const insertSort = (arr, n) => {
  // 第一个元素不用考虑，已经有序了
  for (let i = 1; i < n; i++) {
    // 寻找元素arr[i]合适的插入位置
    // 如果当前元素比前一个元素小就交换两者位置
    const e = arr[i] //保存元素e应该插入的位置
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1]
    }
    // 减少赋值，性能更好
    arr[j] = e
  }
  return arr
}

const n = 1000;
const testArray = generateRandomArray(n, 0, n)
const res = insertSort(testArray, n)
const hasSorted = isSorted(res, n)
console.log(hasSorted)
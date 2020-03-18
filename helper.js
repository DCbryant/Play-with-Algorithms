module.exports = {
  generateRandomArray (n, rangeL, rangeR) {
    if (rangeL >= rangeR) {
      throw new Error('Error');
    }
    const arr = new Array (n);
    for (let i = 0; i < n; i++) {
      arr[i] = Math.floor(Math.random () * (rangeR + 1 - rangeL)) + rangeL;
    }
    return arr;
  },
  isSorted (arr, n) {
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  },
  swap (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  },
};

module.exports = {
  generateRandomArray(n, rangeL, rangeR) {
    if (rangeL >= rangeR) {
      throw new Error('Error')
    }
    const arr = new Array(n)
    for (let i = 0; i < n; i++) {
      arr[i] = Math.floor(Math.random() * (rangeR + 1 - rangeL)) + rangeL
    }
    return arr;
  }
}
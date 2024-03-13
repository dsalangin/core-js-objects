function makeWord(arr) {
  return arr.forEach((s) => {
    if (s === 1) {
      return false;
    }
    return true;
  });
}

console.log(makeWord([2, 3, 4]));

function mergeObjects(objects) {
  const result = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      console.log('присвоение', result[key]);
      if (!result[key]) {
        result[key] = value;
      } else {
        result[key] += value;
      }
    });
  });
  return result;
}

console.log(
  mergeObjects([
    { a: 1, b: 2 },
    { b: 3, c: 5 },
  ])
);

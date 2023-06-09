function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }));

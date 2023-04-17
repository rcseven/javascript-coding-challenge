function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left) + pivot + quickSort(right);
}

function setToArray(num) {
  let str = num.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str.charAt(i)));
  }
  return arr;
}

const unsorted = [2, 3, 4, 2, 6];
const sorted = quickSort(unsorted);
console.log(setToArray(sorted));

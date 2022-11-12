const arr = [1, 2, 5, 3, 6, 9, 7];
var first = 0;
var second = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    second = first;
    first = arr[i];
  } else if (arr[i] != first && arr[i] > second) {
    second = arr[i];
  }
}

console.log(first);
console.log(second);

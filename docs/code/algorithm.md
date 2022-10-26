# 算法

## 快速排序

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const index = Math.floor(arr.length / 2);
  const mid = arr.splice(index, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat([mid], quickSort(right));
}
```

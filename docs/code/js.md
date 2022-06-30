---
title: JavaScript记录
author: King
date: "2022-6-20"
---

### 下载

```js
function download() {
  const a = document.createElement("a");
  a.href = "https://dldir1.qq.com/qqfile/qq/PCQQ9.6.1/QQ9.6.1.28732.exe";
  a.name = "qqtest";
  a.rel = "noopener";
  a.dispatchEvent(new MouseEvent("click"));
}
```

### 判断整数

```js
// ES6
Number.isInteger(num);

// ES5
if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num == "number" && num % 1 == 0;
  };
}
```

### 实现继承

```js
function A() {}

function B() {
  A.call(this);
}

B.prototype = Object.create(A.prototype);
// B.prototype = new A()     不推荐
```

##### `Element.scrollIntoView()`滚动元素的父容器，使被调用 scrollIntoView() 的元素对用户可见。

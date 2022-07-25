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

### js 吸顶效果

```js
let oDiv = document.querySelector("article .options");
let oTop =
  document.querySelector(".support__tabs--right").offsetTop +
  oDiv.offsetTop +
  document.querySelector(".content-block-title").offsetTop +
  document.querySelector(".content-block-title").offsetHeight;
let pHeight = document.querySelector(".page-header").offsetHeight;
window.onscroll = function () {
  //获取页面的滚动距离
  let oheight = document.documentElement.scrollTop || document.body.scrollTop;
  //滚动到一定位置 div固定到顶部 js实现吸顶
  if (oTop < oheight) {
    oDiv.style.position = "fixed";
    oDiv.style.top = isMobile() ? 0 : pHeight + "px";
    oDiv.style.marginTop = 0;
  } else {
    oDiv.style.position = "relative";
    oDiv.style.top = 0;
    oDiv.style.marginTop = "35px";
  }
};
```

### copy

```js
const copyText = (txt) => {
  return new Promise((resovle, reject) => {
    if (navigator.clipboard) {
      resove(navigator.clipboard.writeText(txt));
    } else {
      var input = document.createElement("input");
      document.body.appendChild(input);
      input.setAttribute("value", txt);
      input.select();
      document.execCommand("copy"); // 执行浏览器复制命令
      if (document.execCommand("copy")) {
        document.execCommand("copy");
        resovle();
      }
      document.body.removeChild(input);
    }
  });
};
```

### mutations observe

```js
const observeElement = (
  el: HTMLElement,
  callback: Function,
  options: Object = {}
) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => callback(m));
  });
  observer.observe(
    el,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
      },
      options
    )
  );
  return observer;
};
```

### `getComputedStyle(element, [pseudoElt])` 获取当前元素的 style

### `window.getSelection().toString()` 获取当前选定文本

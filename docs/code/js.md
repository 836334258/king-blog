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

### `element.insertAdjacentText(position, element)` 方法将一个给定的文本节点插入在相对于被调用的元素给定的位置 `element.insertAdjacentHTML(position, text)` 方法将一个给定 DOM 节点插入在相对于被调用的元素给定的位置 `element.insertAdjacentElement(position, element)` 方法将一个给定的元素节点插入到相对于被调用的元素的给定的一个位置,position 有四个值

- `beforebegin` 在该元素本身的前面
- `afterbegin` 只在该元素当中，在该元素第一个子孩子前面
- `beforeend` 只在该元素当中，在该元素最后一个子孩子后面
- `afterend` 在该元素本身的后面

### 弹窗

```js
class PopBox {
  constructor(dom, content = "") {
    this.dom = this.isString(dom) ? document.querySelector(dom) : dom;
    this.popBoxShadow = document.createElement("div");
    this.popBox = document.createElement("div");
    this.popBoxText = document.createTextNode(content);
    this.css = document.querySelector("style[title=locket-pop-box-css]")
      ? null
      : document.createElement("style");
    this.dom.appendChild(this.popBoxShadow);
    this.init();
    this.addOpenListen();
    this.addCloseListen();
    this.addPopBoxShadowListen();
  }
  init() {
    this.popBoxShadow.className = "locket-pop-box-shadow";
    this.popBox.className = "locket-pop-box";
    this.popBoxShadow.insertAdjacentElement("afterbegin", this.popBox);
    const svgContent = `<svg class="locket-close"  style="width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z" p-id="1540"></path></svg>`;
    this.popBox.insertAdjacentHTML("afterbegin", svgContent);
    this.popBox.insertAdjacentHTML("afterbegin", this.popBoxText.textContent);
    this.initCss();
  }
  initCss() {
    if (this.css) {
      this.popBoxShadow.appendChild(this.css);
      this.css.style.type = "text/css";
      this.css.title = "locket-pop-box-css";
      this.css.innerHTML = ` .locket-pop-box-shadow {
                              position: fixed;
                              top: 0;
                              left: 0;
                              width: 100%;
                              height: 100%;
                              display:none;
                              background-color: rgba(0, 0, 0, .3);
                            }

                            .locket-pop-box {
                              position: absolute;
                              left: 50%;
                              top: 50%;
                              transform: translate(-50%, -50%);
                              width: 50%;
                              padding: 20px;
                              min-height: 100px;
                              background-color: #fff;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              animation: show .5s ease-in-out 0s;
                              box-shadow: 0px 0px 10px #ccc;
                              border-radius: 3px;
                              font-size: 3vmin;
                            }

                            .locket-pop-box .locket-close {
                              position: absolute;
                              right: 15px;
                              top: 15px;
                              cursor: pointer;
                            }

                            .locket-pop-box.locket-pop-box-close {
                              animation: close .5s ease-in-out 0s;
                            }

                            @keyframes show {
                              from {
                                transform: translate(-50%, -50%) scale(0);
                              }

                              to {
                                transform: translate(-50%, -50%) scale(1);
                              }
                            }

                            @keyframes close {
                              from {
                                transform: translate(-50%, -50%) scale(1);
                              }

                              to {
                                transform: translate(-50%, -50%) scale(0);
                              }
                            }
                            `;
    }
  }

  addCloseListen() {
    this.dom.querySelector(".locket-pop-box .locket-close").addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        this.close();
      },
      false
    );
  }
  addOpenListen() {
    this.dom.addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        this.open();
      },
      false
    );
  }
  addPopBoxShadowListen() {
    this.dom
      .querySelector(".locket-pop-box-shadow")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("locket-pop-box-shadow")) {
          this.close();
        }
      });
  }
  is(data) {
    return Object.prototype.toString.call(data);
  }
  isString(data) {
    return this.is(data) === "[object String]";
  }
  open() {
    this.dom
      .querySelector(".locket-pop-box-shadow")
      .style.setProperty("display", "block");
  }
  close() {
    const locketPopBox = this.dom.querySelector(
      ".locket-pop-box .locket-close"
    ).parentNode;
    locketPopBox.classList.add("locket-pop-box-close");
    const closeLocketPopBoxFunc = () => {
      locketPopBox.classList.remove("locket-pop-box-close");
      locketPopBox.parentNode.style.setProperty("display", "none");
      locketPopBox.removeEventListener("animationend", closeLocketPopBoxFunc);
    };
    locketPopBox.addEventListener("animationend", closeLocketPopBoxFunc);
  }
}
```

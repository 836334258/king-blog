---
title: css记录
author: King
date: "2022-5-30"
---

## 翻阅[tailwindcss](https://tailwindcss.com/)的时候，感到有些 css 属性认识不深刻，平时不常用的 css 使用过后大多会忘记，故特意写一篇文章记录一下平时用到过的 css

- `box-decoration-break` 用来定义当元素跨多行、多列或多页时，元素的片段应如何呈现
  - `slice` 切割
  - `clone` 复制
- `box-sizing`盒子大小
  - `border-box`: `width`包含`padding`,`border`
  - `content-box` `width`只是`width`,不包含其他
- `display`
  - `flow-root` 当子元素是浮动的并且子元素的高度大于父元素的高度时，会发生高度塌陷的问题，用这个属性可以完美解决![css-2.png](/images/css-1.png) ![css-2.png](/images/css-2.png)
- `color`
  - `rgb(214 122 127 / 0.4)` 可以改变文字的透明度，注意没有逗号
- `mix-blend-mode` 描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合
- `.选择器>*+*` 选择子元素下不包含第一个元素的其他子元素
- `scroll-snap-type` 定义在滚动容器中的一个临时点（snap point）如何被严格的执行
  - `x mandatory` 只能显示一屏内容
- `aspect-ratio` 为 box 容器规定期待的纵横比
- 滚动栏设置样式

  ```css
  整个滚动条。
  .new-header
    .menu-search-wrapper
    .search-input-box
    .result-box::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    border-radius: 10px;
  }
  滚动条轨道
  .new-header
    .menu-search-wrapper
    .search-input-box
    .result-box::-webkit-scrollbar-track {
    background-color: #fff;
  }
  滚动条上的滚动滑块
  .new-header
    .menu-search-wrapper
    .search-input-box
    .result-box::-webkit-scrollbar-thumb {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  火狐兼容
   scrollbar-color: #D9D9D9;
  scrollbar-width: thin;
  ```

- 分割线 divider

  ```html
  <style>
    .cart_summary_container .cart-ads .ad-intro {
      border-top: 1px solid #cccccc;
      height: 1px;
      position: relative;
    }
    .cart_summary_container .cart-ads .ad-intro div {
      font-weight: 600;
      font-size: 14px;
      color: #333333;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: #ffffff;
      padding: 0 5px;
      white-space: nowrap;
    }

    <!-- 或者 -- > h1 {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 1em;
    }
    h1::before,
    h1::after {
      content: "";
      border-top: 0.1em double black;
      align-self: center;
    }
  </style>
  <div class="ad-intro">
    <div>New Arrival Pegboard</div>
  </div>
  ```

- 三角形
  ```css
  width: 0;
  height: 0;
  border: 11px solid;
  border-color: transparent transparent #ffffff transparent;
  ```
- 文本溢出

  ```css
  .hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;（当文本溢出时，显示省略号）
  }
  .hidden {
    -webkit-line-clamp: 2;（最多显示 2 行）
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ```

- 带底部三角形的边框

  ```css
  .container {
    position: relative;
    background: #ffffff;
    padding: 15px;
    border: 1px solid #dddddd;
    margin-top: 20px;
  }

  .container:before,
  .container:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 139px;
    border: 11px solid transparent;
    border-bottom-color: #dddddd;
  }

  .container:after {
    left: 140px;
    border: 10px solid transparent;
    border-bottom-color: #ffffff;
  }
  ```

- grid 自适应布局
  ```css
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: max-content;
  ```

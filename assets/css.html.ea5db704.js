import{_ as p,r as t,o as e,c,a as s,d as n,e as o,b as i}from"./app.fc8d2037.js";const l="/king-blog/images/css-1.png",u="/king-blog/images/css-2.png",r={},d={id:"翻阅tailwindcss的时候-感到有些-css-属性认识不深刻-平时不常用的-css-使用过后大多会忘记-故特意写一篇文章记录一下平时用到过的-css",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#翻阅tailwindcss的时候-感到有些-css-属性认识不深刻-平时不常用的-css-使用过后大多会忘记-故特意写一篇文章记录一下平时用到过的-css","aria-hidden":"true"},"#",-1),v={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},b=i('<ul><li><p><code>box-decoration-break</code> 用来定义当元素跨多行、多列或多页时，元素的片段应如何呈现</p><ul><li><code>slice</code> 切割</li><li><code>clone</code> 复制</li></ul></li><li><p><code>box-sizing</code>盒子大小</p><ul><li><code>border-box</code>: <code>width</code>包含<code>padding</code>,<code>border</code></li><li><code>content-box</code> <code>width</code>只是<code>width</code>,不包含其他</li></ul></li><li><p><code>display</code></p><ul><li><code>flow-root</code> 当子元素是浮动的并且子元素的高度大于父元素的高度时，会发生高度塌陷的问题，用这个属性可以完美解决<img src="'+l+'" alt="css-2.png"> <img src="'+u+`" alt="css-2.png"></li></ul></li><li><p><code>color</code></p><ul><li><code>rgb(214 122 127 / 0.4)</code> 可以改变文字的透明度，注意没有逗号</li></ul></li><li><p><code>mix-blend-mode</code> 描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合</p></li><li><p><code>.选择器&gt;*+*</code> 选择子元素下不包含第一个元素的其他子元素</p></li><li><p><code>scroll-snap-type</code> 定义在滚动容器中的一个临时点（snap point）如何被严格的执行</p><ul><li><code>x mandatory</code> 只能显示一屏内容</li></ul></li><li><p><code>aspect-ratio</code> 为 box 容器规定期待的纵横比</p></li><li><p>滚动栏设置样式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">整个滚动条。
.new-header
  .menu-search-wrapper
  .search-input-box
  .result-box::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">滚动条轨道
.new-header
  .menu-search-wrapper
  .search-input-box
  .result-box::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">滚动条上的滚动滑块
.new-header
  .menu-search-wrapper
  .search-input-box
  .result-box::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
火狐兼容
 <span class="token property">scrollbar-color</span><span class="token punctuation">:</span> #D9D9D9<span class="token punctuation">;</span>
<span class="token property">scrollbar-width</span><span class="token punctuation">:</span> thin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>分割线 divider</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.cart_summary_container .cart-ads .ad-intro</span> <span class="token punctuation">{</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #cccccc<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.cart_summary_container .cart-ads .ad-intro div</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 5px<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&lt;!-- 或者 -- &gt; h1</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr auto 1fr<span class="token punctuation">;</span>
    <span class="token property">gap</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">h1::before,
  h1::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 0.1em double black<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ad-intro<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>New Arrival Pegboard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>三角形</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">border</span><span class="token punctuation">:</span> 11px solid<span class="token punctuation">;</span>
<span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent #ffffff transparent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>文本溢出</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hidden</span> <span class="token punctuation">{</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>（当文本溢出时，显示省略号）
<span class="token punctuation">}</span>
<span class="token selector">.hidden</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>（最多显示 2 行）
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>带底部三角形的边框</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dddddd<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container:before,
.container:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 139px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 11px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #dddddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container:after</span> <span class="token punctuation">{</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 10px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>grid 自适应布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>240px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> max-content<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1);function m(g,y){const a=t("ExternalLinkIcon");return e(),c("div",null,[s("h2",d,[k,n(" 翻阅"),s("a",v,[n("tailwindcss"),o(a)]),n("的时候，感到有些 css 属性认识不深刻，平时不常用的 css 使用过后大多会忘记，故特意写一篇文章记录一下平时用到过的 css")]),b])}const h=p(r,[["render",m],["__file","css.html.vue"]]);export{h as default};

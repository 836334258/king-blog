import{_ as n,o as s,c as a,e as p}from"./app.64d10039.js";const t={},e=p(`<h2 id="\u7A7A\u95F2\u4E4B\u4F59-\u5076\u5C14\u4F1A\u60F3\u5230\u66FE\u7ECF\u5237\u9898\u7684\u5C81\u6708-\u8FD9\u6B21\u6211\u628A\u4E4B\u524D\u5237\u8FC7\u7684\u9898\u76EE\u6574\u7406\u4E86\u4E00\u4E0B-\u4EE5\u4FBF\u65E5\u540E\u7FFB\u9605" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u95F2\u4E4B\u4F59-\u5076\u5C14\u4F1A\u60F3\u5230\u66FE\u7ECF\u5237\u9898\u7684\u5C81\u6708-\u8FD9\u6B21\u6211\u628A\u4E4B\u524D\u5237\u8FC7\u7684\u9898\u76EE\u6574\u7406\u4E86\u4E00\u4E0B-\u4EE5\u4FBF\u65E5\u540E\u7FFB\u9605" aria-hidden="true">#</a> \u7A7A\u95F2\u4E4B\u4F59\uFF0C\u5076\u5C14\u4F1A\u60F3\u5230\u66FE\u7ECF\u5237\u9898\u7684\u5C81\u6708\uFF0C\u8FD9\u6B21\u6211\u628A\u4E4B\u524D\u5237\u8FC7\u7684\u9898\u76EE\u6574\u7406\u4E86\u4E00\u4E0B\uFF0C\u4EE5\u4FBF\u65E5\u540E\u7FFB\u9605</h2><blockquote><p>\u5B66\u6D77\u65E0\u6DAF\u82E6\u4F5C\u821F\uFF0C\u6BCF\u5F53\u56DE\u60F3\u8D77\u6765\uFF0C\u4FBF\u4E5F\u4E0D\u89C9\u5F97\u82E6\u4E86</p></blockquote><h3 id="\u4FBF\u5229\u6587\u4EF6\u6620\u5C04\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FBF\u5229\u6587\u4EF6\u6620\u5C04\u4EE3\u7801" aria-hidden="true">#</a> \u4FBF\u5229\u6587\u4EF6\u6620\u5C04\u4EE3\u7801</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  readdirSync<span class="token punctuation">,</span>
  readFileSync<span class="token punctuation">,</span>
  lstatSync<span class="token punctuation">,</span>
  writeFileSync
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  join
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>



<span class="token keyword">let</span> dirs <span class="token operator">=</span> <span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
dirs <span class="token operator">=</span> dirs<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token operator">!</span>dir<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\.md|\\.mjs|\\.mod|\\.go)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">lstatSync</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


dirs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">dir</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> mainDir <span class="token operator">=</span> <span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> filePath <span class="token operator">=</span> <span class="token function">join</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> mainDir<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> fileContext <span class="token operator">=</span> <span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
  <span class="token keyword">const</span> ext<span class="token operator">=</span>filePath<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>filePath<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> writeContext <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">### </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\\`\\\`\\\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ext<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileContext<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\\`\\\`\\\`</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> <span class="token string">&#39;\\n\\n&#39;</span>
  <span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./1.md&#39;</span><span class="token punctuation">,</span> writeContext<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">&#39;a+&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_100-\u76F8\u540C\u7684\u6811" tabindex="-1"><a class="header-anchor" href="#_100-\u76F8\u540C\u7684\u6811" aria-hidden="true">#</a> 100. \u76F8\u540C\u7684\u6811</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> q <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> p <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> p <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> q <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> p<span class="token punctuation">.</span>Val <span class="token operator">!=</span> q<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>Left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1008-\u524D\u5E8F\u904D\u5386\u6784\u9020\u4E8C\u53C9\u641C\u7D22\u6811" tabindex="-1"><a class="header-anchor" href="#_1008-\u524D\u5E8F\u904D\u5386\u6784\u9020\u4E8C\u53C9\u641C\u7D22\u6811" aria-hidden="true">#</a> 1008. \u524D\u5E8F\u904D\u5386\u6784\u9020\u4E8C\u53C9\u641C\u7D22\u6811</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">bstFromPreorder</span><span class="token punctuation">(</span>preorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_101-\u5BF9\u79F0\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#_101-\u5BF9\u79F0\u4E8C\u53C9\u6811" aria-hidden="true">#</a> 101. \u5BF9\u79F0\u4E8C\u53C9\u6811</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">isMirror</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">isMirror</span><span class="token punctuation">(</span>t1 <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span>t2 <span class="token operator">*</span> TreeNode<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> t1<span class="token operator">==</span><span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> t2<span class="token operator">==</span><span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> t1<span class="token operator">==</span><span class="token boolean">nil</span><span class="token operator">||</span>t2<span class="token operator">==</span><span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> t1<span class="token punctuation">.</span>Val<span class="token operator">==</span>t2<span class="token punctuation">.</span>Val <span class="token operator">&amp;&amp;</span> <span class="token function">isMirror</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span>Left<span class="token punctuation">,</span>t2<span class="token punctuation">.</span>Right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isMirror</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span>Right<span class="token punctuation">,</span>t2<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 t<span class="token operator">:=</span><span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>Left<span class="token punctuation">:</span><span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>Left<span class="token punctuation">:</span><span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>Right<span class="token punctuation">:</span><span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>Right<span class="token punctuation">:</span>
 <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span>Left<span class="token punctuation">:</span><span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>Right<span class="token punctuation">:</span><span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isSymmetric</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_102-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#_102-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386" aria-hidden="true">#</a> 102. \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 <span class="token keyword">var</span> inOrder <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
 inOrder <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Val<span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
   <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>

   res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val<span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>

   res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Val<span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 node <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">inorderTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_104-\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" tabindex="-1"><a class="header-anchor" href="#_104-\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" aria-hidden="true">#</a> 104. \u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> root<span class="token operator">?</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1108-ip-\u5730\u5740\u65E0\u6548\u5316" tabindex="-1"><a class="header-anchor" href="#_1108-ip-\u5730\u5740\u65E0\u6548\u5316" aria-hidden="true">#</a> 1108. IP \u5730\u5740\u65E0\u6548\u5316</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">defangIPaddr</span><span class="token punctuation">(</span>address <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;[.]&quot;</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 address <span class="token operator">:=</span> <span class="token string">&quot;1.1.1.1&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">defangIPaddr</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1122-\u6570\u7EC4\u7684\u76F8\u5BF9\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_1122-\u6570\u7EC4\u7684\u76F8\u5BF9\u6392\u5E8F" aria-hidden="true">#</a> 1122. \u6570\u7EC4\u7684\u76F8\u5BF9\u6392\u5E8F</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">relativeSortArray</span><span class="token punctuation">(</span>arr1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> arr2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ans <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
 
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> arr2 <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> arr1 <span class="token punctuation">{</span>
   <span class="token keyword">if</span> v1 <span class="token operator">==</span> v2 <span class="token punctuation">{</span>
    ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> v1<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 arr1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">}</span>
 arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">relativeSortArray</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1160-\u62FC\u5199\u5355\u8BCD" tabindex="-1"><a class="header-anchor" href="#_1160-\u62FC\u5199\u5355\u8BCD" aria-hidden="true">#</a> 1160. \u62FC\u5199\u5355\u8BCD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">countCharacters</span><span class="token punctuation">(</span>words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> chars <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> charMap<span class="token operator">=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">uint8</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> l <span class="token builtin">int</span>

 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  charMap<span class="token punctuation">[</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> wordMap<span class="token operator">=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">uint8</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
  flag<span class="token operator">:=</span><span class="token boolean">true</span>
  <span class="token keyword">for</span> j<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">{</span>
   wordMap<span class="token punctuation">[</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> k<span class="token punctuation">,</span><span class="token boolean">_</span><span class="token operator">:=</span><span class="token keyword">range</span> wordMap<span class="token punctuation">{</span>
   <span class="token keyword">if</span> wordMap<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">&gt;</span>charMap<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    flag<span class="token operator">=</span><span class="token boolean">false</span>
    <span class="token keyword">continue</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> flag <span class="token punctuation">{</span>
   l<span class="token operator">+=</span><span class="token function">len</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>  l
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 words<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;leetcode&quot;</span><span class="token punctuation">}</span>
 chars<span class="token operator">:=</span><span class="token string">&quot;welldonehoneyr&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">countCharacters</span><span class="token punctuation">(</span>words<span class="token punctuation">,</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_118-\u6768\u8F89\u4E09\u89D2" tabindex="-1"><a class="header-anchor" href="#_118-\u6768\u8F89\u4E09\u89D2" aria-hidden="true">#</a> 118. \u6768\u8F89\u4E09\u89D2</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">generate</span><span class="token punctuation">(</span>numRows <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ans <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 k <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
   k<span class="token operator">++</span>
   ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> k
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a[%d][%d]=%d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> ans

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1200-\u6700\u5C0F\u7EDD\u5BF9\u5DEE" tabindex="-1"><a class="header-anchor" href="#_1200-\u6700\u5C0F\u7EDD\u5BF9\u5DEE" aria-hidden="true">#</a> 1200. \u6700\u5C0F\u7EDD\u5BF9\u5DEE</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">minimumAbsDifference</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
 <span class="token keyword">var</span> aa <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

 min <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> min <span class="token operator">==</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   aa <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>aa<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> min <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
   aa <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
   aa <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>aa<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> aa
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 aa <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">minimumAbsDifference</span><span class="token punctuation">(</span>aa<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1207-\u72EC\u4E00\u65E0\u4E8C\u7684\u51FA\u73B0\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#_1207-\u72EC\u4E00\u65E0\u4E8C\u7684\u51FA\u73B0\u6B21\u6570" aria-hidden="true">#</a> 1207. \u72EC\u4E00\u65E0\u4E8C\u7684\u51FA\u73B0\u6B21\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">uniqueOccurrences</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> tmp <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  tmp<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
 <span class="token keyword">return</span>  <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">uniqueOccurrences</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_121-\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#_121-\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A" aria-hidden="true">#</a> 121. \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span>prices <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 ans<span class="token operator">:=</span><span class="token number">0</span>

 l<span class="token operator">:=</span><span class="token function">len</span><span class="token punctuation">(</span>prices<span class="token punctuation">)</span>

 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span> k<span class="token operator">:=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>k<span class="token operator">&lt;</span>l<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span> prices<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">-</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span>ans  <span class="token punctuation">{</span>
    ans<span class="token operator">=</span> prices<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">-</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 arr<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">maxProfit</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1232-\u7F00\u70B9\u6210\u7EBF" tabindex="-1"><a class="header-anchor" href="#_1232-\u7F00\u70B9\u6210\u7EBF" aria-hidden="true">#</a> 1232. \u7F00\u70B9\u6210\u7EBF</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">checkStraightLine</span><span class="token punctuation">(</span>coordinates <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u659C\u7387</span>
 k <span class="token operator">:=</span> <span class="token punctuation">(</span>coordinates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> coordinates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>coordinates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> coordinates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span>coordinates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token operator">||</span> <span class="token punctuation">(</span>coordinates<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">/</span>coordinates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span>coordinates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> k  <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">checkStraightLine</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1281-\u6574\u6570\u7684\u5404\u4F4D\u79EF\u548C\u4E4B\u5DEE" tabindex="-1"><a class="header-anchor" href="#_1281-\u6574\u6570\u7684\u5404\u4F4D\u79EF\u548C\u4E4B\u5DEE" aria-hidden="true">#</a> 1281. \u6574\u6570\u7684\u5404\u4F4D\u79EF\u548C\u4E4B\u5DEE</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">subtractProductAndSum</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 strN<span class="token operator">:=</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
 i<span class="token operator">:=</span><span class="token function">len</span><span class="token punctuation">(</span>strN<span class="token punctuation">)</span>
 ji<span class="token operator">:=</span><span class="token number">1</span>
 he<span class="token operator">:=</span><span class="token number">0</span>
 <span class="token keyword">for</span> i<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">{</span>
  aa<span class="token operator">:=</span>n<span class="token operator">%</span><span class="token number">10</span>
  n<span class="token operator">/=</span><span class="token number">10</span>
  ji<span class="token operator">*=</span>aa
  he<span class="token operator">+=</span>aa
  i<span class="token operator">--</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ji<span class="token operator">-</span>he
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">subtractProductAndSum</span><span class="token punctuation">(</span><span class="token number">234</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1287-\u6709\u5E8F\u6570\u7EC4\u4E2D\u51FA\u73B0\u6B21\u6570\u8D85\u8FC725-\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_1287-\u6709\u5E8F\u6570\u7EC4\u4E2D\u51FA\u73B0\u6B21\u6570\u8D85\u8FC725-\u7684\u5143\u7D20" aria-hidden="true">#</a> 1287. \u6709\u5E8F\u6570\u7EC4\u4E2D\u51FA\u73B0\u6B21\u6570\u8D85\u8FC725%\u7684\u5143\u7D20</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">findSpecialInteger</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
  m<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>
 max <span class="token operator">:=</span> <span class="token number">0</span>
 index <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v <span class="token operator">&gt;</span> max <span class="token punctuation">{</span>
   max<span class="token punctuation">,</span> index <span class="token operator">=</span> v<span class="token punctuation">,</span> k
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> index
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">findSpecialInteger</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1290-\u4E8C\u8FDB\u5236\u94FE\u8868\u8F6C\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#_1290-\u4E8C\u8FDB\u5236\u94FE\u8868\u8F6C\u6574\u6570" aria-hidden="true">#</a> 1290. \u4E8C\u8FDB\u5236\u94FE\u8868\u8F6C\u6574\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> ListNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Val <span class="token builtin">int</span>
    Next <span class="token operator">*</span>ListNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getDecimalValue</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 num<span class="token operator">:=</span><span class="token number">0</span>
 <span class="token keyword">for</span> head<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
  num<span class="token operator">=</span>num<span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token operator">+</span>head<span class="token punctuation">.</span>Val
  head<span class="token operator">=</span>head<span class="token punctuation">.</span>Next
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> num

<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 ln<span class="token operator">:=</span><span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>Next<span class="token punctuation">:</span><span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>Next<span class="token punctuation">:</span><span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>Next<span class="token punctuation">:</span><span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>


 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">getDecimalValue</span><span class="token punctuation">(</span>ln<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1295-\u7EDF\u8BA1\u4F4D\u6570\u4E3A\u5076\u6570\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_1295-\u7EDF\u8BA1\u4F4D\u6570\u4E3A\u5076\u6570\u7684\u6570\u5B57" aria-hidden="true">#</a> 1295. \u7EDF\u8BA1\u4F4D\u6570\u4E3A\u5076\u6570\u7684\u6570\u5B57</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">findNumbers</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 i <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> i
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">345</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7896</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">findNumbers</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1313-\u89E3\u538B\u7F29\u7F16\u7801\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_1313-\u89E3\u538B\u7F29\u7F16\u7801\u5217\u8868" aria-hidden="true">#</a> 1313. \u89E3\u538B\u7F29\u7F16\u7801\u5217\u8868</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">decompressRLElist</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ans <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> k<span class="token operator">++</span> <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">decompressRLElist</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1325-\u5220\u9664\u7ED9\u5B9A\u503C\u7684\u53F6\u5B50\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1325-\u5220\u9664\u7ED9\u5B9A\u503C\u7684\u53F6\u5B50\u8282\u70B9" aria-hidden="true">#</a> 1325. \u5220\u9664\u7ED9\u5B9A\u503C\u7684\u53F6\u5B50\u8282\u70B9</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">removeLeafNodes</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>

 <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span>

 root<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token function">removeLeafNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
 root<span class="token punctuation">.</span>Right <span class="token operator">=</span> <span class="token function">removeLeafNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> target<span class="token punctuation">)</span>

 <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Val <span class="token operator">==</span> target <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 node <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">removeLeafNodes</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1342-\u5C06\u6570\u5B57\u53D8\u6210-0-\u7684\u64CD\u4F5C\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#_1342-\u5C06\u6570\u5B57\u53D8\u6210-0-\u7684\u64CD\u4F5C\u6B21\u6570" aria-hidden="true">#</a> 1342. \u5C06\u6570\u5B57\u53D8\u6210 0 \u7684\u64CD\u4F5C\u6B21\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">numberOfSteps</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 step<span class="token operator">:=</span><span class="token number">0</span>
 <span class="token keyword">for</span> num<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> num<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
   num<span class="token operator">/=</span><span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   num<span class="token operator">-=</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
  step<span class="token operator">++</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>  step
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 num <span class="token operator">:=</span> <span class="token number">123</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">numberOfSteps</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_136-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_136-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57" aria-hidden="true">#</a> 136. \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> i <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> k<span class="token operator">++</span> <span class="token punctuation">{</span>
  i <span class="token operator">=</span> i <span class="token operator">^</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> i
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">singleNumber</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1365-\u6709\u591A\u5C11\u5C0F\u4E8E\u5F53\u524D\u6570\u5B57\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_1365-\u6709\u591A\u5C11\u5C0F\u4E8E\u5F53\u524D\u6570\u5B57\u7684\u6570\u5B57" aria-hidden="true">#</a> 1365. \u6709\u591A\u5C11\u5C0F\u4E8E\u5F53\u524D\u6570\u5B57\u7684\u6570\u5B57</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">smallerNumbersThanCurrent</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 ans <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmp <span class="token builtin">int</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
   <span class="token keyword">if</span> v1 <span class="token operator">&gt;</span> v2 <span class="token punctuation">{</span>
    tmp<span class="token operator">++</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">smallerNumbersThanCurrent</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_137-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-ii" tabindex="-1"><a class="header-anchor" href="#_137-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-ii" aria-hidden="true">#</a> 137. \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57 II</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token number">0</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">32</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
      sum<span class="token operator">+=</span><span class="token punctuation">(</span>num<span class="token operator">&gt;&gt;</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    res <span class="token operator">^=</span><span class="token punctuation">(</span>sum<span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>i
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token function">addBinary</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 145. \u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

type TreeNode struct <span class="token punctuation">{</span>
 Val   int
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

func <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span>int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> f <span class="token function">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>

 f <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">root <span class="token operator">*</span>TreeNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> root <span class="token operator">==</span> nil <span class="token punctuation">{</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token function">f</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
  <span class="token function">f</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
  res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">f</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1470-\u91CD\u65B0\u6392\u5217\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1470-\u91CD\u65B0\u6392\u5217\u6570\u7EC4" aria-hidden="true">#</a> 1470. \u91CD\u65B0\u6392\u5217\u6570\u7EC4</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">shuffle</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 <span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> i <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
   a <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   b <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">var</span> c <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  c <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  c <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span>
 n <span class="token operator">:=</span> <span class="token number">3</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">shuffle</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1480-\u4E00\u7EF4\u6570\u7EC4\u7684\u52A8\u6001\u548C" tabindex="-1"><a class="header-anchor" href="#_1480-\u4E00\u7EF4\u6570\u7EC4\u7684\u52A8\u6001\u548C" aria-hidden="true">#</a> 1480. \u4E00\u7EF4\u6570\u7EC4\u7684\u52A8\u6001\u548C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">runningSum</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> tmp <span class="token builtin">int</span>
 <span class="token keyword">var</span> tmpArr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  tmp <span class="token operator">+=</span> v
  tmpArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> tmpArr
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">runningSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1486-\u6570\u7EC4\u5F02\u6216\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1486-\u6570\u7EC4\u5F02\u6216\u64CD\u4F5C" aria-hidden="true">#</a> 1486. \u6570\u7EC4\u5F02\u6216\u64CD\u4F5C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">xorOperation</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> start <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 ans <span class="token operator">:=</span> <span class="token number">0</span>
 i <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  ans <span class="token operator">=</span> ans <span class="token operator">^</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">*</span>i<span class="token punctuation">)</span>
  i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
  n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">xorOperation</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_151-\u7FFB\u8F6C\u5B57\u7B26\u4E32\u91CC\u7684\u5355\u8BCD" tabindex="-1"><a class="header-anchor" href="#_151-\u7FFB\u8F6C\u5B57\u7B26\u4E32\u91CC\u7684\u5355\u8BCD" aria-hidden="true">#</a> 151. \u7FFB\u8F6C\u5B57\u7B26\u4E32\u91CC\u7684\u5355\u8BCD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">reverseWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 trimStr<span class="token operator">:=</span>strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 trimArr<span class="token operator">:=</span>strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>trimStr<span class="token punctuation">,</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> ansArr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token function">len</span><span class="token punctuation">(</span>trimArr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>trimArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
   <span class="token keyword">continue</span>
  <span class="token punctuation">}</span>
  ansArr<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>ansArr<span class="token punctuation">,</span>trimArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>ansArr<span class="token punctuation">,</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 s<span class="token operator">:=</span><span class="token string">&quot;a good   example&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">reverseWords</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1512-\u597D\u6570\u5BF9\u7684\u6570\u76EE" tabindex="-1"><a class="header-anchor" href="#_1512-\u597D\u6570\u5BF9\u7684\u6570\u76EE" aria-hidden="true">#</a> 1512. \u597D\u6570\u5BF9\u7684\u6570\u76EE</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">numIdenticalPairs</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ansArr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 <span class="token keyword">for</span> k1<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  <span class="token keyword">for</span> k2<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
   <span class="token keyword">if</span> nums<span class="token punctuation">[</span>k1<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>k2<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> k1 <span class="token operator">&lt;</span> k2 <span class="token punctuation">{</span>
    ansArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ansArr<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>k1<span class="token punctuation">,</span> k2<span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>ansArr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">numIdenticalPairs</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1528-\u91CD\u65B0\u6392\u5217\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_1528-\u91CD\u65B0\u6392\u5217\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 1528. \u91CD\u65B0\u6392\u5217\u5B57\u7B26\u4E32</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">restoreString</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> indices <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 ss <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">rune</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>indices<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
  ss<span class="token punctuation">[</span>indices<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> v
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;codeleet&quot;</span>
 indices <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">restoreString</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> indices<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1534-\u7EDF\u8BA1\u597D\u4E09\u5143\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1534-\u7EDF\u8BA1\u597D\u4E09\u5143\u7EC4" aria-hidden="true">#</a> 1534. \u7EDF\u8BA1\u597D\u4E09\u5143\u7EC4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">c</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countGoodTriplets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> a <span class="token operator">&amp;&amp;</span>
          Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> b <span class="token operator">&amp;&amp;</span>
          Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> c
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token operator">++</span>count
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> count
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  a <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span>
  b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  c <span class="token operator">=</span> <span class="token number">3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">countGoodTriplets</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_155-\u6700\u5C0F\u6808" tabindex="-1"><a class="header-anchor" href="#_155-\u6700\u5C0F\u6808" aria-hidden="true">#</a> 155. \u6700\u5C0F\u6808</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">MinStack</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">??</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minArr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">top</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MinStack</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getMin</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minArr<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>minArr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 obj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
 obj<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> param_3 <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> param_4 <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 1603. \u8BBE\u8BA1\u505C\u8F66\u7CFB\u7EDF

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

type ParkingSystem struct <span class="token punctuation">{</span>
 car map<span class="token punctuation">[</span>int<span class="token punctuation">]</span>int
<span class="token punctuation">}</span>

func <span class="token function">Constructor</span><span class="token punctuation">(</span>big int<span class="token punctuation">,</span> medium int<span class="token punctuation">,</span> small int<span class="token punctuation">)</span> ParkingSystem <span class="token punctuation">{</span>
 <span class="token keyword">return</span> ParkingSystem<span class="token punctuation">{</span><span class="token literal-property property">car</span><span class="token operator">:</span> map<span class="token punctuation">[</span>int<span class="token punctuation">]</span>int<span class="token punctuation">{</span><span class="token number">1</span><span class="token operator">:</span> big<span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> medium<span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span> small<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">func</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">*</span>ParkingSystem<span class="token punctuation">)</span> <span class="token function">AddCar</span><span class="token punctuation">(</span>carType int<span class="token punctuation">)</span> bool <span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">[</span>carType<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">[</span>carType<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span>

 <span class="token keyword">if</span> <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">[</span>carType<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">big</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token number">1</span>
 <span class="token literal-property property">medium</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token number">1</span>
 <span class="token literal-property property">small</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token number">0</span>

 <span class="token literal-property property">obj</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token function">Constructor</span><span class="token punctuation">(</span>big<span class="token punctuation">,</span> medium<span class="token punctuation">,</span> small<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">AddCar</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">AddCar</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">AddCar</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">AddCar</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1630-\u7B49\u5DEE\u5B50\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1630-\u7B49\u5DEE\u5B50\u6570\u7EC4" aria-hidden="true">#</a> 1630. \u7B49\u5DEE\u5B50\u6570\u7EC4</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">checkArithmeticSubarrays</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> l <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> r <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ans <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span>

 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmpArr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

  <span class="token keyword">for</span> g <span class="token operator">:=</span> l<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> g <span class="token operator">&lt;=</span> r<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> g<span class="token operator">++</span> <span class="token punctuation">{</span>
   tmpArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>g<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  tempBool <span class="token operator">:=</span> <span class="token boolean">true</span>
  sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">)</span>
  <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>tmpArr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> k<span class="token operator">++</span> <span class="token punctuation">{</span>
   tmp <span class="token operator">:=</span> tmpArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> tmpArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
   <span class="token keyword">if</span> tmpArr<span class="token punctuation">[</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span>tmpArr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">!=</span> tmp <span class="token punctuation">{</span>
    <span class="token comment">//fmt.Println(tmpArr)</span>
    <span class="token comment">//fmt.Println(k)</span>
    tempBool <span class="token operator">=</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> tempBool<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span>
 l <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
 r <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">checkArithmeticSubarrays</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1636-\u6309\u7167\u9891\u7387\u5C06\u6570\u7EC4\u5347\u5E8F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_1636-\u6309\u7167\u9891\u7387\u5C06\u6570\u7EC4\u5347\u5E8F\u6392\u5E8F" aria-hidden="true">#</a> 1636. \u6309\u7167\u9891\u7387\u5C06\u6570\u7EC4\u5347\u5E8F\u6392\u5E8F</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">frequencySort</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> tmp <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 tmp <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  tmp<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>

 sort<span class="token punctuation">.</span><span class="token function">Slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">return</span> nums

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

 <span class="token function">frequencySort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1672-\u6700\u5BCC\u6709\u5BA2\u6237\u7684\u8D44\u4EA7\u603B\u91CF" tabindex="-1"><a class="header-anchor" href="#_1672-\u6700\u5BCC\u6709\u5BA2\u6237\u7684\u8D44\u4EA7\u603B\u91CF" aria-hidden="true">#</a> 1672. \u6700\u5BCC\u6709\u5BA2\u6237\u7684\u8D44\u4EA7\u603B\u91CF</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">maximumWealth</span><span class="token punctuation">(</span>accounts <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 max <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> accounts <span class="token punctuation">{</span>
  tmp <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v1 <span class="token punctuation">{</span>
   tmp <span class="token operator">+=</span> v2
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> max <span class="token operator">&lt;</span> tmp <span class="token punctuation">{</span>
   max <span class="token operator">=</span> tmp
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> max
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 accounts <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">maximumWealth</span><span class="token punctuation">(</span>accounts<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1678-\u8BBE\u8BA1-goal-\u89E3\u6790\u5668" tabindex="-1"><a class="header-anchor" href="#_1678-\u8BBE\u8BA1-goal-\u89E3\u6790\u5668" aria-hidden="true">#</a> 1678. \u8BBE\u8BA1 Goal \u89E3\u6790\u5668</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">interpret</span><span class="token punctuation">(</span>command <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 command <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">ReplaceAll</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token string">&quot;G&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;G&quot;</span><span class="token punctuation">)</span>
 command <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">ReplaceAll</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token string">&quot;()&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;o&quot;</span><span class="token punctuation">)</span>
 command <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">ReplaceAll</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token string">&quot;(al)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;al&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">return</span> command

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">interpret</span><span class="token punctuation">(</span><span class="token string">&quot;G()()()()(al)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1684-\u7EDF\u8BA1\u4E00\u81F4\u5B57\u7B26\u4E32\u7684\u6570\u76EE" tabindex="-1"><a class="header-anchor" href="#_1684-\u7EDF\u8BA1\u4E00\u81F4\u5B57\u7B26\u4E32\u7684\u6570\u76EE" aria-hidden="true">#</a> 1684. \u7EDF\u8BA1\u4E00\u81F4\u5B57\u7B26\u4E32\u7684\u6570\u76EE</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">countConsistentStrings</span><span class="token punctuation">(</span>allowed <span class="token builtin">string</span><span class="token punctuation">,</span> words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 ans <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> words <span class="token punctuation">{</span>
  <span class="token keyword">for</span> k<span class="token punctuation">,</span> char <span class="token operator">:=</span> <span class="token keyword">range</span> v <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token operator">!</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>allowed<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
    ans <span class="token operator">=</span> ans <span class="token operator">+</span> <span class="token number">1</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 allowed <span class="token operator">:=</span> <span class="token string">&quot;abc&quot;</span>
 words <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ac&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">countConsistentStrings</span><span class="token punctuation">(</span>allowed<span class="token punctuation">,</span> words<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1748-\u552F\u4E00\u5143\u7D20\u7684\u548C" tabindex="-1"><a class="header-anchor" href="#_1748-\u552F\u4E00\u5143\u7D20\u7684\u548C" aria-hidden="true">#</a> 1748. \u552F\u4E00\u5143\u7D20\u7684\u548C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">sumOfUnique</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 mp <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  mp<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> mp<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span>
 <span class="token punctuation">}</span>
 ans <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> mp <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> ans <span class="token operator">+</span> k
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sumOfUnique</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_191-\u4F4D1\u7684\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#_191-\u4F4D1\u7684\u4E2A\u6570" aria-hidden="true">#</a> 191. \u4F4D1\u7684\u4E2A\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token keyword">var</span> a <span class="token builtin">uint32</span><span class="token operator">=</span><span class="token number">00000000000000000000000000001011</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">uint32</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-\u6709\u6548\u7684\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#_20-\u6709\u6548\u7684\u62EC\u53F7" aria-hidden="true">#</a> 20. \u6709\u6548\u7684\u62EC\u53F7</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">isValid</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 l <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 <span class="token keyword">if</span> l <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">:</span>
   <span class="token keyword">if</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;)&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;)&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">:</span>
   <span class="token keyword">if</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;}&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;}&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">:</span>
   <span class="token keyword">if</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>l<span class="token operator">-</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;]&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;{[]}&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_202-\u5FEB\u4E50\u6570" tabindex="-1"><a class="header-anchor" href="#_202-\u5FEB\u4E50\u6570" aria-hidden="true">#</a> 202. \u5FEB\u4E50\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>

 temp<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

 <span class="token keyword">for</span>  <span class="token punctuation">{</span>
  tt<span class="token operator">:=</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  ttt<span class="token operator">:=</span><span class="token number">0</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>tt<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
   t<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>tt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   ttt <span class="token operator">+=</span> t <span class="token operator">*</span> t
  <span class="token punctuation">}</span>
  n<span class="token operator">=</span>ttt


  <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> t<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>t<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>t<span class="token operator">++</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> n<span class="token operator">==</span>temp<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  temp<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span>n<span class="token punctuation">)</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isHappy</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_205-\u540C\u6784\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_205-\u540C\u6784\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 205. \u540C\u6784\u5B57\u7B26\u4E32</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">isIsomorphic</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> t <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
  <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> strings<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;foo&quot;</span>
 t <span class="token operator">:=</span> <span class="token string">&quot;bar&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isIsomorphic</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_206-\u53CD\u8F6C\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_206-\u53CD\u8F6C\u94FE\u8868" aria-hidden="true">#</a> 206. \u53CD\u8F6C\u94FE\u8868</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> ListNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val  <span class="token builtin">int</span>
 Next <span class="token operator">*</span>ListNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
 <span class="token keyword">var</span> newHead<span class="token punctuation">,</span> next <span class="token operator">*</span>ListNode

 <span class="token keyword">for</span> head<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
  next<span class="token operator">=</span>head<span class="token punctuation">.</span>Next
  head<span class="token punctuation">.</span>Next<span class="token operator">=</span>newHead
  newHead<span class="token operator">=</span>head
  head<span class="token operator">=</span>next
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> newHead
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_21-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" aria-hidden="true">#</a> 21. \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>l1<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>  l2
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>l2<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val<span class="token operator">&lt;</span>l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
    l1<span class="token punctuation">.</span>next<span class="token operator">=</span><span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next<span class="token punctuation">,</span>l2<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l1
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    l2<span class="token punctuation">.</span>next<span class="token operator">=</span><span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span>l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    <span class="token keyword">return</span> l2
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 217. \u5B58\u5728\u91CD\u590D\u5143\u7D20

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

func <span class="token function">containsDuplicate</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span>int<span class="token punctuation">)</span> bool <span class="token punctuation">{</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> <span class="token literal-property property">i</span><span class="token operator">:</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">arr</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>int<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">containsDuplicate</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_219-\u5B58\u5728\u91CD\u590D\u5143\u7D20-ii" tabindex="-1"><a class="header-anchor" href="#_219-\u5B58\u5728\u91CD\u590D\u5143\u7D20-ii" aria-hidden="true">#</a> 219. \u5B58\u5728\u91CD\u590D\u5143\u7D20 II</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u8D85\u65F6</span>
<span class="token keyword">func</span> <span class="token function">containsNearbyDuplicate1</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> j <span class="token operator">:=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>i<span class="token operator">-</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> k <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">containsNearbyDuplicate</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 strMap<span class="token operator">:=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  strMap<span class="token punctuation">[</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">++</span>
  <span class="token keyword">if</span> strMap<span class="token punctuation">[</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;=</span><span class="token number">2</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> j<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> i<span class="token operator">-</span>j<span class="token operator">&lt;=</span>k <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span>
 k <span class="token operator">:=</span> <span class="token number">1</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">containsNearbyDuplicate</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_222-\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#_222-\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570" aria-hidden="true">#</a> 222. \u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> res <span class="token builtin">int</span>
 <span class="token keyword">var</span> fn <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
 <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 fn <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> root <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   res<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token function">fn</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> root<span class="token punctuation">.</span>Right <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token function">fn</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token function">fn</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

 <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">countNodes</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_226-\u7FFB\u8F6C\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#_226-\u7FFB\u8F6C\u4E8C\u53C9\u6811" aria-hidden="true">#</a> 226. \u7FFB\u8F6C\u4E8C\u53C9\u6811</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
 <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span>

 right <span class="token operator">:=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
 left <span class="token operator">:=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
 root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Right <span class="token operator">=</span> right<span class="token punctuation">,</span> left
 <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_230-\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7B2Ck\u5C0F\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_230-\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7B2Ck\u5C0F\u7684\u5143\u7D20" aria-hidden="true">#</a> 230. \u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7B2CK\u5C0F\u7684\u5143\u7D20</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">kthSmallest</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token function">find</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">)</span>
 <span class="token keyword">return</span> arr<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">find</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">,</span> arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token function">find</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
 <span class="token operator">*</span>arr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token operator">*</span>arr<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
 <span class="token function">find</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 root <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">kthSmallest</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_232-\u7528\u6808\u5B9E\u73B0\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_232-\u7528\u6808\u5B9E\u73B0\u961F\u5217" aria-hidden="true">#</a> 232. \u7528\u6808\u5B9E\u73B0\u961F\u5217</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token comment">//</span>
<span class="token comment">//type MyQueue struct {</span>
<span class="token comment">// stackPush []int</span>
<span class="token comment">// stackPop []int</span>
<span class="token comment">//}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">///** Initialize your data structure here. */</span>
<span class="token comment">//func Constructor() MyQueue {</span>
<span class="token comment">// return MyQueue{}</span>
<span class="token comment">//}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">///** Push element x to the back of queue. */</span>
<span class="token comment">//func (this *MyQueue) Push(x int)  {</span>
<span class="token comment">// this.stackPush=append(this.stackPush,x)</span>
<span class="token comment">// if len(this.stackPop)&lt;=0{</span>
<span class="token comment">//  for _,val:=range this.stackPush{</span>
<span class="token comment">//   this.stackPop=append(this.stackPop,val)</span>
<span class="token comment">//  }</span>
<span class="token comment">//  this.stackPush=nil</span>
<span class="token comment">// }</span>
<span class="token comment">//}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">///** Removes the element from in front of queue and returns that element. */</span>
<span class="token comment">//func (this *MyQueue) Pop() int {</span>
<span class="token comment">// if (len(this.stackPop)&lt;=0&amp;&amp;len(this.stackPush)&lt;=0)){</span>
<span class="token comment">//  return 0</span>
<span class="token comment">// }</span>
<span class="token comment">//</span>
<span class="token comment">//}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">///** Get the front element. */</span>
<span class="token comment">//func (this *MyQueue) Peek() int {</span>
<span class="token comment">//</span>
<span class="token comment">//}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">///** Returns whether the queue is empty. */</span>
<span class="token comment">//func (this *MyQueue) Empty() bool {</span>
<span class="token comment">//</span>
<span class="token comment">//}</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">///**</span>
<span class="token comment">// * Your MyQueue object will be instantiated and called as such:</span>
<span class="token comment">// * obj := Constructor();</span>
<span class="token comment">// * obj.Push(x);</span>
<span class="token comment">// * param_2 := obj.Pop();</span>
<span class="token comment">// * param_3 := obj.Peek();</span>
<span class="token comment">// * param_4 := obj.Empty();</span>
<span class="token comment">// */</span>
<span class="token comment">//</span>
<span class="token comment">//func main()  {</span>
<span class="token comment">//</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_237-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_237-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a> 237. \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> ListNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val <span class="token builtin">int</span>
 Next <span class="token operator">*</span>ListNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 node<span class="token punctuation">.</span>Val<span class="token operator">=</span>node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val
 node<span class="token punctuation">.</span>Next<span class="token operator">=</span>node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 node<span class="token operator">:=</span><span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>Next<span class="token punctuation">:</span><span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>Next<span class="token punctuation">:</span><span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>Next<span class="token punctuation">:</span><span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 <span class="token keyword">for</span> node<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
  node<span class="token operator">=</span>node<span class="token punctuation">.</span>Next
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_242-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD" tabindex="-1"><a class="header-anchor" href="#_242-\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD" aria-hidden="true">#</a> 242. \u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">isAnagram</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> t <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token function">len</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>
 s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 t1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>

 sort<span class="token punctuation">.</span><span class="token function">Slice</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span>s1<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 sort<span class="token punctuation">.</span><span class="token function">Slice</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> t1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> t1<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token keyword">for</span> k<span class="token punctuation">,</span>v<span class="token operator">:=</span><span class="token keyword">range</span> s1<span class="token punctuation">{</span>
  <span class="token keyword">if</span> v<span class="token operator">!=</span>t1<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isAnagram</span><span class="token punctuation">(</span><span class="token string">&quot;anagram&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nagaram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_258-\u5404\u4F4D\u76F8\u52A0" tabindex="-1"><a class="header-anchor" href="#_258-\u5404\u4F4D\u76F8\u52A0" aria-hidden="true">#</a> 258. \u5404\u4F4D\u76F8\u52A0</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">addDigits</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num
 <span class="token punctuation">}</span>
 k <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> num <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  k <span class="token operator">+=</span> num <span class="token operator">%</span> <span class="token number">10</span>
  num <span class="token operator">/=</span> <span class="token number">10</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token function">addDigits</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">addDigits</span><span class="token punctuation">(</span><span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_260-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-iii" tabindex="-1"><a class="header-anchor" href="#_260-\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-iii" aria-hidden="true">#</a> 260. \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57 III</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  m<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">var</span> tmp <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
   tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> tmp
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">singleNumber</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_268-\u7F3A\u5931\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#_268-\u7F3A\u5931\u6570\u5B57" aria-hidden="true">#</a> 268. \u7F3A\u5931\u6570\u5B57</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
 start <span class="token operator">:=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> start <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   start<span class="token operator">++</span>
   <span class="token keyword">continue</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">missingNumber</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-\u79FB\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_27-\u79FB\u9664\u5143\u7D20" aria-hidden="true">#</a> 27. \u79FB\u9664\u5143\u7D20</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 index<span class="token operator">:=</span><span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token punctuation">;</span>index<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">==</span>val <span class="token punctuation">{</span>
   nums<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token punctuation">:</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
   <span class="token keyword">continue</span>
  <span class="token punctuation">}</span>
  index<span class="token operator">++</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 nums<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span>
 val<span class="token operator">:=</span><span class="token number">3</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">removeElement</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_283-\u79FB\u52A8\u96F6" tabindex="-1"><a class="header-anchor" href="#_283-\u79FB\u52A8\u96F6" aria-hidden="true">#</a> 283. \u79FB\u52A8\u96F6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">moveZeroes</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>

 next<span class="token operator">:=</span><span class="token number">0</span>
 l<span class="token operator">:=</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>l<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token number">0</span> <span class="token punctuation">{</span>
   nums<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
   next<span class="token operator">++</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> next<span class="token operator">&lt;</span>l<span class="token punctuation">{</span>
  nums<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
  next<span class="token operator">++</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 nums<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">}</span>

 <span class="token function">moveZeroes</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_292-nim-\u6E38\u620F" tabindex="-1"><a class="header-anchor" href="#_292-nim-\u6E38\u620F" aria-hidden="true">#</a> 292. Nim \u6E38\u620F</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">canWinNim</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">!=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_326-3\u7684\u5E42" tabindex="-1"><a class="header-anchor" href="#_326-3\u7684\u5E42" aria-hidden="true">#</a> 326. 3\u7684\u5E42</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> n<span class="token operator">%</span><span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  n <span class="token operator">/=</span> <span class="token number">4</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> n <span class="token operator">==</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_344-\u53CD\u8F6C\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_344-\u53CD\u8F6C\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 344. \u53CD\u8F6C\u5B57\u7B26\u4E32</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">reverseString</span><span class="token punctuation">(</span>s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
  tmp<span class="token operator">:=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>s<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">]</span>
  s<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>tmp

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 arr<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token char">&#39;h&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;e&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;l&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;l&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;o&#39;</span><span class="token punctuation">}</span>
 <span class="token function">reverseString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_349-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6" tabindex="-1"><a class="header-anchor" href="#_349-\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6" aria-hidden="true">#</a> 349. \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">intersection</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span>  nums1 <span class="token operator">&amp;</span> nums2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 nums1<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span>
 nums2<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">intersection</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span>nums2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_35-\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E-\u4E8C\u5206\u6CD5" tabindex="-1"><a class="header-anchor" href="#_35-\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E-\u4E8C\u5206\u6CD5" aria-hidden="true">#</a> 35.\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E\uFF08\u4E8C\u5206\u6CD5\uFF09</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchInsert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>min <span class="token operator">&lt;=</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>max <span class="token operator">+</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> mid
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      min <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>



  nums<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> element <span class="token operator">===</span> target
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token number">8</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">searchInsert</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 350. \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6 II

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

func <span class="token function">intersect</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span>int<span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span>int<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>int <span class="token punctuation">{</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span>
 <span class="token keyword">var</span> ans <span class="token punctuation">[</span><span class="token punctuation">]</span>int
 <span class="token literal-property property">i</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token number">0</span>
 <span class="token literal-property property">k</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> i <span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token parameter">nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   k<span class="token operator">++</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   i<span class="token operator">++</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
   i<span class="token operator">++</span>
   k<span class="token operator">++</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">nums1</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>int<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
 <span class="token literal-property property">nums2</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>int<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">intersect</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_367-\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" tabindex="-1"><a class="header-anchor" href="#_367-\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" aria-hidden="true">#</a> 367. \u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">isPerfectSquare</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> left<span class="token operator">=</span><span class="token number">2</span>
  <span class="token keyword">let</span> right<span class="token operator">=</span>num<span class="token operator">/</span><span class="token number">2</span>
  
  <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token operator">&lt;=</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> mid<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left<span class="token operator">+</span>right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>mid<span class="token operator">**</span><span class="token number">2</span><span class="token operator">===</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mid<span class="token operator">**</span><span class="token number">2</span><span class="token operator">&gt;</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
      right<span class="token operator">=</span>mid<span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      left<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span>  <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPerfectSquare</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 371. \u4E24\u6574\u6570\u4E4B\u548C

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

func <span class="token function">getSum</span><span class="token punctuation">(</span>a int<span class="token punctuation">,</span> b int<span class="token punctuation">)</span> int <span class="token punctuation">{</span>
<span class="token keyword">return</span>
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token operator">=</span><span class="token number">1</span>
 <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token operator">=</span><span class="token number">2</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">getSum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_374-\u731C\u6570\u5B57\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_374-\u731C\u6570\u5B57\u5927\u5C0F" aria-hidden="true">#</a> 374. \u731C\u6570\u5B57\u5927\u5C0F</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">guessNumber</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 i<span class="token operator">:=</span><span class="token number">1</span>
 j<span class="token operator">:=</span>n
 <span class="token keyword">for</span> i<span class="token operator">&lt;=</span>j<span class="token punctuation">{</span>
  t<span class="token operator">:=</span>i<span class="token operator">+</span><span class="token punctuation">(</span>j<span class="token operator">-</span>i<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
  <span class="token keyword">if</span> <span class="token function">guess</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> t
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token function">guess</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span> <span class="token punctuation">{</span>
   i<span class="token operator">=</span>t<span class="token operator">+</span><span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   j<span class="token operator">=</span>t<span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#_387-\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26" aria-hidden="true">#</a> 387. \u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">firstUniqChar</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span>v<span class="token punctuation">]</span> <span class="token keyword">of</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> tmp<span class="token operator">=</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token operator">||</span> <span class="token number">0</span>
    m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span><span class="token operator">++</span>tmp<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span>v<span class="token punctuation">]</span> <span class="token keyword">of</span> m<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>v<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;leetcode&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">firstUniqChar</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 389. \u627E\u4E0D\u540C

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

func <span class="token function">findTheDifference</span><span class="token punctuation">(</span>s string<span class="token punctuation">,</span> t string<span class="token punctuation">)</span> byte <span class="token punctuation">{</span>
 ssum<span class="token punctuation">,</span> <span class="token literal-property property">tsum</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
 <span class="token keyword">for</span> _<span class="token punctuation">,</span> <span class="token literal-property property">x</span> <span class="token operator">:</span><span class="token operator">=</span> range s <span class="token punctuation">{</span>
  ssum <span class="token operator">+=</span> <span class="token function">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> _<span class="token punctuation">,</span> <span class="token literal-property property">x</span> <span class="token operator">:</span><span class="token operator">=</span> range t <span class="token punctuation">{</span>
  tsum <span class="token operator">+=</span> <span class="token function">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token function">byte</span><span class="token punctuation">(</span>tsum <span class="token operator">-</span> ssum<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token function">findTheDifference</span><span class="token punctuation">(</span><span class="token string">&quot;ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_434-\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570" tabindex="-1"><a class="header-anchor" href="#_434-\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570" aria-hidden="true">#</a> 434. \u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">countSegments</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 n <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
  <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot; &quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot; &quot;</span> <span class="token punctuation">{</span>
   n<span class="token operator">++</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot; &quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot; &quot;</span> <span class="token punctuation">{</span>
   <span class="token keyword">continue</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot; &quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot; &quot;</span> <span class="token punctuation">{</span>
   n<span class="token operator">++</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> n
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 str <span class="token operator">:=</span> <span class="token string">&quot;Hello, my name is John&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">countSegments</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_468-\u9A8C\u8BC1ip\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_468-\u9A8C\u8BC1ip\u5730\u5740" aria-hidden="true">#</a> 468. \u9A8C\u8BC1IP\u5730\u5740</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;regexp&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">validIPAddress</span><span class="token punctuation">(</span>IP <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 matchString<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MatchString</span><span class="token punctuation">(</span><span class="token string">&quot;[1-9][0-9]{3}.[1-9][0-9]{3}.[1-9][0-9]{3}.[1-9][0-9]{3}&quot;</span><span class="token punctuation">,</span> IP<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>matchString<span class="token punctuation">)</span>

 <span class="token keyword">return</span> <span class="token string">&quot;IPv4&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 IP <span class="token operator">:=</span> <span class="token string">&quot;172.16.254.1&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">validIPAddress</span><span class="token punctuation">(</span>IP<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_496-\u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20-i" tabindex="-1"><a class="header-anchor" href="#_496-\u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20-i" aria-hidden="true">#</a> 496. \u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20 I</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">nextGreaterElement</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ans <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums1 <span class="token punctuation">{</span>
  flag <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> nums2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>v<span class="token punctuation">{</span>
    <span class="token keyword">for</span> k<span class="token operator">:=</span>i<span class="token punctuation">;</span>k<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">{</span>
     <span class="token keyword">if</span> nums2<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&gt;</span> v <span class="token punctuation">{</span>
      ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> nums2<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
      flag <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token keyword">break</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> flag <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span>
 nums2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">nextGreaterElement</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_500-\u952E\u76D8\u884C" tabindex="-1"><a class="header-anchor" href="#_500-\u952E\u76D8\u884C" aria-hidden="true">#</a> 500. \u952E\u76D8\u884C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">findWords</span><span class="token punctuation">(</span>words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 firstRow <span class="token operator">:=</span> <span class="token string">&quot;qwertyuiopQWERTYUIOP&quot;</span>
 secondRow <span class="token operator">:=</span> <span class="token string">&quot;asdfghjklASDFGHJKL&quot;</span>
 thirdRow <span class="token operator">:=</span> <span class="token string">&quot;zxcvbnmZXCVBNMZ&quot;</span>
 <span class="token keyword">var</span> answer <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> words <span class="token punctuation">{</span>
  line <span class="token operator">:=</span> firstRow
  flag <span class="token operator">:=</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>secondRow<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   line <span class="token operator">=</span> secondRow
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>thirdRow<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   line <span class="token operator">=</span> thirdRow
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> v <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token operator">!</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>line<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    flag <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> flag <span class="token punctuation">{</span>
   answer <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>answer<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> answer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 words <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Alaska&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dad&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Peace&quot;</span><span class="token punctuation">}</span>


 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">findWords</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_509-\u6590\u6CE2\u90A3\u5951\u6570" tabindex="-1"><a class="header-anchor" href="#_509-\u6590\u6CE2\u90A3\u5951\u6570" aria-hidden="true">#</a> 509. \u6590\u6CE2\u90A3\u5951\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">fib</span><span class="token punctuation">(</span>N <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> N <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> N <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>N<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>N<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_541-\u53CD\u8F6C\u5B57\u7B26\u4E32-ii" tabindex="-1"><a class="header-anchor" href="#_541-\u53CD\u8F6C\u5B57\u7B26\u4E32-ii" aria-hidden="true">#</a> 541. \u53CD\u8F6C\u5B57\u7B26\u4E32 II</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> tmp <span class="token builtin">string</span>
 sLeft <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token punctuation">]</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sLeft<span class="token punctuation">)</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">{</span>
  tmp <span class="token operator">+=</span> <span class="token function">string</span><span class="token punctuation">(</span>sLeft<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 sRight <span class="token operator">:=</span> s<span class="token punctuation">[</span>k<span class="token punctuation">:</span><span class="token punctuation">]</span>
 <span class="token keyword">return</span> tmp <span class="token operator">+</span> sRight
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;abcdefg&quot;</span>
 k <span class="token operator">:=</span> <span class="token number">2</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">reverseStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_551-\u5B66\u751F\u51FA\u52E4\u8BB0\u5F55-i" tabindex="-1"><a class="header-anchor" href="#_551-\u5B66\u751F\u51FA\u52E4\u8BB0\u5F55-i" aria-hidden="true">#</a> 551. \u5B66\u751F\u51FA\u52E4\u8BB0\u5F55 I</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">checkRecord</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 a<span class="token operator">:=</span><span class="token number">0</span>
 b<span class="token operator">:=</span><span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v<span class="token operator">:=</span><span class="token keyword">range</span> s<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token operator">==</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">{</span>
   a<span class="token operator">++</span>
   <span class="token keyword">if</span> a<span class="token operator">&gt;</span><span class="token number">1</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token operator">==</span><span class="token string">&quot;L&quot;</span> <span class="token punctuation">{</span>
   b<span class="token operator">++</span>
   <span class="token keyword">if</span> b<span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
   b<span class="token operator">=</span><span class="token number">0</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>  <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 s<span class="token operator">:=</span><span class="token string">&quot;LALL&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">checkRecord</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5685-\u4EA4\u66FF\u5408\u5E76\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_5685-\u4EA4\u66FF\u5408\u5E76\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 5685. \u4EA4\u66FF\u5408\u5E76\u5B57\u7B26\u4E32</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">mergeAlternately</span><span class="token punctuation">(</span>word1 <span class="token builtin">string</span><span class="token punctuation">,</span> word2 <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> s <span class="token builtin">string</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> word1 <span class="token punctuation">{</span>
  <span class="token keyword">if</span> k <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>word2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  s <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
  s <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token function">string</span><span class="token punctuation">(</span>word2<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>word2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token function">len</span><span class="token punctuation">(</span>word1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s <span class="token operator">=</span> s <span class="token operator">+</span> word2<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>word1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>word2<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>word1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s <span class="token operator">=</span> s <span class="token operator">+</span> word1<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>word2<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> s
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 word1 <span class="token operator">:=</span> <span class="token string">&quot;abcd&quot;</span>
 word2 <span class="token operator">:=</span> <span class="token string">&quot;pq&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">mergeAlternately</span><span class="token punctuation">(</span>word1<span class="token punctuation">,</span> word2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_572-\u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811" tabindex="-1"><a class="header-anchor" href="#_572-\u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811" aria-hidden="true">#</a> 572. \u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">subRoot</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">isSubtree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> subRoot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span>subRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubtree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span>subRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubtree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span>subRoot<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>a <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>a <span class="token operator">||</span> <span class="token operator">!</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>  <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>val<span class="token operator">===</span>b<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>left<span class="token punctuation">,</span>b<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>right<span class="token punctuation">,</span>b<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span>  <span class="token boolean">false</span>

<span class="token punctuation">}</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 648. \u5355\u8BCD\u66FF\u6362

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

func <span class="token function">replaceWords</span><span class="token punctuation">(</span>dict <span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">,</span> sentence string<span class="token punctuation">)</span> string <span class="token punctuation">{</span>
 <span class="token literal-property property">sentenceArr</span><span class="token operator">:</span><span class="token operator">=</span>strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>sentence<span class="token punctuation">,</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span><span class="token literal-property property">v</span><span class="token operator">:</span><span class="token operator">=</span>range sentenceArr<span class="token punctuation">{</span> <span class="token comment">//&quot;aadsfasf absbs bbab cadsfafs&quot;</span>
  <span class="token keyword">for</span> d1<span class="token punctuation">,</span><span class="token literal-property property">v1</span><span class="token operator">:</span><span class="token operator">=</span>range dict<span class="token punctuation">{</span>  <span class="token comment">//[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]</span>
   <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span>v1<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span> <span class="token punctuation">{</span>
    sentenceArr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">=</span>dict<span class="token punctuation">[</span>d1<span class="token punctuation">]</span>
    <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>  strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>sentenceArr<span class="token punctuation">,</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token literal-property property">dict</span><span class="token operator">:</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
 <span class="token literal-property property">scnetence</span><span class="token operator">:</span><span class="token operator">=</span><span class="token string">&quot;aadsfasf absbs bbab cadsfafs&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">replaceWords</span><span class="token punctuation">(</span>dict<span class="token punctuation">,</span>scnetence<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_66-\u52A0\u4E00" tabindex="-1"><a class="header-anchor" href="#_66-\u52A0\u4E00" aria-hidden="true">#</a> 66. \u52A0\u4E00</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">plusOne</span><span class="token punctuation">(</span>digits <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token function">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token number">9</span> <span class="token punctuation">{</span>
   digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
   <span class="token keyword">return</span> digits
  <span class="token punctuation">}</span>
  digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
 <span class="token punctuation">}</span>
 nums<span class="token operator">:=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
 nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span>
 <span class="token keyword">return</span> nums
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 digits <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">plusOne</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_67-\u4E8C\u8FDB\u5236\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#_67-\u4E8C\u8FDB\u5236\u6C42\u548C" aria-hidden="true">#</a> 67. \u4E8C\u8FDB\u5236\u6C42\u548C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">addBinary</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token operator">=</span><span class="token string">&#39;0b&#39;</span><span class="token operator">+</span>a
  b<span class="token operator">=</span><span class="token string">&#39;0b&#39;</span><span class="token operator">+</span>b
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">BigInt</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addBinary</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

### 677. \u952E\u503C\u6620\u5C04

</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>go
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

type MapSum struct <span class="token punctuation">{</span>
 m map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>int
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** Initialize your data structure here. */</span>
func <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MapSum <span class="token punctuation">{</span>
 <span class="token keyword">return</span> MapSum<span class="token punctuation">{</span>
  <span class="token literal-property property">m</span><span class="token operator">:</span> map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>int<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token function">func</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">*</span>MapSum<span class="token punctuation">)</span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token parameter">key string<span class="token punctuation">,</span> val int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>m<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span>val
<span class="token punctuation">}</span>


<span class="token function">func</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">*</span>MapSum<span class="token punctuation">)</span> <span class="token function">Sum</span><span class="token punctuation">(</span>prefix string<span class="token punctuation">)</span> int <span class="token punctuation">{</span>
 <span class="token literal-property property">s</span><span class="token operator">:</span><span class="token operator">=</span><span class="token number">0</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span><span class="token literal-property property">v</span><span class="token operator">:</span><span class="token operator">=</span>range <span class="token keyword">this</span><span class="token punctuation">.</span>m<span class="token punctuation">{</span>
  <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span>prefix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   s<span class="token operator">+=</span>v
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> s
<span class="token punctuation">}</span>

func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token operator">=</span><span class="token string">&quot;apple&quot;</span>
 <span class="token literal-property property">val</span><span class="token operator">:</span><span class="token operator">=</span><span class="token number">3</span>
 <span class="token literal-property property">obj</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 obj<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
 obj<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token literal-property property">param_2</span> <span class="token operator">:</span><span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>param_2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_69-x-\u7684\u5E73\u65B9\u6839" tabindex="-1"><a class="header-anchor" href="#_69-x-\u7684\u5E73\u65B9\u6839" aria-hidden="true">#</a> 69. x \u7684\u5E73\u65B9\u6839</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">mySqrt</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">mySqrt</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_692-\u524Dk\u4E2A\u9AD8\u9891\u5355\u8BCD" tabindex="-1"><a class="header-anchor" href="#_692-\u524Dk\u4E2A\u9AD8\u9891\u5355\u8BCD" aria-hidden="true">#</a> 692. \u524DK\u4E2A\u9AD8\u9891\u5355\u8BCD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">topKFrequent</span><span class="token punctuation">(</span>words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 indexMap<span class="token operator">:=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>word<span class="token operator">:=</span><span class="token keyword">range</span> words<span class="token punctuation">{</span>
  indexMap<span class="token punctuation">[</span>word<span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>

 <span class="token function">sortMap</span><span class="token punctuation">(</span>indexMap<span class="token punctuation">,</span>k<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>indexMap<span class="token punctuation">)</span>
 <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sortMap</span><span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span>k <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 karr<span class="token operator">:=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
 sarr<span class="token operator">:=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span>v<span class="token operator">:=</span><span class="token keyword">range</span> m<span class="token punctuation">{</span>
  karr<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>karr<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
  sarr<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>sarr<span class="token punctuation">,</span>k<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>karr<span class="token punctuation">)</span>
 <span class="token comment">//karr=karr[len(karr)-k:]</span>
 sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>sarr<span class="token punctuation">)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>karr<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sarr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 words <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;leetcode&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;coding&quot;</span><span class="token punctuation">}</span>
 k <span class="token operator">:=</span> <span class="token number">2</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">topKFrequent</span><span class="token punctuation">(</span>words<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_693-\u4EA4\u66FF\u4F4D\u4E8C\u8FDB\u5236\u6570" tabindex="-1"><a class="header-anchor" href="#_693-\u4EA4\u66FF\u4F4D\u4E8C\u8FDB\u5236\u6570" aria-hidden="true">#</a> 693. \u4EA4\u66FF\u4F4D\u4E8C\u8FDB\u5236\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">hasAlternatingBits</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>

 str<span class="token operator">:=</span><span class="token string">&quot;&quot;</span>
 <span class="token keyword">for</span> n<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">{</span>
  str<span class="token operator">+=</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">)</span>
  n<span class="token operator">/=</span><span class="token number">2</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token operator">!</span> <span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token string">&quot;00&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 n<span class="token operator">:=</span><span class="token number">10</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">hasAlternatingBits</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u6574\u6570\u53CD\u8F6C" tabindex="-1"><a class="header-anchor" href="#_7-\u6574\u6570\u53CD\u8F6C" aria-hidden="true">#</a> 7. \u6574\u6570\u53CD\u8F6C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> math<span class="token punctuation">.</span>MaxInt32 <span class="token operator">||</span> x <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token operator">-</span>math<span class="token punctuation">.</span>MaxInt32<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">var</span> ans <span class="token builtin">string</span>
 <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> x <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   tmp <span class="token operator">:=</span> x <span class="token operator">%</span> <span class="token number">10</span>
   <span class="token keyword">if</span> tmp <span class="token operator">!=</span> <span class="token char">&#39;0&#39;</span> <span class="token punctuation">{</span>
    ans <span class="token operator">+=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   x <span class="token operator">/=</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>

  k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span>
  <span class="token keyword">if</span> k <span class="token operator">&gt;=</span> math<span class="token punctuation">.</span>MaxInt32 <span class="token operator">||</span> k <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token operator">-</span>math<span class="token punctuation">.</span>MaxInt32<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> k
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  xStr <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
  x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>xStr<span class="token punctuation">)</span>
  <span class="token keyword">for</span> x <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   tmp <span class="token operator">:=</span> x <span class="token operator">%</span> <span class="token number">10</span>
   <span class="token keyword">if</span> tmp <span class="token operator">!=</span> <span class="token char">&#39;0&#39;</span> <span class="token punctuation">{</span>
    ans <span class="token operator">+=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   x <span class="token operator">/=</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>
  ans <span class="token operator">=</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> ans
  k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span>
  <span class="token keyword">if</span> k <span class="token operator">&gt;=</span> math<span class="token punctuation">.</span>MaxInt32 <span class="token operator">||</span> k <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token operator">-</span>math<span class="token punctuation">.</span>MaxInt32<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> k
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token number">1534236469</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_704-\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_704-\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> 704. \u4E8C\u5206\u67E5\u627E</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">search</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 ans <span class="token operator">:=</span> <span class="token operator">-</span><span class="token number">1</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v <span class="token operator">==</span> target <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> k
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">}</span>
 target <span class="token operator">:=</span> <span class="token number">2</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">search</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_728-\u81EA\u9664\u6570" tabindex="-1"><a class="header-anchor" href="#_728-\u81EA\u9664\u6570" aria-hidden="true">#</a> 728. \u81EA\u9664\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">selfDividingNumbers</span><span class="token punctuation">(</span>left <span class="token builtin">int</span><span class="token punctuation">,</span> right <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ans <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  tmp <span class="token operator">:=</span> i
  <span class="token keyword">for</span> tmp <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   tmp2 <span class="token operator">:=</span> tmp <span class="token operator">%</span> <span class="token number">10</span>
   <span class="token keyword">if</span> tmp2<span class="token operator">==</span><span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">if</span> tmp2<span class="token operator">!=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>i<span class="token operator">%</span>tmp2 <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
   <span class="token punctuation">}</span>
   tmp <span class="token operator">/=</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> tmp <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 left <span class="token operator">:=</span> <span class="token number">1</span>
 right <span class="token operator">:=</span> <span class="token number">22</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">selfDividingNumbers</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_771-\u5B9D\u77F3\u4E0E\u77F3\u5934" tabindex="-1"><a class="header-anchor" href="#_771-\u5B9D\u77F3\u4E0E\u77F3\u5934" aria-hidden="true">#</a> 771. \u5B9D\u77F3\u4E0E\u77F3\u5934</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">numJewelsInStones</span><span class="token punctuation">(</span>J <span class="token builtin">string</span><span class="token punctuation">,</span> S <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 ans<span class="token operator">:=</span><span class="token number">0</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v<span class="token operator">:=</span><span class="token keyword">range</span> J<span class="token punctuation">{</span>
  ans<span class="token operator">+=</span>strings<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">numJewelsInStones</span><span class="token punctuation">(</span><span class="token string">&quot;aA&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;aAAbbbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_784-\u5B57\u6BCD\u5927\u5C0F\u5199\u5168\u6392\u5217" tabindex="-1"><a class="header-anchor" href="#_784-\u5B57\u6BCD\u5927\u5C0F\u5199\u5168\u6392\u5217" aria-hidden="true">#</a> 784. \u5B57\u6BCD\u5927\u5C0F\u5199\u5168\u6392\u5217</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
 <span class="token string">&quot;unicode&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">letterCasePermutation</span><span class="token punctuation">(</span>S <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> S <span class="token punctuation">{</span>
  <span class="token comment">//\u5224\u65AD\u662F\u4E0D\u662F\u5B57\u6BCD</span>
  <span class="token keyword">if</span> unicode<span class="token punctuation">.</span><span class="token function">IsLetter</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> S<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token punctuation">]</span><span class="token operator">+</span>strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span>S<span class="token punctuation">[</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
   s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> S<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token punctuation">]</span><span class="token operator">+</span>strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span>S<span class="token punctuation">[</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> S<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> s
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 S <span class="token operator">:=</span> <span class="token string">&quot;12345&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">letterCasePermutation</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_884-\u4E24\u53E5\u8BDD\u4E2D\u7684\u4E0D\u5E38\u89C1\u5355\u8BCD" tabindex="-1"><a class="header-anchor" href="#_884-\u4E24\u53E5\u8BDD\u4E2D\u7684\u4E0D\u5E38\u89C1\u5355\u8BCD" aria-hidden="true">#</a> 884. \u4E24\u53E5\u8BDD\u4E2D\u7684\u4E0D\u5E38\u89C1\u5355\u8BCD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">uncommonFromSentences</span><span class="token punctuation">(</span>A <span class="token builtin">string</span><span class="token punctuation">,</span> B <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 arrA <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
 arrB <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>B<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
 arrA <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arrA<span class="token punctuation">,</span> arrB<span class="token operator">...</span><span class="token punctuation">)</span>
 <span class="token keyword">var</span> answer <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> arrA <span class="token punctuation">{</span>
  i <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> arrA <span class="token punctuation">{</span>
   <span class="token keyword">if</span> v1 <span class="token operator">==</span> v2 <span class="token punctuation">{</span>
    i<span class="token operator">++</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
   answer <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>answer<span class="token punctuation">,</span> v1<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> answer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 A <span class="token operator">:=</span> <span class="token string">&quot;this apple is sweet&quot;</span>
 B <span class="token operator">:=</span> <span class="token string">&quot;this apple is sour&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">uncommonFromSentences</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-\u56DE\u6587\u6570" tabindex="-1"><a class="header-anchor" href="#_9-\u56DE\u6587\u6570" aria-hidden="true">#</a> 9. \u56DE\u6587\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 sx <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
 l <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>sx<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span>l<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> sx<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> sx<span class="token punctuation">[</span>l<span class="token operator">-</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token number">121</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_905-\u6309\u5947\u5076\u6392\u5E8F\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_905-\u6309\u5947\u5076\u6392\u5E8F\u6570\u7EC4" aria-hidden="true">#</a> 905. \u6309\u5947\u5076\u6392\u5E8F\u6570\u7EC4</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">sortArrayByParity</span><span class="token punctuation">(</span>A <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 even <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 odd <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> A <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   even <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>even<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   odd <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>odd<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> <span class="token function">append</span><span class="token punctuation">(</span>even<span class="token punctuation">,</span> odd<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 A <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sortArrayByParity</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_917-\u4EC5\u4EC5\u53CD\u8F6C\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#_917-\u4EC5\u4EC5\u53CD\u8F6C\u5B57\u6BCD" aria-hidden="true">#</a> 917. \u4EC5\u4EC5\u53CD\u8F6C\u5B57\u6BCD</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;unicode&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">reverseOnlyLetters</span><span class="token punctuation">(</span>S <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> s <span class="token builtin">string</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> S <span class="token punctuation">{</span>
  <span class="token keyword">if</span> unicode<span class="token punctuation">.</span><span class="token function">IsLetter</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   s <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token operator">+</span> s
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> S <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token operator">!</span>unicode<span class="token punctuation">.</span><span class="token function">IsLetter</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">+</span> s<span class="token punctuation">[</span>k<span class="token punctuation">:</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> s
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">reverseOnlyLetters</span><span class="token punctuation">(</span><span class="token string">&quot;a-bC-dEf-ghIj&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_925-\u957F\u6309\u952E\u5165" tabindex="-1"><a class="header-anchor" href="#_925-\u957F\u6309\u952E\u5165" aria-hidden="true">#</a> 925. \u957F\u6309\u952E\u5165</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">isLongPressedName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> typed <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 i<span class="token punctuation">,</span>j<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span>
 <span class="token keyword">for</span> i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>j<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>typed<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> name<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>typed<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">{</span>
   i<span class="token operator">++</span>
   j<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span> i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">if</span> typed<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">==</span>name<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    j<span class="token operator">++</span>
   <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span>  <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 name <span class="token operator">:=</span> <span class="token string">&quot;alex&quot;</span>
 typed <span class="token operator">:=</span> <span class="token string">&quot;aaleex&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isLongPressedName</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> typed<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_94-\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#_94-\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386" aria-hidden="true">#</a> 94. \u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 <span class="token keyword">var</span> inOrder <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span>
 inOrder <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
  res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> root<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
  <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
 <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 node <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">inorderTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_961-\u91CD\u590D-n-\u6B21\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_961-\u91CD\u590D-n-\u6B21\u7684\u5143\u7D20" aria-hidden="true">#</a> 961. \u91CD\u590D N \u6B21\u7684\u5143\u7D20</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">repeatedNTimes</span><span class="token punctuation">(</span>A <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> A<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> A<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> A<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 A <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">repeatedNTimes</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_977-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9" tabindex="-1"><a class="header-anchor" href="#_977-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9" aria-hidden="true">#</a> 977. \u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> tmp <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  tmp <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> v<span class="token operator">*</span>v<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
 <span class="token keyword">return</span> tmp
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sortedSquares</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcp-06-\u62FF\u786C\u5E01" tabindex="-1"><a class="header-anchor" href="#lcp-06-\u62FF\u786C\u5E01" aria-hidden="true">#</a> LCP 06. \u62FF\u786C\u5E01</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">minCount</span><span class="token punctuation">(</span>coins <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> ans <span class="token builtin">int</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> coins <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> ans <span class="token operator">+</span> v<span class="token operator">/</span><span class="token number">2</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   ans <span class="token operator">=</span> ans <span class="token operator">+</span> v<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 coins <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">minCount</span><span class="token punctuation">(</span>coins<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcp-17-\u901F\u7B97\u673A\u5668\u4EBA" tabindex="-1"><a class="header-anchor" href="#lcp-17-\u901F\u7B97\u673A\u5668\u4EBA" aria-hidden="true">#</a> LCP 17. \u901F\u7B97\u673A\u5668\u4EBA</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">calculate</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 x <span class="token operator">:=</span> <span class="token number">1</span>
 y <span class="token operator">:=</span> <span class="token number">0</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span> <span class="token punctuation">{</span>
   x <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>x <span class="token operator">+</span> y
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   y <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>y <span class="token operator">+</span> x
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;AB&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">calculate</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5251\u6307-offer-05-\u66FF\u6362\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-05-\u66FF\u6362\u7A7A\u683C" aria-hidden="true">#</a> \u5251\u6307 Offer 05. \u66FF\u6362\u7A7A\u683C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">replaceSpace</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;%20&quot;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;We are happy.&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">replaceSpace</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5251\u6307-offer-15-\u4E8C\u8FDB\u5236\u4E2D1\u7684\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-15-\u4E8C\u8FDB\u5236\u4E2D1\u7684\u4E2A\u6570" aria-hidden="true">#</a> \u5251\u6307 Offer 15. \u4E8C\u8FDB\u5236\u4E2D1\u7684\u4E2A\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span>num <span class="token builtin">uint32</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> t <span class="token builtin">int</span>
 <span class="token keyword">var</span> tmp <span class="token operator">=</span> num
 <span class="token keyword">for</span> tmp <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> tmp<span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
   t<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  tmp <span class="token operator">=</span> tmp <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> t
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> num <span class="token builtin">uint32</span> <span class="token operator">=</span> <span class="token number">11111111111111111111111111111101</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">hammingWeight</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5251\u6307-offer-58-ii-\u5DE6\u65CB\u8F6C\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-58-ii-\u5DE6\u65CB\u8F6C\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5251\u6307 Offer 58 - II. \u5DE6\u65CB\u8F6C\u5B57\u7B26\u4E32</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">reverseLeftWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> s<span class="token punctuation">[</span>n<span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">+</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;abcdefg&quot;</span>
 k <span class="token operator">:=</span> <span class="token number">2</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">reverseLeftWords</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5251\u6307-offer-64-\u6C421-2-n" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-64-\u6C421-2-n" aria-hidden="true">#</a> \u5251\u6307 Offer 64. \u6C421+2+\u2026+n</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">sumNums</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> n <span class="token operator">+</span> <span class="token function">sumNums</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 n <span class="token operator">:=</span> <span class="token number">9</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sumNums</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u731C\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u731C\u6570\u5B57" aria-hidden="true">#</a> \u731C\u6570\u5B57</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">game</span><span class="token punctuation">(</span>guess <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> answer <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 i <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> guess <span class="token punctuation">{</span>
  <span class="token keyword">if</span> guess<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> answer<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> i
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 guess <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span>
 answer <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">game</span><span class="token punctuation">(</span>guess<span class="token punctuation">,</span> answer<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-01-01-\u5224\u5B9A\u5B57\u7B26\u662F\u5426\u552F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-01-01-\u5224\u5B9A\u5B57\u7B26\u662F\u5426\u552F\u4E00" aria-hidden="true">#</a> \u9762\u8BD5\u9898 01.01. \u5224\u5B9A\u5B57\u7B26\u662F\u5426\u552F\u4E00</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">isUnique</span><span class="token punctuation">(</span>astr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 s<span class="token operator">:=</span><span class="token string">&quot;leetcode&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isUnique</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-01-03-url\u5316" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-01-03-url\u5316" aria-hidden="true">#</a> \u9762\u8BD5\u9898 01.03. URL\u5316</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">replaceSpaces</span><span class="token punctuation">(</span>S <span class="token builtin">string</span><span class="token punctuation">,</span> length <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token comment">//var ans string</span>
 <span class="token comment">//sLen := len(S)</span>
 <span class="token comment">//if sLen &lt; length {</span>
 <span class="token comment">// length = sLen</span>
 <span class="token comment">//}</span>
 <span class="token comment">//fmt.Println(length)</span>
 <span class="token comment">//for i := 0; i &lt; length; i++ {</span>
 <span class="token comment">// if S[i] == &#39; &#39; {</span>
 <span class="token comment">//  ans += &quot;%20&quot;</span>
 <span class="token comment">//  continue</span>
 <span class="token comment">// }</span>
 <span class="token comment">// ans += string(S[i])</span>
 <span class="token comment">//}</span>
 <span class="token comment">//return ans</span>
 <span class="token keyword">return</span> strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>S<span class="token punctuation">[</span><span class="token punctuation">:</span>length<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span><span class="token string">&quot;%20&quot;</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;               &quot;</span>
 <span class="token builtin">len</span> <span class="token operator">:=</span> <span class="token number">5</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">replaceSpaces</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-01-07-\u65CB\u8F6C\u77E9\u9635" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-01-07-\u65CB\u8F6C\u77E9\u9635" aria-hidden="true">#</a> \u9762\u8BD5\u9898 01.07. \u65CB\u8F6C\u77E9\u9635</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">rotate</span><span class="token punctuation">(</span>matrix <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 matrix <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>

 <span class="token function">rotate</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-02-03-\u5220\u9664\u4E2D\u95F4\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-02-03-\u5220\u9664\u4E2D\u95F4\u8282\u70B9" aria-hidden="true">#</a> \u9762\u8BD5\u9898 02.03. \u5220\u9664\u4E2D\u95F4\u8282\u70B9</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> ListNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val  <span class="token builtin">int</span>
 Next <span class="token operator">*</span>ListNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 node<span class="token punctuation">.</span>Val <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val
 node<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-03-02-\u6808\u7684\u6700\u5C0F\u503C" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-03-02-\u6808\u7684\u6700\u5C0F\u503C" aria-hidden="true">#</a> \u9762\u8BD5\u9898 03.02. \u6808\u7684\u6700\u5C0F\u503C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> MinStack <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">/** initialize your data structure here. */</span>
<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> MinStack <span class="token punctuation">{</span>
 <span class="token keyword">return</span> MinStack<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">Push</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 this<span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>arr<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 this<span class="token punctuation">.</span>arr <span class="token operator">=</span> this<span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">Top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> this<span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MinStack<span class="token punctuation">)</span> <span class="token function">GetMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>arr<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>

 arrMin <span class="token operator">:=</span> this<span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> this<span class="token punctuation">.</span>arr <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v <span class="token operator">&lt;</span> arrMin <span class="token punctuation">{</span>
   arrMin <span class="token operator">=</span> v
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> arrMin
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 obj <span class="token operator">:=</span> <span class="token function">Constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 obj<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
 obj<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
 obj<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>

 <span class="token function">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">GetMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 obj<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token function">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">Top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token function">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">GetMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-10-05-\u7A00\u758F\u6570\u7EC4\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-10-05-\u7A00\u758F\u6570\u7EC4\u641C\u7D22" aria-hidden="true">#</a> \u9762\u8BD5\u9898 10.05. \u7A00\u758F\u6570\u7EC4\u641C\u7D22</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">findString</span><span class="token punctuation">(</span>words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 ans<span class="token operator">:=</span><span class="token operator">-</span><span class="token number">1</span>
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>s <span class="token punctuation">{</span>
   <span class="token keyword">return</span> i
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 words<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;at&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ball&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;car&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dad&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
 s<span class="token operator">:=</span><span class="token string">&quot;ball&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">findString</span><span class="token punctuation">(</span>words<span class="token punctuation">,</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-16-02-\u5355\u8BCD\u9891\u7387" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-16-02-\u5355\u8BCD\u9891\u7387" aria-hidden="true">#</a> \u9762\u8BD5\u9898 16.02. \u5355\u8BCD\u9891\u7387</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> WordsFrequency <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 books <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span>book <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> WordsFrequency <span class="token punctuation">{</span>
 m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> book <span class="token punctuation">{</span>
  m<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> WordsFrequency<span class="token punctuation">{</span>m<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>WordsFrequency<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>word <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>

 <span class="token keyword">return</span> this<span class="token punctuation">.</span>books<span class="token punctuation">[</span>word<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-16-17-\u8FDE\u7EED\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-16-17-\u8FDE\u7EED\u6570\u5217" aria-hidden="true">#</a> \u9762\u8BD5\u9898 16.17. \u8FDE\u7EED\u6570\u5217</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 b<span class="token operator">:=</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 sum<span class="token operator">:=</span>b
 <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> b<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token punctuation">{</span>
   b<span class="token operator">=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
   b<span class="token operator">+=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> b<span class="token operator">&gt;</span>sum <span class="token punctuation">{</span>
   sum<span class="token operator">=</span>b
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 nums<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">maxSubArray</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-17-04-\u6D88\u5931\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-17-04-\u6D88\u5931\u7684\u6570\u5B57" aria-hidden="true">#</a> \u9762\u8BD5\u9898 17.04. \u6D88\u5931\u7684\u6570\u5B57</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span>v<span class="token operator">:=</span><span class="token keyword">range</span> nums<span class="token punctuation">{</span>
  <span class="token keyword">if</span> k<span class="token operator">!=</span>v <span class="token punctuation">{</span>
   <span class="token keyword">return</span> k
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> v<span class="token operator">==</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 nums<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">missingNumber</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-17-10-\u4E3B\u8981\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-17-10-\u4E3B\u8981\u5143\u7D20" aria-hidden="true">#</a> \u9762\u8BD5\u9898 17.10. \u4E3B\u8981\u5143\u7D20</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
  m<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">++</span>
 <span class="token punctuation">}</span>
 l <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>

  <span class="token keyword">if</span> v <span class="token operator">&gt;</span> l<span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> k
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">majorityElement</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u9898-17-11-\u5355\u8BCD\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898-17-11-\u5355\u8BCD\u8DDD\u79BB" aria-hidden="true">#</a> \u9762\u8BD5\u9898 17.11. \u5355\u8BCD\u8DDD\u79BB</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">findClosest</span><span class="token punctuation">(</span>words <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> word1 <span class="token builtin">string</span><span class="token punctuation">,</span> word2 <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 res <span class="token operator">:=</span> <span class="token number">1</span>
 one<span class="token punctuation">,</span> two <span class="token operator">:=</span> math<span class="token punctuation">.</span>MaxInt32<span class="token punctuation">,</span> math<span class="token punctuation">.</span>MaxInt32
 wordsTmp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> words <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v <span class="token operator">==</span> word1 <span class="token punctuation">{</span>
   wordsTmp<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> v <span class="token operator">==</span> word2 <span class="token punctuation">{</span>
   wordsTmp<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> wordsTmp <span class="token punctuation">{</span>
  <span class="token keyword">if</span> v <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
   one <span class="token operator">=</span> v
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> v <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
   two <span class="token operator">=</span> v
  <span class="token punctuation">}</span>
  res <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Min</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">float64</span><span class="token punctuation">(</span>two<span class="token operator">-</span>one<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 words <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;I&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;am&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;student&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;from&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;university&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;in&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">}</span>
 word1 <span class="token operator">:=</span> <span class="token string">&quot;a&quot;</span>
 word2 <span class="token operator">:=</span> <span class="token string">&quot;student&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">findClosest</span><span class="token punctuation">(</span>words<span class="token punctuation">,</span> word1<span class="token punctuation">,</span> word2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u989818-\u5220\u9664\u94FE\u8868\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u989818-\u5220\u9664\u94FE\u8868\u7684\u8282\u70B9" aria-hidden="true">#</a> \u9762\u8BD5\u989818. \u5220\u9664\u94FE\u8868\u7684\u8282\u70B9</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> ListNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val  <span class="token builtin">int</span>
 Next <span class="token operator">*</span>ListNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
 <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span>
 dummy <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Next<span class="token punctuation">:</span> head<span class="token punctuation">}</span>

 <span class="token keyword">for</span> cur <span class="token operator">:=</span> dummy<span class="token punctuation">;</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next <span class="token punctuation">{</span>
  <span class="token keyword">if</span> cur<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
   cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 head <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> Next<span class="token punctuation">:</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> Next<span class="token punctuation">:</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> Next<span class="token punctuation">:</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">,</span> Next<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 <span class="token comment">//for head.Next != nil {</span>
 <span class="token comment">// fmt.Println(head.Val)</span>
 <span class="token comment">// head.Next = head.Next.Next</span>
 <span class="token comment">//}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">deleteNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u989832-ii-\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-ii" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u989832-ii-\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-ii" aria-hidden="true">#</a> \u9762\u8BD5\u989832 - II. \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811 II</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> root <span class="token operator">==</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">var</span> res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 queue<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span> TreeNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
 queue<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span>root<span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">{</span>
  r<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
   node<span class="token operator">:=</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
   queue<span class="token operator">=</span>queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
   r<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span>node<span class="token punctuation">.</span>Val<span class="token punctuation">)</span>
   <span class="token keyword">if</span> node<span class="token punctuation">.</span>Left<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
    queue<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span>node<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">if</span> node<span class="token punctuation">.</span>Right<span class="token operator">!=</span><span class="token boolean">nil</span> <span class="token punctuation">{</span>
    queue<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span>node<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  res<span class="token operator">=</span><span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span>r<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 tn <span class="token operator">:=</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token operator">&amp;</span>TreeNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> Left<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> Right<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">levelOrder</span><span class="token punctuation">(</span>tn<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9762\u8BD5\u989840-\u6700\u5C0F\u7684k\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u989840-\u6700\u5C0F\u7684k\u4E2A\u6570" aria-hidden="true">#</a> \u9762\u8BD5\u989840. \u6700\u5C0F\u7684k\u4E2A\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">getLeastNumbers</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
 <span class="token keyword">return</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 arr<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span>
 k<span class="token operator">:=</span><span class="token number">1</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">getLeastNumbers</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,226),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","letcode.html.vue"]]);export{k as default};

import{_ as n,o as s,c as a,b as p}from"./app.fc8d2037.js";const t={},e=p(`<h2 id="空闲之余-偶尔会想到曾经刷题的岁月-这次我把之前刷过的题目整理了一下-以便日后翻阅" tabindex="-1"><a class="header-anchor" href="#空闲之余-偶尔会想到曾经刷题的岁月-这次我把之前刷过的题目整理了一下-以便日后翻阅" aria-hidden="true">#</a> 空闲之余，偶尔会想到曾经刷题的岁月，这次我把之前刷过的题目整理了一下，以便日后翻阅</h2><blockquote><p>学海无涯苦作舟，每当回想起来，便也不觉得苦了</p></blockquote><h3 id="便利文件映射代码" tabindex="-1"><a class="header-anchor" href="#便利文件映射代码" aria-hidden="true">#</a> 便利文件映射代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_100-相同的树" tabindex="-1"><a class="header-anchor" href="#_100-相同的树" aria-hidden="true">#</a> 100. 相同的树</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1008-前序遍历构造二叉搜索树" tabindex="-1"><a class="header-anchor" href="#_1008-前序遍历构造二叉搜索树" aria-hidden="true">#</a> 1008. 前序遍历构造二叉搜索树</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> TreeNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Val   <span class="token builtin">int</span>
 Left  <span class="token operator">*</span>TreeNode
 Right <span class="token operator">*</span>TreeNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">bstFromPreorder</span><span class="token punctuation">(</span>preorder <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_101-对称二叉树" tabindex="-1"><a class="header-anchor" href="#_101-对称二叉树" aria-hidden="true">#</a> 101. 对称二叉树</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_102-二叉树的层序遍历" tabindex="-1"><a class="header-anchor" href="#_102-二叉树的层序遍历" aria-hidden="true">#</a> 102. 二叉树的层序遍历</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_104-二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#_104-二叉树的最大深度" aria-hidden="true">#</a> 104. 二叉树的最大深度</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1108-ip-地址无效化" tabindex="-1"><a class="header-anchor" href="#_1108-ip-地址无效化" aria-hidden="true">#</a> 1108. IP 地址无效化</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1122-数组的相对排序" tabindex="-1"><a class="header-anchor" href="#_1122-数组的相对排序" aria-hidden="true">#</a> 1122. 数组的相对排序</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1160-拼写单词" tabindex="-1"><a class="header-anchor" href="#_1160-拼写单词" aria-hidden="true">#</a> 1160. 拼写单词</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_118-杨辉三角" tabindex="-1"><a class="header-anchor" href="#_118-杨辉三角" aria-hidden="true">#</a> 118. 杨辉三角</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1200-最小绝对差" tabindex="-1"><a class="header-anchor" href="#_1200-最小绝对差" aria-hidden="true">#</a> 1200. 最小绝对差</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1207-独一无二的出现次数" tabindex="-1"><a class="header-anchor" href="#_1207-独一无二的出现次数" aria-hidden="true">#</a> 1207. 独一无二的出现次数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_121-买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#_121-买卖股票的最佳时机" aria-hidden="true">#</a> 121. 买卖股票的最佳时机</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1232-缀点成线" tabindex="-1"><a class="header-anchor" href="#_1232-缀点成线" aria-hidden="true">#</a> 1232. 缀点成线</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">checkStraightLine</span><span class="token punctuation">(</span>coordinates <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//斜率</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1281-整数的各位积和之差" tabindex="-1"><a class="header-anchor" href="#_1281-整数的各位积和之差" aria-hidden="true">#</a> 1281. 整数的各位积和之差</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1287-有序数组中出现次数超过25-的元素" tabindex="-1"><a class="header-anchor" href="#_1287-有序数组中出现次数超过25-的元素" aria-hidden="true">#</a> 1287. 有序数组中出现次数超过25%的元素</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1290-二进制链表转整数" tabindex="-1"><a class="header-anchor" href="#_1290-二进制链表转整数" aria-hidden="true">#</a> 1290. 二进制链表转整数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1295-统计位数为偶数的数字" tabindex="-1"><a class="header-anchor" href="#_1295-统计位数为偶数的数字" aria-hidden="true">#</a> 1295. 统计位数为偶数的数字</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1313-解压缩编码列表" tabindex="-1"><a class="header-anchor" href="#_1313-解压缩编码列表" aria-hidden="true">#</a> 1313. 解压缩编码列表</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1325-删除给定值的叶子节点" tabindex="-1"><a class="header-anchor" href="#_1325-删除给定值的叶子节点" aria-hidden="true">#</a> 1325. 删除给定值的叶子节点</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1342-将数字变成-0-的操作次数" tabindex="-1"><a class="header-anchor" href="#_1342-将数字变成-0-的操作次数" aria-hidden="true">#</a> 1342. 将数字变成 0 的操作次数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_136-只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#_136-只出现一次的数字" aria-hidden="true">#</a> 136. 只出现一次的数字</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1365-有多少小于当前数字的数字" tabindex="-1"><a class="header-anchor" href="#_1365-有多少小于当前数字的数字" aria-hidden="true">#</a> 1365. 有多少小于当前数字的数字</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_137-只出现一次的数字-ii" tabindex="-1"><a class="header-anchor" href="#_137-只出现一次的数字-ii" aria-hidden="true">#</a> 137. 只出现一次的数字 II</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

### 145. 二叉树的后序遍历

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1470-重新排列数组" tabindex="-1"><a class="header-anchor" href="#_1470-重新排列数组" aria-hidden="true">#</a> 1470. 重新排列数组</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1480-一维数组的动态和" tabindex="-1"><a class="header-anchor" href="#_1480-一维数组的动态和" aria-hidden="true">#</a> 1480. 一维数组的动态和</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1486-数组异或操作" tabindex="-1"><a class="header-anchor" href="#_1486-数组异或操作" aria-hidden="true">#</a> 1486. 数组异或操作</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_151-翻转字符串里的单词" tabindex="-1"><a class="header-anchor" href="#_151-翻转字符串里的单词" aria-hidden="true">#</a> 151. 翻转字符串里的单词</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1512-好数对的数目" tabindex="-1"><a class="header-anchor" href="#_1512-好数对的数目" aria-hidden="true">#</a> 1512. 好数对的数目</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1528-重新排列字符串" tabindex="-1"><a class="header-anchor" href="#_1528-重新排列字符串" aria-hidden="true">#</a> 1528. 重新排列字符串</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1534-统计好三元组" tabindex="-1"><a class="header-anchor" href="#_1534-统计好三元组" aria-hidden="true">#</a> 1534. 统计好三元组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_155-最小栈" tabindex="-1"><a class="header-anchor" href="#_155-最小栈" aria-hidden="true">#</a> 155. 最小栈</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">MinStack</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

### 1603. 设计停车系统

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1630-等差子数组" tabindex="-1"><a class="header-anchor" href="#_1630-等差子数组" aria-hidden="true">#</a> 1630. 等差子数组</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1636-按照频率将数组升序排序" tabindex="-1"><a class="header-anchor" href="#_1636-按照频率将数组升序排序" aria-hidden="true">#</a> 1636. 按照频率将数组升序排序</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1672-最富有客户的资产总量" tabindex="-1"><a class="header-anchor" href="#_1672-最富有客户的资产总量" aria-hidden="true">#</a> 1672. 最富有客户的资产总量</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1678-设计-goal-解析器" tabindex="-1"><a class="header-anchor" href="#_1678-设计-goal-解析器" aria-hidden="true">#</a> 1678. 设计 Goal 解析器</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1684-统计一致字符串的数目" tabindex="-1"><a class="header-anchor" href="#_1684-统计一致字符串的数目" aria-hidden="true">#</a> 1684. 统计一致字符串的数目</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1748-唯一元素的和" tabindex="-1"><a class="header-anchor" href="#_1748-唯一元素的和" aria-hidden="true">#</a> 1748. 唯一元素的和</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_191-位1的个数" tabindex="-1"><a class="header-anchor" href="#_191-位1的个数" aria-hidden="true">#</a> 191. 位1的个数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 <span class="token keyword">var</span> a <span class="token builtin">uint32</span><span class="token operator">=</span><span class="token number">00000000000000000000000000001011</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">uint32</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-有效的括号" tabindex="-1"><a class="header-anchor" href="#_20-有效的括号" aria-hidden="true">#</a> 20. 有效的括号</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_202-快乐数" tabindex="-1"><a class="header-anchor" href="#_202-快乐数" aria-hidden="true">#</a> 202. 快乐数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_205-同构字符串" tabindex="-1"><a class="header-anchor" href="#_205-同构字符串" aria-hidden="true">#</a> 205. 同构字符串</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_206-反转链表" tabindex="-1"><a class="header-anchor" href="#_206-反转链表" aria-hidden="true">#</a> 206. 反转链表</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#_21-合并两个有序链表" aria-hidden="true">#</a> 21. 合并两个有序链表</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

### 217. 存在重复元素

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_219-存在重复元素-ii" tabindex="-1"><a class="header-anchor" href="#_219-存在重复元素-ii" aria-hidden="true">#</a> 219. 存在重复元素 II</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;math&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//超时</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_222-完全二叉树的节点个数" tabindex="-1"><a class="header-anchor" href="#_222-完全二叉树的节点个数" aria-hidden="true">#</a> 222. 完全二叉树的节点个数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_226-翻转二叉树" tabindex="-1"><a class="header-anchor" href="#_226-翻转二叉树" aria-hidden="true">#</a> 226. 翻转二叉树</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_230-二叉搜索树中第k小的元素" tabindex="-1"><a class="header-anchor" href="#_230-二叉搜索树中第k小的元素" aria-hidden="true">#</a> 230. 二叉搜索树中第K小的元素</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_232-用栈实现队列" tabindex="-1"><a class="header-anchor" href="#_232-用栈实现队列" aria-hidden="true">#</a> 232. 用栈实现队列</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_237-删除链表中的节点" tabindex="-1"><a class="header-anchor" href="#_237-删除链表中的节点" aria-hidden="true">#</a> 237. 删除链表中的节点</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_242-有效的字母异位词" tabindex="-1"><a class="header-anchor" href="#_242-有效的字母异位词" aria-hidden="true">#</a> 242. 有效的字母异位词</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_258-各位相加" tabindex="-1"><a class="header-anchor" href="#_258-各位相加" aria-hidden="true">#</a> 258. 各位相加</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_260-只出现一次的数字-iii" tabindex="-1"><a class="header-anchor" href="#_260-只出现一次的数字-iii" aria-hidden="true">#</a> 260. 只出现一次的数字 III</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_268-缺失数字" tabindex="-1"><a class="header-anchor" href="#_268-缺失数字" aria-hidden="true">#</a> 268. 缺失数字</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-移除元素" tabindex="-1"><a class="header-anchor" href="#_27-移除元素" aria-hidden="true">#</a> 27. 移除元素</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_283-移动零" tabindex="-1"><a class="header-anchor" href="#_283-移动零" aria-hidden="true">#</a> 283. 移动零</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_292-nim-游戏" tabindex="-1"><a class="header-anchor" href="#_292-nim-游戏" aria-hidden="true">#</a> 292. Nim 游戏</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">canWinNim</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">!=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_326-3的幂" tabindex="-1"><a class="header-anchor" href="#_326-3的幂" aria-hidden="true">#</a> 326. 3的幂</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_344-反转字符串" tabindex="-1"><a class="header-anchor" href="#_344-反转字符串" aria-hidden="true">#</a> 344. 反转字符串</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_349-两个数组的交集" tabindex="-1"><a class="header-anchor" href="#_349-两个数组的交集" aria-hidden="true">#</a> 349. 两个数组的交集</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">intersection</span><span class="token punctuation">(</span>nums1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> nums2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span>  nums1 <span class="token operator">&amp;</span> nums2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 nums1<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span>
 nums2<span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">intersection</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span>nums2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_35-搜索插入位置-二分法" tabindex="-1"><a class="header-anchor" href="#_35-搜索插入位置-二分法" aria-hidden="true">#</a> 35.搜索插入位置（二分法）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

### 350. 两个数组的交集 II

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_367-有效的完全平方数" tabindex="-1"><a class="header-anchor" href="#_367-有效的完全平方数" aria-hidden="true">#</a> 367. 有效的完全平方数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

### 371. 两整数之和

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_374-猜数字大小" tabindex="-1"><a class="header-anchor" href="#_374-猜数字大小" aria-hidden="true">#</a> 374. 猜数字大小</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_387-字符串中的第一个唯一字符" tabindex="-1"><a class="header-anchor" href="#_387-字符串中的第一个唯一字符" aria-hidden="true">#</a> 387. 字符串中的第一个唯一字符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

### 389. 找不同

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_434-字符串中的单词数" tabindex="-1"><a class="header-anchor" href="#_434-字符串中的单词数" aria-hidden="true">#</a> 434. 字符串中的单词数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_468-验证ip地址" tabindex="-1"><a class="header-anchor" href="#_468-验证ip地址" aria-hidden="true">#</a> 468. 验证IP地址</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_496-下一个更大元素-i" tabindex="-1"><a class="header-anchor" href="#_496-下一个更大元素-i" aria-hidden="true">#</a> 496. 下一个更大元素 I</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_500-键盘行" tabindex="-1"><a class="header-anchor" href="#_500-键盘行" aria-hidden="true">#</a> 500. 键盘行</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_509-斐波那契数" tabindex="-1"><a class="header-anchor" href="#_509-斐波那契数" aria-hidden="true">#</a> 509. 斐波那契数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_541-反转字符串-ii" tabindex="-1"><a class="header-anchor" href="#_541-反转字符串-ii" aria-hidden="true">#</a> 541. 反转字符串 II</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_551-学生出勤记录-i" tabindex="-1"><a class="header-anchor" href="#_551-学生出勤记录-i" aria-hidden="true">#</a> 551. 学生出勤记录 I</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5685-交替合并字符串" tabindex="-1"><a class="header-anchor" href="#_5685-交替合并字符串" aria-hidden="true">#</a> 5685. 交替合并字符串</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_572-另一棵树的子树" tabindex="-1"><a class="header-anchor" href="#_572-另一棵树的子树" aria-hidden="true">#</a> 572. 另一棵树的子树</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

### 648. 单词替换

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_66-加一" tabindex="-1"><a class="header-anchor" href="#_66-加一" aria-hidden="true">#</a> 66. 加一</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_67-二进制求和" tabindex="-1"><a class="header-anchor" href="#_67-二进制求和" aria-hidden="true">#</a> 67. 二进制求和</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

### 677. 键值映射

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_69-x-的平方根" tabindex="-1"><a class="header-anchor" href="#_69-x-的平方根" aria-hidden="true">#</a> 69. x 的平方根</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_692-前k个高频单词" tabindex="-1"><a class="header-anchor" href="#_692-前k个高频单词" aria-hidden="true">#</a> 692. 前K个高频单词</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_693-交替位二进制数" tabindex="-1"><a class="header-anchor" href="#_693-交替位二进制数" aria-hidden="true">#</a> 693. 交替位二进制数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-整数反转" tabindex="-1"><a class="header-anchor" href="#_7-整数反转" aria-hidden="true">#</a> 7. 整数反转</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_704-二分查找" tabindex="-1"><a class="header-anchor" href="#_704-二分查找" aria-hidden="true">#</a> 704. 二分查找</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_728-自除数" tabindex="-1"><a class="header-anchor" href="#_728-自除数" aria-hidden="true">#</a> 728. 自除数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_771-宝石与石头" tabindex="-1"><a class="header-anchor" href="#_771-宝石与石头" aria-hidden="true">#</a> 771. 宝石与石头</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_784-字母大小写全排列" tabindex="-1"><a class="header-anchor" href="#_784-字母大小写全排列" aria-hidden="true">#</a> 784. 字母大小写全排列</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
 <span class="token string">&quot;unicode&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">letterCasePermutation</span><span class="token punctuation">(</span>S <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> S <span class="token punctuation">{</span>
  <span class="token comment">//判断是不是字母</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_884-两句话中的不常见单词" tabindex="-1"><a class="header-anchor" href="#_884-两句话中的不常见单词" aria-hidden="true">#</a> 884. 两句话中的不常见单词</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-回文数" tabindex="-1"><a class="header-anchor" href="#_9-回文数" aria-hidden="true">#</a> 9. 回文数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_905-按奇偶排序数组" tabindex="-1"><a class="header-anchor" href="#_905-按奇偶排序数组" aria-hidden="true">#</a> 905. 按奇偶排序数组</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_917-仅仅反转字母" tabindex="-1"><a class="header-anchor" href="#_917-仅仅反转字母" aria-hidden="true">#</a> 917. 仅仅反转字母</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_925-长按键入" tabindex="-1"><a class="header-anchor" href="#_925-长按键入" aria-hidden="true">#</a> 925. 长按键入</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_94-二叉树的中序遍历" tabindex="-1"><a class="header-anchor" href="#_94-二叉树的中序遍历" aria-hidden="true">#</a> 94. 二叉树的中序遍历</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_961-重复-n-次的元素" tabindex="-1"><a class="header-anchor" href="#_961-重复-n-次的元素" aria-hidden="true">#</a> 961. 重复 N 次的元素</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_977-有序数组的平方" tabindex="-1"><a class="header-anchor" href="#_977-有序数组的平方" aria-hidden="true">#</a> 977. 有序数组的平方</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcp-06-拿硬币" tabindex="-1"><a class="header-anchor" href="#lcp-06-拿硬币" aria-hidden="true">#</a> LCP 06. 拿硬币</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcp-17-速算机器人" tabindex="-1"><a class="header-anchor" href="#lcp-17-速算机器人" aria-hidden="true">#</a> LCP 17. 速算机器人</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剑指-offer-05-替换空格" tabindex="-1"><a class="header-anchor" href="#剑指-offer-05-替换空格" aria-hidden="true">#</a> 剑指 Offer 05. 替换空格</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剑指-offer-15-二进制中1的个数" tabindex="-1"><a class="header-anchor" href="#剑指-offer-15-二进制中1的个数" aria-hidden="true">#</a> 剑指 Offer 15. 二进制中1的个数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剑指-offer-58-ii-左旋转字符串" tabindex="-1"><a class="header-anchor" href="#剑指-offer-58-ii-左旋转字符串" aria-hidden="true">#</a> 剑指 Offer 58 - II. 左旋转字符串</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">reverseLeftWords</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> s<span class="token punctuation">[</span>n<span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">+</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s <span class="token operator">:=</span> <span class="token string">&quot;abcdefg&quot;</span>
 k <span class="token operator">:=</span> <span class="token number">2</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">reverseLeftWords</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剑指-offer-64-求1-2-n" tabindex="-1"><a class="header-anchor" href="#剑指-offer-64-求1-2-n" aria-hidden="true">#</a> 剑指 Offer 64. 求1+2+…+n</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="猜数字" tabindex="-1"><a class="header-anchor" href="#猜数字" aria-hidden="true">#</a> 猜数字</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-01-01-判定字符是否唯一" tabindex="-1"><a class="header-anchor" href="#面试题-01-01-判定字符是否唯一" aria-hidden="true">#</a> 面试题 01.01. 判定字符是否唯一</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">isUnique</span><span class="token punctuation">(</span>astr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 s<span class="token operator">:=</span><span class="token string">&quot;leetcode&quot;</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">isUnique</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-01-03-url化" tabindex="-1"><a class="header-anchor" href="#面试题-01-03-url化" aria-hidden="true">#</a> 面试题 01.03. URL化</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-01-07-旋转矩阵" tabindex="-1"><a class="header-anchor" href="#面试题-01-07-旋转矩阵" aria-hidden="true">#</a> 面试题 01.07. 旋转矩阵</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-02-03-删除中间节点" tabindex="-1"><a class="header-anchor" href="#面试题-02-03-删除中间节点" aria-hidden="true">#</a> 面试题 02.03. 删除中间节点</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-03-02-栈的最小值" tabindex="-1"><a class="header-anchor" href="#面试题-03-02-栈的最小值" aria-hidden="true">#</a> 面试题 03.02. 栈的最小值</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-10-05-稀疏数组搜索" tabindex="-1"><a class="header-anchor" href="#面试题-10-05-稀疏数组搜索" aria-hidden="true">#</a> 面试题 10.05. 稀疏数组搜索</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-16-02-单词频率" tabindex="-1"><a class="header-anchor" href="#面试题-16-02-单词频率" aria-hidden="true">#</a> 面试题 16.02. 单词频率</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-16-17-连续数列" tabindex="-1"><a class="header-anchor" href="#面试题-16-17-连续数列" aria-hidden="true">#</a> 面试题 16.17. 连续数列</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-17-04-消失的数字" tabindex="-1"><a class="header-anchor" href="#面试题-17-04-消失的数字" aria-hidden="true">#</a> 面试题 17.04. 消失的数字</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-17-10-主要元素" tabindex="-1"><a class="header-anchor" href="#面试题-17-10-主要元素" aria-hidden="true">#</a> 面试题 17.10. 主要元素</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题-17-11-单词距离" tabindex="-1"><a class="header-anchor" href="#面试题-17-11-单词距离" aria-hidden="true">#</a> 面试题 17.11. 单词距离</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题18-删除链表的节点" tabindex="-1"><a class="header-anchor" href="#面试题18-删除链表的节点" aria-hidden="true">#</a> 面试题18. 删除链表的节点</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题32-ii-从上到下打印二叉树-ii" tabindex="-1"><a class="header-anchor" href="#面试题32-ii-从上到下打印二叉树-ii" aria-hidden="true">#</a> 面试题32 - II. 从上到下打印二叉树 II</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题40-最小的k个数" tabindex="-1"><a class="header-anchor" href="#面试题40-最小的k个数" aria-hidden="true">#</a> 面试题40. 最小的k个数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,226),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","letcode.html.vue"]]);export{k as default};

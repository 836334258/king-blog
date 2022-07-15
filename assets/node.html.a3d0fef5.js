import{_ as n,o as s,c as a,e as t}from"./app.64d10039.js";const p={},e=t(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><blockquote><p>\u6709\u4E86\u535A\u5BA2\u4E4B\u540E\uFF0C\u628A\u53BB\u5E74\u5E74\u5E95\u5199\u7684node\u7EC3\u4E60\u6574\u7406\u4E00\u904D\uFF0C\u6E29\u6545\u800C\u77E5\u65B0</p></blockquote><p>\u6CE8\u610F\uFF1Atype:module \u4E0D\u80FD\u4E8Ets-node\u5171\u7528</p><h3 id="timers\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#timers\u6A21\u5757" aria-hidden="true">#</a> timers\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728\u672C\u8F6E Node.js \u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F\u65F6\u8C03\u7528\u7684\u51FD\u6570</span>
<span class="token keyword">const</span> timer1<span class="token operator">=</span><span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// \u5F53\u5B9A\u65F6\u5668\u7ED3\u675F\u65F6\u8C03\u7528\u7684\u51FD\u6570\uFF0C\u6700\u540E\u8C03\u7528</span>
<span class="token keyword">const</span> handler<span class="token operator">=</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F53\u5B9A\u65F6\u5668\u7ED3\u675F\u65F6\u8C03\u7528\u7684\u51FD\u6570 \u6700\u5148\u8C03\u7528</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer1<span class="token punctuation">)</span>
<span class="token comment">// \u5982\u679C\u4E3A true\uFF0C\u5219 Immediate \u5BF9\u8C61\u5C06\u4F7F Node.js \u4E8B\u4EF6\u5FAA\u73AF\u4FDD\u6301\u6D3B\u52A8\u72B6\u6001\u3002</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer1<span class="token punctuation">.</span><span class="token function">hasRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE: &lt;Immediate&gt; immediate \u7684\u5F15\u7528,\u548C\u76F4\u63A5\u8C03\u7528console.log(timer1)\u4E00\u6837</span>
<span class="token doc-comment comment">/**
 * Immediate <span class="token punctuation">{</span>
  _idleNext: null,
  _idlePrev: null,
  _onImmediate: [Function (anonymous)],
  _argv: undefined,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(asyncId)]: 4,
  [Symbol(triggerId)]: 1
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer1<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token function">clearInterval</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="process\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#process\u6A21\u5757" aria-hidden="true">#</a> process\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> process <span class="token keyword">from</span> <span class="token string">&#39;process&#39;</span>

<span class="token comment">// \u7531\u4E8Eprocess\u662FEventEmitter\u7684\u5B9E\u4F8B\uFF0Con\u4E8B\u4EF6\u76F8\u5F53\u4E8EaddListener\u4E8B\u4EF6</span>

<span class="token comment">// 0 node\u6B63\u5E38\u7ED3\u675F\u540E\u4F1A\u8C03\u7528beforeExit\uFF0C\u5982\u679C\u663E\u5F0F\u8C03\u7528process.exit()\u5219\u4E0D\u4F1A\u8C03\u7528</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;beforeExit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Process beforeExit event with code: &#39;</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u76EE\u524D\u770B\u8D77\u6765\u53EA\u8981\u9000\u51FA\u5C31\u4F1A\u8C03\u7528</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;exit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">About to exit with code: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// promise\u91CC\u9762\u4E0D\u6B62\u62D2\u7EDD\u6216\u89E3\u51B3\u8FC7\u4E00\u6B21\uFF0C\u5C31\u4F1A\u8C03\u7528 reject Promise { &#39;ok&#39; } no ok</span>
process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;multipleResolves&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> promise<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> promise<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;no ok&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span>

<span class="token comment">// \u6355\u83B7promise.reject \u65B9\u6CD5</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledRejection&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">reason<span class="token punctuation">,</span> promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledRejection&#39;</span><span class="token punctuation">,</span> reason<span class="token punctuation">,</span> promise<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;haha reject&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6355\u83B7\u5F02\u5E38\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtException&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> origin</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtException&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> origin<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u597D\u50CF\u548CuncaughtException\u5DEE\u4E0D\u591A</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtExceptionMonitor&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> origin</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtExceptionMonitor&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> origin<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F1A\u89E6\u53D1uncaughtException\u4E8B\u4EF6\u548CuncaughtExceptionMonitor\u4E8B\u4EF6</span>
<span class="token comment">//  os.setPriority(0,-10)</span>

<span class="token comment">// \u6BCF\u5F53 Node.js \u89E6\u53D1\u8FDB\u7A0B\u8B66\u544A\u65F6\uFF0C\u5219\u4F1A\u89E6\u53D1 &#39;warning&#39; \u4E8B\u4EF6</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">waring</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;waring&#39;</span><span class="token punctuation">,</span> waring<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u65B0\u7684 &lt;Worker&gt; \u7EBF\u7A0B\u540E\u4F1A\u89E6\u53D1 &#39;worker&#39; \u4E8B\u4EF6\u3002</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;worker&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">worker</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;worker&#39;</span><span class="token punctuation">,</span> worker<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E00\u79CD\u4FE1\u53F7\uFF0C\u6682\u65F6\u6CA1\u53D1\u73B0\u7528\u5904</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;SIGINT&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">signal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;signal&#39;</span><span class="token punctuation">,</span>signal<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5BFC\u81F4node\u7ACB\u5373\u9000\u51FA\uFF0C\u540C\u65F6addListener\u91CC\u9762\u7684\u4E8B\u4EF6\u4E5F\u5931\u6548</span>
<span class="token comment">// process.abort()</span>

<span class="token comment">// cpu\u67B6\u6784 x64</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>arch<span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u5165\u53C2\u6570 ts-node index.ts a b</span>
<span class="token doc-comment comment">/**
 * [
  &#39;/mnt/c/Program Files/nodejs/node_modules/ts-node/dist/bin.js&#39;,
  &#39;/mnt/e/code/test_code/node_practice/process/index.ts&#39;,
  &#39;a&#39;,
  &#39;b&#39;
]
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

<span class="token comment">// node\u7684\u53EA\u8BFB\u526F\u672C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv0<span class="token punctuation">)</span>

<span class="token comment">// \u6539\u53D8\u76EE\u5F55</span>
process<span class="token punctuation">.</span><span class="token function">chdir</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F53\u524D\u76EE\u5F55</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F1A\u89E6\u53D1waring\u4E8B\u4EF6 waring Warning: emitWaring....</span>
process<span class="token punctuation">.</span><span class="token function">emitWarning</span><span class="token punctuation">(</span><span class="token string">&#39;emitWaring....&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u7528\u6237\u73AF\u5883\u5BF9\u8C61</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE Node.js \u8FDB\u7A0B\u542F\u52A8\u65F6\u4F20\u5165\u7684\u4E00\u7EC4\u7279\u5B9A\u4E8E Node.js \u7684\u547D\u4EE4\u884C\u9009\u9879</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>execArgv<span class="token punctuation">)</span>

<span class="token comment">// node\u53EF\u6267\u884C\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u540D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>execPath<span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u7F6E\u7EC8\u6B62\u8FDB\u7A0Bcode\u7801\uFF0C\u9ED8\u8BA4\u4E3A0</span>
process<span class="token punctuation">.</span>exitCode<span class="token operator">=</span><span class="token number">100</span>
<span class="token comment">// \u7EC8\u6B62\u8FDB\u7A0B</span>
<span class="token comment">// process.exit()</span>

<span class="token comment">// console.log(process.getActiveResourcesInfo())</span>

<span class="token comment">// \u7FA4\u7EC4id</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">getgid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u7528\u6237id</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">getuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">hrtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u7EB3\u79D2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>hrtime<span class="token punctuation">.</span><span class="token function">bigint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5C06sigint\u53D1\u9001\u5230\u7531pid\u6807\u8BC6\u7684\u8FDB\u7A0B</span>
process<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>pid<span class="token punctuation">,</span><span class="token string">&#39;SIGINT&#39;</span><span class="token punctuation">)</span>


<span class="token comment">// \u5185\u5B58\u4F7F\u7528\u91CF</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F1A\u5148\u6267\u884CnextTick\uFF0C\u7136\u540E\u6267\u884CqueueMicrotask\uFF0C\u9664\u975E\u9700\u8981 process.nextTick() \u7684\u7279\u5B9A\u529F\u80FD\uFF0C\u5426\u5219\u8BF7\u4F7F\u7528 queueMicrotask()\u3002</span>
<span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;queueMicrotask&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5C06 callback \u6DFB\u52A0\u5230&quot;\u4E0B\u4E00\u4E2A\u6EF4\u7B54\u961F\u5217&quot;</span>
process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// pid 434</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pid&#39;</span><span class="token punctuation">,</span>process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span>

<span class="token comment">// \u5E73\u53F0 linux</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform<span class="token punctuation">)</span>

<span class="token comment">// \u7236\u8FDB\u7A0Bid</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>ppid<span class="token punctuation">)</span>

<span class="token comment">// \u5F53\u524D\u7248\u672C\u76F8\u5173\u7684\u5143\u6570\u636E</span>
<span class="token doc-comment comment">/**
 * <span class="token punctuation">{</span>
  name: &#39;node&#39;,
  sourceUrl: &#39;https://nodejs.org/download/release/v17.5.0/node-v17.5.0.tar.gz&#39;,
  headersUrl: &#39;https://nodejs.org/download/release/v17.5.0/node-v17.5.0-headers.tar.gz&#39;
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>release<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * \u8BCA\u65AD\u62A5\u544A
 * <span class="token punctuation">{</span>
  writeReport: [Function: writeReport],
  getReport: [Function: getReport],
  directory: [Getter/Setter],
  filename: [Getter/Setter],
  compact: [Getter/Setter],
  signal: [Getter/Setter],
  reportOnFatalError: [Getter/Setter],
  reportOnSignal: [Getter/Setter],
  reportOnUncaughtException: [Getter/Setter]
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>report<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * ReadStream 
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>stdin<span class="token punctuation">)</span>

<span class="token comment">// \u8FD0\u884C\u4E86\u51E0\u79D2 3.124805684</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">uptime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// node\u7248\u672C v17.5.0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>version<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * \u5217\u51FA\u4F9D\u8D56\u9879
<span class="token punctuation">{</span>
  node: &#39;17.5.0&#39;,
  v8: &#39;9.6.180.15-node.13&#39;,
  uv: &#39;1.43.0&#39;,
  zlib: &#39;1.2.11&#39;,
  brotli: &#39;1.0.9&#39;,
  ares: &#39;1.18.1&#39;,
  modules: &#39;102&#39;,
  nghttp2: &#39;1.45.1&#39;,
  napi: &#39;8&#39;,
  llhttp: &#39;6.0.4&#39;,
  openssl: &#39;3.0.1+quic&#39;,
  cldr: &#39;40.0&#39;,
  icu: &#39;70.1&#39;,
  tz: &#39;2021a3&#39;,
  unicode: &#39;14.0&#39;,
  ngtcp2: &#39;0.1.0-DEV&#39;,
  nghttp3: &#39;0.1.0-DEV&#39;
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>versions<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#path\u6A21\u5757" aria-hidden="true">#</a> path\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token keyword">const</span> <span class="token constant">PWD</span><span class="token operator">=</span><span class="token string">&#39;/mnt/e/code/test_code/node_practice&#39;</span>

<span class="token comment">// \u8FD4\u56DEpath\u7684\u6700\u540E\u4E00\u90E8\u5206</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token constant">PWD</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u754C\u7B26 linux\u4E0B: win ;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>delimiter<span class="token punctuation">)</span>

<span class="token comment">// \u76EE\u5F55\u540D /mnt/e/code/test_code</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token constant">PWD</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6269\u5C55\u540D .html</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// path\u5BF9\u8C61</span>
<span class="token doc-comment comment">/**
 * <span class="token punctuation">{</span>
  root: &#39;/&#39;,
  dir: &#39;/mnt/e/code/test_code&#39;,
  base: &#39;node_practice&#39;,
  ext: &#39;&#39;,
  name: &#39;node_practice&#39;
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">PWD</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8DEF\u5F84\u5B57\u7B26\u4E32</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;/mnt/e/code/test_code&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;node_practice&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;node_practice&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u662F\u5426\u662F\u7EDD\u5BF9\u8DEF\u5F84</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span><span class="token constant">PWD</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u89C4\u8303\u751F\u6210\u8DEF\u5F84 a/b/c</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u89E3\u6790. ..\u7684path\u7247\u6BB5 /foo/bar/baz/asdf</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar//baz/asdf/quux/..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// from\u5230to\u7684\u76F8\u5BF9\u8DEF\u5F84 ../..</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token string">&#39;/a/b/c&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5C06\u8DEF\u5F84\u6216\u8005\u8DEF\u5F84\u7247\u6BB5\u89E3\u6790\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u987A\u5E8F\u4ECE\u53F3\u5F80\u5DE6\uFF0C\u76F4\u5230\u6784\u5EFA\u7EDD\u5BF9\u8DEF\u5F84\u540E\u9A6C\u4E0A\u505C\u6B62 /b/c/d</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5206\u9694\u7B26 /</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>sep<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="os\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#os\u6A21\u5757" aria-hidden="true">#</a> os\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> os <span class="token keyword">from</span> <span class="token string">&#39;os&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;process&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> parseConfigFileTextToJson <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typescript&#39;</span>

<span class="token comment">// window\u4E0B\u662F\\r\\n,linux\u4E0B\u9762\u662F\\n</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token operator">+</span>os<span class="token punctuation">.</span><span class="token constant">EOL</span><span class="token operator">+</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// cpu\u67B6\u6784 x64</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">arch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u64CD\u4F5C\u7CFB\u7EDF\u7279\u5B9A\u5E38\u91CF</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>constants<span class="token punctuation">)</span>

<span class="token comment">// cpu\u5185\u6838\u4FE1\u606F\u5BF9\u8C61\u6570\u7EC4</span>
<span class="token doc-comment comment">/**
 * [
  <span class="token punctuation">{</span>
    model: &#39;AMD Ryzen 7 5700U with Radeon Graphics&#39;,
    speed: 1796,
    times: <span class="token punctuation">{</span> user: 540, nice: 0, sys: 1060, idle: 1245100, irq: 0 <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
]
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// linux\u662F/dev/null</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>devNull<span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u5269\u4F59\u7684\u5185\u5B58(\u5B57\u8282) 6485471232</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">freemem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6307\u5B9A\u7EBF\u7A0B\u7684\u4F18\u5148\u7EA7</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u7528\u6237\u7684\u4E3B\u76EE\u5F55 /home/king</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">homedir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u7528\u6237\u7684\u4E3B\u673A\u540D LAPTOP-CSF8P6S1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">hostname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 1,5,15\u5206\u949F\u7684\u5E73\u5747\u8D1F\u8F7D [ 0.07, 0.09, 0.02 ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">loadavg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * \u7F51\u7EDC\u63A5\u53E3\u5BF9\u8C61
 * 
 * eth0: [
    <span class="token punctuation">{</span>
      address: &#39;172.23.88.120&#39;,
      netmask: &#39;255.255.240.0&#39;,
      family: &#39;IPv4&#39;,
      mac: &#39;00:15:5d:6c:d2:06&#39;,
      internal: false,
      cidr: &#39;172.23.88.120/20&#39;
    <span class="token punctuation">}</span>,
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">networkInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u64CD\u4F5C\u5E73\u53F0\u7684\u540D\u79F0 linux</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">platform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u64CD\u4F5C\u7CFB\u7EDF\u7684\u540D\u79F0 5.10.60.1-microsoft-standard-WSL2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u5B9A\u8FDB\u7A0B\u4F18\u5148\u7EA7-20 - 19 \u4ECE\u9AD8\u5230\u4F4E,\u4E0D\u4F7F\u7528sudo\u4F1A\u62A5\u9519</span>
<span class="token keyword">try</span><span class="token punctuation">{</span>
  os<span class="token punctuation">.</span><span class="token function">setPriority</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E34\u65F6\u6587\u4EF6\u76EE\u5F55 /tmp</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">tmpdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5185\u5B58\u603B\u91CF 7187771392</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">totalmem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u64CD\u4F5C\u7CFB\u7EDF\u540D\u79F0 Linux</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u7CFB\u7EDF\u6B63\u5E38\u8FD0\u884C\u65F6\u95F4 2999.88</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">uptime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * \u7528\u6237\u4FE1\u606F
 * <span class="token punctuation">{</span>
  uid: 1000,
  gid: 1000,
  username: &#39;king&#39;,
  homedir: &#39;/home/king&#39;,
  shell: &#39;/bin/bash&#39;
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">userInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u6807\u8BC6\u5185\u6838\u7248\u672C\u7684\u5B57\u7B26\u4E32 #1 SMP Wed Aug 25 23:20:18 UTC 2021</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fs\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#fs\u6A21\u5757" aria-hidden="true">#</a> fs\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span>  fs <span class="token keyword">from</span> <span class="token string">&#39;fs/promises&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>constants<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>



<span class="token keyword">const</span> fileHandle<span class="token operator">=</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;a+&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">await</span> fileHandle<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">await</span> fileHandle<span class="token punctuation">.</span><span class="token function">appendFile</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">await</span> fileHandle<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">offset</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> stream<span class="token operator">=</span>fileHandle<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">start</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">end</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> writeStream<span class="token operator">=</span>fileHandle<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    writeStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u622A\u65AD</span>
fileHandle<span class="token punctuation">.</span><span class="token function">truncate</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

fileHandle<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6307\u5B9A\u8981\u6267\u884C\u7684\u53EF\u8BBF\u95EE\u6027\u68C0\u67E5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">access</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>constants<span class="token punctuation">.</span><span class="token constant">R_OK</span><span class="token operator">|</span>constants<span class="token punctuation">.</span><span class="token constant">W_OK</span><span class="token punctuation">)</span>

<span class="token comment">// \u590D\u5236\u6587\u4EF6</span>
<span class="token comment">// await fs.copyFile(&#39;./test.txt&#39;,&#39;./testCopy.txt&#39;,constants.COPYFILE_EXCL)</span>

<span class="token comment">// \u590D\u5236\u76EE\u5F55</span>
<span class="token comment">// await fs.cp(&#39;../fs&#39;,&#39;../fsCopy/&#39;)</span>

<span class="token comment">// link</span>

<span class="token comment">// fs.link(&#39;./test.txt&#39;,&#39;./test.txt.link&#39;)</span>

<span class="token comment">// \u7B49\u540C\u4E8EfsPromises.stat()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">lstat</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u76EE\u5F55</span>
<span class="token comment">// fs.mkdir(&#39;test&#39;)</span>


<span class="token comment">// \u8BFB\u53D6\u76EE\u5F55</span>
<span class="token keyword">const</span> dirs<span class="token operator">=</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">opendir</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token keyword">await</span><span class="token punctuation">(</span><span class="token keyword">const</span> dir <span class="token keyword">of</span> dirs<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dirs2<span class="token operator">=</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> dir <span class="token keyword">of</span> dirs2<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="buffer\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#buffer\u6A21\u5757" aria-hidden="true">#</a> buffer\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> buffer <span class="token keyword">from</span> <span class="token string">&#39;buffer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MessageChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;worker_threads&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>Buffer<span class="token punctuation">,</span>Blob<span class="token punctuation">,</span>constants<span class="token punctuation">}</span><span class="token operator">=</span>buffer

<span class="token keyword">const</span> buf1<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf2<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf3<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf4<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf5<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">74</span> <span class="token punctuation">,</span><span class="token number">65</span> <span class="token punctuation">,</span><span class="token number">73</span> <span class="token punctuation">,</span><span class="token number">74</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// \u6B64\u65F6buf\u91CC\u9762\u7684\u5185\u5BB9\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u9700\u8981\u7528fill\u521D\u59CB\u5316</span>
<span class="token keyword">const</span> buf6<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">allocUnsafe</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf3<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf5<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf6<span class="token punctuation">)</span>

<span class="token keyword">const</span> bufTotal<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>buf1<span class="token punctuation">,</span>buf2<span class="token punctuation">,</span>buf3<span class="token punctuation">,</span>buf4<span class="token punctuation">,</span>buf5<span class="token punctuation">,</span>buf6<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> buf4<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;i=&#39;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> blob<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> m1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

m1<span class="token punctuation">.</span>port1<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span><span class="token operator">=</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> data<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  m1<span class="token punctuation">.</span>port1<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

m1<span class="token punctuation">.</span>port2<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
blob<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>constants<span class="token punctuation">.</span><span class="token constant">MAX_LENGTH</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bufTotal&#39;</span><span class="token punctuation">,</span>bufTotal<span class="token punctuation">)</span>


<span class="token keyword">const</span> bf1<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> bf2<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>bf1<span class="token punctuation">)</span>
bf1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bf1&#39;</span><span class="token punctuation">,</span>bf1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bf2&#39;</span><span class="token punctuation">,</span>bf2<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Buffer<span class="token punctuation">.</span><span class="token function">isBuffer</span><span class="token punctuation">(</span>bufTotal<span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf2<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> bbf<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sbff<span class="token operator">=</span>bbf<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
sbff<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sbff<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#event\u6A21\u5757" aria-hidden="true">#</a> event\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> events <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>EventEmitter<span class="token punctuation">}</span><span class="token operator">=</span>events

<span class="token keyword">class</span> <span class="token class-name">MyEventEmitter</span> <span class="token keyword">extends</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> myEventEmitter<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">MyEventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

myEventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// once\u53EA\u4F1A\u88AB\u89E6\u53D1\u4E00\u6B21</span>
myEventEmitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u540D\u4E3A eventName \u7684\u4E8B\u4EF6\u7684\u76D1\u542C\u5668\u6570\u7EC4\u7684\u526F\u672C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5176\u6CE8\u518C\u76D1\u542C\u5668\u7684\u4E8B\u4EF6\u7684\u6570\u7EC4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">eventNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u56DE EventEmitter \u7684\u5F53\u524D\u6700\u5927\u76D1\u542C\u5668\u6570\u7684\u503C 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">getMaxListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u76D1\u542C\u540D\u4E3A eventName \u7684\u4E8B\u4EF6\u7684\u76D1\u542C\u5668\u6570\u91CF 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">listenerCount</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5C06 listener \u51FD\u6570\u6DFB\u52A0\u5230\u540D\u4E3A eventName \u7684\u4E8B\u4EF6\u7684\u76D1\u542C\u5668\u6570\u7EC4\u7684\u5F00\u5934</span>
myEventEmitter<span class="token punctuation">.</span><span class="token function">prependListener</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;prependListener&#39;</span><span class="token punctuation">,</span>args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5220\u9664\u6240\u6709\u76D1\u542C\u5668\uFF0C\u6216\u6307\u5B9A eventName \u7684\u76D1\u542C\u5668\u3002</span>
<span class="token comment">// myEventEmitter.removeAllListeners(&#39;event&#39;)</span>

myEventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u53D1\u9001&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u4E86&#39;</span><span class="token punctuation">)</span>
myEventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u53D1\u9001&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u4E86&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u540D\u4E3A eventName \u7684\u4E8B\u4EF6\u7684\u76D1\u542C\u5668\u6570\u7EC4\u7684\u526F\u672C\uFF0C\u5305\u62EC\u4EFB\u4F55\u5C01\u88C5\u5668\uFF08\u4F8B\u5982\u7531 .once() \u521B\u5EFA\u7684\u5C01\u88C5\u5668\uFF09</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">rawListeners</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>events<span class="token punctuation">.</span><span class="token function">getEventListeners</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">,</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tty\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#tty\u6A21\u5757" aria-hidden="true">#</a> tty\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> tty <span class="token keyword">from</span> <span class="token string">&#39;tty&#39;</span>
<span class="token keyword">import</span> process <span class="token keyword">from</span> <span class="token string">&#39;process&#39;</span>

<span class="token comment">// process.stdin\u662Fnode\u8FDB\u7A0B\u4E2Dtty.ReadStream\u7684\u552F\u4E00\u5B9E\u4F8B,process.stdout \u548C process.stderr \u5C06\u662F\u4E3A Node.js \u8FDB\u7A0B\u521B\u5EFA\u7684\u552F\u4E00\u7684 tty.WriteStream \u5B9E\u4F8B\uFF0C</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>stdin<span class="token punctuation">,</span>stdout<span class="token punctuation">}</span><span class="token operator">=</span>process

<span class="token comment">// \u5982\u679C\u7EC8\u7AEF\u5F53\u524D\u914D\u7F6E\u4E3A\u4F5C\u4E3A\u539F\u59CB\u8BBE\u5907\u8FD0\u884C\uFF0C\u5219\u4E3A true\u3002 \u9ED8\u8BA4\u4E3A false\u3002</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>isRaw<span class="token punctuation">)</span>

<span class="token comment">// \u5BF9\u4E8E tty.ReadStream \u5B9E\u4F8B\uFF0C\u59CB\u7EC8\u4E3A true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdin<span class="token punctuation">.</span>isTTY<span class="token punctuation">)</span>

<span class="token comment">// \u6BCF\u5F53 writeStream.columns \u6216 writeStream.rows \u5C5E\u6027\u53D1\u751F\u66F4\u6539\u65F6\uFF0C\u5219\u4F1A\u89E6\u53D1 &#39;resize&#39; \u4E8B\u4EF6\u3002</span>
stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;screen size has changed!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>columns<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>rows<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">clearLine</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">clearScreenDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u7EC8\u7AEF\u652F\u6301\u7684\u989C\u8272 8\u4EE3\u8868256\u8272</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">getColorDepth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// WriteStream \u5BF9\u5E94\u7684\u7EC8\u7AEF\u7684\u5C3A\u5BF8 [ 149, 23 ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">getWindowSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#url\u6A21\u5757" aria-hidden="true">#</a> url\u6A21\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> url <span class="token keyword">from</span> <span class="token string">&#39;url&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">URL</span><span class="token punctuation">}</span><span class="token operator">=</span>url

<span class="token keyword">const</span> myUrl<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;/api/url.html?name=king#bar&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;http://nodejs.cn:89&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * host\u5305\u542B\u7AEF\u53E3 nodejs.cn:89
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>host<span class="token punctuation">)</span>

<span class="token comment">// nodejs.cn</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span>

<span class="token comment">// http://nodejs.cn:89/api/url.html#bar</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>href<span class="token punctuation">)</span>

<span class="token comment">// http://nodejs.cn:89</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>origin<span class="token punctuation">)</span>

<span class="token comment">// /api/url.html</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span>

<span class="token comment">// 89</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>port<span class="token punctuation">)</span>

<span class="token comment">// http:</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>protocol<span class="token punctuation">)</span>

<span class="token comment">// ?name=king</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>search<span class="token punctuation">)</span>

<span class="token comment">// URLSearchParams { &#39;name&#39; =&gt; &#39;king&#39; }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">)</span>

<span class="token comment">// http://nodejs.cn:89/api/url.html?name=king#bar</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// http://nodejs.cn:89/api/url.html?name=king#bar</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


myUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// name=king&amp;age=12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// URLSearchParams Iterator { &#39;name&#39;, &#39;age&#39; }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// [ &#39;king&#39;, &#39;12&#39; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","node.html.vue"]]);export{k as default};

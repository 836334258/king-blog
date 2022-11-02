import{_ as n,o as s,c as a,b as t}from"./app.fc8d2037.js";const p={},e=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><blockquote><p>有了博客之后，把去年年底写的node练习整理一遍，温故而知新</p></blockquote><p>注意：type:module 不能于ts-node共用</p><h3 id="timers模块" tabindex="-1"><a class="header-anchor" href="#timers模块" aria-hidden="true">#</a> timers模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在本轮 Node.js 事件循环结束时调用的函数</span>
<span class="token keyword">const</span> timer1<span class="token operator">=</span><span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 当定时器结束时调用的函数，最后调用</span>
<span class="token keyword">const</span> handler<span class="token operator">=</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token comment">// 当定时器结束时调用的函数 最先调用</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer1<span class="token punctuation">)</span>
<span class="token comment">// 如果为 true，则 Immediate 对象将使 Node.js 事件循环保持活动状态。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timer1<span class="token punctuation">.</span><span class="token function">hasRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 返回: &lt;Immediate&gt; immediate 的引用,和直接调用console.log(timer1)一样</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="process模块" tabindex="-1"><a class="header-anchor" href="#process模块" aria-hidden="true">#</a> process模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> process <span class="token keyword">from</span> <span class="token string">&#39;process&#39;</span>

<span class="token comment">// 由于process是EventEmitter的实例，on事件相当于addListener事件</span>

<span class="token comment">// 0 node正常结束后会调用beforeExit，如果显式调用process.exit()则不会调用</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;beforeExit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Process beforeExit event with code: &#39;</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 目前看起来只要退出就会调用</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;exit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">About to exit with code: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// promise里面不止拒绝或解决过一次，就会调用 reject Promise { &#39;ok&#39; } no ok</span>
process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;multipleResolves&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> promise<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> promise<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;no ok&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span>

<span class="token comment">// 捕获promise.reject 方法</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledRejection&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">reason<span class="token punctuation">,</span> promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledRejection&#39;</span><span class="token punctuation">,</span> reason<span class="token punctuation">,</span> promise<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;haha reject&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 捕获异常，不推荐使用</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtException&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> origin</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtException&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> origin<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 好像和uncaughtException差不多</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtExceptionMonitor&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> origin</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;uncaughtExceptionMonitor&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> origin<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 会触发uncaughtException事件和uncaughtExceptionMonitor事件</span>
<span class="token comment">//  os.setPriority(0,-10)</span>

<span class="token comment">// 每当 Node.js 触发进程警告时，则会触发 &#39;warning&#39; 事件</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">waring</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;waring&#39;</span><span class="token punctuation">,</span> waring<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建新的 &lt;Worker&gt; 线程后会触发 &#39;worker&#39; 事件。</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;worker&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">worker</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;worker&#39;</span><span class="token punctuation">,</span> worker<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 一种信号，暂时没发现用处</span>
process<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;SIGINT&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">signal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;signal&#39;</span><span class="token punctuation">,</span>signal<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 导致node立即退出，同时addListener里面的事件也失效</span>
<span class="token comment">// process.abort()</span>

<span class="token comment">// cpu架构 x64</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>arch<span class="token punctuation">)</span>

<span class="token comment">// 输入参数 ts-node index.ts a b</span>
<span class="token doc-comment comment">/**
 * [
  &#39;/mnt/c/Program Files/nodejs/node_modules/ts-node/dist/bin.js&#39;,
  &#39;/mnt/e/code/test_code/node_practice/process/index.ts&#39;,
  &#39;a&#39;,
  &#39;b&#39;
]
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

<span class="token comment">// node的只读副本</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv0<span class="token punctuation">)</span>

<span class="token comment">// 改变目录</span>
process<span class="token punctuation">.</span><span class="token function">chdir</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 当前目录</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 会触发waring事件 waring Warning: emitWaring....</span>
process<span class="token punctuation">.</span><span class="token function">emitWarning</span><span class="token punctuation">(</span><span class="token string">&#39;emitWaring....&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 用户环境对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">)</span>

<span class="token comment">// 返回 Node.js 进程启动时传入的一组特定于 Node.js 的命令行选项</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>execArgv<span class="token punctuation">)</span>

<span class="token comment">// node可执行文件的绝对路径名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>execPath<span class="token punctuation">)</span>

<span class="token comment">// 设置终止进程code码，默认为0</span>
process<span class="token punctuation">.</span>exitCode<span class="token operator">=</span><span class="token number">100</span>
<span class="token comment">// 终止进程</span>
<span class="token comment">// process.exit()</span>

<span class="token comment">// console.log(process.getActiveResourcesInfo())</span>

<span class="token comment">// 群组id</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">getgid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 用户id</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">getuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">hrtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 返回纳秒</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>hrtime<span class="token punctuation">.</span><span class="token function">bigint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 将sigint发送到由pid标识的进程</span>
process<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>pid<span class="token punctuation">,</span><span class="token string">&#39;SIGINT&#39;</span><span class="token punctuation">)</span>


<span class="token comment">// 内存使用量</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 会先执行nextTick，然后执行queueMicrotask，除非需要 process.nextTick() 的特定功能，否则请使用 queueMicrotask()。</span>
<span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;queueMicrotask&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 将 callback 添加到&quot;下一个滴答队列&quot;</span>
process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// pid 434</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pid&#39;</span><span class="token punctuation">,</span>process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span>

<span class="token comment">// 平台 linux</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform<span class="token punctuation">)</span>

<span class="token comment">// 父进程id</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>ppid<span class="token punctuation">)</span>

<span class="token comment">// 当前版本相关的元数据</span>
<span class="token doc-comment comment">/**
 * <span class="token punctuation">{</span>
  name: &#39;node&#39;,
  sourceUrl: &#39;https://nodejs.org/download/release/v17.5.0/node-v17.5.0.tar.gz&#39;,
  headersUrl: &#39;https://nodejs.org/download/release/v17.5.0/node-v17.5.0-headers.tar.gz&#39;
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>release<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 诊断报告
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

<span class="token comment">// 运行了几秒 3.124805684</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">uptime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// node版本 v17.5.0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>version<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 列出依赖项
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path模块" tabindex="-1"><a class="header-anchor" href="#path模块" aria-hidden="true">#</a> path模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token keyword">const</span> <span class="token constant">PWD</span><span class="token operator">=</span><span class="token string">&#39;/mnt/e/code/test_code/node_practice&#39;</span>

<span class="token comment">// 返回path的最后一部分</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token constant">PWD</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 定界符 linux下: win ;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>delimiter<span class="token punctuation">)</span>

<span class="token comment">// 目录名 /mnt/e/code/test_code</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token constant">PWD</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 扩展名 .html</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// path对象</span>
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

<span class="token comment">// 路径字符串</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;/mnt/e/code/test_code&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;node_practice&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;node_practice&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 是否是绝对路径</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span><span class="token constant">PWD</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 规范生成路径 a/b/c</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 解析. ..的path片段 /foo/bar/baz/asdf</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar//baz/asdf/quux/..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// from到to的相对路径 ../..</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token string">&#39;/a/b/c&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 将路径或者路径片段解析为绝对路径，顺序从右往左，直到构建绝对路径后马上停止 /b/c/d</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 分隔符 /</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>sep<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="os模块" tabindex="-1"><a class="header-anchor" href="#os模块" aria-hidden="true">#</a> os模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> os <span class="token keyword">from</span> <span class="token string">&#39;os&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;process&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> parseConfigFileTextToJson <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typescript&#39;</span>

<span class="token comment">// window下是\\r\\n,linux下面是\\n</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token operator">+</span>os<span class="token punctuation">.</span><span class="token constant">EOL</span><span class="token operator">+</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// cpu架构 x64</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">arch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 操作系统特定常量</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>constants<span class="token punctuation">)</span>

<span class="token comment">// cpu内核信息对象数组</span>
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

<span class="token comment">// linux是/dev/null</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>devNull<span class="token punctuation">)</span>

<span class="token comment">// 返回剩余的内存(字节) 6485471232</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">freemem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 指定线程的优先级</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 用户的主目录 /home/king</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">homedir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 用户的主机名 LAPTOP-CSF8P6S1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">hostname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 1,5,15分钟的平均负载 [ 0.07, 0.09, 0.02 ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">loadavg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 网络接口对象
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

<span class="token comment">// 操作平台的名称 linux</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">platform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 操作系统的名称 5.10.60.1-microsoft-standard-WSL2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 设定进程优先级-20 - 19 从高到低,不使用sudo会报错</span>
<span class="token keyword">try</span><span class="token punctuation">{</span>
  os<span class="token punctuation">.</span><span class="token function">setPriority</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 临时文件目录 /tmp</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">tmpdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 内存总量 7187771392</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">totalmem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 操作系统名称 Linux</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 系统正常运行时间 2999.88</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">uptime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 用户信息
 * <span class="token punctuation">{</span>
  uid: 1000,
  gid: 1000,
  username: &#39;king&#39;,
  homedir: &#39;/home/king&#39;,
  shell: &#39;/bin/bash&#39;
<span class="token punctuation">}</span>
 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">userInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 返回标识内核版本的字符串 #1 SMP Wed Aug 25 23:20:18 UTC 2021</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fs模块" tabindex="-1"><a class="header-anchor" href="#fs模块" aria-hidden="true">#</a> fs模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span>  fs <span class="token keyword">from</span> <span class="token string">&#39;fs/promises&#39;</span>
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

<span class="token comment">// 截断</span>
fileHandle<span class="token punctuation">.</span><span class="token function">truncate</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

fileHandle<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 指定要执行的可访问性检查</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">access</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>constants<span class="token punctuation">.</span><span class="token constant">R_OK</span><span class="token operator">|</span>constants<span class="token punctuation">.</span><span class="token constant">W_OK</span><span class="token punctuation">)</span>

<span class="token comment">// 复制文件</span>
<span class="token comment">// await fs.copyFile(&#39;./test.txt&#39;,&#39;./testCopy.txt&#39;,constants.COPYFILE_EXCL)</span>

<span class="token comment">// 复制目录</span>
<span class="token comment">// await fs.cp(&#39;../fs&#39;,&#39;../fsCopy/&#39;)</span>

<span class="token comment">// link</span>

<span class="token comment">// fs.link(&#39;./test.txt&#39;,&#39;./test.txt.link&#39;)</span>

<span class="token comment">// 等同于fsPromises.stat()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">lstat</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 创建目录</span>
<span class="token comment">// fs.mkdir(&#39;test&#39;)</span>


<span class="token comment">// 读取目录</span>
<span class="token keyword">const</span> dirs<span class="token operator">=</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">opendir</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token keyword">await</span><span class="token punctuation">(</span><span class="token keyword">const</span> dir <span class="token keyword">of</span> dirs<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dirs2<span class="token operator">=</span><span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> dir <span class="token keyword">of</span> dirs2<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="buffer模块" tabindex="-1"><a class="header-anchor" href="#buffer模块" aria-hidden="true">#</a> buffer模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> buffer <span class="token keyword">from</span> <span class="token string">&#39;buffer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MessageChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;worker_threads&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>Buffer<span class="token punctuation">,</span>Blob<span class="token punctuation">,</span>constants<span class="token punctuation">}</span><span class="token operator">=</span>buffer

<span class="token keyword">const</span> buf1<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf2<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf3<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf4<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> buf5<span class="token operator">=</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">74</span> <span class="token punctuation">,</span><span class="token number">65</span> <span class="token punctuation">,</span><span class="token number">73</span> <span class="token punctuation">,</span><span class="token number">74</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 此时buf里面的内容是不确定的，需要用fill初始化</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="event模块" tabindex="-1"><a class="header-anchor" href="#event模块" aria-hidden="true">#</a> event模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> events <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>EventEmitter<span class="token punctuation">}</span><span class="token operator">=</span>events

<span class="token keyword">class</span> <span class="token class-name">MyEventEmitter</span> <span class="token keyword">extends</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> myEventEmitter<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">MyEventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

myEventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// once只会被触发一次</span>
myEventEmitter<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 返回名为 eventName 的事件的监听器数组的副本</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 其注册监听器的事件的数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">eventNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 回 EventEmitter 的当前最大监听器数的值 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">getMaxListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 返回监听名为 eventName 的事件的监听器数量 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">listenerCount</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 将 listener 函数添加到名为 eventName 的事件的监听器数组的开头</span>
myEventEmitter<span class="token punctuation">.</span><span class="token function">prependListener</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;prependListener&#39;</span><span class="token punctuation">,</span>args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 删除所有监听器，或指定 eventName 的监听器。</span>
<span class="token comment">// myEventEmitter.removeAllListeners(&#39;event&#39;)</span>

myEventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;发送&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;了&#39;</span><span class="token punctuation">)</span>
myEventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;发送&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;了&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 返回名为 eventName 的事件的监听器数组的副本，包括任何封装器（例如由 .once() 创建的封装器）</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">.</span><span class="token function">rawListeners</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>events<span class="token punctuation">.</span><span class="token function">getEventListeners</span><span class="token punctuation">(</span>myEventEmitter<span class="token punctuation">,</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tty模块" tabindex="-1"><a class="header-anchor" href="#tty模块" aria-hidden="true">#</a> tty模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> tty <span class="token keyword">from</span> <span class="token string">&#39;tty&#39;</span>
<span class="token keyword">import</span> process <span class="token keyword">from</span> <span class="token string">&#39;process&#39;</span>

<span class="token comment">// process.stdin是node进程中tty.ReadStream的唯一实例,process.stdout 和 process.stderr 将是为 Node.js 进程创建的唯一的 tty.WriteStream 实例，</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>stdin<span class="token punctuation">,</span>stdout<span class="token punctuation">}</span><span class="token operator">=</span>process

<span class="token comment">// 如果终端当前配置为作为原始设备运行，则为 true。 默认为 false。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>isRaw<span class="token punctuation">)</span>

<span class="token comment">// 对于 tty.ReadStream 实例，始终为 true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdin<span class="token punctuation">.</span>isTTY<span class="token punctuation">)</span>

<span class="token comment">// 每当 writeStream.columns 或 writeStream.rows 属性发生更改时，则会触发 &#39;resize&#39; 事件。</span>
stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;screen size has changed!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>columns<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>rows<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">clearLine</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">clearScreenDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 终端支持的颜色 8代表256色</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">getColorDepth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// WriteStream 对应的终端的尺寸 [ 149, 23 ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stdout<span class="token punctuation">.</span><span class="token function">getWindowSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url模块" tabindex="-1"><a class="header-anchor" href="#url模块" aria-hidden="true">#</a> url模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> url <span class="token keyword">from</span> <span class="token string">&#39;url&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">URL</span><span class="token punctuation">}</span><span class="token operator">=</span>url

<span class="token keyword">const</span> myUrl<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;/api/url.html?name=king#bar&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;http://nodejs.cn:89&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * host包含端口 nodejs.cn:89
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","node.html.vue"]]);export{k as default};

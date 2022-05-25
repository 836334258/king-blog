---
title: Node基础语法记录
author: King
date: '2022-5-25'
---

## 前言

> 有了博客之后，把去年年底写的node练习整理一遍，温故而知新

注意：type:module 不能于ts-node共用

### timers模块

```js
// 在本轮 Node.js 事件循环结束时调用的函数
const timer1=setImmediate(()=>{
  console.log('1')
})


// 当定时器结束时调用的函数，最后调用
const handler=setInterval(()=>{
  console.log('2')
},1000)

// 当定时器结束时调用的函数 最先调用
setTimeout(()=>{
  console.log('3')
})

console.log(timer1)
// 如果为 true，则 Immediate 对象将使 Node.js 事件循环保持活动状态。
console.log(timer1.hasRef())

// 返回: <Immediate> immediate 的引用,和直接调用console.log(timer1)一样
/**
 * Immediate {
  _idleNext: null,
  _idlePrev: null,
  _onImmediate: [Function (anonymous)],
  _argv: undefined,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(asyncId)]: 4,
  [Symbol(triggerId)]: 1
}
 */
console.log(timer1.ref())

clearInterval(handler)
```


### process模块

```js
import path from 'path'
import process from 'process'

// 由于process是EventEmitter的实例，on事件相当于addListener事件

// 0 node正常结束后会调用beforeExit，如果显式调用process.exit()则不会调用
process.addListener('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code)
})

// 目前看起来只要退出就会调用
process.addListener('exit', (code) => {
  console.log(`About to exit with code: ${code}`)
})

// promise里面不止拒绝或解决过一次，就会调用 reject Promise { 'ok' } no ok
process.on('multipleResolves', (type, promise, value) => {
  console.error(type, promise, value)
})
new Promise((resolve, reject) => {
  resolve('ok')
  reject('no ok')
})
  .then(console.log)
  .catch(console.error)

// 捕获promise.reject 方法
process.addListener('unhandledRejection', (reason, promise) => {
  console.log('unhandledRejection', reason, promise)
})

Promise.reject('haha reject')

// 捕获异常，不推荐使用
process.addListener('uncaughtException', (error, origin) => {
  console.log('uncaughtException', error, origin)
})

// 好像和uncaughtException差不多
process.addListener('uncaughtExceptionMonitor', (error, origin) => {
  console.log('uncaughtExceptionMonitor', error, origin)
})

// 会触发uncaughtException事件和uncaughtExceptionMonitor事件
//  os.setPriority(0,-10)

// 每当 Node.js 触发进程警告时，则会触发 'warning' 事件
process.addListener('warning', (waring) => {
  console.log('waring', waring)
})

// 创建新的 <Worker> 线程后会触发 'worker' 事件。
process.addListener('worker', (worker) => {
  console.log('worker', worker)
})

// 一种信号，暂时没发现用处
process.addListener('SIGINT',(signal)=>{
  console.log('signal',signal)
})

// 导致node立即退出，同时addListener里面的事件也失效
// process.abort()

// cpu架构 x64
console.log(process.arch)

// 输入参数 ts-node index.ts a b
/**
 * [
  '/mnt/c/Program Files/nodejs/node_modules/ts-node/dist/bin.js',
  '/mnt/e/code/test_code/node_practice/process/index.ts',
  'a',
  'b'
]
 */
console.log(process.argv)

// node的只读副本
console.log(process.argv0)

// 改变目录
process.chdir(path.dirname(__dirname))

// 当前目录
console.log(process.cwd())

// 会触发waring事件 waring Warning: emitWaring....
process.emitWarning('emitWaring....')

// 用户环境对象
console.log(process.env)

// 返回 Node.js 进程启动时传入的一组特定于 Node.js 的命令行选项
console.log(process.execArgv)

// node可执行文件的绝对路径名
console.log(process.execPath)

// 设置终止进程code码，默认为0
process.exitCode=100
// 终止进程
// process.exit()

// console.log(process.getActiveResourcesInfo())

// 群组id
console.log(process.getgid())

// 用户id
console.log(process.getuid())

console.log(process.hrtime())

// 返回纳秒
console.log(process.hrtime.bigint())

// 将sigint发送到由pid标识的进程
process.kill(process.pid,'SIGINT')


// 内存使用量
console.log(process.memoryUsage())

// 会先执行nextTick，然后执行queueMicrotask，除非需要 process.nextTick() 的特定功能，否则请使用 queueMicrotask()。
queueMicrotask(()=>{
  console.log('queueMicrotask')
})

// 将 callback 添加到"下一个滴答队列"
process.nextTick(()=>{
  console.log('nextTick')
})

// pid 434
console.log('pid',process.pid)

// 平台 linux
console.log(process.platform)

// 父进程id
console.log(process.ppid)

// 当前版本相关的元数据
/**
 * {
  name: 'node',
  sourceUrl: 'https://nodejs.org/download/release/v17.5.0/node-v17.5.0.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v17.5.0/node-v17.5.0-headers.tar.gz'
}
 */
console.log(process.release)

/**
 * 诊断报告
 * {
  writeReport: [Function: writeReport],
  getReport: [Function: getReport],
  directory: [Getter/Setter],
  filename: [Getter/Setter],
  compact: [Getter/Setter],
  signal: [Getter/Setter],
  reportOnFatalError: [Getter/Setter],
  reportOnSignal: [Getter/Setter],
  reportOnUncaughtException: [Getter/Setter]
}
 */
console.log(process.report)

/**
 * ReadStream 
 */
console.log(process.stdin)

// 运行了几秒 3.124805684
console.log(process.uptime())

// node版本 v17.5.0
console.log(process.version)

/**
 * 列出依赖项
{
  node: '17.5.0',
  v8: '9.6.180.15-node.13',
  uv: '1.43.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '102',
  nghttp2: '1.45.1',
  napi: '8',
  llhttp: '6.0.4',
  openssl: '3.0.1+quic',
  cldr: '40.0',
  icu: '70.1',
  tz: '2021a3',
  unicode: '14.0',
  ngtcp2: '0.1.0-DEV',
  nghttp3: '0.1.0-DEV'
}
 */
console.log(process.versions)
```

### path模块

``` js
import path from 'path'

const PWD='/mnt/e/code/test_code/node_practice'

// 返回path的最后一部分
console.log(path.basename(PWD))

// 定界符 linux下: win ;
console.log(path.delimiter)

// 目录名 /mnt/e/code/test_code
console.log(path.dirname(PWD))

// 扩展名 .html
console.log(path.extname('index.html'))

// path对象
/**
 * {
  root: '/',
  dir: '/mnt/e/code/test_code',
  base: 'node_practice',
  ext: '',
  name: 'node_practice'
}
 */
console.log(path.parse(PWD))

// 路径字符串
console.log(path.format({
  root: '/',
  dir: '/mnt/e/code/test_code',
  base: 'node_practice',
  ext: '',
  name: 'node_practice'
}))

// 是否是绝对路径
console.log(path.isAbsolute(PWD))

// 规范生成路径 a/b/c
console.log(path.join('a','b','c'))

// 解析. ..的path片段 /foo/bar/baz/asdf
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))

// from到to的相对路径 ../..
console.log(path.relative('/a/b/c','/a'))

// 将路径或者路径片段解析为绝对路径，顺序从右往左，直到构建绝对路径后马上停止 /b/c/d
console.log(path.resolve('/a','/b','c','./d'))

// 分隔符 /
console.log(path.sep)
```

### os模块
```js
import os from 'os'
import { config } from 'process'
import { parseConfigFileTextToJson } from 'typescript'

// window下是\r\n,linux下面是\n
console.log('1'+os.EOL+'2')

// cpu架构 x64
console.log(os.arch())

// 操作系统特定常量
console.log(os.constants)

// cpu内核信息对象数组
/**
 * [
  {
    model: 'AMD Ryzen 7 5700U with Radeon Graphics',
    speed: 1796,
    times: { user: 540, nice: 0, sys: 1060, idle: 1245100, irq: 0 }
  }
]
 */
console.log(os.cpus())

// linux是/dev/null
console.log(os.devNull)

// 返回剩余的内存(字节) 6485471232
console.log(os.freemem())

// 指定线程的优先级
console.log(os.getPriority())

// 用户的主目录 /home/king
console.log(os.homedir())

// 用户的主机名 LAPTOP-CSF8P6S1
console.log(os.hostname())

// 1,5,15分钟的平均负载 [ 0.07, 0.09, 0.02 ]
console.log(os.loadavg())

/**
 * 网络接口对象
 * 
 * eth0: [
    {
      address: '172.23.88.120',
      netmask: '255.255.240.0',
      family: 'IPv4',
      mac: '00:15:5d:6c:d2:06',
      internal: false,
      cidr: '172.23.88.120/20'
    },
 */
console.log(os.networkInterfaces())

// 操作平台的名称 linux
console.log(os.platform())

// 操作系统的名称 5.10.60.1-microsoft-standard-WSL2
console.log(os.release())

// 设定进程优先级-20 - 19 从高到低,不使用sudo会报错
try{
  os.setPriority(0,-10)
}catch(err){
  console.log('err',err)
}

// 临时文件目录 /tmp
console.log(os.tmpdir())

// 内存总量 7187771392
console.log(os.totalmem())

// 操作系统名称 Linux
console.log(os.type())

// 系统正常运行时间 2999.88
console.log(os.uptime())

/**
 * 用户信息
 * {
  uid: 1000,
  gid: 1000,
  username: 'king',
  homedir: '/home/king',
  shell: '/bin/bash'
}
 */
console.log(os.userInfo({encoding:'utf-8'}))

// 返回标识内核版本的字符串 #1 SMP Wed Aug 25 23:20:18 UTC 2021
console.log(os.version())
```

### fs模块

```javascript
import * as  fs from 'fs/promises'
import {constants} from 'fs'



const fileHandle=await fs.open('./test.txt','a+')

console.log((await fileHandle.readFile()).toString())

await fileHandle.appendFile('g')

console.log((await fileHandle.read({offset:0})).toString())

const stream=fileHandle.createReadStream({start:0,end:10,encoding:'utf-8'})

const writeStream=fileHandle.createWriteStream()

setInterval(() => {
    writeStream.write('ok')
}, 500);

setInterval(async () => {
  console.log(stream.read())
}, 1000);

// 截断
fileHandle.truncate(20)

fileHandle.sync()

// 指定要执行的可访问性检查
console.log(await fs.access('./test.txt'),constants.R_OK|constants.W_OK)

// 复制文件
// await fs.copyFile('./test.txt','./testCopy.txt',constants.COPYFILE_EXCL)

// 复制目录
// await fs.cp('../fs','../fsCopy/')

// link

// fs.link('./test.txt','./test.txt.link')

// 等同于fsPromises.stat()
console.log(await fs.lstat('./test.txt'))

// 创建目录
// fs.mkdir('test')


// 读取目录
const dirs=await fs.opendir('.')

for await(const dir of dirs){
  console.log(dir.name)
}

const dirs2=await fs.readdir('.')

for (const dir of dirs2){
  console.log(dir)
}
```


### buffer模块

```javascript
import buffer from 'buffer'
import { MessageChannel } from 'worker_threads'

const {Buffer,Blob,constants}=buffer

const buf1=Buffer.alloc(10)
const buf2=Buffer.alloc(10,'A','utf-8')
const buf3=Buffer.from([1,2,3])
const buf4=Buffer.from('test')
const buf5=Buffer.from([ 74 ,65 ,73 ,74])
// 此时buf里面的内容是不确定的，需要用fill初始化
const buf6=Buffer.allocUnsafe(10)

console.log(buf1)
console.log(buf2)
console.log(buf3)
console.log(buf5.toString())
console.log(buf6)

const bufTotal=Buffer.concat([buf1,buf2,buf3,buf4,buf5,buf6])

for(const i of buf4){
  console.log('i=',i)
}

const blob=new Blob(['hello'])
const m1=new MessageChannel()

m1.port1.onmessage=async ({data})=>{
  console.log(await data.arrayBuffer())
  m1.port1.close()
}

m1.port2.postMessage(blob)
blob.text().then(console.log)
console.log(constants.MAX_LENGTH)
console.log('bufTotal',bufTotal)


const bf1=Buffer.from([1,2,3])
const bf2=Buffer.from(bf1)
bf1[0]=11
console.log('bf1',bf1)
console.log('bf2',bf2)

console.log(Buffer.isBuffer(bufTotal))

console.log(buf2.includes('A'))
console.log(buf2.indexOf('A'))

const bbf=Buffer.from('a')
const sbff=bbf.slice()
sbff[0]++
console.log(sbff.toString())
```

### event模块

```javascript
import events from 'events'

const {EventEmitter}=events

class MyEventEmitter extends EventEmitter{}

const myEventEmitter=new MyEventEmitter()

myEventEmitter.on('event',(...args)=>{
  console.log(args)
})

// once只会被触发一次
myEventEmitter.once('event',(...args)=>{
  console.log(args)
})

// 返回名为 eventName 的事件的监听器数组的副本
console.log(myEventEmitter.listeners('event'))

// 其注册监听器的事件的数组
console.log(myEventEmitter.eventNames())

// 回 EventEmitter 的当前最大监听器数的值 10
console.log(myEventEmitter.getMaxListeners())

// 返回监听名为 eventName 的事件的监听器数量 2
console.log(myEventEmitter.listenerCount('event'))

// 将 listener 函数添加到名为 eventName 的事件的监听器数组的开头
myEventEmitter.prependListener('event',(...args)=>{
  console.log('prependListener',args.join(','))
})

// 删除所有监听器，或指定 eventName 的监听器。
// myEventEmitter.removeAllListeners('event')

myEventEmitter.emit('event','发送','了')
myEventEmitter.emit('event','发送','了')

// 返回名为 eventName 的事件的监听器数组的副本，包括任何封装器（例如由 .once() 创建的封装器）
console.log(myEventEmitter.rawListeners('event'))

console.log(events.getEventListeners(myEventEmitter,'event'))
```

### tty模块
```js
import tty from 'tty'
import process from 'process'

// process.stdin是node进程中tty.ReadStream的唯一实例,process.stdout 和 process.stderr 将是为 Node.js 进程创建的唯一的 tty.WriteStream 实例，
const {stdin,stdout}=process

// 如果终端当前配置为作为原始设备运行，则为 true。 默认为 false。
console.log(process.stdin.isRaw)

// 对于 tty.ReadStream 实例，始终为 true
console.log(stdin.isTTY)

// 每当 writeStream.columns 或 writeStream.rows 属性发生更改时，则会触发 'resize' 事件。
stdout.on('resize',()=>{
  console.log('screen size has changed!');
  console.log(`${process.stdout.columns}x${process.stdout.rows}`);
})

console.log(stdout.clearLine(0))
console.log(stdout.clearScreenDown())

// 终端支持的颜色 8代表256色
console.log(stdout.getColorDepth())

// WriteStream 对应的终端的尺寸 [ 149, 23 ]
console.log(stdout.getWindowSize())
```

### url模块
```js
import url from 'url'

const {URL}=url

const myUrl=new URL('/api/url.html?name=king#bar','http://nodejs.cn:89')

console.log(myUrl.hash)

/**
 * host包含端口 nodejs.cn:89
 */
console.log(myUrl.host)

// nodejs.cn
console.log(myUrl.hostname)

// http://nodejs.cn:89/api/url.html#bar
console.log(myUrl.href)

// http://nodejs.cn:89
console.log(myUrl.origin)

// /api/url.html
console.log(myUrl.pathname)

// 89
console.log(myUrl.port)

// http:
console.log(myUrl.protocol)

// ?name=king
console.log(myUrl.search)

// URLSearchParams { 'name' => 'king' }
console.log(myUrl.searchParams)

// http://nodejs.cn:89/api/url.html?name=king#bar
console.log(myUrl.toString())

// http://nodejs.cn:89/api/url.html?name=king#bar
console.log(myUrl.toJSON())


myUrl.searchParams.append('age','12')

// name=king&age=12
console.log(myUrl.searchParams.toString())

// URLSearchParams Iterator { 'name', 'age' }
console.log(myUrl.searchParams.keys())

// [ 'king', '12' ]
console.log(Array.from(myUrl.searchParams.values()))
```
---
title: 手写函数
author: King
date: '2022-5-25'
---

## 这里整理了一些常用的手写函数，方便以后查阅

### ajax

```js
module.exports = function ajax(
  url: string,
  method: string = 'get',
  dataType: XMLHttpRequestResponseType = 'text',
  async: boolean = true
) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = dataType
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.responseText)
      }
    }
    xhr.onerror = (e) => {
      reject(e)
    }

    xhr.send()
  })
}
```

### arrayMap

```js
Array.prototype.arrayMap = function (fn, thisArg) {
  thisArg = thisArg ? thisArg : window
  const res = []

  for (let i = 0; i < this.length; i++) {
    res.push(fn.call(thisArg, this[i], i, this))
  }

  return res
}
```

### arrayReduce

```js
Array.prototype.arrayReduce = function (fn: TArrReduceFn, initval?: any) {
  let _this: any = this
  let index: number = 0
  if (initval === undefined) {
    if (_this.length === 0) {
      throw new Error(
        'Reduce of empty array with no initial value at Array.reduce'
      )
    }

    initval = _this[index]
    index++
  }
  for (; index < _this.length; index++) {
    initval = fn.call(_this, initval, _this[index], index, _this)
  }
  return initval
}
```

### arrayRemove

```ts
module.exports = <T>(arr: T[], el: T) => {
  const index: number = arr.indexOf(el)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
```

### arrayUnique

```ts
module.exports = function arrayUnique(arr: TAnyArray) {
  return Array.from(new Set(arr))
}
```

### debounce

```ts
module.exports = function debounce(fn: TRest, timeout: number) {
  let timer: null | NodeJS.Timeout = null
  let _this = this
  let args = arguments
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this, Array.from(args))
    }, timeout)
  }
}
```

### throttle

```ts
import { TRest } from './../index.d'
module.exports = function throttle(fn: TRest, timeout: number) {
  let timer: null | NodeJS.Timeout = null
  let _this = this
  let args = arguments
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(_this, Array.from(args))
      timer = null
    }, timeout)
  }
}
```

### deepClone

```ts
module.exports = function deepClone(obj: Record<string | symbol, any>): object {
  const res: Record<string | symbol, any> = {}
  if (typeof obj !== 'object') return res

  for (const key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === 'object') {
      res[key] = deepClone(obj[key])
    } else {
      res[key] = obj[key]
    }
  }

  return res
}
```

### eventEmitter

```ts
import { TRest } from './../index.d'
// 发布订阅模式

interface IEventEmitter {
  on(name: string, fn: TRest): void
  off(name: string, fn: TRest): void
  emit(name: string, once?: boolean, ...args: any[]): void
}

module.exports = class EventEmitter implements IEventEmitter {
  cache: Record<string, TRest[]>
  constructor() {
    this.cache = {}
  }

  on(name: string, fn: TRest): void {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name: string, fn: TRest): void {
    const task = this.cache[name]
    if (task) {
      const index = task.findIndex((val) => val === fn)
      if (index >= 0) {
        this.cache[name].splice(index, 1)
      }
    }
  }

  emit(name: string, once?: boolean, ...args: any[]): void {
    const tasks = this.cache[name]
    if (tasks) {
      tasks.forEach((task) => {
        task(...args)
      })

      if (once) {
        Reflect.deleteProperty(this.cache, name)
      }
    }
  }
}
```

### functionApply

```ts
Function.prototype.functionApply = function (_this: any) {
  _this = _this ?? window
  const key = Symbol('key')
  _this[key] = this
  const ans = _this[key](...(arguments[1] ?? []))
  Reflect.deleteProperty(_this, key)
  return ans
}
```

### functionBind

```ts
Function.prototype.functionBind = function (_this: any) {
  const __this = this
  return function () {
    return __this.apply(_this, arguments)
  }
}
```

### functionCall

```ts
Function.prototype.functionCall = function (_this: any) {
  _this = _this ?? window
  const key = Symbol('key')
  _this[key] = this
  const ans = _this[key](
    ...Array.from(Array.prototype.slice.call(arguments, 1))
  )
  Reflect.deleteProperty(_this, key)
  return ans
}
```

### hasOwn

```ts
module.exports = (val: object, key: string | symbol) => {
  return Object.prototype.hasOwnProperty.call(val, key)
}
```

### instanceOf

```ts
module.exports = function instanceOf(Case: object, Constructor: object) {
  if (
    typeof Case !== 'object' ||
    typeof Constructor !== 'function' ||
    Case === null ||
    Constructor === null
  )
    return false
  let proto = Reflect.getPrototypeOf(Case)
  while (proto) {
    if (proto === Constructor.prototype) return true
    proto = Reflect.getPrototypeOf(proto)
  }
  return false
}
```

### promiseAll

```ts
module.exports = function promiseAll(promises: Promise<any>[]) {
  if (!Array.isArray(promises)) {
    throw new TypeError('array need')
  }
  return new Promise((resove, reject) => {
    const res: any[] = []
    let count: number = 0
    promises.forEach((promise) => {
      promise.then(
        (rs) => {
          res.push(rs)
          ++count === promises.length && resove(res)
        },
        (err) => {
          reject(err)
        }
      )
    })
  })
}
```

### promiseAllSettled

```ts
module.exports = function promiseAllSettled(promisess: any[]) {
  const mapPromisess = promisess.map((item) =>
    item instanceof Promise ? item : Promise.resolve(item)
  )
  return new Promise((resolve: (arg0: any[]) => any) => {
    let count: number = 0
    const result: any[] = []
    mapPromisess.forEach((promise) => {
      promise.then(
        (value) => {
          result.push({
            status: 'fulfilled',
            value,
          })
          ++count === promisess.length && resolve(result)
        },
        (reason) => {
          result.push({
            status: 'rejected',
            reason,
          })
          ++count === promisess.length && resolve(result)
        }
      )
    })
  })
}
```

### promiseAny

```ts
import { TPromises } from './../index.d'
module.exports = function promiseAny(promises: TPromises) {
  if (!promises.length) return
  let count: number = 0
  return new Promise((resove, reject) => {
    promises.forEach((promise) => {
      promise.then(
        (res) => {
          resove(res)
        },
        (err) => {
          if (++count === promises.length) {
            reject(`throw new AggregateError(${err})`)
          }
        }
      )
    })
  })
}
```

### promiseRace

```ts
import { TPromises } from './../index.d'
module.exports = function promiseRace(promises: TPromises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(
        (res) => {
          resolve(res)
        },
        (err) => {
          reject(err)
        }
      )
    })
  })
}
```

### promiseReject

```ts
module.exports = function promiseReject(val: any) {
  return new Promise((resovle, reject) => reject(val))
}
```

### promiseResolve

```ts
module.exports = function promiseResolve(val: any) {
  if (val instanceof Promise) return val

  return new Promise((resovle) => resovle(val))
}
```

### sleep

```ts
module.exports = function sleep(second: number) {
  return new Promise((resolve) => setTimeout(resolve, second * 1000))
}
```

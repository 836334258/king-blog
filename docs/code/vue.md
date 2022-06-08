---
title: Vue记录
author: King
date: '2022-6-7'
---

## 在最近的工作中，用原生的js比较多，有好几个项目都不是用vue写的，怕长久不用遗忘了vue，翻阅文档，想到的东西会写在这里

* `nextTick` 由于dom更新不是同步生效的，在修改dom里面的值后再取dom里面的值会导致数据不同步，在`nextTick`回调里面可以确保dom中的值已经更新，使用方法
  * `await nextTick()`
  * `nextTick(fn)`
* 如果要在`setup`中使用`mixin`,可以使用`const {proxy}=getCurrentInstance();proxy.mixInFn()`
* 组合式Api
  * 响应式
    * 响应式**原理**：当我们在调用响应式函数的时候，会把JavaScript对象包裹成响应式对象，对于`ref()`函数，当用到`ref.value`时，会触发`get value()`方法，此时会把`effect()`函数注册到全局的依赖地图`weakMap`中，这样当修改时，会触发set函数，然后在全局的依赖地图`weakMap`中找到注册的`effect()`函数并执行。结构就是`weakMap`->`map`->`set`![vue-1](/images/vue-1.webp) ![vue-2](/images/vue-2.webp)
    * `shallowRef()` 只会将对象表层转换成响应式对象，只有对 .value 的访问是响应式的，即不会递归的转为响应式
    * `shallowReactive()` reactive() 的浅层作用形式。 
    * `triggerRef()` 强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。
    * `readonly()` 将一个对象变为只读，底层是用proxy代理的对象，然后修改了proxy的`get` 、`set`、 `deleteProperty`方法，当调用`set`、 `deleteProperty`时直接返回`false`
    * `shallowReadonly()`readonly() 的浅层作用形式
    * `toRaw()` 根据一个 Vue 创建的代理返回其原始对象 实现**原理**如下
      ```javascript
      const proxyPerson=new Proxy(person,{
        get(target,key){
          if(key==='__v_raw1'){
            return target
          }
          return Reflect.get(target,key)
        }
      })

      const toRaw2=(val:any)=>{
        return val['__v_raw1']
      }
      ``` 
    * `markRaw()`将一个对象标记为不可被转为代理。返回该对象本身。实现**原理**：为对象添加一个`__v_skip`属性，在即将代理对象时，会调用`getTargetType()`方法对对象里面的`__v_skip`属性进行判断，如果有的话就会直接返回对象
    * `effectScope()`创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理
      ```javascript
        const counter=ref(0)
        const scope=effectScope()
        let twoCounter:any
        scope.run(()=>{
          twoCounter=computed(()=>counter.value*2)
        })
        const change=()=>{
          counter.value++
        }

        const stop=()=>{  // 当调用stop事件后，当counter改变时，twoCounter将不再变化
          scope.stop()
        }
        ```  
    * `getCurrentScope()` 如果有的话，返回当前活跃的 effect 作用域。
    * `isRef()` 检查某个值是否为 ref。**原理**：判断`__v_isRef`属性是否为true
    * `unref()` 如果参数是 ref，则返回内部值，否则返回参数本身。 **原理**:`return isRef(ref) ? ref.value : ref;`
    * `toRef()` 可用于为响应式对象上的 property 创建 ref。这样创建的 ref 与其源 property 保持同步：改变源 property 将更新 ref，反之亦然 **原理：** 和`ref()`函数一样，直接调用`new ObjectRefImpl()`
    * `toRefs()` 将一个响应式对象转换为一个普通对象，这个普通对象的每个 property 都是指向源对象相应 property 的 ref。**原理：** 新建一个新对象，遍历响应式对象，新对象key为响应式对象的key，值为`toRef()`后的值
    * `isProxy()` 检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。 原理：`return isReactive(value) || isReadonly(value);`
    * `isReactive()` 检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。原理：` return !!(value && value["__v_isReactive"]);`
    * `isReadonly()` 检查一个对象是否是由 readonly() 或 shallowReadonly() 创建的代理。 原理：` return !!(value && value["__v_isReadonly"]);`
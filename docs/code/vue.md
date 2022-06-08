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
    * 响应式原理：当我们在调用响应式函数的时候，会把JavaScript对象包裹成响应式对象，对于`ref()`函数，当用到`ref.value`时，会触发`get value()`方法，此时会把`effect()`函数注册到全局的依赖地图`weakMap`中，这样当修改时，会触发set函数，然后在全局的依赖地图`weakMap`中找到注册的`effect()`函数并执行![vue-1](/images/vue-1.webp)
    * `ref()`
---
title: Markdown语法记录
author: King
date: '2022-5-20'
---

## 前言

`Typescript`在前端中运用的越来越广泛了，因此有必要去熟悉它的基本用法


### 基础
- `tsconfig`中noImplicitAny表示当变量被自动推断出any时，会报出一个错误，strictNullChecks会让我们更加明确的处理`undefined`和`null`
- 原始类型：`string`,`number`,`bool`
- 数组`array`
- `any`类型,对象类型，函数类型，联合类型，类型别名`type A=number|string` ,接口
- 类型别名和接口大部分情况下是一样的，里面最大不同是接口可以扩展，别名本身无法扩展新的属性
- 非空断言操作符(后缀!) 可以在不做任何检查的情况下移除`null`和`undefined`
- `readonly number[]`和`ReadonlyArray<number>`是相同的
- 元组类型`type StringNumberPair = [string, number]`,在大部分的代码中，元组只是被创建，使用完后也不会被修改，尽可能的将元组设置为`raedonly`是个好习惯
- 泛型约束，先创建一个接口，然后用泛型继承它`interface Lengthwise {length: number;}function loggingIdentity<Type extends Lengthwise>(arg: Type)`
- `const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;type app = typeof APP[number];// type app = "TaoBao" | "Tmall" | "Alipay"`
- 条件类型约束`type A<T>=T extends {msg:string}?T['msg']:never`
- 映射修饰符：`type A<T> ={-readonly [prop in keyof T]:T[prop]}`删除属性中的只读元素,`type A<T> ={[prop in keyof T]-?:T[prop]}`删除元素中可选属性
- 通过`as`实现键名重新映射 `type AsGetter<Type>={[k in keyof Type as ``get${Capitalize<string&k>}`]`:``Type[k]}`
- 工具类型
  - `Partial<Type>`可以让全部属性变成可选
  - `Required<Type>` 让全部属性设置为必填
  - `Readonly<Type>` 全部属性设置为只读
  - `Record<Keys, Type>` 构造一个键值对象
  - `Pick<Type, Keys>` 从type类型中挑选keys属性
  - `Omit<Type, Keys>` 从type类型中过滤keys属性
  - `Exclude<UnionType, ExcludedMembers>` 用于构造一个类型，它是从UnionType联合类型里面排除了所有可以赋给ExcludedMembers的类型,和`omit`有点像
  - `Extract<Type, Union>`,从`type`类型提取所有可以赋值给`union`的类型
  - `NonNullable<Type>`从`type`中排除所有`null`,`undefined`的类型
  - `Parameters<Type>` 用于根据所有`Type`中函数类型的参数构造一个元祖类型
  - `ConstructorParameters<Type>`用于根据Type构造函数类型来构造一个元祖或数组类型，它产生一个带着所有参数类型的元组（或者返回never如果Type不是一个函数）
  - `ReturnType<Type>` 用于构造一个含有Type函数的返回值的类型
  - `ThisParameterType<Type>` 用于提取一个函数类型Type的this (opens new window)参数类型，返回unknown (opens new window)如果这个函数类型没有this参数。
  - `OmitThisParameter<Type>` 用于移除一个函数类型Type的this (opens new window)参数类型。如果Type没有明确的声明this 类型，那么这个返回的结果就是Type，不然的话，就返回一个新的函数类型，基于Type，但不再有this参数。
  
  
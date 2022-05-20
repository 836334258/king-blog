---
title: 前端零碎知识点
author: King
date: '2022-5-20'
---

## 前端零碎知识点

1. `pnpm -C play dev` pnpm -C 是进入到指定目录后运行该目录的命令

2. `export type AlertEmits = typeof alertEmits` 这会导致AlertEmits的数据结构必须和alertEmits一样

3. `<T, E extends Record<string, any>>` T、E可以同时使用一个类型

4. ts中`&`表示交集，`|`表示并集

5. [TinyColor][TinyColor] 一个可以操作color的JavaScript库

6. `pointer-events: none` 元素事件不会被触发

7. `user-select: none` 元素不会选中

8. `event.target` 返回触发事件的元素，`event.currentTarget` 返回绑定事件的元素

9. 闭包是指有权访问另一个函数作用域中变量的函数

10. 格式化金钱正则 `str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')`

11. package.json中`^`匹配最新的大版本号，比如^1.2.3会匹配所有1.x.x，`~`匹配最新的小版本号，~1.2.3只会匹配1.2.x的版本

12. `v-model="abc"`中`默认绑定的是 :modelValue="abc" @update:modelValue="abc=$event"` `v-model:title="pageTitle"表示为 :title="pageTitle" @update:title="pageTitle=$event"`

13. ts中结尾!为非空断言，代表这个属性不能为空

14. `function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}` 类型谓词，任何时候isFish调用某个变量，如果原始类型兼容，TypeScript 就会将该变量缩小到该特定类型

15. `  const MyArray = [
  { name: "Eve", age: 38 },
  { name: 12, age: 38 },
];
type b=typeof MyArray[number]`  typeof number用于快速获取数组元素的类型

16. ```type Getters<Type> = {[Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]}``` as子句重新映射映射类型中的键
17. `margin-left:auto` 可以让元素靠右边
18. `git commit --amend --no-edit` 用上一次commit提交代码
19. ts中的`omit`类型从另一个对象中剔除某些属性
20. ` window.addEventListener('unhandledrejection')` 在promise reject的时候会调用
21. `??` `?.`运算符是在左边操作数为null或者undefined时返回右侧操作数，与||不同的是0??1返回1
22. HTML标准规定setimeOut的延迟不得低于4毫秒，低于这个值则会自动增加，dom变动通常不会立即执行，而是每隔16ms执行一次
23. `clientX/clientY`是相对于窗口的坐标，`pageX/pageY`是相对于文档的坐标
24. `a??b`运算符，只要a不等于`null/undefined`，就返回a，其余返回b，即`(a !== null && a !== undefined) ? a : b`
25. 

26. tsconfig
    1. **表示匹配嵌套到任何级别的目录，\*表示零个或多个字符，？匹配任何一个字符
    2. allowUnreachableCode允许无法访问的代码
    3. allowUnusedLabels 允许未访问的标签
    4. alwaysStrict 永远严格
    5. noImplicitAny 没有任何隐含的

27. 常用package
    1. husky
    2. rimraf
    3. cross-env
    4. dotenv
    5. lint-staged
    6. nprogress
    7. axios
    8. echarts
    9. qs
    10. pinia
    11. vue-route
    12. prettier
    13. lint
    14. fs-extra fs替代包
    15. inquirer 常用交互式命令行用户界面的集合


[TinyColor]: https://github.com/bgrins/TinyColor
---
title: 前端零碎知识点
author: King
date: "2022-5-20"
---

## 前端零碎知识点

1. `pnpm -C play dev` pnpm -C 是进入到指定目录后运行该目录的命令

2. `export type AlertEmits = typeof alertEmits` 这会导致 AlertEmits 的数据结构必须和 alertEmits 一样

3. `<T, E extends Record<string, any>>` T、E 可以同时使用一个类型

4. ts 中`&`表示交集，`|`表示并集

5. [TinyColor][tinycolor] 一个可以操作 color 的 JavaScript 库

6. `pointer-events: none` 元素事件不会被触发

7. `user-select: none` 元素不会选中

8. `event.target` 返回触发事件的元素，`event.currentTarget` 返回绑定事件的元素

9. 闭包是指有权访问另一个函数作用域中变量的函数

10. 格式化金钱正则 `str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')`

11. package.json 中`^`匹配最新的大版本号，比如^1.2.3 会匹配所有 1.x.x，`~`匹配最新的小版本号，~1.2.3 只会匹配 1.2.x 的版本

12. `v-model="abc"`中`默认绑定的是 :modelValue="abc" @update:modelValue="abc=$event"` `v-model:title="pageTitle"表示为 :title="pageTitle" @update:title="pageTitle=$event"`

13. ts 中结尾!为非空断言，代表这个属性不会为`null`或者`undefined`

14. `function isFish(pet: Fish | Bird): pet is Fish { return (pet as Fish).swim !== undefined; }` 类型谓词，任何时候 isFish 调用某个变量，如果原始类型兼容，TypeScript 就会将该变量缩小到该特定类型

15. `const MyArray = [ { name: "Eve", age: 38 }, { name: 12, age: 38 }, ]; type b=typeof MyArray[number]` typeof number 用于快速获取数组元素的类型

16. `` type Getters<Type> = {[Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]} `` as 子句重新映射映射类型中的键
17. `margin-left:auto` 可以让元素靠右边
18. `git commit --amend --no-edit` 用上一次 commit 提交代码
19. ts 中的`omit`类型从另一个对象中剔除某些属性
20. `window.addEventListener('unhandledrejection')` 在 promise reject 的时候会调用
21. `??` `?.`运算符是在左边操作数为 null 或者 undefined 时返回右侧操作数，与||不同的是 0??1 返回 1
22. HTML 标准规定 setimeOut 的延迟不得低于 4 毫秒，低于这个值则会自动增加，dom 变动通常不会立即执行，而是每隔 16ms 执行一次
23. `clientX/clientY`是相对于窗口的坐标，`pageX/pageY`是相对于文档的坐标
24. ~x 大致等同于 -(x+1)
25. `a??b`运算符，只要 a 不等于`null/undefined`，就返回 a，其余返回 b，即`(a !== null && a !== undefined) ? a : b`
    25.LCP: 加载性能。最大内容绘制应在 2.5s 内完成。FID: 交互性能。首次输入延迟应在 100ms 内完成。CLS: 页面稳定性。累积布局偏移，需手动计算，CLS 应保持在 0.1 以下。

26. tsconfig

    1. \*\*表示匹配嵌套到任何级别的目录，\*表示零个或多个字符，？匹配任何一个字符
    2. allowUnreachableCode 允许无法访问的代码
    3. allowUnusedLabels 允许未访问的标签
    4. alwaysStrict 永远严格
    5. noImplicitAny 没有任何隐含的

27. 常用 package
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
    14. fs-extra fs 替代包
    15. inquirer 常用交互式命令行用户界面的集合
    16. http-server 快速启动一个 http 服务
    17. crypto-js 加密库
    18. mirror-config-china 为中国内地的 Node.js 开发者准备的镜像配置，大大提高 node 模块安装速度
    19. unplugin-vue-macros 可以在 vue3 的 setup 中定义 name
28. webpack 常用 package
29. pinia-plugin-persistedstate pinia 的持久化插件

    1. webpackbar 用于构建时显示进度条
    2. ora Elegant terminal spinner
    3. HappyPack 加快 webpack 构建速度
    4. webpack-merge
    5. html-webpack-plugin
    6. webpack 构建流程![webpack构建流程](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e748c143c2474494989674e129daaa94~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)
    7. webpack 基本配置

    ```js
    module.exports = {
      context: pathConfig.basePath, // 基本路径
      output: {
        path: pathConfig.outputPath,
        publicPath: pathConfig.publicPath,
        filename: "assets/js/[name]-[contenthash].js",
        chunkFilename: "assets/js/chunk-[name]-[contenthash].js",
      },
      resolve: {
        alias: pathConfig.resolveAlias,
        modules: pathConfig.resolveModules,
        extensions: pathConfig.generateResolveExtensions([
          ".web.tsx",
          ".web.ts",
          ".web.jsx",
          ".web.js",
          ".js",
          ".mjs",
          ".json",
          ".jsx",
          ".html",
          ".ts",
          ".tsx",
          ".scss",
          ".less",
        ]),
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            use: "happypack/loader?id=babel",
            include: pathConfig.babelIncludes,
          },
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
          },
          {
            test: /\.less$/,
            use: [
              miniCssExtractLoader.loader,
              cssLoaders.loader,
              postcssLoaders.loader,
              lessLoaders.loader,
            ],
          },
          {
            test: /(\.module\.scss$)/,
            use: [
              miniCssExtractLoader.loader,
              cssLoaders.cssModuleLoader,
              postcssLoaders.loader,
              sassLoaders.loader,
            ],
          },
          {
            test: /\.scss$/,
            exclude: /\.module\.scss$/,
            use: [
              miniCssExtractLoader.loader,
              cssLoaders.loader,
              postcssLoaders.loader,
              sassLoaders.loader,
            ],
          },
          {
            test: /\.css$/,
            use: [
              miniCssExtractLoader.loader,
              cssLoaders.loader,
              postcssLoaders.loader,
            ],
          },
          {
            test: /\.tsx?$/,
            include: pathConfig.babelIncludes,
            use: ["happypack/loader?id=babel", tsLoaders.loader],
          },
          {
            test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
            type: "asset/resource",
            generator: {
              filename: "assets/fonts/[hash][ext]",
              publicPath: `${pathConfig.publicPath || ""}`,
            },
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            type: "asset",
            generator: {
              filename: "assets/images/[hash][ext]", //文件名会变成这种格式
              publicPath: `${pathConfig.publicPath || ""}`,
            },
            parser: {
              dataUrlCondition: {
                maxSize: 2048, // 小于2kb时会被压缩成dataurl
              },
            },
          },
        ],
      },
      plugins: [
        pathConfig.EnvironmentPlugin(),
        new webpack.ProvidePlugin({ process: "process/browser" }),
        new MiniCssExtractPlugin({
          filename: `assets/styles/[name]${
            devMode ? "" : "-[contenthash]"
          }.css`,
          ignoreOrder: true,
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: pathConfig.resolve("src/assets"),
              to: pathConfig.resolve("public/assets"),
              noErrorOnMissing: true,
            },
          ],
        }),
        new MomentLocalesPlugin({
          localesToKeep: ["en"],
        }),
        new HappyPack({
          // 加快构建速度
          id: "babel",
          verbose: false,
          threadPool: happyThreadPool,
          loaders: [babelLoaders.loader],
        }),
      ],
    };
    ```

[tinycolor]: https://github.com/bgrins/TinyColor

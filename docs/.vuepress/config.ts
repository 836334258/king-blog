import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "King随笔",
  description: "随笔",
  base: "/king-blog/",
  head: [
    ["link", { rel: "icon", href: "/images/avatar.jpg" }],
    ["meta", { name: "baidu-site-verification", content: "code-4PMtPooKfF" }],
  ],
  theme: defaultTheme({
    logo: "/images/avatar.jpg",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "Github",
        link: "https://github.com/836334258/",
      },
    ],
    sidebar: [
      "/README.md",
      {
        text: "Code",
        link: "/code",
        children: [
          {
            text: "前端零碎知识点",
            link: "/code/knowledge.md",
          },
          {
            text: "算法",
            link: "/code/algorithm.md",
          },
          {
            text: "手写函数",
            link: "/code/handCode.md",
          },
          {
            text: "Letcode",
            link: "/code/letcode.md",
          },
          {
            text: "Css",
            link: "/code/css.md",
          },
          {
            text: "JavaScript",
            link: "/code/js.md",
          },
          {
            text: "Vue",
            link: "/code/vue.md",
          },
          {
            text: "JavaScript面试",
            link: "/code/JavaScript面试精讲.md",
          },
        ],
      },
      {
        text: "语法",
        link: "/grammar",
        children: [
          {
            text: "Markdown语法记录",
            link: "/grammar/markdown.md",
          },
          {
            text: "Typescript语法记录",
            link: "/grammar/typescript.md",
          },
          {
            text: "Node语法记录",
            link: "/grammar/node.md",
          },
        ],
      },
    ],
  }),
});

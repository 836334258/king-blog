import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

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
      // {
      //   text: 'YiBao',
      //   link: '/yibao',
      // },
      {
        text: "Code",
        link: "/code",
        children: [
          {
            text: "前端零碎知识点",
            link: "/code/knowledge.md",
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
  plugins: [
    searchPlugin({}),
    // sitemapPlugin({
    //   hostname:'https://836334258.github.io/'
    // }),
  ],
});

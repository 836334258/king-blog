import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'King随笔',
  description: '随笔',
  base: '/king-blog/',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'Github',
        link: 'https://github.com/836334258/',
      },
    ],
    sidebar: [
      '/README.md',
      {
        text: 'Code',
        link: '/code',
        children: [
          {
            text: '前端零碎知识点',
            link: '/code/knowledge.md',
          },
        ],
      },
      {
        text: '语法',
        link: '/grammar',
        children: [
          {
            text: 'Markdown语法记录',
            link: '/grammar/markdown.md',
          },
        ],
      },
    ],
  }),
})

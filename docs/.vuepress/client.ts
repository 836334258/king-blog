import { defineClientConfig } from '@vuepress/client'
import YiBao from './components/yibao.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('YiBao', YiBao)
  },
})
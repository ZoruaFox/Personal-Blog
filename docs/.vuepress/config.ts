import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "燕栖屿",
  description: "茫茫海屿，有燕而居",

  theme,

  plugins: [
    
    //  ...other plugins
  ],

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
    "@theme-hope/modules/blog/components/InfoList": path.resolve(
      __dirname,
      "./components/NewInfo.vue",
    )
  },
  
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
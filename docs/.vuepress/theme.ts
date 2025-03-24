import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import notFoundMsg from './notFoundMsg.js'

export default hopeTheme({
  hostname: "https://zorua.top",

  author: {
    name: "海屿有燕",
    url: "https://zorua.top",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "./assets/icon/title-icon.png",

  repo: "ZoruaFox/Personal-Blog",

  docsDir: "docs",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: '<a href="https://beian.miit.gov.cn/">晋ICP备2023005192号</a>',
  displayFooter: true,

  // 博客相关
  blog: {
    avatar: "./assets/images/mainpage-avatar.png",
    description: "一个一个一个",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/173841818",
      Discord: "https://example.com",
      Email: "mailto:zorua@vip.qq.com",
      GitHub: "https://github.com/ZoruaFox",
      Instagram: "https://example.com",
      QQ: "https://example.com",
      Steam: "https://example.com",
      Weibo: "https://weibo.com/u/5012210269",
      Zhihu: "https://www.zhihu.com/people/zorua-fox",
    },
  },

  routeLocales: {
    notFoundMsg: notFoundMsg
  },
  
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

     comment: {
       provider: "Giscus",
       repo: "ZoruaFox/Personal-Blog",
       repoId: "R_kgDOND9uUA",
       category: "Announcements",
       categoryId: "DIC_kwDOND9uUM4Cjm3r",
       mapping: "pathname",
     },

    components: {
      components: [
        "Badge", "VPCard", "BiliBili", "Share", "VPBanner"
      ],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    docsearch: {
      appId: "ESTBS81YBR",
      apiKey: "db5dc377531c90701bc0e9c7344941cb",
      indexName: "zorua",
      placeholder: "搜索文档",
      // appId, apiKey 和 indexName 是必填的
    },

    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },


    markdown: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      gfm: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
  },
},
{ custom: true },
);

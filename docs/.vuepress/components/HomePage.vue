<template>
    <HopeHomePage>
      <!-- 使用 bottom 插槽引入评论组件 -->
      <template #bottom>
        <CommentService />
      </template>
    </HopeHomePage>
  </template>
  <script setup lang="ts">
  import HopeHomePage from "vuepress-theme-hope/components/HomePage.js";
  </script>
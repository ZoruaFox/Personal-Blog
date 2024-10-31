<template>
    <InfoList />
    <div class="blogroll">
        <div class="blogroll-title">友情链接</div>
        <ul>
            <li v-for="(i, index) in blogroll" :key="index">
                <a :href="i.link">{{ i.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import InfoList from 'vuepress-theme-hope/modules/blog/components/InfoList.js'
import blogroll from '../blogroll'
</script>

<style lang="scss" scoped>
.blogroll {
    border-radius: 6px;
    padding: 9px;
    margin: 16px 0;
    background: var(--vp-c-bg-elv);
    box-shadow: 0 1px 3px 1px var(--vp-c-shadow);
    transition: box-shadow var(--vp-t-transform);
    .blogroll-title {
        font-size: 16px;
        font-weight: bold;
        margin: 3px 5px;
    }
    ul {
        margin: 0;
    }
    li {
        list-style: none;
    }
    a {
        color: var(--vp-c-text);
        font-size: 16px;
    }
    @media screen and (max-width: 719px) {
        box-shadow: none;
        padding: 5px 16px;
        background: none;
        margin: 0;
    }
}
</style>
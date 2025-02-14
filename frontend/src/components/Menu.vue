<script setup lang="ts">

import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'

import { h, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { NButton, NIcon, NMenu, useMessage } from 'naive-ui'

import {
  Home16Regular,
  BoxMultiple20Regular,
  SlideHide24Regular
} from '@vicons/fluent'


// 获取路由实例
const route = useRoute();

// 当前激活的菜单项
const activeLinkTo = ref(route.path);
// 响应路由变化同步给菜单
watch(
  () => route.path,
  (newPath) => {
    activeLinkTo.value = newPath;
  }
);

// 路由跳转
const router = useRouter();
const handleMenuSelect = (key: string) => {
  router.push(key);
};

// 渲染图标
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// 生成菜单标签
const generateLable = (path: string, linkName: string, linkIcon: Component) => {
  return {
    label: linkName,
    key: path,
    icon: renderIcon(linkIcon)
  }
}

const menuOptions: MenuOption[] = [
  generateLable('/', '概览', Home16Regular),
  generateLable('/nodes', '节点', BoxMultiple20Regular),
  generateLable('/instances', '实例', SlideHide24Regular),
]


</script>


<template>
  <n-menu :options="menuOptions" :value="activeLinkTo" @update:value="handleMenuSelect" />
</template>


<style>


@media screen and (max-width: 800px) {
  /* 未来对小屏幕进行适配 */

}
</style>
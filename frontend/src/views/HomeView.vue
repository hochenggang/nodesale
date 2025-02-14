<template>
  <div class="full-center">
    <n-button strong secondary type="success" @click="router.push('/nodes')">开始添加节点</n-button>
  </div>

</template>

<script setup lang="ts">
// Vue-router 加载成功后会首先载入此页面
// 需要首先检查是否有本地 token
// 再拉取服务器的数据


import { onBeforeMount } from "vue";
import { useRouter } from 'vue-router'
import { NButton, useMessage } from 'naive-ui';
import { getCachedToken } from "@/utils";

const router = useRouter()
const messager = useMessage()


onBeforeMount(() => {
  const token = getCachedToken()
  if (!token) {
    router.push('/login')
    messager.warning('请先登录')
  }
})



</script>


<style scoped>
.full-center {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
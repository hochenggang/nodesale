<template>
  <n-button @click="handleAddNodeClick">添加节点</n-button>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { NButton, useModal } from 'naive-ui'
import StepInstallIncus from '../components/StepInstallIncus.vue'
const modal = useModal()

const handleAddNodeClick = () => {
  const m = modal.create({
    title: '添加节点',
    preset: 'card',
    style: {
      width: '30rem'
    },
    content: () =>
      h(
        StepInstallIncus,
        null,
        ''
      ),
  })
}

</script>
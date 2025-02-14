<template>
  <n-button @click="handleAddNodeClick">添加节点</n-button>
  <div class="node-items" v-if="nodes.length > 0" v-for="node in nodes"
    :key="node.metadata.environment.certificate_fingerprint">
    <div class="node-item">

      <n-card hoverable>
        <div class="flex between">
          <div class="flex">
            <n-icon>
              <Box20Regular />
            </n-icon>
            <n-text>{{ node.metadata.environment.server_name }} - {{ node.metadata.environment.server }} {{
              node.metadata.environment.server_version }}</n-text>
          </div>
          <n-button secondary round type="success" @click="handleNodeClick(node)">
            <n-icon size="24">
              <ArrowCircleRight20Regular />
            </n-icon>
          </n-button>
        </div>
      </n-card>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h, onBeforeMount } from 'vue'
import type { Component } from 'vue'

import { NButton, NDivider, NIcon, NFlex, NText, NCard, useModal, useMessage } from 'naive-ui'
import StepInstallIncus from '../components/StepInstallIncus.vue'

import { getNodesCache, setNodesCache } from '@/utils'


import {
  Box20Regular,
  ArrowCircleRight20Regular,
} from '@vicons/fluent'

import type { apiGet1dot0 } from '@/types'


const modal = useModal()

const messager = useMessage()

const nodes = ref(getNodesCache())


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
        {
          onClose: () => {
            // 刷新 nodes 缓存
            nodes.value = getNodesCache()
            // 关闭模态框
            m.destroy()
          }
        },
        ''
      ),
  })
}


const handleNodeClick = (node: apiGet1dot0) => {
  messager.info(`展开 ${node.metadata.environment.server_name}`)
}

</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}

.between {
  display: flex;
  justify-content: space-between;
}

.node-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.node-item {
  max-width: 20rem;
}
</style>
<script setup lang="ts">


import { ref } from 'vue'

import { NSteps, NStep, NButton, NFlex, NIcon, NInput, useMessage } from 'naive-ui'
import CodeLine from './CodeLine.vue'

import {
  QuestionCircle20Regular,
} from '@vicons/fluent'

import { addNodeToCache } from '@/utils'

const emits = defineEmits(['close'])

const messager = useMessage()
const currentStep = ref(1)

const getOriginStr = () => location.origin


// 定义输入的 IP 地址
const ipValue = ref('');
const isIpOk = ref(false);

// 验证 IP 地址的函数
const validateIP = () => {
  console.log(ipValue)
  const ip = ipValue.value.trim();
  if (ip === '') {
    messager.error('请输入IP地址');
    return;
  }

  // 验证 IPv4 地址
  const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  // 验证 IPv6 地址
  const ipv6Regex = /^(?=.*[a-zA-Z0-9])(?=.*:)[a-zA-Z0-9:]+$/;

  if (ipv4Regex.test(ip) || ipv6Regex.test(ip)) {
    isIpOk.value = true
  } else {
    messager.error('请输入有效的 IPv4 或 IPv6 地址');
  }
};

const isButtonLoading = ref(false)

const addNode = async () => {
  isButtonLoading.value = true
  const resp = await fetch('/api/admin/node', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      host: ipValue.value,
      port: 8443
    })
  })


  if (resp.ok) {
    const json = await resp.json()

    if (json.metadata.auth === "trusted") {
      messager.success('添加成功')
      // 把当前节点保存到缓存中
      addNodeToCache(json)
      // 回调 emit 关闭此模态框
      emits('close')
      return
    } else {
      messager.error(`添加失败 ${resp.status}`)
    }

  } else {
    messager.error(`无法通讯，确保前序步骤已完成`)
  }

  isButtonLoading.value = false

}

</script>


<template>
  <div>
    <n-steps size="small" :current="currentStep" status="process">
      <n-step title="安装虚拟化程序" />
      <n-step title="添加证书" />
      <n-step title="完成连接" />
    </n-steps>

    <div v-if="currentStep === 1">
      <div class="margin-top-bottom-1">
        <CodeLine :code="`bash <(curl -sL ${getOriginStr()}/api/admin/incus/install.sh)`" />
      </div>

      <n-flex align="center" justify="space-between">
        <n-flex align="center">
          <span>请复制安装命令并在 debian11/12 执行</span>
          <n-icon title="将在该服务器上安装 Incus，提供虚拟化能力。">
            <QuestionCircle20Regular />
          </n-icon>
        </n-flex>
        <n-button secondary type="success" @click="currentStep++">下一步</n-button>
      </n-flex>
    </div>

    <div v-if="currentStep === 2">
      <div class="margin-top-bottom-1">
        <CodeLine :code="`bash <(curl -sL ${getOriginStr()}/api/admin/incus/auth.sh)`" />
      </div>

      <n-flex align="center" justify="space-between">
        <n-flex align="center">
          <span>请复制授权命令并执行</span>

          <n-icon title="将在该服务器上拉取此控制台提供的证书，并添加到 Incus 进行授权，之后平台可以控制该服务器。">
            <QuestionCircle20Regular />
          </n-icon>
        </n-flex>
        <n-button secondary type="success" @click="currentStep++">下一步</n-button>
      </n-flex>
    </div>

    <div v-if="currentStep === 3">
      <n-flex class="margin-top-bottom-1" align="center" justify="space-between">
        <n-input v-model:value="ipValue" placeholder="请输入 IP 地址" @blur="validateIP" @keydown.enter="validateIP" />
      </n-flex>
      <n-flex align="center" justify="space-between">
        <span>输入服务器的IP地址进行连接</span>
        <n-button secondary type="success" @click="addNode" :loading="isButtonLoading" :disabled="!isIpOk">连接</n-button>
      </n-flex>
    </div>

  </div>


</template>


<style>
.margin-top-bottom-1 {
  margin: 1rem 0;
}

@media screen and (max-width: 800px) {
  /* 未来对小屏幕进行适配 */

}
</style>
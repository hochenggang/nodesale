<template>
  <div class="code-display">
    <!-- 代码显示区域 -->
    <pre class="code-content">{{ code }}</pre>
    <!-- 复制代码按钮 -->
    <n-button
      class="copy-button"
      size="small"
      @click="copyCode"
    >
      <template #icon>
        <!-- 使用 @vicons/fluent 中的复制图标 -->
        <Copy24Regular />
      </template>
    </n-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NButton, useMessage } from 'naive-ui';
import { Copy24Regular } from '@vicons/fluent';

// 定义组件的 props，接收要显示的代码
const props = defineProps({
  code: {
    type: String,
    required: true
  }
});

// 定义响应式变量，用于控制复制状态
const isCopying = ref(false);

// 使用 useMessage 获取消息提示实例
const message = useMessage();

// 复制代码的函数
const copyCode = async () => {
  isCopying.value = true;
  try {
    // 使用浏览器的 Clipboard API 复制代码
    await navigator.clipboard.writeText(props.code);
    // 复制成功后，使用 useMessage 提示用户
    message.success('命令已复制到剪贴板');
  } catch (error) {
    // 复制失败时，使用 useMessage 提示用户
    message.error('复制失败，请手动复制');
  } finally {
    // 无论复制成功还是失败，都将复制状态重置为 false
    isCopying.value = false;
  }
};
</script>

<style scoped>
.code-display {
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 2.5rem 1rem;
  background-color: #f9fafb;
}

.code-content {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  word-break: break-all;
}

.copy-button {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
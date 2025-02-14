<template>
  <div class="login">
    <div class="login-form">
      <n-config-provider :theme-overrides="themeOverrides">
        <n-form ref="formRef" :model="formValue" :rules="rules" size="medium" :show-label="false">
          <n-form-item class="login-input-wrapper" path="email" style="--n-feedback-height: 0px;">
            <n-input class="login-input" v-model:value="formValue.email" placeholder="Email" />
          </n-form-item>
          <n-form-item class="login-input-wrapper" path="password" style="--n-feedback-height: 0px;">
            <n-input class="login-input" v-model:value="formValue.password" type="password" placeholder="Password"
              show-password-on="mousedown" />
          </n-form-item>
          <n-button class="login-input" attr-type="button" @click="handleValidateClick" block>Log In</n-button>
        </n-form>
      </n-config-provider>
    </div>
  </div>

</template>


<script setup lang="ts">
import { ref } from 'vue';
import { NConfigProvider, NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui';
import { useRouter } from 'vue-router'

import { setToken } from "../utils";

const router = useRouter()

// 定义表单数据
const formValue = ref({
  email: '',
  password: ''
});

// 定义表单验证规则
const rules = {
  email: [
    { required: true, message: 'Please input your email', trigger: ['blur'] },
    { type: 'email', message: 'Please enter a valid email address', trigger: ['blur'] }
  ],
  password: [
    { required: true, message: 'Please input your password', trigger: ['blur'] },
    { min: 6, message: 'Password must be at least 6 characters long', trigger: ['blur'] }
  ]
};

// 获取表单引用
const formRef = ref(null);

// 使用 Naive UI 的消息提示
const message = useMessage();

// 主题覆盖（可选）
const themeOverrides = {
  common: {
    primaryColor: '#18a058',
    primaryColorHover: '#36ad6a',
    primaryColorPressed: '#006d41'
  }
};

// 处理表单验证
const handleValidateClick = async () => {
  const form = formRef.value;
  if (!form) return;
  try {
    await form.validate();
    // 后面补上请求逻辑
    
    message.success('登录成功');
    setToken('token')
    router.push('/')

    // 在这里可以添加登录逻辑，比如调用 API
    console.log('Form value:', formValue.value);
  } catch (e) {
    console.error(e);
    message.error('Validation failed');
  }
};
</script>


<style>
.login {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  position: relative;
  width: 20rem;
}

.login-input-wrapper {
  margin-bottom: 0.15rem;
}

.login-input {
  margin-top: 0.25rem;
}
</style>

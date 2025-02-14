<script setup lang="ts">


import { RouterView } from 'vue-router'
import { NMessageProvider, NConfigProvider, NModalProvider } from 'naive-ui'
import compMenu from '@/components/Menu.vue'



</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <n-modal-provider>
        <section id="left">
          <compMenu />
        </section>
        <section id="right">
          <RouterView />
        </section>
      </n-modal-provider>
    </n-message-provider>
  </n-config-provider>

</template>

<style>
a:hover {
  background: none;
}

#left {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 10rem;
  background-color: #ffe6e6;
  z-index: 1;
}

#right {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: calc(100% - 10rem);
  background-color: #e6fbff;
  z-index: 1;
  box-sizing: border-box;
  padding: 0.5rem;


}

@media screen and (max-width: 800px) {
  /* 未来对小屏幕进行适配 */

}
</style>
<template>
  <h1>tabs示例</h1>
  <h1>示例1</h1>
  <Demo :component="Tabs1Demo" title="常规用法" base64="PHRlbXBsYXRlPgogIDxUYWJzIHYtbW9kZWw6c2VsZWN0ZWQ9IngiPgogICAgPFRhYiB0aXRsZT0i5a+86IiqMSI+5YaF5a65MTwvVGFiPgogICAgPFRhYiB0aXRsZT0i5a+86IiqMiI+5YaF5a65MjwvVGFiPgogIDwvVGFicz4KPC90ZW1wbGF0ZT4KCjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgVGFicyBmcm9tICcuLi9saWIvVGFicy52dWUnCmltcG9ydCBUYWIgZnJvbSAnLi4vbGliL1RhYi52dWUnCmltcG9ydCB7CiAgcmVmCn0gZnJvbSAndnVlJwpleHBvcnQgZGVmYXVsdCB7CiAgY29tcG9uZW50czogewogICAgVGFicywKICAgIFRhYgogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCB4ID0gcmVmKCflr7zoiKoyJykKICAgIHJldHVybiB7CiAgICAgIHgKICAgIH0KICB9Cn0KPC9zY3JpcHQ+"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from '../demoList/Tabs1.demo.vue';
export default {
  name: 'TabsDemo',
  components: {
    Demo
  },
  setup(){
    return {Tabs1Demo}
  }
};
</script>
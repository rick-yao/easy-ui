<template>
  <div>
    <h1>Switch 组件示例 </h1>
   <Demo :component="Switch1Demo" title="常规用法" base64="PHRlbXBsYXRlPgogIDxTd2l0Y2ggdi1tb2RlbDp2YWx1ZT0iYm9vbCIgLz4KPC90ZW1wbGF0ZT4KCjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgU3dpdGNoIGZyb20gJy4uL2xpYi9Td2l0Y2gudnVlJwppbXBvcnQgewogIHJlZgp9IGZyb20gJ3Z1ZScKZXhwb3J0IGRlZmF1bHQgewogIGNvbXBvbmVudHM6IHsKICAgIFN3aXRjaCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgYm9vbCA9IHJlZihmYWxzZSkKICAgIHJldHVybiB7CiAgICAgIGJvb2wKICAgIH0KICB9Cn0KPC9zY3JpcHQ+"/>
    <Demo :component="Switch2Demo" title="支持disabled" base64="PHRlbXBsYXRlPgogIDxTd2l0Y2ggdi1tb2RlbDp2YWx1ZT0iYm9vbCIgZGlzYWJsZWQgLz4KPC90ZW1wbGF0ZT4KCjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgU3dpdGNoIGZyb20gJy4uL2xpYi9Td2l0Y2gudnVlJwppbXBvcnQgewogIHJlZgp9IGZyb20gJ3Z1ZScKZXhwb3J0IGRlZmF1bHQgewogIGNvbXBvbmVudHM6IHsKICAgIFN3aXRjaCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgYm9vbCA9IHJlZihmYWxzZSkKICAgIHJldHVybiB7CiAgICAgIGJvb2wKICAgIH0KICB9Cn0KPC9zY3JpcHQ+"/>
  </div>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from "vue";
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from "./Demo.vue";
export default {
  name: "SwitchDemo",
  components: {Demo, Switch, Switch1Demo,Switch2Demo},
  setup() {
    const bool = ref(true)
    return {bool ,Switch1Demo, Switch2Demo}
  }
}
</script>

<style scoped lang="scss">
</style>
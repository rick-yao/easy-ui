<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1Demo/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre><code>{{code1}}</code></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <Switch2Demo/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre><code >{{code2}}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import {ref} from "vue";
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { Base64 } from 'js-base64';
let code1 = Base64.decode('PHRlbXBsYXRlPgogIDxTd2l0Y2ggdi1tb2RlbDp2YWx1ZT0iYm9vbCIgLz4KPC90ZW1wbGF0ZT4KCjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgU3dpdGNoIGZyb20gJy4uL2xpYi9Td2l0Y2gudnVlJwppbXBvcnQgewogIHJlZgp9IGZyb20gJ3Z1ZScKZXhwb3J0IGRlZmF1bHQgewogIGNvbXBvbmVudHM6IHsKICAgIFN3aXRjaCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgYm9vbCA9IHJlZihmYWxzZSkKICAgIHJldHVybiB7CiAgICAgIGJvb2wKICAgIH0KICB9Cn0KPC9zY3JpcHQ+')
let code2 =Base64.decode('PHRlbXBsYXRlPgogIDxTd2l0Y2ggdi1tb2RlbDp2YWx1ZT0iYm9vbCIgZGlzYWJsZWQgLz4KPC90ZW1wbGF0ZT4KCjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgU3dpdGNoIGZyb20gJy4uL2xpYi9Td2l0Y2gudnVlJwppbXBvcnQgewogIHJlZgp9IGZyb20gJ3Z1ZScKZXhwb3J0IGRlZmF1bHQgewogIGNvbXBvbmVudHM6IHsKICAgIFN3aXRjaCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgYm9vbCA9IHJlZihmYWxzZSkKICAgIHJldHVybiB7CiAgICAgIGJvb2wKICAgIH0KICB9Cn0KPC9zY3JpcHQ+')
export default {
  name: "SwitchDemo",
  components: {Switch, Button,Switch1Demo,Switch2Demo},
  setup() {
    const bool = ref(true)
    return {bool , Prism,code1,code2}
  }
}
</script>

<style scoped lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
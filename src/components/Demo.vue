<template>
  <div class="demo">
    <h2>{{title}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible =! codeVisible">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre ><code>{{code}}</code></pre>
    </div>

  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {Base64} from 'js-base64';
import {ref} from 'vue';

export default {
  components:{
    Button
  },
  props: {
    component: Object,
    title:{
      type:String
    },
    base64:{
      type:String
    }
  },
  setup(props:any,context:any) {
    const code = Base64.decode(props.base64)
    const codeVisible = ref(false)
    return {
      code,
      codeVisible
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
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
    >pre {
      word-wrap:break-word;
      white-space: break-spaces;
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
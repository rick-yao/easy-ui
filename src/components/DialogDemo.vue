<template>
  <div>dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle" >toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" >
    <template v-slot:title><strong>加粗标题</strong></template>
    <template v-slot:content><strong>样式内容</strong></template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
export default {
  name: "DialogDemo",
  components:{
    Button,
    Dialog
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = ()=>{
      console.log(1)
    }
    return {x,toggle,f1}
  }

}
</script>

<style scoped>

</style>
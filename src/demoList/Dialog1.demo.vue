<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {
  ref
} from 'vue';

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      console.log('ok');
    };
    const f2 = () => {
      console.log('cancel');
    };
    return {
      x,
      toggle,
      f1,
      f2
    };
  }
};
</script>
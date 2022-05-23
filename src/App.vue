<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const windowWidth = document.documentElement.clientWidth;
    const asideVisible = ref(windowWidth <= 500 ? false : true);
    provide('asideVisible', asideVisible);
    if (windowWidth <= 500) {
      router.afterEach(() => {
        asideVisible.value = false;
      });
    }

  }
};

</script>

<template>
  <router-view/>
</template>

<style>
</style>

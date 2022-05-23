<script  lang="ts">
import {provide, ref} from 'vue';

export default {
  name:'App',
  setup(){
    const windowWidth = document.documentElement.clientWidth
    const asideVisible = ref(windowWidth<=500 ? false :true)
    provide('asideVisible',asideVisible)
  }
}

</script>

<template>
  <router-view/>
</template>

<style>
</style>

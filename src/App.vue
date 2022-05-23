<script  lang="ts">
import {provide, ref} from 'vue';

export default {
  name:'App',
  setup(){
    const asideVisible = ref(false)
    provide('asideVisible',asideVisible)
  }
}

</script>

<template>
  <router-view/>
</template>

<style>
</style>

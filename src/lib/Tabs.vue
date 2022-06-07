<template>
  <div>
    <div v-for="t in titles">{{t}}</div>
    <component v-for="c in defaults" :is="c"/>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  setup(props: any, context: any) {
    const defaults = context.slots.default();
    defaults.forEach((tag: { type: { name: string; }; }) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs里的组件必须是Tab');
      }
    });
    const titles = defaults.map((tag: { props: { title: string; }; })=>{
      return tag.props.title
    })
    return {defaults,titles};
  }

};
</script>

<style scoped>

</style>
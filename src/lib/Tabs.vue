<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item" :class="{selected: t===selected}" @click="select(t)" v-for="(t,index) in titles"
           :key="index">{{ t }}
      </div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item"  :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  name: 'Tabs',
  setup(props: any, context: any) {
    const defaults = context.slots.default();
    defaults.forEach((tag: { type: { name: string; }; }) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs里的组件必须是Tab');
      }
    });
    const select = (t: string) => {
      context.emit('update:selected', t);
    };
    const titles = defaults.map((tag: { props: { title: string; }; }) => {
      return tag.props.title;
    });
    const current = computed(()=>{
     return defaults.filter((tag: { props: { title: string; }; }) => {
        return tag.props.title === props.selected;
      })[0];
    })
    return {defaults, titles, current, select};
  }

};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item" :ref="setNavItem" :class="{selected: t===selected}" @click="select(t)"
           v-for="(t,index) in titles"
           :key="index">{{ t }}
        <div class="gulu-tabs-nav-indicator" :ref="setIndicator"></div>
      </div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  name: 'Tabs',
  setup(props: any, context: any) {
    let navItem = <HTMLDivElement[]>[];
    let indicator = <HTMLDivElement[]>[];
    //@ts-ignore
    const container = ref<HTMLDivElement>(null);
    const setNavItem = (el:any)=> {
      if (el) {
        navItem.push(el);
      }
    };
    const setIndicator = (el:any) => {
      if (el) {
        indicator.push(el);
      }
    };
    onMounted(() => {
      const result = navItem.filter((i) => (
          i.classList.contains('selected')
      ))[0];
      const {width, left: resultLeft} = result.getBoundingClientRect();
      indicator.forEach((t) => t.style.width = width + 'px');
      const {left: containerLeft} = container.value.getBoundingClientRect();
      const left = resultLeft - containerLeft;
      indicator.forEach((t) => t.style.left = left + 'px');
    });
    onUpdated(() => {
      const result = navItem.filter((i) => (
          i.classList.contains('selected')
      ))[0];
      const {width, left: resultLeft} = result.getBoundingClientRect();
      indicator.forEach((t) => t.style.width = width + 'px');
      const {left: containerLeft} = container.value.getBoundingClientRect();
      const left = resultLeft - containerLeft;
      indicator.forEach((t) => t.style.left = left + 'px');
    });
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
    const current = computed(() => {
      return defaults.filter((tag: { props: { title: string; }; }) => {
        return tag.props.title === props.selected;
      })[0];
    });
    return {defaults, titles, current, select, navItem, setNavItem, setIndicator, container};
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
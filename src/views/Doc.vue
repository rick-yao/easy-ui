<template>
  <div class="layout">
    <Topnav class="nav" toggle-menu-button-visible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Topnav from './Topnav.vue';
import {inject, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible');

</script>

<style scoped lang="scss">

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    > aside {
      z-index: 5;
    }

    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol > li {
    > a {
      display: block;
      padding: 4px 16px;
      text-decoration: none;
      color:black;
    }

    .router-link-active {
      background: white;
    }
  }
}


main {
  overflow: auto;
}</style>

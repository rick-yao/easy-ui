<template>
  <div class="topNavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>Easy UI</h1>
      <h2>一个简单的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Topnav from './topnav.vue';
</script>
<script lang="ts">
export default {
  name: 'Home'
};
</script>

<style scoped lang="scss">
$border-radius: 4px;
$color: #1bcac0;
.topNavAndBanner{
  background: linear-gradient(145deg, rgba(215,238,252,1) 0%, rgba(238,236,226,1) 100%);
}
.banner {
  color:#1bcac0;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      background: #02bcb0;
      color:white;
      margin: 0 8px;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>
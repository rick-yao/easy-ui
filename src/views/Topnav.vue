<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Topnav'
};
</script>

<style lang="scss" scoped>
.topnav {
  background: aquamarine;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  .logo{
    padding-left: 30px;
  }
  >ul{
    display: flex;
    >li{
      padding-right:50px;
    }
  }
}
</style>
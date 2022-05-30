<template>
  <div>Button示例</div>
  <h2>1</h2>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好
      </Button>
    <Button theme="link">你好
    </Button>
    <Button theme="text">你好
    </Button>
  </div>
  <h2>2</h2>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
</template>

<script>
import Button from "../lib/Button.vue";

export default {
  name: "ButtonDemo",
  components: {Button}
}
</script>

<style scoped>

</style>
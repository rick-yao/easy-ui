<template>
  <div>Button事例</div>
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
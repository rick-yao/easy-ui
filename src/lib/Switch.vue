<template>
  <button :class="{checked:value}" @click="toggle"><span></span></button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props: {
    value: Boolean
  },
  setup(props:any, context:any) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {toggle}
  },
}

</script>

<style lang="scss">
$h: 22px;
$h2: calc($h - 4px);
button {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: calc($h2 / 2);
  transition: left 0.5s;
}

button.checked {
  background: blue;
}

button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}

button:focus {
  outline: none
}
</style>
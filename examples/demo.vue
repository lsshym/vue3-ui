<template>
  <Button @click="test">123</Button>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {
    test() {
      console.log("12345");
    },
  },
});
</script>

<style lang='scss' scoped>
</style>

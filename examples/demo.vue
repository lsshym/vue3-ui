<template>
  <!-- <m-button @click="openDialog">打开弹窗</m-button>
    <input type="text">
    <m-dialog v-model="dialogVisible">
        <span>这是一段信息</span>
    </m-dialog> -->
  <div>666</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface TestA {
  a: number;
  c: number;
}
interface TestB {
  b: number;
}
type TestC = TestA | TestB;
export default defineComponent({
  name: 'Demo',
  setup() {
    // const test = {
    //     a: 1,
    //     b: 2,
    // } as TestC
    const cnm = () => {
      //
    };

    const testa = 1;
    return {
      // test,
    };
  },
});
</script>

<style lang="scss" scoped></style>

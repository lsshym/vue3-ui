<template>
  <!-- <m-button @click="openDialog">打开弹窗</m-button>
    <input type="text">
    <m-dialog v-model="dialogVisible">
        <span>这是一段信息</span>
    </m-dialog> -->
  <div>666</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Demo',
  setup() {
    let num = 0;
    const testC = async () => {
      await new Promise<void>((res) => {
        setTimeout(() => {
          num++;
          res();
        }, 1000);
      });
    };
    const testA = async () => {
      await testC();
    };

    const test = async () => {
      await testA();
      console.log('最后', num);
    };

    onMounted(() => {
      test();
    });

    return {
      // test,
    };
  },
});
</script>

<style lang="scss" scoped></style>

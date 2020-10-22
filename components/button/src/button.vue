<template>
  <button class="bcy-button" @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String,
      default: "",
      validator: (value: string) => {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger", ""].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {};
  },
  setup(prop, { emit }) {
    // 其实这里根本不需要这个，但是我就要写
    const handleClick = (evt: any) => {
      //不执行的话会调两次,那为什么element的就不用写
      evt.stopImmediatePropagation();
      /* 为何会调用两次，而且拦截冒泡无法阻止 
      因为Vue3最外层不用套一个div，使用的时候
      相当于触发了两次click事件，可以在UI组件最外层套一个div，然后加上stopPropagation
      */
      // evt.stopPropagation();
      emit("click", evt);
    };
    return {
      handleClick,
    };
  },
});
</script>

<style lang='scss' scoped>
.bcy-button {
  padding: 12px 20px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  color: #606266;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #ebf5ff;
  }
}
</style>

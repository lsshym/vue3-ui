<template>
  <div class="bcy-input">
    <template v-if="type !== 'textarea'">
      <input
        type="text"
        class="bcy-input__inner"
        :value="modelValue"
        :placeholder="placeholder"
        @input="handleInput"
        @change="handleChange"
      />
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  props: {
    type: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const handleInput = (evt: InputEvent) => {
      // 纯input可能用不到了，先保留
      emit("input", (evt.target as HTMLInputElement).value);
      emit("update:modelValue", (evt.target as HTMLInputElement).value);
    };
    const handleChange = (evt: InputEvent) => {
      //失去焦点的时候才触发，这么神奇的吗
      emit("change", (evt.target as HTMLInputElement).value);
    };
    return {
      handleInput,
      handleChange,
    };
  },
});
</script>

<style lang='scss' scoped>
.bcy-input {
  // outline: none;
  display: inline-block;
  font-size: 14px;
  & .bcy-input__inner {
    outline: none;
    border-radius: 4px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #dcdfe6;
    padding: 0 15px;
    &:focus {
      border-color: #409eff;
    }
  }
}
</style>

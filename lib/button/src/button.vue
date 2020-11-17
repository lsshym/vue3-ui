<template>
    <button
        class="bcy-button"
        @click="handleClick"
        :class="[
            {
                'is-disabled': buttonDisabled,
            },
        ]"
        :disabled="buttonDisabled"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
    name: 'm-button',
    props: {
        type: {
            type: String,
            default: '',
            validator: (value: string) => {
                return ['success', 'warning', 'danger', ''].indexOf(value) !== -1
            },
        },
        disabled: {
            type: Boolean,
            default: false,
            validator: (value: boolean) => {
                return [true, false].indexOf(value) !== -1
            },
        },
    },
    data() {
        return {}
    },
    setup(props, { emit }) {
        // 其实这里根本不需要这个，但是我就要写
        const handleClick = (evt: MouseEvent) => {
            //不执行的话会调两次,那为什么element的就不用写
            evt.stopImmediatePropagation()
            /* 为何会调用两次，而且拦截冒泡无法阻止 
      因为Vue3最外层不用套一个div，使用的时候
      相当于触发了两次click事件，可以在UI组件最外层套一个div，然后加上stopPropagation
      */
            // evt.stopPropagation();
            emit('click', evt)
        }
        const buttonDisabled = computed(() => {
            // 未更新表单情况下
            return props.disabled
        })
        return {
            handleClick,
            buttonDisabled,
        }
    },
})
</script>

<style lang="scss" scoped>
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
    // 这么神奇的吗
    &.is-disabled {
        color: #c0c4cc;
        cursor: not-allowed;
        background: #fff;
    }
}
</style>

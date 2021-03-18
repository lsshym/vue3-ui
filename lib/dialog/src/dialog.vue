<template>
    <div v-show="modelValue" :class="['m-overlay', {}]" :style="[]">
        <div class="m-dialog">
            <div class="m-dialog__header">
                <slot name="title">
                    <span class="el-dialog__title">
                        {{ title }}
                    </span>
                </slot>
                <m-button class="el-dialog__headerbtn" @click="handleClose">
                    关闭
                </m-button>
            </div>
            <slot></slot>
            <div v-if="$slots.footer" class="el-dialog__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: `m-dialog`,
    props: {
        modelValue: {
            type: Boolean,
        },
    },
    setup(props, { emit }) {
        const handleClose = () => {
            emit('update:modelValue', false)
        }
        return {
            handleClose,
        }
    },
})
</script>

<style lang="scss" scoped>
.m-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    // overflow: auto;
    .m-dialog {
        position: relative;
        margin: 15vh auto 50px;
        width: 30%;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
        box-sizing: border-box;
    }
}
</style>

<template>
    <div
        class="bcy-switch"
        :style="{
            borderColor: switchColor,
            backgroundColor: switchColor,
        }"
        :class="[
            {
                'is-checked': checked,
            },
        ]"
        @click="switchClick"
    >
        <span :class="['bcy-switch__label', 'bcy-switch__label--left']"></span>
        <span :class="['bcy-switch__core']" :style="{ width: coreWidth + 'px' }"></span>
        <span :class="['bcy-switch__label', 'bcy-switch__label--right']"></span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed } from 'vue'
export default defineComponent({
    name: 'Switch',
    components: {},
    props: {
        disabled: {
            type: Boolean,
        },
        modelValue: {
            type: [Boolean, String, Number],
            default: false,
        },
        width: {
            type: Number,
        },
        activeColor: {
            type: String,
            default: '#1890ff',
        },
        inactiveColor: {
            type: String,
            default: 'rgba(0,0,0,.25)',
        },
    },
    setup(props, { emit }) {
        const { modelValue, activeColor, inactiveColor } = toRefs(props)

        const coreWidth = ref(props.width || 40)
        const checked = computed(() => {
            return modelValue.value
        })
        const switchColor = computed(() => {
            return modelValue.value ? activeColor.value : inactiveColor.value
        })

        const switchClick = () => {
            emit('update:modelValue', !modelValue.value)
        }
        return {
            coreWidth,
            switchColor,
            checked,
            switchClick,
        }
    },
})
</script>

<style lang="scss" scoped>
$bcy-switch__core-height: 20px;

.bcy-switch {
    display: inline-flex;
    border-radius: 18px;
    & .bcy-switch__core {
        height: $bcy-switch__core-height;
        width: 40px;
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        cursor: pointer;
        border-radius: $bcy-switch__core-height/2;
        box-sizing: border-box;
        transition: border-color 0.3s, background-color 0.3s;
        &::after {
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;
            width: 16px;
            height: 16px;
            background-color: #fff;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            transition: all 0.3s;
        }
    }
}
.is-checked {
    & .bcy-switch__core {
        &::after {
            left: 100%;
            margin-left: -17px;
        }
    }
}
</style>

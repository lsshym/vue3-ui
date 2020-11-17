<template>
    <div
        class="bcy-input"
        :class="[
            {
                'bcy-input-group--prepend': $slots.prepend,
                'bcy-input-group--append': $slots.append,
            },
        ]"
    >
        <template v-if="type !== 'textarea'">
            <div class="bcy-input-group__prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <input
                type="text"
                class="bcy-input__inner"
                :value="modelValue"
                :placeholder="placeholder"
                :disabled="inputDisabled"
                @input="handleInput"
                @change="handleChange"
            />
            <div class="bcy-input-group__append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
    name: 'm-input',
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
        disabled: {
            type: Boolean,
        },
    },
    setup(props, { emit }) {
        const handleInput = (evt: InputEvent) => {
            // 可能用不到了，先保留
            emit('input', (evt.target as HTMLInputElement).value)
            emit('update:modelValue', (evt.target as HTMLInputElement).value)
        }
        const handleChange = (evt: InputEvent) => {
            emit('change', (evt.target as HTMLInputElement).value)
        }
        const inputDisabled = computed(() => {
            return props.disabled
        })
        return {
            inputDisabled,
            handleInput,
            handleChange,
        }
    },
})
</script>

<style lang="scss" scoped>
.bcy-input {
    // outline: none;
    display: inline-table;
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
    & .bcy-input-group__prepend,
    & .bcy-input-group__append {
        background-color: #f5f7fa;
        color: #909399;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        padding: 0 20px;
        width: 1px;
        white-space: nowrap;
    }
    & .bcy-input-group__prepend {
        border-right: 0px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
}
.bcy-input-group--append {
    .bcy-input__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}
.bcy-input-group--prepend {
    .bcy-input__inner {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
</style>

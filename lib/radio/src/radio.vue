<template>
<label>
    <span>
        <input type="radio" :disabled="radioDisabled" @change="handleChange" />
    </span>
    <span>
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
    </span>
</label>
</template>

<script lang="ts">
import {
    computed,
    defineComponent
} from "vue";
export default defineComponent({
    name: `m-radio`,
    components: {},
    props: {
        label: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        value: {
            type: [String, Number, Boolean],
        },
    },
    setup(props) {
        const radioDisabled = computed(() => {
            return props.disabled;
        });
        const handleChange = (evt: InputEvent) => {
            console.log(evt);
        };
        return {
            radioDisabled,
            handleChange,
        };
    },
});
</script>

<style lang='scss' scoped>
</style>

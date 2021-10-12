<template>
    <div class="icon-switch" @click="handleIconClick" :style="style">
        <span
            v-show="!modelValue"
            :style="{
                background: `url('${icon}') center
                center/cover no-repeat`,
            }"
        >
        </span>
        <span
            v-show="modelValue"
            :style="{
                background: `url('${activeIcon}') center
                center/cover no-repeat`,
            }"
        >
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, CSSProperties, PropType } from "vue";
export default defineComponent({
    name: "",
    props: {
        modelValue: Boolean,
        icon: String,
        activeIcon: String,
        style: Object as PropType<CSSProperties>,
    },
    methods: {
        handleIconClick(evt: MouseEvent) {
            evt.stopImmediatePropagation();
            this.$emit("click", !this.modelValue);
            this.$emit("update:modelValue", !this.modelValue);
        },
    },
});
</script>

<style lang="scss" scoped>
.icon-switch {
    display: inline-block;
    & > span {
        display: inline-block;
        width: 36px;
        height: 36px;
    }
}
</style>

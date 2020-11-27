<template>
    <ul class="bcy-menu" :style="{...style}">
        <slot></slot>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: `m-menu`,
    props: {
        style: {
            type: CSSStyleDeclaration
        },
    },
})
</script>

<style lang="scss" scoped>
.bcy-menu {
    width: 240px;
}
</style>

<template>
    <aside class="bcy-aside" :style="{ width }">
        <slot></slot>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: `m-aside`,
    props: {
        width: {
            type: String,
            default: '300px',
        },
    },
})
</script>

<style lang="scss" scoped>
.bcy-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}
</style>

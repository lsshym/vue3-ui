<template>
    <main class="bcy-main">
        <slot></slot>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: `m-main`,
})
</script>

<style lang="scss" scoped>
.bcy-main {
    overflow: auto;
    text-align: center;
    flex: 1;
    background-color: #e9eef3;
    color: #333;
    line-height: 160px;
}
</style>

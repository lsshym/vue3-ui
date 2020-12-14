<template>
    <m-menu @click="handleClick">
        <m-menu-item>测试1</m-menu-item>
        <m-menu-item>测试2</m-menu-item>
    </m-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Demo',
    setup() {
        const handleClick = (index: any) => {
            console.log('触发handleClick', index)
        }
        return {
            handleClick,
        }
    },
})
</script>

<style lang="scss" scoped></style>

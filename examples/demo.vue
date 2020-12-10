<template>
    <!-- <m-menu >
        <m-menu-item>测试1</m-menu-item>
        <m-menu-item>测试1</m-menu-item>
        <m-menu-item>测试1</m-menu-item>
        <m-menu-item>测试1</m-menu-item>
    </m-menu> -->

        <button @click="handleClick">测试</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Demo',
    setup(){
        const handleClick = (value:any)=>{
            console.log('触发handleClick',value)
        }
        return {
            handleClick
        }
    }
})
</script>

<style lang="scss" scoped>

</style>

<template>
    <m-menu :style="{
        'bac'
    }">
        <m-menu-item>测试1</m-menu-item>
        <m-menu-item>测试1</m-menu-item>
        <m-menu-item>测试1</m-menu-item>
        <m-menu-item>测试1</m-menu-item>
    </m-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: '',
    components: {},
    data() {
        return {
            test: 1,
            bool: false,
        }
    },
    methods: {
        // testMethods(value: any) {
        //     console.log(value)
        // },
    },
})
</script>

<style lang="scss" scoped>
.test {
    width: 100px;
    height: 100px;
    margin-left: 30px;
    padding: 20px;
    border: 1px solid red;
}
</style>

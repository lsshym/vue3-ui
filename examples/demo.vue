<template>
    <m-button @click="openDialog">打开弹窗</m-button>
    <input type="text">
    <m-dialog v-model="dialogVisible">
        <span>这是一段信息</span>
    </m-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'Demo',
    setup() {
        const dialogVisible = ref(false)

        const openDialog = () => {
            dialogVisible.value = true
        }
        return {
            dialogVisible,
            openDialog,
        }
    },
})
</script>

<style lang="scss" scoped></style>

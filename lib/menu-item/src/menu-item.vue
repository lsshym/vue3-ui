<template>
    <li
        class="bcy-menu-item"
        :class="[
            {
                'bcy-menu-item--horizontal': isHorizontal,
            },
        ]"
        @click="handleLiClick"
    >
        <span>
            <slot></slot>
        </span>
      
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
export default defineComponent({
    name: `m-menu-item`,
    emits:['test'],
    setup(props) {
        const rootMenu = inject<any>('rootMenu')
        
        const isHorizontal = computed(() => {
            return rootMenu.isHorizontal.value
        })
        const handleLiClick = ()=>{
            console.log('已经触发了')
            rootMenu.ctx.emit('aaaaaaaaaaaaaa','ok')
        }
        return {
            isHorizontal,
            handleLiClick,
        }
    },
})
</script>

<style lang="scss" scoped>
.bcy-menu-item {
    list-style-type: none;
    color: #303133;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    box-sizing: border-box;
    white-space: nowrap;
    &:hover,
    &:focus {
        background: #ecf5ff;
    }
}
.bcy-menu-item--horizontal{
    display: inline;
}
</style>

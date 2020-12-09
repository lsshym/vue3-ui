<template>
    <ul class="bcy-menu" :style="{ ...style }" :class="[{ 'bcy-menu--horizontal': isHorizontal }]" @click="handleClick">
        <slot></slot>
    </ul>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, toRefs } from 'vue'
export default defineComponent({
    name: `m-menu`,
    props: {
        style: {
            type: CSSStyleDeclaration,
        },
        mode: {
            type: String,
            default: 'vertical',
            validator: (value: string) => {
                return ['horizontal ', 'vertical'].indexOf(value) !== -1
            },
        },
    },

    setup(props) {
        const { mode } = toRefs(props)
        
        const isHorizontal = computed(() => {
            if (mode.value === 'horizontal') {
                return true
            }
            if (mode.value === 'vertical') {
                return false
            }
        })
        const handleClick = ()=>{
            console.log('??????')
        }
        provide('rootMenu', {
            isHorizontal,
        })
        return {
            isHorizontal,
            handleClick
        }
    },
})
</script>

<style lang="scss" scoped>
.bcy-menu {
    border-right: 1px solid #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #fff;
}
.bcy-menu--horizontal {
    border-right: none;
}
</style>

<template>
    <ul class="bcy-menu" :style="{ ...style }" :class="[{ 'bcy-menu--horizontal': isHorizontal }]">
        <slot></slot>
    </ul>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide, toRefs } from 'vue'
import mitt from 'mitt'
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
    setup(props, ctx) {
        const rootMenuEmitter = mitt()

        const isHorizontal = computed(() => {
            if (props.mode === 'horizontal') {
                return true
            }
            if (props.mode === 'vertical') {
                return false
            }
        })
        const handleItemClick = (value: any) => {
            ctx.emit('click', value)
        }
        provide('rootMenu', {
            ctx,
            isHorizontal,
            rootMenuEmit: rootMenuEmitter.emit,
            rootMenuOn: rootMenuEmitter.on,
        })
        onMounted(() => {
            rootMenuEmitter.on('menuItem:item-click', handleItemClick)
        })
        return {
            isHorizontal,
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

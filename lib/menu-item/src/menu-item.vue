<template>
    <li
        class="bcy-menu-item"
        :class="[
            {
                'bcy-menu-item--horizontal': isHorizontal,
            },
        ]"
        @click="handleLiClick"
        ref="liDom"
    >
        <span>
            <slot></slot>
        </span>
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, toRefs } from 'vue'
export default defineComponent({
    name: `m-menu-item`,
    props: {
        index: {
            type: [String, Number],
            require: true,
        },
    },
    setup(props, { emit }) {
        const rootMenu = inject<any>('rootMenu')

        const liDom = ref<any>(null)
        const isHorizontal = computed(() => {
            return rootMenu.isHorizontal.value
        })
        const handleLiClick = (evt: MouseEvent) => {
            evt.stopPropagation()
            emit('click', props.index, liDom.value)
            rootMenu.rootMenuEmit('menuItem:item-click', {
                index: props.index,
            })
        }
        return {
            isHorizontal,
            handleLiClick,
            liDom,
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
.bcy-menu-item--horizontal {
    display: inline;
}
</style>

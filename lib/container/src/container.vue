<template>
    <section class="bcy-container" :class="{ 'is-vertical': isVertical }">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
export default defineComponent({
    name: `Container`,
    props: {
        direction: {
            type: String,
            validator: (value: string) => {
                return ['horizontal', 'vertical'].indexOf(value) !== -1
            },
        },
    },
    setup(props, { slots }) {
        const isVertical = computed(() => {
            if (props.direction === 'horizontal') {
                return false
            }
            if (props.direction === 'vertical') {
                return true
            }
        })
        return {
            isVertical,
        }
    },
})
</script>

<style lang="scss" scoped>
.bcy-container {
    display: flex;
    flex-direction: row;
    border: 1px solid red;
}
.is-vertical{
    flex-direction: column;
}
</style>

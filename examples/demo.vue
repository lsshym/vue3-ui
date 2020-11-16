<template>
    <Container dir>
        <Main>内容测试</Main>
    </Container>
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

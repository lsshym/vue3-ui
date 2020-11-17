---
to: lib/<%= name %>/src/<%= name %>.vue
---
<template>

</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: `<%= h.changeCase.upperCaseFirst(name) %>`,
  components: {},
  props: {

  },
  setup() {

    return {

    }
  },
})
</script>

<style lang='scss' scoped>

</style>



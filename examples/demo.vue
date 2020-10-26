<template>
  <Input v-model="test" />
  {{ test }}
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  components: {},
  data() {
    return {
      test: 1,
    };
  },
  methods: {

  },
});
</script>



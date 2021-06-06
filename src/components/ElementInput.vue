<template>
  <el-input placeholder="Please input" v-model="input"></el-input>
  <span>
    {{input}}
  </span>
</template>

<script>
  import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
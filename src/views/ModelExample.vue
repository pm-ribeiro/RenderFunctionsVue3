<template>
  <h1>v-model example</h1>
  <custom-input v-model="value"></custom-input>
  <p>v-model: {{ value }}</p>
</template>

<script>
import CustomInput from "../components/CustomInput.vue";
export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
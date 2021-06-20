<template>
  <simple-header :level="levelH"></simple-header>
  <input type="range" v-model="levelH" min="1" max="6" />
  <p>Level: {{ levelH }}</p>
</template>

<script>
import SimpleHeader from "../components/SimpleHeader.vue";
export default {
  components: {
    SimpleHeader,
  },
  data() {
    return { levelH: "1" };
  },
};
</script>
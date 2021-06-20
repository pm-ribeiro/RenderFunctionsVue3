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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

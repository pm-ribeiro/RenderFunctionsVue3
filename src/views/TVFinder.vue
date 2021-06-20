<template>
  <heading level="1"> TV finder </heading>

  <MyShows>
    <template v-slot:sc="{ shows }">
      <h3 v-if="shows?.length > 0">
        Average Score: {{ computedAvg(shows).toFixed() }}
      </h3>
    </template>
  </MyShows>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import MyShows from "../components/MyShows.vue";

const computedAvg = (shows) =>
  shows.reduce((acc, info) => +info.score + acc, 0) / shows.length;
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

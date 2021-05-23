<template>
  <h3>Hello</h3>
</template>
<script>

import {h, ref} from "vue";

export default {
  setup() {
    return () => h(
      "div",
      {},
      "A Test"
    );
  }
};

</script>

<style>

.show {
  margin: 10px;
  min-width: 210px;
}

.shows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

</style>
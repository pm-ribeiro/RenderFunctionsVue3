<template>
  <div id="app">
    <div id="back-button" v-if="onRoot()">
      <router-link to="/">
        <el-button type="primary">
          <i class="el-icon-back"></i>
          Home
        </el-button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.onRoot();
    },
  },
  methods: {
    onRoot() {
      return this.$route.fullPath !== "/";
    },
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
  width: 100%;
}

#back-button {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
  padding-top: 20px;
}
</style>

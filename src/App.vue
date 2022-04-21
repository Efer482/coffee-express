<template>
  <div id="app">
    <LoadingPage />
    <MenuM />
  </div>
</template>

<script>
import MenuM from "./components/Menu.vue";
import LoadingPage from "./components/LoadingPage.vue";

export default {
  name: "App",
  components: {
    MenuM,
    LoadingPage,
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
}
</style>

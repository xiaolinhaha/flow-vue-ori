<template>
  <div id="app">
    <h1>Vue 2 + TypeScript 项目初始化完成</h1>
    <p>Node 版本要求：10.15.3</p>
    <Home />
  </div>
</template>

<script lang="ts">
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: { Home },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Helvetica Neue", "Noto Sans", "Liberation Sans", sans-serif;
  line-height: 1.4;
  padding: 24px;
}
</style>
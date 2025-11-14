<template>
  <div id="app">
    <h1>Vue 2 + TypeScript 项目初始化完成</h1>
    <p>Node 版本要求：10.15.3</p>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  line-height: 1.4;
  padding: 24px;
}
</style>
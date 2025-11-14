<template>
  <div class="sticky"><slot /></div>
  
</template>

<script>
export default { name: 'Sticky' }
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
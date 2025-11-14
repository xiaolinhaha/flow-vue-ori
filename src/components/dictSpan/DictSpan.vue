<template>
  <span>{{ display }}</span>
</template>

<script>
export default {
  name: 'DictSpan',
  props: {
    value: { type: [String, Number], default: '' },
    text: { type: String, default: '' },
  },
  computed: {
    display() {
      return this.text || String(this.value)
    },
  },
}
</script>
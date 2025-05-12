<script setup lang="ts">
const props = defineProps(['foobar'])

console.log(props.foobar)
</script>

<template>
  <div>
    <h1>I am the child view</h1>
    <p>{{ $props }}</p>
  </div>
</template>
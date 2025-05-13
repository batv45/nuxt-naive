<script setup lang="ts">
import { NButton, NConfigProvider, useMessage } from "naive-ui";

const message = useMessage();

function go() {
  message.info("ÖRNEK");
}
definePageMeta({
  layout: "app",
});

useHead({
  title: "Ana Sayfa",
});
</script>

<template>
  <div class="bg-gray-3">
    <span class="text-12 bg-red">CONTENT</span>
    <h1>MERHABA BURASU INDEX NUXT</h1>
    <NButton @click="go">Hello World</NButton>
  </div>
</template>

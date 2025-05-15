<script setup lang="ts">
import { NButton, NConfigProvider, useMessage } from "naive-ui";

function go() {
  $message.info("ÖRNEK");
}
definePageMeta({
  layout: "app-vertical",
});

useHead({
  title: "Ana Sayfa",
});
</script>

<template>
  <div class="">
    <span class="text-12 bg-red">CONTENT</span>
    <h1>MERHABA BURASU INDEX NUXT</h1>
    <div class="space-x-2">
      <NButton type="primary" @click="go">Hello World</NButton>
      <NButton type="primary" @click="setPageLayout(false)"
        >layout false</NButton
      >
      <NButton type="primary" @click="setPageLayout('app-vertical')"
        >layout vertical</NButton
      >
      <NButton type="primary" @click="setPageLayout('app-horizontal')"
        >layout horizontal</NButton
      >
    </div>
  </div>
</template>

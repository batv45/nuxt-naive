<script setup lang="ts">
import { NFlex } from "naive-ui";
</script>

<template>
  <NFlex
    vertical
    class="text-2xl text-orange-600 font-bold p-2 px-4 text-center border rounded cursor-pointer shadow-sm hover:shadow"
    @click.prevent="$router.push('/')"
  >
    <span>EcuPro</span>
  </NFlex>
</template>

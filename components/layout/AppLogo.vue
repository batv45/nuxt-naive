<script setup lang="ts">
import { NFlex } from "naive-ui";
</script>

<template>
  <NFlex
    vertical
    class="text-2xl text-orange-600 font-bold p-1 px-4 text-center bg-gray-1 rounded cursor-pointer  shadow-sm shadow-gray-3 hover:shadow-md"
    @click.prevent="$router.push('/')"
  >
    <span>EcuPro</span>
  </NFlex>
</template>

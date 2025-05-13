<script setup lang="ts">
import { NFlex, NAlert, NText } from "naive-ui";
defineProps<{
  errors: any[];
}>();
</script>

<template>
  <n-flex v-if="errors?.length" class="mb-5">
    <n-alert title="Upps." type="error" class="w-full">
      <n-text v-for="(err, ind) in errors" :key="ind">
        {{ err.detail }} <br />
      </n-text>
    </n-alert>
  </n-flex>
</template>

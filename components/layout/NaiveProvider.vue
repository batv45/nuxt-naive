<script setup lang="ts">
import {
  NThemeEditor,
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
} from "naive-ui";
</script>

<template>
  <NLoadingBarProvider>
    <NDialogProvider>
      <NNotificationProvider>
        <NMessageProvider
          placement="bottom-right"
          container-class="xl:mb-5 xl:mr-5 z-99999999"
          :duration="5000"
        >
          <slot />
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>

<style scoped></style>

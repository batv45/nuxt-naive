<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  NDialogProvider,
  NSpace,
} from "naive-ui";

import { darkTheme, dateTrTR, NLayout, trTR } from "naive-ui";
import themeDark from "~/theme.dark.json";
import themeLight from "~/theme.light.json";

const isDark = false;

const naiveLocale = {
  locale: trTR,
  dateLocale: dateTrTR,
};
</script>

<template>
  <NConfigProvider
    class="w-full h-full"
    inline-theme-disabled
    :theme="isDark ? darkTheme : null"
    :locale="naiveLocale.locale"
    :date-locale="naiveLocale.dateLocale"
    :theme-overrides="isDark ? themeDark : themeLight"
  >
    <LayoutNaiveProvider>
      <NLayout class="h-screen">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NLayout>
    </LayoutNaiveProvider>
  </NConfigProvider>
</template>

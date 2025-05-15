<script setup lang="ts">
import {
  NThemeEditor,
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  useLoadingBar,
  useDialog,
  useMessage,
  useNotification,
} from "naive-ui";

// Methods to mount the Naive component to Window so that you can call in the routing hook function and request function
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  window.$dialog = useDialog();
  window.$message = useMessage();
  window.$notification = useNotification();
}

const NaiveProviderContent = defineComponent({
  name: "NaiveProviderContent",
  setup() {
    registerNaiveTools();
  },
  render() {
    return h("div");
  },
});
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
          <NThemeEditor>
            <slot />
            <NaiveProviderContent />
          </NThemeEditor>
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>

<style scoped></style>

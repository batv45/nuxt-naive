<script lang="ts" setup>
import { NFlex, NLayout, NLayoutContent, NLayoutSider } from "naive-ui";
</script>

<template>
  <NLayout has-sider>
    <NLayoutSider content-class="border border-dark">
      <div class="w-25">
        <LayoutAppLogo></LayoutAppLogo>
      </div>
    </NLayoutSider>
    <NLayout>
      <NLayoutContent class="border-b">
        <div>üst menü</div>
      </NLayoutContent>
      <NLayoutContent>
        <slot />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

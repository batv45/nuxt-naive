<script lang="ts" setup>
import { NFlex, NLayout, NLayoutContent, NLayoutSider } from "naive-ui";
</script>

<template>
  <NLayout has-sider >
    <NLayoutSider bordered class=" h-screen">
      <div class="logo flex justify-center mt-2 px-4">
        <LayoutAppLogo class="w-full"></LayoutAppLogo>
      </div>

      <div class="menu">
          <div>
            <NuxtLink to="/">Ana Sayfa</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/">Projeler</NuxtLink>
          </div>
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

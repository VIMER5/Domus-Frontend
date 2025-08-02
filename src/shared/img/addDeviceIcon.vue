<script lang="ts" setup>
defineProps<{ active?: boolean }>();
</script>

<template>
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="33" y2="33" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="var(--dm-c-gradiend-c1)" />
        <stop offset="100%" stop-color="var(--dm-c-gradiend-c2)" />
      </linearGradient>
    </defs>

    <g :class="{ visible: !active }">
      <circle cx="16.5" cy="16.5" r="11.55" stroke="var(--dm-c-Dark-Charcoal)" stroke-width="1.9" />
      <path
        d="M16.5 10.9443L16.5 22.0554"
        stroke="var(--dm-c-Dark-Charcoal)"
        stroke-width="1.9"
        stroke-linecap="round"
      />
      <path
        d="M22.0557 16.5L10.9446 16.5"
        stroke="var(--dm-c-Dark-Charcoal)"
        stroke-width="1.9"
        stroke-linecap="round"
      />
    </g>

    <g :class="{ visible: active }">
      <circle cx="16.5" cy="16.5" r="11.55" stroke="url(#grad1)" stroke-width="1.9" />
      <path d="M16.5 10.9443L16.5 22.0554" stroke="url(#grad1)" stroke-width="1.9" stroke-linecap="round" />
      <path d="M22.0557 16.5L10.9446 16.5" stroke="url(#grad1)" stroke-width="1.9" stroke-linecap="round" />
    </g>
  </svg>
</template>

<style scoped>
g {
  opacity: 0;
  transition: opacity 1s ease;
}
g.visible {
  opacity: 1;
}
</style>

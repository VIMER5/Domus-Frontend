<script setup lang="ts"></script>

<template>
  <div class="widget__panel"><slot></slot></div>
</template>

<style scoped>
.widget__panel {
  padding: 3rem 3rem;
  background-color: var(--BC-c-panel-widgets);
  border-radius: 1.8rem;
  box-shadow: var(--box-shadow-panel);
}
</style>

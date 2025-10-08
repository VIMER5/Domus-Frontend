<script setup lang="ts"></script>

<template>
  <div class="widget__panel"><slot></slot></div>
</template>

<style scoped>
.widget__panel {
  padding: clamp(1.9rem, 2dvw, 3rem);
  background-color: var(--BC-c-panel-widgets);
  border-radius: 1.8rem;
  box-shadow: var(--box-shadow-panel);
  cursor: pointer;
  position: relative;
  top: 0;
  transition: top 0.3s;
}
.widget__panel:hover {
  top: -10px;
}
</style>

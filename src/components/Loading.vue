<script setup lang="ts">
import { Loader } from 'lucide-vue-next'

defineProps<{
  loading?:boolean
}>()
</script>

<template>
  <div class="position-relative">
    <slot />
    <span class="loader" v-if="loading">
      <Loader :size="28" color="#999"/>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.loader{
  position: absolute;
  animation: rotate 2s linear infinite;
  left: calc(50% - 14px);
  top: calc(50% - 14px);
  z-index: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
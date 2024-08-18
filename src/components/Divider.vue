<script lang="ts" setup>
defineProps<{
  color?: string
}>()
</script>

<template>
  <div :style="{ 'border-bottom': `solid 1px ${color || '#eee'}` }"></div>
</template>

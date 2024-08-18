<script setup lang="ts">
defineProps<{
  value: number
}>()
</script>

<template>
  <div class="flex gap-1">
    <div
      class="star"
      v-for="i in 5"
      :key="i"
      :class="{
        full: value >= i,
        half: value < i && value >= i - 0.5
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.star {
  --size: 12px;
  background: url('@/assets/icons/star.svg') 50% no-repeat;
  background-size: 100%;
  width: var(--size);
  height: var(--size);
  &.full {
    background-image: url('@/assets/icons/star-full.svg');
  }
  &.half {
    background-image: url('@/assets/icons/star-half.svg');
  }
}
</style>

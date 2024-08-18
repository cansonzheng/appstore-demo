<script setup lang="ts">
import { AppItemModel } from '@/models'

withDefaults(
  defineProps<{
    horizontal?: boolean
    data: AppItemModel
    size: number
    circle?: boolean
  }>(),
  {
    size: 80
  }
)
</script>

<template>
  <div
    class="app-item flex-shrink-0"
    :class="{ horizontal }"
    :style="{ '--icon-width': `${size}px` }"
  >
    <div class="icon">
      <img :class="{ 'rd-[50%]!': circle }" :alt="data.name" :src="data.icon" />
    </div>
    <div class="desc">
      <div class="text-truncate w-full text-4">{{ data.name }}</div>
      <div class="color-[#999] text-3 mt-1">{{ data.category }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-item {
  img {
    width: 100%;
    vertical-align: top;
    border-radius: calc(var(--icon-width) * 0.2);
  }
  &:not(.horizontal) {
    width: var(--icon-width);
    flex-direction: column;
    text-align: center;
    .icon {
      width: 100%;
      margin-bottom: 8px;
    }
  }
  &.horizontal {
    display: flex;
    gap: 16px;
    .icon {
      width: var(--icon-width);
      flex-shrink: 0;
    }
    .desc {
      width: 0;
      flex-grow: 1;
    }
  }
}
</style>

<script setup lang="ts">
import { AppItemModel } from '@/models'
import Rating from './Rating.vue'
const props = withDefaults(
  defineProps<{
    horizontal?: boolean
    data: AppItemModel
    size: number
    circle?: boolean
    rating?: boolean
  }>(),
  {
    size: 80
  }
)

// 处理高分屏的图片大小
const iconImg = computed(() => {
  const ratio = window.devicePixelRatio
  return props.data.iconSize(props.size * ratio)
})
</script>

<template>
  <div
    class="app-item flex-shrink-0"
    :class="{ horizontal }"
    :style="{ '--icon-width': `${size}px` }"
  >
    <div class="icon">
      <img :class="{ 'rd-[50%]!': circle }" :alt="data.name" :src="iconImg" />
    </div>
    <div class="desc">
      <div class="text-truncate w-full text-4">{{ data.name }}</div>
      <div class="color-[#999] text-3 mt-1">{{ data.category }}</div>
      <div
        v-if="rating"
        class="flex items-center gap-2 mt-2"
        :class="horizontal ? '' : 'flex-wrap justify-center'"
      >
        <Rating :value="data.rating" />
        <span class="color-[#999] text-3">({{ data.ratingCount }})</span>
      </div>
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

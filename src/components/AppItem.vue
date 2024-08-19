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

// 图标图片
const iconImg = ref('')
// 处理图片懒加载
function intersect(visible:boolean){
  if(visible){
    // 图片大小，计算高分屏的多倍大小
    const size = props.size * window.devicePixelRatio
    iconImg.value = props.data.customIconSize(size)
  }
}
</script>

<template>
  <div
    class="app-item flex-shrink-0"
    :class="{ horizontal }"
    :style="{ '--icon-width': `${size}px` }"
    v-intersect="intersect"
  >
    <div class="icon" :class="{ 'rd-[50%]!': circle }" :style="iconImg?{backgroundImage:`url(${iconImg})`}:{}">
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
  .icon {
    width: var(--icon-width);
    height: var(--icon-width);
    border-radius: calc(var(--icon-width) * 0.2);
    flex-shrink: 0;
    background: 50% no-repeat #fafafa;
    background-size: 100% 100%;
  }
  &:not(.horizontal) {
    width: var(--icon-width);
    flex-direction: column;
    text-align: center;
    .icon {
      margin-bottom: 8px;
    }
  }
  &.horizontal {
    display: flex;
    gap: 16px;
    .desc {
      width: 0;
      flex-grow: 1;
    }
  }
}
</style>

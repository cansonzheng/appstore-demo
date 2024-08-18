<script setup lang="ts">
import { AppItemModel } from '@/models'
import api from '@/api/index'
import AppItem from './AppItem.vue'
import Divider from './Divider.vue'

const props = defineProps<{
  filterKeyword?: string
}>()

const data = ref<AppItemModel[]>([])
const dataFilted = computed(() => {
  if (!props.filterKeyword) return data.value
  // 匹配应用名、开发者名、应用描述
  return data.value.filter((v) => {
    const arr = [
      v.name.toLocaleLowerCase(),
      v.artist.toLocaleLowerCase(),
      v.summary.toLocaleLowerCase()
    ]
    return arr.filter((vv) => vv.includes(props.filterKeyword?.toLocaleLowerCase()!)).length
  })
})

// 获取应用数据
async function getData() {
  const res = await api.getFreeApps()
  data.value = res.feed.entry.map((v) => new AppItemModel(v))
  getAppRating()
}

// 获取评分数据
async function getAppRating() {
  const res = await api.lookupApps(data.value.map((v) => v.id))
  // ID数组用于快速查找数据下标
  const ids = data.value.map((v) => v.id)

  res.results.forEach((v) => {
    // 查找到对应数据的下标
    const idx = ids.indexOf(v.trackId.toString())
    if (idx > -1) {
      data.value[idx].rating = v.averageUserRating
      data.value[idx].ratingCount = v.userRatingCount
    }
  })
}

getData()
</script>

<template>
  <div class="flex flex-col pa-4 pr-0 gap-3">
    <template v-for="(item, i) in dataFilted" :key="item.id">
      <Divider v-if="i" />
      <div class="flex gap-1 items-center">
        <div class="color-[#999] text-3 flex-shrink-0 w-[2em]">{{ i + 1 }}</div>
        <AppItem class="flex-1" :data="item" horizontal :size="64" :circle="i % 2 === 1" rating />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {PackageOpen} from 'lucide-vue-next'
import { AppItemModel } from '@/models'
import api from '@/api/index'
import AppItem from './AppItem.vue'
import Divider from './Divider.vue'
import Loading from './Loading.vue'

const props = defineProps<{
  filterKeyword?: string
}>()

const loading=ref(false)
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
  loading.value=true
  const res = await api.getFreeApps()
  loading.value=false
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
  <Loading :loading="loading" class="min-h-[280px]">
    <div v-if="data.length&&!dataFilted.length" class="empty flex justify-center items-center flex-col min-h-[280px] gap-2">
      <PackageOpen :size="48" color="#ccc" :stroke-width="1"/>
      <div class="color-[#ccc] text-4">未找到相关应用</div>
    </div>
    <div v-else class="flex pa-4 pr-0 gap-4 flex-wrap lt-md:flex-col">
      <div v-for="(item, i) in dataFilted" :key="item.id" class="item flex gap-1 items-center pb-4">
        <div class="color-[#999] text-3 flex-shrink-0 w-[2em]">{{ i + 1 }}</div>
        <AppItem class="flex-1" :data="item" horizontal :size="64" :circle="i % 2 === 1" rating />
      </div>
    </div>
  </Loading>
</template>

<style lang="scss" scoped>
.item{
  --width: 25%;
  border-bottom: solid 1px #eee;
  box-sizing: border-box;
  width: calc(var(--width) - 16px);

  @include media('l-down'){
    --width: 33%;
  }
  @include media('m-down'){
    --width: 50%;
  }
  @include media('s-down'){
    width:100%;
    
  }
}
</style>
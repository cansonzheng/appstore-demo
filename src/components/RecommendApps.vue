<script setup lang="ts">
import { AppItemModel } from '@/models'
import api from '@/api/index'
import AppItem from './AppItem.vue'

const data = ref<AppItemModel[]>([])

async function getData() {
  const res = await api.getRecommendApps()
  console.log(res)
  data.value = res.feed.entry.map((v) => new AppItemModel(v))
}

getData()
</script>

<template>
  <div>
    <h2>Recommend</h2>
    <div class="flex">
      <AppItem v-for="item in data" :key="item.name" :data="item" />
    </div>
  </div>
</template>

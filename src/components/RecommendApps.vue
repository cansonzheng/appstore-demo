<script setup lang="ts">
import { AppItemModel } from '@/models'
import api from '@/api/index'
import AppItem from './AppItem.vue'

const data = ref<AppItemModel[]>([])

async function getData() {
  const res = await api.getGrossingApps()
  data.value = res.feed.entry.map((v) => new AppItemModel(v))
}

getData()
</script>

<template>
  <div>
    <h2 class="text-5 px-4">Recommend</h2>
    <div class="flex overflow-x-auto px-4 gap-4">
      <AppItem v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

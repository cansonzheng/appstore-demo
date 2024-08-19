<script setup lang="ts">
import { AppItemModel } from '@/models'
import api from '@/api/index'
import AppItem from './AppItem.vue'
import Loading from './Loading.vue'

const data = ref<AppItemModel[]>([])
const loading=ref(false)
async function getData() {
  loading.value=true
  const res = await api.getGrossingApps()
  loading.value=false
  data.value = res.feed.entry.map((v) => new AppItemModel(v))
}

getData()
</script>

<template>
  <div>
    <h2 class="text-5 px-4">Recommend</h2>
    <div class="overflow-hidden">
      <Loading :loading="loading" class="min-h-[120px]">
        <div class="flex overflow-x-auto px-4 gap-4 pb-4 mb--2">
          <AppItem v-for="item in data" :key="item.id" :data="item" />
        </div>
      </Loading>
    </div>
  </div>
</template>

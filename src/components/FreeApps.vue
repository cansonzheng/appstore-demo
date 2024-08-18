<script setup lang="ts">
import { AppItemModel } from '@/models'
import api from '@/api/index'
import AppItem from './AppItem.vue'
import Divider from './Divider.vue'

const data = ref<AppItemModel[]>([])

async function getData() {
  const res = await api.getFreeApps()
  data.value = res.feed.entry.map((v) => new AppItemModel(v))
}

getData()
</script>

<template>
  <div class="flex flex-col pa-4 pr-0 gap-3">
    <template v-for="(item, i) in data" :key="item.name">
      <Divider v-if="i" />
      <div class="flex gap-1 items-center">
        <div class="color-[#999] text-3 flex-shrink-0 w-[2em]">{{ i + 1 }}</div>
        <AppItem class="flex-1" :data="item" horizontal :size="64" :circle="i % 2 === 1" />
      </div>
    </template>
  </div>
</template>

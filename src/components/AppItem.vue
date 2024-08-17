<script setup lang="ts">
import { AppItemModel } from '@/models'

defineProps<{
  horizontal?: boolean
  data: AppItemModel
}>()
</script>

<template>
  <div class="flex items-center flex-col w-[100px] text-center">
    <div><img :src="data.icon" /></div>
    <div class="text-truncate w-full text-4">{{ data.name }}</div>
    <div class="color-[#999] text-3">{{ data.category }}</div>
  </div>
</template>

<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import RecommendApps from './components/RecommendApps.vue'
import FreeApps from './components/FreeApps.vue'
import Divider from './components/Divider.vue'

const keyword = ref('')
</script>

<template>
  <SearchBox v-model="keyword" />
  <RecommendApps />
  <Divider class="mb-4 mt-3" />
  <FreeApps :filterKeyword="keyword" />
</template>

<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import RecommendApps from './components/RecommendApps.vue'
import FreeApps from './components/FreeApps.vue'
import Divider from './components/Divider.vue'
</script>

<template>
  <SearchBox />
  <RecommendApps />
  <Divider class="my-4" />
  <FreeApps />
</template>

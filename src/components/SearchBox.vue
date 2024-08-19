<script setup lang="ts">
import { Search,CircleX } from 'lucide-vue-next'
defineProps<{
  modelValue: string
}>()
const emits = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

function handleInput(e: Event) {
  const v = (e.target as HTMLInputElement).value
  emits('update:modelValue', v)
}
</script>

<template>
  <div class="search-box pa-3 bg-white z-[10]">
    <div class="search-box_inner flex bg-[#f4f4f4] items-center gap-2">
      <Search :size="20" color="#999" />
      <input
        type="text"
        class="grow-1"
        placeholder="Search..."
        :value="modelValue"
        @input="handleInput"
      />
      <CircleX v-if="modelValue" :size="18" color="#999" @click="emits('update:modelValue', '')"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  --input-height: 48px;
  position: sticky;
  top: 0;
  border-bottom: solid 1px #eee;
  &_inner {
    height: var(--input-height);
    border-radius: calc(var(--input-height) / 2);
    padding: 0 calc(var(--input-height) / 4);
    input {
      outline: none;
      border: none;
      background: none;
    }
  }
}
</style>

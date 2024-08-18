<script setup lang="ts"></script>

<template>
  <div class="search-box pa-3 bg-white">
    <div class="search-box_inner flex bg-[#f4f4f4]">
      <input type="text" class="grow-1" placeholder="Search..." />
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
    padding: 0 calc(var(--input-height) / 2);
    input {
      outline: none;
      border: none;
      background: none;
    }
  }
}
</style>

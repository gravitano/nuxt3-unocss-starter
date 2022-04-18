<script lang="ts" setup>
const props = defineProps<{
  icon?: string;
  appendIcon?: string;
  text?: string;
  child?: boolean;
  parent?: boolean;
}>();
</script>

<template>
  <nuxt-link
    class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
  >
    <div v-if="child" class="w-5"></div>
    <div v-else-if="icon" class="w-5 h-5" :class="icon" />
    <span class="flex-grow">
      <slot>{{ text }}</slot>
    </span>
    <div v-if="parent" class="i-ri-arrow-right-s-line w-5 h-5" />
    <div v-else-if="appendIcon" class="w-5 h-5" :class="appendIcon" />
  </nuxt-link>
</template>

<style scoped></style>

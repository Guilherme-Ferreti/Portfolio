<template>
  <details class="border rounded-lg border-gray-600 group">
    <summary
      class="cursor-pointer text-dark p-1 list-none flex justify-between items-center -outline-offset-3"
    >
      <span>{{ summary }}</span>
      <IconChevronDown class="group-[&[open]]:rotate-180 transition-transform duration-300" />
    </summary>
    <div class="p-1 border-t border-gray-600">
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
import { IconChevronDown } from '@tabler/icons-vue';

defineProps<{
  summary: string;
}>();
</script>

<style scoped>
details {
  interpolate-size: allow-keywords;
  overflow: hidden;

  &::details-content {
    transition:
      block-size 350ms,
      content-visibility 350ms;
    transition-behavior: allow-discrete;
    block-size: 0;
  }

  &:open::details-content {
    block-size: auto;
  }
}
</style>

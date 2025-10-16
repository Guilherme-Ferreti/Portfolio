<script setup lang="ts">
import { IconBrandGithubFilled, IconBrandLinkedinFilled } from '@tabler/icons-vue';

defineEmits<{
  close: [];
}>();
defineProps<{ isOpen?: boolean }>();
</script>

<template>
  <aside
    class="bg-white p-1.5 max-w-20 h-screen fixed z-10 top-0 -left-20 transition-[left] duration-300 ease-in-out lg:static lg:left-0"
    :class="{ 'left-0': isOpen }"
  >
    <button
      class="lg:hidden"
      @click="$emit('close')"
    >
      close
    </button>
    Sidebar Lorem ipsum dolor sit.
  </aside>
</template>

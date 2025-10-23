<template>
  <a
    v-if="isExternal"
    class="app-link btn-border-reveal"
    :href="to.toString()"
    target="_blank"
    rel="external"
  >
    <span v-if="text">{{ text }}</span>
    <component
      v-if="icon"
      class="size-[1.25rem]"
      :is="icon"
    />
  </a>
  <RouterLink
    v-else
    class="app-link btn-border-reveal"
    :to="to"
  >
    <span v-if="text">{{ text }}</span>
    <component
      v-if="icon"
      class="size-[1.25rem]"
      :is="icon"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to: RouteLocationRaw;
  text?: string;
  icon?: unknown;
}>();

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
</script>

<style scoped>
@reference '@/assets/css/app.css';

.app-link {
  @apply flex flex-wrap items-center justify-center gap-1 bg-primary p-0.5 text-sm font-bold text-dark hover:text-white focus-visible:text-white;
}
</style>

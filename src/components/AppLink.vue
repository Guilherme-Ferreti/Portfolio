<template>
  <a
    v-if="isExternal"
    class="app-link btn-border-reveal"
    :href="to.toString()"
    target="_blank"
    rel="external"
    :data-color="color"
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

const props = withDefaults(
  defineProps<{
    to: RouteLocationRaw;
    text?: string;
    icon?: unknown;
    color?: 'primary' | 'secondary';
  }>(),
  {
    text: undefined,
    icon: undefined,
    color: 'primary',
  },
);

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
</script>

<style scoped>
@reference '@/assets/css/app.css';

.app-link {
  @apply flex flex-wrap items-center justify-center gap-1 p-0.5 text-sm font-bold;
}

.app-link[data-color='primary'] {
  @apply bg-primary text-dark hover:text-white focus-visible:text-white;
}

.app-link[data-color='secondary'] {
  @apply bg-gray-600 text-dark;
}
</style>

<template>
  <a
    v-if="isExternal"
    class="app-link"
    :href="to.toString()"
    target="_blank"
    rel="external"
  >
    <slot />
  </a>
  <RouterLink
    v-else
    class="app-link"
    :to="to"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to: RouteLocationRaw;
}>();

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
</script>

<style scoped>
@reference '@/assets/css/app.css';

.app-link {
  @apply relative z-10 flex flex-wrap items-center justify-center gap-1 overflow-hidden bg-primary p-0.5 text-sm font-bold text-dark transition-colors duration-400 ease-in-out hover:text-white focus-visible:text-white;
}

.app-link ::before {
  @apply absolute top-0 left-0 -z-10 size-full -translate-x-full bg-primary brightness-90 transition-transform duration-400 ease-in-out content-[''];
}

.app-link:hover ::before,
.app-link:focus-visible ::before {
  @apply translate-x-0;
}
</style>

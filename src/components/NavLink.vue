<template>
  <li>
    <RouterLink
      :to="to"
      custom
      v-slot="{ href, navigate }"
    >
      <a
        v-bind="$attrs"
        :href="href"
        @click="navigate"
        class="nav-link btn-border-reveal"
        :class="{
          'nav-link--active': isActive,
          'nav-link--inactive': !isActive,
        }"
      >
        <component
          class="size-1.25"
          :is="icon"
        />
      </a>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { type RouteLocationRaw } from 'vue-router';

defineProps<{
  icon: unknown;
  to: RouteLocationRaw;
  isActive: boolean;
}>();
</script>

<style scoped>
@reference '@/assets/css/app.css';

.nav-link {
  @apply flex items-center justify-center rounded-full p-0.5 text-sm font-bold;
}

.nav-link--active {
  @apply bg-primary text-white;
}

.nav-link--inactive {
  @apply bg-gray-600 text-dark;
}
</style>

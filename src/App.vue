<script setup lang="ts">
import { ref } from 'vue';
import TheNavbar from './components/TheNavbar.vue';
import TheSidebar from './components/TheSidebar.vue';

const isOpen = ref(false);
</script>

<template>
  <div
    class="grid gap-y-[var(--spacing-screen-padding)] lg:grid-cols-[[sidebar-start]_auto_[sidebar-end]_1fr_[navbar-start]_auto_[navbar-end]] lg:items-start"
  >
    <TheNavbar
      class="lg:col-start-[navbar-start] lg:col-end-[navbar-end] lg:row-start-1 lg:sticky lg:top-0"
      @toggle-sidebar="isOpen = !isOpen"
    />
    <TheSidebar
      class="lg:col-start-[sidebar-start] lg:col-end-[sidebar-end] lg:row-start-1"
      :is-open="isOpen"
      @close="isOpen = false"
    />
    <main>
      <RouterView />
    </main>
  </div>
</template>

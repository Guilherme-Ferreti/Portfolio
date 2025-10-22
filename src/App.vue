<template>
  <div
    class="grid gap-y-[var(--spacing-screen-padding)] lg:grid-cols-[[sidebar-start]_auto_[sidebar-end]_1fr_[navbar-start]_auto_[navbar-end]] lg:items-start"
  >
    <header
      class="lg:col-start-[navbar-start] lg:col-end-[navbar-end] lg:row-start-1 lg:sticky lg:top-0"
    >
      <TheNavbar />
    </header>
    <main id="main-content">
      <RouterView />
    </main>
    <div
      class="lg:col-start-[sidebar-start] lg:col-end-[sidebar-end] lg:row-start-1 lg:sticky lg:top-0"
    >
      <TheSidebar class="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue';
import TheSidebar from './components/TheSidebar.vue';
</script>

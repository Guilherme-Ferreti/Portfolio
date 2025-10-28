<template>
  <TheSkipToContentLink />
  <div
    class="grid max-w-[var(--screen-max-width)] mx-auto lg:grid-cols-[[sidebar-start]_auto_[sidebar-end]_1fr_[navbar-start]_auto_[navbar-end]] lg:items-start"
  >
    <header
      class="mb-[var(--spacing-screen-padding)] lg:col-start-[navbar-start] lg:col-end-[navbar-end] lg:row-start-1 lg:sticky lg:top-0 lg:mb-0"
    >
      <TheNavbar />
    </header>
    <div
      class="lg:col-start-[sidebar-start] lg:col-end-[sidebar-end] lg:row-start-1 lg:sticky lg:top-0"
    >
      <TheSidebar />
    </div>
    <div>
      <main
        id="main-content"
        class="mb-[var(--spacing-screen-padding)]"
      >
        <RouterView />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';
import TheSidebar from './components/TheSidebar.vue';
import TheSkipToContentLink from './components/TheSkipToContentLink.vue';
</script>

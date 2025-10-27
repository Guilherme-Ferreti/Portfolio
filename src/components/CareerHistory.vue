<template>
  <div class="card @container space-y-1.75">
    <template v-for="(entry, index) in history">
      <div class="grid @xl:grid-cols-[1fr_2fr] gap-2">
        <div>
          <h3 class="text-dark text-lg font-bold">{{ entry.title }}</h3>
          <div class="flex gap-0.75 flex-wrap items-center mt-1">
            <span class="text-dark">{{ entry.company }}</span>
            <span class="bg-primary text-white p-0.25 text-sm">
              {{ entry.startDate }} - {{ entry.endDate }}
            </span>
          </div>
        </div>
        <div
          v-html="entry.description"
          class="career-history__description"
        ></div>
      </div>
      <hr
        class="divider"
        v-if="index !== history.length - 1"
      />
    </template>
  </div>
</template>

<script lang="ts">
interface CarrerHistoryEntry {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Props {
  history: CarrerHistoryEntry[];
}
</script>

<script setup lang="ts">
defineProps<Props>();
</script>

<style scoped>
@reference '@/assets/css/app.css';

.career-history__description :deep(p) {
  @apply mb-0.75;
}

.career-history__description :deep(ul) {
  @apply list-inside list-disc space-y-0.5;
}
</style>

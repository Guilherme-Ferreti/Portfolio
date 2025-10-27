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
        <div>
          <p>{{ entry.description }}</p>
          <AppDetails
            summary="Main responsabilities"
            class="mt-1.25"
          >
            <ul class="list-inside list-disc space-y-0.5">
              <li
                v-for="responsability in entry.responsabilities"
                class="list-outside ml-1"
              >
                {{ responsability }}
              </li>
            </ul>
          </AppDetails>
        </div>
      </div>
      <hr
        class="divider"
        v-if="index !== history.length - 1"
      />
    </template>
  </div>
</template>

<script lang="ts">
interface CareerHistoryEntry {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  responsabilities: string[];
}

interface Props {
  history: CareerHistoryEntry[];
}
</script>

<script setup lang="ts">
import AppDetails from './AppDetails.vue';

defineProps<Props>();
</script>

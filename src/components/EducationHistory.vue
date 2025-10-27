<template>
  <div class="@container card">
    <div class="gap-1.5 grid @lg:grid-cols-[1fr_1fr]">
      <div
        v-for="entry in educationHistory"
        class="p-1 border border-gray-600 rounded-lg hover:bg-gray-100 flex flex-col justify-between gap-0.75"
      >
        <h3 class="text-dark text-lg font-bold">{{ entry.title }}</h3>
        <div class="flex gap-0.75 flex-wrap items-center mt-auto">
          <span class="text-dark">{{ entry.institution }}</span>
          <span class="bg-primary text-white p-0.25 text-sm">
            {{ entry.endDate }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const educationHistory = [
  {
    title: 'Systems Analysis and Development Technician',
    institution: 'ETEC Lauro Gomes',
    endDate: '2019',
  },
  {
    title: 'Hcode Lab Web Starter HTML & CSS',
    institution: 'Hcode Trainings',
    endDate: '2020',
  },
  {
    title: 'Hcode Lab JavaScript Developer',
    institution: 'Hcode Trainings',
    endDate: '2021',
  },
  {
    title: 'PHP 8 - The Language',
    institution: 'Hcode Trainings',
    endDate: '2021',
  },
  {
    title: 'Hcode Lab Database Developer',
    institution: 'Hcode Trainings',
    endDate: '2021',
  },
  {
    title: 'Hcode Lab Front-end Developer',
    institution: 'Hcode Trainings',
    endDate: '2021',
  },
  {
    title: 'Hcode Lab Mobile Developer',
    institution: 'Hcode Trainings',
    endDate: '2021',
  },
  {
    title: 'Hcode Lab Back-end Developer',
    institution: 'Hcode Trainings',
    endDate: '2021',
  },
];
</script>

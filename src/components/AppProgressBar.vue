<template>
  <div
    class="w-full h-0.5 p-[1.5px] border border-primary rounded-full before:block before:h-full before:bg-primary before:rounded-full before:w-(--percentage)"
    :style="`--percentage: ${percentage}%;`"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  percentage: number;
}>();
</script>

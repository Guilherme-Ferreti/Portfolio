<template>
  <section
    :id="id"
    ref="section"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout';
import { useElementVisibility } from '@vueuse/core';
import { useTemplateRef, watch } from 'vue';

const props = defineProps<{
  id: string;
}>();

const layoutStore = useLayoutStore();

const section = useTemplateRef<HTMLElement>('section');

const sectionIsVisible = useElementVisibility(section, {
  rootMargin: '0px 0px -30% 0px',
});

watch(
  () => sectionIsVisible.value,
  (newValue) => {
    newValue ? layoutStore.addVisibleSection(props.id) : layoutStore.removeVisibleSection(props.id);
  },
);
</script>

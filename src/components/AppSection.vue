<template>
  <section
    ref="section"
    :id="id"
    :aria-labelledby="title ? headingId : undefined"
  >
    <h2
      v-if="title"
      :id="headingId"
      class="mb-1 text-center text-3xl font-bold text-dark"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mb-1 mx-auto"
    >
      {{ description }}
    </p>
    <slot />
  </section>
</template>

<script setup lang="ts">
import type { AppSectionId } from '@/enums/AppSectionId';
import { useLayoutStore } from '@/stores/layout';
import { useElementVisibility } from '@vueuse/core';
import { useTemplateRef, watch } from 'vue';

const props = defineProps<{
  id: AppSectionId;
  title?: string;
  description?: string;
}>();

const headingId = `${props.id}__heading`;

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

<template>
  <div class="px-[var(--spacing-screen-padding)] space-y-3">
    <AppSection
      :id="AppSectionId.HERO"
      class="bg-white p-2 lg:p-4 @container"
      aria-labelledby="hero__heading"
    >
      <div class="@xl:w-[60%]">
        <h1
          class="text-dark text-4xl/2.75 font-bold mb-1 flex flex-col"
          id="hero__heading"
        >
          <span>I'm Guilherme Ferreti</span>
          <span><span class="text-primary">Fullstack</span> Developer</span>
        </h1>
        <p>
          Web developer with over 6 years of experience specializing in PHP, with a strong focus on
          Laravel and Vue.js for building dynamic, scalable, and high-performance applications.
        </p>
      </div>
    </AppSection>
    <AppSection
      :id="AppSectionId.SKILLS"
      title="My Skills"
    >
      <SkillsCarousel />
    </AppSection>
    <AppSection
      :id="AppSectionId.WORK_HISTORY"
      title="Work History"
    >
      <WorkHistory />
    </AppSection>
    <AppSection
      :id="AppSectionId.EDUCATION_HISTORY"
      title="Education"
    >
      <EducationHistory />
    </AppSection>
  </div>
</template>

<script lang="ts" setup>
import AppSection from '@/components/AppSection.vue';
import EducationHistory from '@/components/EducationHistory.vue';
import SkillsCarousel from '@/components/SkillsCarousel.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import { AppSectionId } from '@/enums/AppSectionId';
</script>

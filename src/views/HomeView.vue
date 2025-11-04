<template>
  <div class="px-(--spacing-screen-padding) space-y-3">
    <TheHero />
    <AppSection
      :id="AppSectionId.SKILLS"
      title="My Skills"
    >
      <SkillsCarousel />
    </AppSection>
    <AppSection
      :id="AppSectionId.PROJECTS"
      title="My Projects"
      description="Dive into a collection of projects that showcase my technical skills and problem-solving approach. These works demonstrate my hands-on experience applying technologies like Laravel and Vue.js to solve real-world challenges."
    >
      <ProjectList />
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
import ProjectList from '@/components/ProjectList.vue';
import SkillsCarousel from '@/components/SkillsCarousel.vue';
import TheHero from '@/components/TheHero.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import { AppSectionId } from '@/enums/AppSectionId';
</script>

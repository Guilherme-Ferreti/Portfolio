<template>
  <div class="select-none w-full bg-white pointer-events-none">
    <swiper-container
      class="grid items-center | skills-carousel"
      :init="false"
    >
      <swiper-slide
        v-for="skill in skills"
        :key="skill.name"
        class="border-r border-gray-600"
      >
        <div class="flex justify-center items-center p-2 h-full">
          <component
            :is="skill.logo"
            :aria-label="skill.name"
            class="max-w-10 max-h-3"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import DockerLogo from '@/assets/images/logos/docker.svg';
import FilamentPHPLogo from '@/assets/images/logos/filamentphp.svg';
import LaravelLogo from '@/assets/images/logos/laravel.svg';
import LivewireLogo from '@/assets/images/logos/livewire.svg';
import PHPStanLogo from '@/assets/images/logos/phpstan.svg';
import PHPUnitLogo from '@/assets/images/logos/phpunit.svg';
import SASSLogo from '@/assets/images/logos/sass.svg';
import SQLLogo from '@/assets/images/logos/sql.svg';
import TailwindLogo from '@/assets/images/logos/tailwindcss.svg';
import VueLogo from '@/assets/images/logos/vuejs.svg';
import type { SwiperContainer } from 'swiper/element';
import { onMounted } from 'vue';

onMounted(() => {
  const swiperEl = document.querySelector('.skills-carousel') as SwiperContainer;

  const params = {
    slidesPerView: 2,
    freeMode: true,
    loop: true,
    speed: 3500,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      475: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
    },
    injectStyles: [
      `
      .swiper-wrapper {
        transition-timing-function: linear !important;
      }
      `,
    ],
  };

  Object.assign(swiperEl, params);
  swiperEl.initialize();
});

const skills = [
  {
    logo: LaravelLogo,
    name: 'Laravel',
  },
  {
    logo: VueLogo,
    name: 'Vue.js',
  },
  {
    logo: TailwindLogo,
    name: 'TailwindCSS',
  },
  {
    logo: SASSLogo,
    name: 'SASS',
  },
  {
    logo: LivewireLogo,
    name: 'Livewire',
  },
  {
    logo: PHPStanLogo,
    name: 'PHPStan',
  },
  {
    logo: PHPUnitLogo,
    name: 'PHPUnit',
  },
  {
    logo: DockerLogo,
    name: 'Docker',
  },
  {
    logo: FilamentPHPLogo,
    name: 'FilamentPHP',
  },
  {
    logo: SQLLogo,
    name: 'SQL',
  },
];
</script>

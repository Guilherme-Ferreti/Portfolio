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
          <img
            :src="skill.logo"
            :aria-label="skill.name"
            class="max-w-10 max-h-3"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { image } from '@/utils';
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
    logo: image('logos/laravel.svg'),
    name: 'Laravel',
  },
  {
    logo: image('logos/vuejs.svg'),
    name: 'Vue.js',
  },
  {
    logo: image('logos/tailwindcss.svg'),
    name: 'TailwindCSS',
  },
  {
    logo: image('logos/inertiajs.svg'),
    name: 'Inertia',
  },
  {
    logo: image('logos/sass.svg'),
    name: 'SASS',
  },
  {
    logo: image('logos/livewire.svg'),
    name: 'Livewire',
  },
  {
    logo: image('logos/phpstan.svg'),
    name: 'PHPStan',
  },
  {
    logo: image('logos/phpunit.svg'),
    name: 'PHPUnit',
  },
  {
    logo: image('logos/docker.svg'),
    name: 'Docker',
  },
  {
    logo: image('logos/filamentphp.svg'),
    name: 'FilamentPHP',
  },
  {
    logo: image('logos/sql.svg'),
    name: 'SQL',
  },
];
</script>

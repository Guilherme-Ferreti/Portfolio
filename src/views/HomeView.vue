<template>
  <div class="px-[var(--spacing-screen-padding)] space-y-3">
    <section
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
    </section>
    <section
      aria-labelledby="skils-section__heading"
      id="skills"
    >
      <h2
        class="section__title"
        id="skills-section__heading"
      >
        My Skills
      </h2>
      <ul class="flex flex-wrap gap-1 items-center justify-center">
        <li
          v-for="skill in skills"
          class="card grid place-items-center hover:scale-105 transition-transform duration-300 w-16 h-7.5"
        >
          <component
            :is="skill.logo"
            :aria-label="skill.name"
          />
        </li>
      </ul>
    </section>
    <section
      aria-labelledby="work-history-section__heading"
      id="work-history"
    >
      <h2
        class="section__title"
        id="work-history-section__heading"
      >
        Work History
      </h2>

      <CareerHistory :history="workHistory" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import DockerLogo from '@/assets/images/logos/docker.svg';
import FilamentPHPLogo from '@/assets/images/logos/filamentphp.svg';
import LaravelLogo from '@/assets/images/logos/laravel.svg';
import LivewireLogo from '@/assets/images/logos/livewire.svg';
import PHPStanLogo from '@/assets/images/logos/phpstan.svg';
import PHPUnitLogo from '@/assets/images/logos/phpunit.svg';
import SQLLogo from '@/assets/images/logos/sql.svg';
import TailwindLogo from '@/assets/images/logos/tailwindcss.svg';
import VueLogo from '@/assets/images/logos/vuejs.svg';
import CareerHistory from '@/components/CareerHistory.vue';

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

const workHistory = [
  {
    title: 'Full Stack Web Developer (Laravel & Vue.js)',
    company: 'Stefanini IT Solutions',
    startDate: 'September 2022',
    endDate: 'Present',
    description:
      'Stefanini is a leading Brazilian IT company present in more than 41 countries that offers software development and AI solutions for worldwide clients.',
    responsabilities: [
      'Working as a Full Stack Web Developer.',
      'Building new institutional websites from the ground up, using modern technologies like Laravel and Vue.js to ensure high performance, security, and user engagement.',
      'Transforming design concepts provided by web designers into visually appealing and user-friendly web pages.',
      'Improving and refactoring existing codebases to enhance performance, scalability, and maintainability.',
      'Applying Scrum methodology with regular ceremonies, including Daily Scrum and Sprint Planning.',
      'Establishing and enforcing code quality standards to ensure consistency, readability, and maintainability across the development team.',
      'Achievements: Recognized as a top performer for consistently delivering high-quality code and completing tasks ahead of deadlines.',
      'Technologies: Laravel framework, PHP, Vue.js, Vite, Pinia, Vue Router, HTML, CSS, SASS, JavaScript, MySQL, Docker, Unit and Integration Tests, RESTful APIs, SCRUM.',
    ],
  },
  {
    title: 'Full Stack Web Developer (Laravel & Vue.js)',
    company: 'VoiceData Distributor',
    startDate: 'January 2020',
    endDate: 'September 2022',
    description:
      'VoiceData specializes in the distribution of enterprise-level technology equipment and business-to-business sales.',
    responsabilities: [
      'Working as a Full Stack Web Developer and System Architect.',
      'Working on a Sales Software designed to optimize and facilitate the creation and updating of orders, estimates, and customer data, empowering dozens of salespeople to work more efficiently and effectively.',
      'Conducting analysis to identify tasks and requirements, ensuring comprehensive coverage and successful implementation.',
      'Translated business requirements into efficient and scalable database structures and robust application APIs.',
      'Collaborating with front-end developers to ensure seamless integration between front-end and back-end systems.',
      'Providing ongoing maintenance and support to ensure the reliability and stability of applications.',
      'Achievements: Successfully replaced the legacy sales system with a modern Laravel application, significantly improving overall performance and operational efficiency.',
      'Technologies: Laravel framework, PHP, Vue.js, MS SQL Server, MySQL, HTML, CSS, SASS, JavaScript, Unit and Integration Tests, RESTful APIs, System analysis, PHP Unit, Pest, PHPStan, Test-driven Development.',
    ],
  },
];
</script>

<style scoped>
@reference '@/assets/css/app.css';

.section__title {
  @apply mb-1 text-center text-3xl font-bold text-dark;
}
</style>

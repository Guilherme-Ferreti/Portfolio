<template>
  <div class="card @container space-y-1.75">
    <template v-for="(entry, index) in workHistory">
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
            v-if="entry.responsabilities.length > 0"
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
        v-if="index !== workHistory.length - 1"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import AppDetails from './AppDetails.vue';

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

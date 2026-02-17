<template>
  <section id="projects" class="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div class="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid gap-10 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TransitionGroup name="list">
          <div
            v-for="project in visibleProjects"
            :key="project.id"
            class="group bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
          >
            <div class="relative overflow-hidden h-56 bg-gray-200 dark:bg-gray-700">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div class="p-8 flex flex-col flex-grow">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm flex-grow leading-relaxed line-clamp-3">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mt-6 mb-8">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-lg border border-transparent group-hover:border-blue-500/30 transition-colors"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex items-center gap-4">
                <a
                  :href="project.demoLink"
                  target="_blank"
                  class="flex-grow flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                >
                  <Icon icon="mdi:rocket-launch" class="text-lg" />
                  Live Demo
                </a>
                
                <a
                  :href="project.githubLink"
                  target="_blank"
                  class="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-blue-600 text-gray-700 dark:text-white rounded-2xl transition-all hover:rotate-12"
                  title="View Source Code"
                >
                  <Icon icon="mdi:github" class="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <div v-if="allProjects.length > 3" class="mt-16">
        <button
          @click="showMore = !showMore"
          class="flex items-center gap-3 px-10 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 active:scale-95 uppercase tracking-widest text-[11px]"
        >
          {{ showMore ? 'Show Less' : 'Explore All Projects' }}
          <Icon 
            icon="mdi:chevron-down" 
            class="text-xl transition-transform duration-500" 
            :class="{ 'rotate-180': showMore }" 
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';

const allProjects = [
  { id: 1, title: 'Developer Avatar', description: 'Interactive SVG avatar system built for developers to personalize their profiles.', technologies: ['Vue 3', 'SVG', 'GSAP'], image: new URL('@/assets/img/forestgroup.jpg', import.meta.url).href, demoLink: '#', githubLink: '#' },
  { id: 2, title: 'Code Thinking', description: 'A creative workspace for visualizing complex algorithms and data structures.', technologies: ['Nuxt', 'Tailwind', 'Vite'], image: new URL('@/assets/img/undraw_programming_re_kg9v.svg', import.meta.url).href, demoLink: '#', githubLink: '#' },
  { id: 3, title: 'Designer UI', description: 'Comprehensive design system and components for modern dashboard applications.', technologies: ['Figma', 'Vue', 'Pinia'], image: new URL('@/assets/img/undraw_design_tools_re_84dm.svg', import.meta.url).href, demoLink: '#', githubLink: '#' },
  { id: 4, title: 'Tech Meeting', description: 'Real-time collaboration platform for development teams.', technologies: ['Node.js', 'Socket.io'], image: new URL('@/assets/img/undraw_team_collaboration_re_ow29.svg', import.meta.url).href, demoLink: '#', githubLink: '#' },
];

const showMore = ref(false);

const visibleProjects = computed(() => {
  return showMore.value ? allProjects : allProjects.slice(0, 3);
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
<template>
  <section id="home" class="w-full bg-white dark:bg-gray-900 py-10 transition-colors duration-300">
    <div
      class="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-12"
    >
      <div class="text-center md:text-left max-w-2xl order-2 md:order-1 animate-fade-in">
        <h1 class="text-4xl sm:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
          Front-End <span class="text-blue-600 dark:text-blue-400">Vue</span> Developer
        </h1>
        
        <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Hi, I'm
          <span class="font-semibold text-gray-900 dark:text-white">Krzysztof Młot</span>. 
          A passionate Front-end Developer specialized in building polished, user-centric web applications with modern technologies. 
        </p>

        <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <a 
            href="#projects" 
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            class="px-8 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Contact Me
          </a>
        </div>

        <div class="flex justify-center md:justify-start gap-6 text-3xl text-gray-500 dark:text-gray-400">
          <a href="https://github.com/yourusername" target="_blank" class="hover:text-black dark:hover:text-white transition-colors" title="GitHub">
            <Icon icon="mdi:github" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="hover:text-[#0077b5] transition-colors" title="LinkedIn">
            <Icon icon="mdi:linkedin" />
          </a>
          <a href="https://discordapp.com/users/yourid" target="_blank" class="hover:text-[#5865F2] transition-colors" title="Discord">
            <Icon icon="ic:baseline-discord" />
          </a>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div class="flex flex-col md:flex-row items-center md:items-center gap-4 mb-8">
            <p class="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 min-w-[100px] text-center md:text-left">
              Core Stack
            </p>
            <div class="flex flex-wrap gap-6 justify-center md:justify-start items-center">
              <div class="group relative flex justify-center">
                <Icon icon="logos:vue" class="text-3xl cursor-help" />
                <span class="tooltip">Vue.js</span>
              </div>
              <div class="group relative flex justify-center">
                <Icon icon="logos:nuxt-icon" class="text-3xl cursor-help" />
                <span class="tooltip">Nuxt.js</span>
              </div>
              <div class="group relative flex justify-center">
                <Icon icon="logos:javascript" class="text-3xl cursor-help" />
                <span class="tooltip">JavaScript</span>
              </div>
              <div class="group relative flex justify-center">
                <Icon icon="logos:tailwindcss-icon" class="text-3xl cursor-help" />
                <span class="tooltip">Tailwind CSS</span>
              </div>
              <div class="group relative flex justify-center">
                <Icon icon="logos:nodejs-icon" class="text-3xl cursor-help" />
                <span class="tooltip">Node.js</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-center md:items-center gap-4">
            <p class="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 min-w-[100px] text-center md:text-left">
              Tools
            </p>
            <div class="flex flex-wrap gap-6 justify-center md:justify-start items-center">
              <div class="group relative flex justify-center">
                <Icon icon="logos:git-icon" class="text-2xl cursor-help" />
                <span class="tooltip">Git</span>
              </div>
              <div class="group relative flex justify-center">
                <Icon icon="logos:figma" class="text-2xl cursor-help" />
                <span class="tooltip">Figma</span>
              </div>
              <div class="group relative flex justify-center">
                <Icon icon="logos:vitejs" class="text-2xl cursor-help" />
                <span class="tooltip">Vite</span>
              </div>
              <div class="group relative flex justify-center">
                <Icon icon="logos:vitest" class="text-2xl cursor-help" />
                <span class="tooltip">Vitest</span>
              </div>
              <div class="group relative flex justify-center text-gray-600 dark:text-gray-400">
                <Icon icon="mdi:responsive" class="text-2xl cursor-help" />
                <span class="tooltip">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="order-1 md:order-2 flex justify-center w-full md:w-auto">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src="../assets/img/undraw_building-a-website_1wrp.svg"
            alt="Developer Illustration"
            class="relative rounded-xl max-w-[240px] sm:max-w-xs md:max-w-md transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.animate-fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tooltip {
  @apply absolute -top-10 scale-0 transition-all rounded bg-gray-900 dark:bg-gray-700 px-2 py-1 text-[10px] text-white group-hover:scale-100 font-bold z-10 whitespace-nowrap;
}

.tooltip::after {
  content: '';
  @apply absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700;
}
</style>
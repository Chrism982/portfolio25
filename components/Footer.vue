<template>
  <footer class="relative w-full pt-16 pb-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
    
    <div class="absolute -top-6 left-1/2 -translate-x-1/2">
      <button 
        @click="scrollToTop"
        class="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-500/40 transition-all hover:-translate-y-1 active:scale-95 group"
        aria-label="Back to top"
      >
        <Icon icon="mdi:chevron-double-up" class="text-2xl group-hover:animate-bounce" />
      </button>
    </div>

    <div class="max-w-screen-xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        
        <div class="text-xl font-black text-gray-900 dark:text-white tracking-tighter group cursor-default">
          KM<span class="text-blue-600 group-hover:text-blue-500 transition-colors">.dev</span>
        </div>

        <nav class="flex gap-8">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" 
             class="text-sm font-bold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors uppercase tracking-widest">
            {{ link.name }}
          </a>
        </nav>

        <div class="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800/30">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span class="text-[10px] font-black uppercase tracking-tight text-green-700 dark:text-green-400">
            Open for hire
          </span>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-50 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[11px] text-gray-400 dark:text-gray-600 font-medium tracking-wide">
          © {{ currentYear }} 
          <span class="text-gray-900 dark:text-gray-500 font-bold uppercase tracking-tighter">
            Krzysztof Młot
          </span>. All rights reserved.
        </p>
        
        <div class="flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-600">
          Built with 
          <Icon icon="logos:vue" class="text-sm" /> 
          <span class="font-bold text-gray-600 dark:text-gray-400">Vue</span> 
          & 
          <Icon icon="logos:tailwindcss-icon" class="text-sm" /> 
          <span class="font-bold text-gray-600 dark:text-gray-400">Tailwind</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const currentYear = new Date().getFullYear();

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
nav a {
  position: relative;
}
nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #2563eb;
  transition: width 0.3s ease;
}
nav a:hover::after {
  width: 100%;
}
</style>
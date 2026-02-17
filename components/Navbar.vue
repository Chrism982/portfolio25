<template>
  <nav class="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-gray-800 dark:text-gray-100 sticky top-0 z-[60] border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-screen-xl mx-auto px-6 flex items-center justify-between py-4">
      
      <div @click="scrollToTop" class="text-2xl font-black tracking-tighter text-gray-900 dark:text-white group cursor-pointer flex items-center">
        KM<span class="text-blue-600 group-hover:text-blue-500 transition-colors">.dev</span>
        <span class="ml-1 w-1.5 h-6 bg-blue-600 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>

      <div class="hidden lg:flex items-center gap-8">
        <ul class="flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.name">
            <a 
              :href="link.href" 
              class="text-sm font-bold uppercase tracking-widest transition-colors relative group"
              :class="activeSection === link.href.slice(1) 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-500 dark:text-gray-400 hover:text-blue-600'"
            >
              {{ link.name }}
              <span 
                class="absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all"
                :class="activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'"
              ></span>
            </a>
          </li>
        </ul>

        <div class="pl-8 border-l border-gray-200 dark:border-gray-700">
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all active:scale-95"
            aria-label="Toggle Theme"
          >
            <Icon 
              v-if="isDark" 
              icon="ph:moon-stars-bold" 
              class="text-xl text-blue-400" 
            />
            <Icon 
              v-else 
              icon="ph:sun-dim-bold" 
              class="text-xl text-orange-500" 
            />
          </button>
        </div>
      </div>

      <div class="flex lg:hidden items-center gap-4">
        <button @click="toggleTheme" class="p-2 text-xl">
          <Icon v-if="isDark" icon="ph:moon-stars-bold" class="text-blue-400" />
          <Icon v-else icon="ph:sun-dim-bold" class="text-orange-500" />
        </button>
        
        <button @click="toggleMenu" class="p-2 text-2xl focus:outline-none">
          <Icon :icon="menuOpen ? 'ph:x-bold' : 'ph:list-bold'" />
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-8 z-50 shadow-xl"
      >
        <ul class="flex flex-col gap-6">
          <li v-for="link in navLinks" :key="link.name">
            <a 
              :href="link.href" 
              @click="menuOpen = false"
              class="text-xl font-bold flex justify-between items-center transition-colors"
              :class="activeSection === link.href.slice(1) ? 'text-blue-600' : 'text-gray-900 dark:text-white'"
            >
              {{ link.name }}
              <Icon 
                :icon="activeSection === link.href.slice(1) ? 'ph:caret-left-bold' : 'ph:caret-right-bold'" 
                class="text-sm"
                :class="activeSection === link.href.slice(1) ? 'text-blue-600' : 'text-gray-400'"
              />
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

const isDark = ref(false);
const menuOpen = ref(false);
const activeSection = ref('home');

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

let observer = null;

onMounted(() => {
  const stored = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDark.value = stored === 'dark' || (!stored && systemPrefersDark);
  updateTheme();

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', 
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  navLinks.forEach((link) => {
    const el = document.querySelector(link.href);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-out;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
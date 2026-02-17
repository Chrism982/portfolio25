<template>
  <section
    id="contact"
    class="py-32 bg-white dark:bg-gray-900 flex flex-col items-center text-center px-6 transition-colors duration-300"
  >
    <div class="max-w-2xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
        Get in touch
      </h2>

      <p class="text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-10 leading-relaxed">
        I'm currently open to <span class="text-blue-600 dark:text-blue-400 font-semibold">new opportunities</span>. 
        If you have a question or just want to say hi, my inbox is always open!
      </p>

      <div class="relative group inline-block mb-16">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        
        <a
          href="mailto:your@email.com"
          class="relative flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-12 py-4 rounded-2xl transition-all transform hover:-translate-y-1 active:scale-95"
        >
          <Icon icon="mdi:email-outline" class="text-2xl" />
          Say Hello
        </a>
      </div>

      <div class="flex justify-center items-center gap-10">
        <a href="#" target="_blank" class="relative group p-2" aria-label="GitHub">
          <Icon icon="mdi:github" class="relative z-10 text-3xl text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all transform group-hover:scale-110" />
          <div class="absolute inset-0 bg-gray-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>

        <a href="#" target="_blank" class="relative group p-2" aria-label="LinkedIn">
          <Icon icon="mdi:linkedin" class="relative z-10 text-3xl text-gray-400 group-hover:text-[#0077b5] transition-all transform group-hover:scale-110" />
          <div class="absolute inset-0 bg-[#0077b5]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>

        <a href="#" target="_blank" class="relative group p-2" aria-label="Discord">
          <Icon icon="ic:baseline-discord" class="relative z-10 text-3xl text-gray-400 group-hover:text-[#5865F2] transition-all transform group-hover:scale-110" />
          <div class="absolute inset-0 bg-[#5865F2]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
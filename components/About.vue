<template>
  <section id="about" class="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <div class="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-16">
        <div class="flex-1 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            A dedicated Front-end Developer based in <span class="text-blue-600 dark:text-blue-400">Poland 🇵🇱</span>
          </h3>
          
          <p class="mb-6">
            Hi, I'm <span class="font-bold text-gray-900 dark:text-white">Krzysztof Młot</span>. 
            My journey into the digital world started in the e-commerce sector, which gave me a unique perspective on 
            <strong>user needs</strong> and business goals. Today, I translate that experience into clean, 
            high-performance code.
          </p>

          <p class="mb-6">
            I specialize in the <strong>Vue.js ecosystem</strong>, building responsive interfaces that aren't just 
            functional, but also delightful to use. I love combining my creative side with technical
            skills to solve real-world problems 💡.
          </p>

          <p class="mb-8">
            When I'm not coding, you'll find me exploring new places 🌍, 
            geeking out over Japanese ramen 🍜, or diving deep into the latest tech 
            trends like <strong>Node.js</strong> and <strong>Modern CSS</strong>.
          </p>

          <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
            <span class="text-blue-600">🚀</span> Let’s connect and build something awesome together!
          </div>
        </div>

        <div class="flex-shrink-0 relative group">
          <div class="absolute -inset-4 bg-blue-500/10 dark:bg-blue-400/10 rounded-full scale-95 group-hover:scale-105 transition-transform duration-500"></div>
          <div class="absolute -inset-8 bg-blue-500/5 dark:bg-blue-400/5 rounded-full scale-90 group-hover:scale-110 transition-transform duration-700"></div>
          
          <div class="relative">
            <img
              src="@/assets/img/undraw_developer-avatar_f6ac.svg"
              alt="Krzysztof Młot"
              class="rounded-full shadow-2xl border-4 border-white dark:border-gray-700 w-64 h-64 md:w-80 md:h-80 object-cover bg-white dark:bg-gray-800 transition-transform duration-500 group-hover:rotate-3" 
            />
            
            <div class="absolute -bottom-2 -right-2 bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 dark:border-gray-800 animate-bounce-slow">
              <div class="flex h-3 w-3 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <p class="text-xs font-black uppercase tracking-tight text-gray-900 dark:text-white">
                Available for hire
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

strong {
  @apply text-gray-900 dark:text-white font-semibold;
}
</style>
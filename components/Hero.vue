<template>
	<section class="w-full bg-white py-10">
		<div
			class="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
			<!-- TEXT SECTION -->
			<div class="text-center md:text-left max-w-xl">
				<h1 class="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
					Front-End Vue Developer
				</h1>
				<p class="text-lg sm:text-xl text-gray-700 mb-6">
					Hi, I'm
					<span class="font-semibold text-blue-600">Krzysztof Młot</span>. A
					passionate Front-end Vue Developer based in Wroclaw, Poland. 📍
				</p>

				<!-- SOCIAL LINKS -->
				<div
					class="flex justify-center md:justify-start gap-6 text-2xl text-gray-600 mb-6">
					<a
						href="https://github.com/yourusername"
						target="_blank"
						aria-label="GitHub"
						title="GitHub">
						<Icon icon="mdi:github" />
					</a>
					<a
						href="https://linkedin.com/in/yourusername"
						target="_blank"
						aria-label="LinkedIn"
						title="LinkedIn">
						<Icon icon="mdi:linkedin" />
					</a>
					<a
						href="https://twitter.com/yourusername"
						target="_blank"
						aria-label="Twitter"
						title="Twitter">
						<Icon icon="mdi:twitter" />
					</a>
				</div>

				<!-- TECH STACK -->
				<div class="flex items-center flex-wrap gap-4 mt-10">
					<p
						class="text-lg sm:text-xl font-semibold text-gray-800 whitespace-nowrap">
						Tech stack |
					</p>
					<Icon
						icon="logos:vue"
						title="Vue.js"
						class="text-2xl sm:text-3xl text-blue-500" />
					<Icon
						icon="logos:nuxt-icon"
						title="Nuxt.js"
						class="text-2xl sm:text-3xl text-blue-500" />
					<Icon
						icon="logos:javascript"
						title="JavaScript"
						class="text-2xl sm:text-3xl text-blue-500" />
					<Icon
						icon="simple-icons:tailwindcss"
						title="Tailwind CSS"
						class="text-2xl sm:text-3xl text-blue-500" />
					<Icon
						icon="logos:nodejs-icon"
						title="Node.js"
						class="text-2xl sm:text-3xl text-blue-500" />
					<Icon
						icon="logos:mongodb-icon"
						title="MongoDB"
						class="text-2xl sm:text-3xl text-blue-500" />
					<Icon
						icon="logos:html-5"
						title="HTML5"
						class="text-2xl sm:text-3xl text-blue-500" />
					<Icon
						icon="logos:css-3"
						title="CSS3"
						class="text-2xl sm:text-3xl text-blue-500" />
				</div>
			</div>

			<!-- IMAGE SECTION -->
			<div class="mt-10 md:mt-0 md:ml-8">
				<img
					src="../assets/img/undraw_building-a-website_1wrp.svg"
					alt="Developer Illustration"
					class="rounded-xl max-w-xs md:max-w-sm" />
			</div>
		</div>
	</section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

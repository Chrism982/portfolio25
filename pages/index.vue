<template>
	<div class="max-w-screen-2xl mx-auto px-4">
		<Navbar />

		<section
			class="flex flex-col items-center justify-center min-h-[80vh] text-center bg-gray-100 rounded-xl shadow-md">
			<h1 class="text-5xl font-bold mb-6 text-blue-600">
				Welcome to My Portfolio
			</h1>
			<p class="text-xl text-gray-700">Nuxt 3 + TailwindCSS = 🚀</p>
			<button
				class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
				Get Started
			</button>
		</section>
	</div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
</script>

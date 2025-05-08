<template>
	<nav class="relative flex items-center justify-between p-4 bg-white">
		<div class="text-2xl font-bold text-blue-600">MyPortfolio</div>

		<div class="block lg:hidden">
			<button @click="toggleMenu" class="text-xl">
				<span class="material-icons">menu</span>
			</button>
		</div>

		<div class="hidden lg:flex flex-1 items-center justify-center">
			<ul class="flex space-x-6 text-gray-700">
				<li><a href="/" class="hover:text-blue-500">Home</a></li>
				<li><a href="#about" class="hover:text-blue-500">About</a></li>
				<li><a href="#projects" class="hover:text-blue-500">Projects</a></li>
				<li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
			</ul>
		</div>
git 
		<div class="hidden lg:flex items-center ml-6">
			<button @click="toggleTheme" class="text-xl flex items-center">
				<span v-if="isDark" class="material-icons">dark_mode</span>
				<span v-else class="material-icons">light_mode</span>
			</button>
		</div>

		<div
			v-show="menuOpen"
			class="absolute left-0 top-full w-full bg-white shadow-lg z-50 p-4 flex flex-col space-y-4 transition duration-300 ease-in-out lg:hidden">
			<ul class="space-y-4 text-gray-700 list-none">
				<li><a href="/" class="hover:text-blue-500">Home</a></li>
				<li><a href="#about" class="hover:text-blue-500">About</a></li>
				<li><a href="#projects" class="hover:text-blue-500">Projects</a></li>
				<li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
			</ul>

			<div class="flex justify-end pt-4">
				<button @click="toggleTheme" class="text-xl flex items-center">
					<span v-if="isDark" class="material-icons">dark_mode</span>
					<span v-else class="material-icons">light_mode</span>
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue';

const isDark = ref(false);
const menuOpen = ref(false);

const toggleTheme = () => {
	isDark.value = !isDark.value;
	document.documentElement.classList.toggle('dark', isDark.value);
};

const toggleMenu = () => {
	menuOpen.value = !menuOpen.value;
};
</script>

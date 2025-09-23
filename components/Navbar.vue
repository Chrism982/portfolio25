<template>
	<nav
		class="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 sticky top-0 z-50">
		<div
			class="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-4">
			<!-- Logo -->
			<div class="text-2xl font-bold text-blue-600">MyPortfolio</div>

			<!-- Hamburger (Mobile) -->
			<div class="block lg:hidden">
				<button @click="toggleMenu" class="text-xl">
					<span class="material-icons">menu</span>
				</button>
			</div>

			<!-- Menu (Desktop) -->
			<div class="hidden lg:flex flex-1 items-center justify-center">
				<ul class="flex space-x-6 text-gray-700 dark:text-gray-300">
					<li>
						<a href="#home" class="hover:text-blue-500 dark:hover:text-blue-400"
							>Home</a
						>
					</li>
					<li>
						<a
							href="#about"
							class="hover:text-blue-500 dark:hover:text-blue-400"
							>About</a
						>
					</li>
					<li>
						<a
							href="#projects"
							class="hover:text-blue-500 dark:hover:text-blue-400"
							>Projects</a
						>
					</li>
					<li>
						<a
							href="#contact"
							class="hover:text-blue-500 dark:hover:text-blue-400"
							>Contact</a
						>
					</li>
				</ul>
			</div>

			<!-- Theme toggle (Desktop) -->
			<div class="hidden lg:flex items-center ml-6">
				<button @click="toggleTheme" class="text-xl flex items-center">
					<span v-if="isDark" class="material-icons">dark_mode</span>
					<span v-else class="material-icons">light_mode</span>
				</button>
			</div>
		</div>

		<!-- Mobile menu -->
		<div
			v-show="menuOpen"
			class="lg:hidden px-4 py-4 w-full bg-white dark:bg-gray-900 z-50 flex flex-col space-y-4 transition duration-300 ease-in-out">
			<ul class="space-y-4 text-gray-700 dark:text-gray-300 list-none">
				<li>
					<a href="/" class="hover:text-blue-500 dark:hover:text-blue-400"
						>Home</a
					>
				</li>
				<li>
					<a href="#about" class="hover:text-blue-500 dark:hover:text-blue-400"
						>About</a
					>
				</li>
				<li>
					<a
						href="#projects"
						class="hover:text-blue-500 dark:hover:text-blue-400"
						>Projects</a
					>
				</li>
				<li>
					<a
						href="#contact"
						class="hover:text-blue-500 dark:hover:text-blue-400"
						>Contact</a
					>
				</li>
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
import { ref, onMounted } from 'vue';

const isDark = ref(false);
const menuOpen = ref(false);

onMounted(() => {
	const stored = localStorage.getItem('theme');
	isDark.value = stored === 'dark';
	document.documentElement.classList.toggle('dark', isDark.value);
});

const toggleTheme = () => {
	isDark.value = !isDark.value;
	document.documentElement.classList.toggle('dark', isDark.value);
	localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const toggleMenu = () => {
	menuOpen.value = !menuOpen.value;
};
</script>

<template>
	<nav class="flex justify-between items-center p-4">
		<div class="text-2xl font-bold text-blue-600">MyPortfolio</div>
		<ul class="flex space-x-6 text-gray-700">
			<li><a href="/" class="hover:text-blue-500">Home</a></li>
			<li><a href="#about" class="hover:text-blue-500">About</a></li>
			<li><a href="#projects" class="hover:text-blue-500">Projects</a></li>
			<li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
		</ul>

		<!-- Dark mode toggle -->
		<button @click="toggleTheme" class="text-xl ml-4">
			<!-- Ikona księżyca dla trybu ciemnego -->
			<span v-if="isDark" class="material-icons">dark_mode</span>
			<!-- Ikona słoneczka dla trybu jasnego -->
			<span v-else class="material-icons">light_mode</span>
		</button>
	</nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleTheme = () => {
	// Przełączanie trybu ciemnego/jasnego
	isDark.value = !isDark.value;
	document.documentElement.classList.toggle('dark', isDark.value);
};

onMounted(() => {
	// Sprawdzenie, czy tryb ciemny jest włączony po załadowaniu strony
	isDark.value = document.documentElement.classList.contains('dark');
});
</script>

<template>
	<section
		id="projects"
		class="relative py-20 bg-gray-50 flex flex-col items-center">
		<h2 class="text-3xl font-bold mb-12 text-gray-900">My Projects</h2>

	
		<div
			class="grid gap-8 max-w-6xl w-full px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<div
				v-for="project in baseProjects"
				:key="project.id"
				class="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 flex flex-col overflow-hidden border border-gray-100">
				<img
					:src="project.image"
					:alt="project.title"
					class="h-48 w-full object-cover" />
				<div class="p-6 flex flex-col flex-grow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						{{ project.title }}
					</h3>
					<p class="text-gray-600 text-sm flex-grow">
						{{ project.description }}
					</p>
					<div class="flex gap-2 mt-6">
						<a
							:href="project.demoLink"
							target="_blank"
							class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center text-sm font-medium transition">
							🔗 Demo
						</a>
						<a
							:href="project.githubLink"
							target="_blank"
							class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-center text-sm font-medium transition">
							💻 GitHub
						</a>
					</div>
				</div>
			</div>
		</div>

	
		<TransitionGroup
			name="fade-slide"
			tag="div"
			class="grid gap-8 max-w-6xl w-full mt-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<div
				v-for="project in extraProjectsToShow"
				:key="project.id"
				class="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 flex flex-col overflow-hidden border border-gray-100">
				<img
					:src="project.image"
					:alt="project.title"
					class="h-48 w-full object-cover" />
				<div class="p-6 flex flex-col flex-grow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						{{ project.title }}
					</h3>
					<p class="text-gray-600 text-sm flex-grow">
						{{ project.description }}
					</p>
					<div class="flex gap-2 mt-6">
						<a
							:href="project.demoLink"
							target="_blank"
							class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center text-sm font-medium transition">
							🔗 Demo
						</a>
						<a
							:href="project.githubLink"
							target="_blank"
							class="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-center text-sm font-medium transition">
							💻 GitHub
						</a>
					</div>
				</div>
			</div>
		</TransitionGroup>


		<div v-if="extraProjects.length" class="mt-12">
			<button
				@click="toggleShowMore"
				class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow transition">
				{{ showMore ? 'Show Less' : 'Show More' }}
			</button>
		</div>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';

const allProjects = [
	{
		id: 1,
		title: 'Developer Ava1tar',
		description: 'SVG illustration of a developer.',
		image: new URL('@/assets/img/forestgroup.jpg', import.meta.url).href,
		demoLink: 'https://demo.example.com/1',
		githubLink: 'https://github.com/username/project1',
	},
	{
		id: 2,
		title: 'Code Thinking',
		description: 'Creative coder illustration.',
		image: new URL(
			'@/assets/img/undraw_programming_re_kg9v.svg',
			import.meta.url
		).href,
		demoLink: 'https://demo.example.com/2',
		githubLink: 'https://github.com/username/project2',
	},
	{
		id: 3,
		title: 'Designer UI',
		description: 'Designer at work on UI/UX.',
		image: new URL(
			'@/assets/img/undraw_design_tools_re_84dm.svg',
			import.meta.url
		).href,
		demoLink: 'https://demo.example.com/3',
		githubLink: 'https://github.com/username/project3',
	},
	{
		id: 4,
		title: 'Tech Meeting',
		description: 'Team collaboration concept.',
		image: new URL(
			'@/assets/img/undraw_team_collaboration_re_ow29.svg',
			import.meta.url
		).href,
		demoLink: 'https://demo.example.com/4',
		githubLink: 'https://github.com/username/project4',
	},
	{
		id: 5,
		title: 'Launch Plan',
		description: 'Startup launching idea.',
		image: new URL(
			'@/assets/img/undraw_startup_life_re_8ow9.svg',
			import.meta.url
		).href,
		demoLink: 'https://demo.example.com/5',
		githubLink: 'https://github.com/username/project5',
	},
	{
		id: 6,
		title: 'Server Maintenance',
		description: 'Backend and infrastructure illustration.',
		image: new URL(
			'@/assets/img/undraw_server_down_s-4-lk.svg',
			import.meta.url
		).href,
		demoLink: 'https://demo.example.com/6',
		githubLink: 'https://github.com/username/project6',
	},
];

const showMore = ref(false);

const baseProjects = computed(() => allProjects.slice(0, 3));
const extraProjects = computed(() => allProjects.slice(3));
const extraProjectsToShow = computed(() =>
	showMore.value ? extraProjects.value : []
);

const toggleShowMore = () => {
	showMore.value = !showMore.value;
};
</script>

<style scoped>
.fade-slide-enter-active {
	transition: all 0.4s ease;
}
.fade-slide-leave-active {
	transition: all 0.3s ease;
}
.fade-slide-enter-from {
	opacity: 0;
	transform: translateY(-10px);
}
.fade-slide-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>

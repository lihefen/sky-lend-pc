<script>
export default {
	name: 'AppHeader',
	methods: {
		scrollToSection(sectionId) {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		},
	},
};
</script>

<template>
	<header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/80">
		<div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
			<div class="flex items-center gap-3">
				<div class="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
					<i class="fas fa-shield-alt text-white text-xl"></i>
				</div>
				<div>
					<span class="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SkyLend</span>
					<div class="flex items-center gap-2 mt-1">
						<span class="inline-flex items-center gap-2 bg-blue-50 px-4 py-1 rounded-full text-xs text-blue-600 font-medium">
							<i class="fas fa-certificate"></i>
							CBN Licensed
						</span>
					</div>
				</div>
			</div>
			
			<nav class="hidden lg:flex gap-8 text-gray-700 font-medium">
				<a @click.prevent="scrollToSection('home')" href="#home" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">Home</a>
				<a @click.prevent="scrollToSection('features')" href="#features" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">Products</a>
				<a @click.prevent="scrollToSection('how-it-works')" href="#how-it-works" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">How It Works</a>
				<a @click.prevent="scrollToSection('calculator')" href="#calculator" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">Calculator</a>
				<a @click.prevent="scrollToSection('about')" href="#about" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">About</a>
			</nav>
			
			<div class="flex items-center gap-4">
				<a @click.prevent="scrollToSection('contact')" href="#contact" class="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">Contact</a>
				<a @click.prevent="scrollToSection('apply')" href="#apply" class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2">
					<i class="fas fa-rocket"></i>
					Apply Now
				</a>
			</div>
		</div>
	</header>
</template>

<style scoped>
</style>

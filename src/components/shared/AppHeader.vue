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
				<img src="../../assets/images/logo/logo.png" alt="SkyLend" />
                <img src="../../assets/images/logo/logo_2.png" alt="SkyLend" />
			</div>
			
			<nav class="hidden lg:flex gap-8 text-gray-700 font-medium">
				<a @click.prevent="scrollToSection('home')" href="#home" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">Home</a>
				<a @click.prevent="scrollToSection('features')" href="#features" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">Products</a>
				<a @click.prevent="scrollToSection('how-it-works')" href="#how-it-works" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">How It Works</a>
				<a @click.prevent="scrollToSection('calculator')" href="#calculator" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">Calculator</a>
				<a @click.prevent="scrollToSection('about')" href="#about" class="hover:text-blue-600 transition-all duration-300 cursor-pointer">About</a>
			</nav>
			
			<div class="flex items-center gap-4">
				<a @click.prevent="scrollToSection('contact')" href="#contact" class="border-[#1A70FF] border text-[#1A70FF] px-8 py-2 rounded-lg hover:text-blue-600 font-medium cursor-pointer">Contact Us</a>
			</div>
		</div>
	</header>
</template>

<style scoped>
</style>

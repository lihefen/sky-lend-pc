<script>
export default {
	name: 'AppFooter',
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
	<footer class="bg-gray-900 text-white pt-16 pb-8">
		<div class="max-w-7xl mx-auto px-6">
			<div class="grid md:grid-cols-4 gap-8 mb-12">
				<div>
					<div class="flex items-center gap-3 mb-4">
						<div class="bg-blue-600 p-2 rounded-lg">
							<i class="fas fa-shield-alt text-white"></i>
						</div>
						<span class="font-bold text-2xl">SkyLend</span>
					</div>
					<p class="text-gray-400 mb-4">
						Licensed and regulated by the Central Bank of Nigeria. Your trusted partner for financial growth and stability.
					</p>
					<div class="flex gap-4">
						<a href="#" class="text-gray-400 hover:text-white transition">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#" class="text-gray-400 hover:text-white transition">
							<i class="fab fa-twitter"></i>
						</a>
						<a href="#" class="text-gray-400 hover:text-white transition">
							<i class="fab fa-instagram"></i>
						</a>
						<a href="#" class="text-gray-400 hover:text-white transition">
							<i class="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>

				<div>
					<h3 class="font-semibold text-lg mb-4">Products</h3>
					<ul class="space-y-2 text-gray-400">
						<li><a href="#" class="hover:text-white transition">Personal Loans</a></li>
						<li><a href="#" class="hover:text-white transition">Business Loans</a></li>
						<li><a href="#" class="hover:text-white transition">Emergency Loans</a></li>
						<li><a @click.prevent="scrollToSection('calculator')" href="#calculator" class="hover:text-white transition cursor-pointer">Loan Calculator</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-semibold text-lg mb-4">Company</h3>
					<ul class="space-y-2 text-gray-400">
						<li><a @click.prevent="scrollToSection('about')" href="#about" class="hover:text-white transition cursor-pointer">About Us</a></li>
						<li><a href="#" class="hover:text-white transition">Careers</a></li>
						<li><a href="#" class="hover:text-white transition">Press</a></li>
						<li><a href="#" class="hover:text-white transition">Blog</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-semibold text-lg mb-4">Contact</h3>
					<ul class="space-y-2 text-gray-400">
						<li class="flex items-center gap-2">
							<i class="fas fa-map-marker-alt"></i>
							<span>14A, Ilupeju Avenue, Lagos</span>
						</li>
						<li class="flex items-center gap-2">
							<i class="fas fa-phone"></i>
							<span>+234 901 234 5678</span>
						</li>
						<li class="flex items-center gap-2">
							<i class="fas fa-envelope"></i>
							<span>help@skylend.ng</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="border-t border-gray-800 pt-8">
				<div class="flex flex-col md:flex-row justify-between items-center">
					<p class="text-gray-400 text-sm mb-4 md:mb-0">
						© 2025 SkyLend Financial Services Ltd. All rights reserved.
					</p>
					<div class="flex gap-6 text-sm text-gray-400">
						<a href="https://sky-lend.com/agreement/privacy-agreement.html" target="_blank" class="hover:text-white transition">Privacy Policy</a>
						<a href="https://sky-lend.com/agreement/terms-of-use.html" target="_blank" class="hover:text-white transition">Terms of Service</a>
						<a href="#" class="hover:text-white transition">Compliance</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
</style>

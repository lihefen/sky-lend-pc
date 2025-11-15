<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-11-10 16:38:18
 * @LastEditors: hean
 * @LastEditTime: 2025-11-13 19:45:44
-->
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
	<footer style="background: rgba(21, 44, 82, 1);" class="text-white pt-16 pb-8">
		<div class="max-w-7xl mx-auto px-6">
			<div class="grid md:grid-cols-4 gap-8 mb-12">
				<div>
					<div class="flex items-center gap-3 mb-4">
						<img src="../../assets/images/logo/logo_3.png" alt="SkyLend" >
					</div>
					<p class="text-gray-400 mb-4">
						Licensed and regulated by the Central Bank of Nigeria. Your trusted partner for financial growth and stability.
					</p>
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

				<!-- <div>
					<h3 class="font-semibold text-lg mb-4">Company</h3>
					<ul class="space-y-2 text-gray-400">
						<li><a @click.prevent="scrollToSection('about')" href="#about" class="hover:text-white transition cursor-pointer">About Us</a></li>
						<li><a href="#" class="hover:text-white transition">Careers</a></li>
						<li><a href="#" class="hover:text-white transition">Press</a></li>
						<li><a href="#" class="hover:text-white transition">Blog</a></li>
					</ul>
				</div> -->

				<div>
					<h3 class="font-semibold text-lg mb-4">Contact</h3>
					<ul class="space-y-2 text-gray-400">
						<li class="flex items-center gap-2">
							<i class="fas fa-map-marker-alt"></i>
							<span>17 Dopemu Road, Agege, Lagos State, Nigeria</span>
						</li>
						<li class="flex items-center gap-2">
							<i class="fas fa-phone"></i>
							<span>+234 812 428 0663</span>
						</li>
						<li class="flex items-center gap-2">
							<i class="fas fa-envelope"></i>
							<span>support@skylend.com</span>
						</li>
					</ul>
				</div>

                <div>
                    <h3 class="font-semibold text-lg mb-4">Follow Us</h3>
                    <div class="flex gap-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <img src="../../assets/images/foot/f_1.png" alt="Facebook">
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <img src="../../assets/images/foot/f_2.png" alt="Twitter">
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <img src="../../assets/images/foot/f_3.png" alt="Instagram">
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <img src="../../assets/images/foot/f_4.png" alt="LinkedIn">
                        </a>
                    </div>
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

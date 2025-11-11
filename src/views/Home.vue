<script>
export default {
	name: 'Home',
	data() {
		return {
			loanAmount: 100000,
			tenure: 6,
			annualInterestRate: 0.10,
		};
	},
	computed: {
		formattedAmount() {
			return '₦' + this.loanAmount.toLocaleString();
		},
		formattedTenure() {
			return this.tenure + ' Month' + (this.tenure > 1 ? 's' : '');
		},
		monthlyInterestRate() {
			return this.annualInterestRate / 12;
		},
		totalInterest() {
			return this.loanAmount * this.monthlyInterestRate * this.tenure;
		},
		totalRepayment() {
			return this.loanAmount + this.totalInterest;
		},
		monthlyPayment() {
			return this.totalRepayment / this.tenure;
		},
		formattedMonthlyPayment() {
			return '₦' + Math.round(this.monthlyPayment).toLocaleString();
		},
		formattedTotalRepayment() {
			return '₦' + Math.round(this.totalRepayment).toLocaleString();
		},
		formattedTotalInterest() {
			return '₦' + Math.round(this.totalInterest).toLocaleString();
		},
	},
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
	<div class="pt-20">
		<!-- Hero Section -->
		<section id="home" class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
			<div class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
						<i class="fas fa-bolt"></i>
						<span class="text-sm font-medium">Instant Approval in 5 Minutes</span>
					</div>
					
					<h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
						Financial Freedom for Every Nigerian
					</h1>
					
					<p class="text-xl text-blue-100 mb-8 leading-relaxed">
						Get instant loans from ₦5,000 to ₦3,000,000. Licensed by the Central Bank of Nigeria. 
						No collateral, no hidden fees. Your trusted financial partner.
					</p>
					
					<div class="flex flex-col sm:flex-row gap-4 mb-8">
						<a @click.prevent="scrollToSection('apply')" href="#apply" class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition text-center cursor-pointer inline-flex items-center justify-center gap-2">
							<i class="fas fa-paper-plane"></i>
							Apply Instantly
						</a>
						<a @click.prevent="scrollToSection('features')" href="#features" class="bg-white/10 text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition text-center cursor-pointer">
							Learn More
						</a>
					</div>
					
					<div class="grid grid-cols-3 gap-6 text-center">
						<div>
							<div class="text-2xl font-bold">500K+</div>
							<div class="text-blue-200 text-sm">Happy Customers</div>
						</div>
						<div>
							<div class="text-2xl font-bold">₦15B+</div>
							<div class="text-blue-200 text-sm">Loans Disbursed</div>
						</div>
						<div>
							<div class="text-2xl font-bold">98%</div>
							<div class="text-blue-200 text-sm">Approval Rate</div>
						</div>
					</div>
				</div>
				
				<div class="relative">
					<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
						<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop" 
              alt="SkyLend Mobile App" 
              class="rounded-xl shadow-2xl w-full">
					</div>
					
					<!-- Floating Trust Badges -->
					<div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4">
						<div class="flex items-center gap-3">
							<div class="bg-green-100 p-2 rounded-full">
								<i class="fas fa-shield-alt text-green-600"></i>
							</div>
							<div>
								<div class="font-semibold text-gray-900">NDIC Insured</div>
								<div class="text-xs text-gray-500">Your funds are protected</div>
							</div>
						</div>
					</div>
					
					<div class="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4">
						<div class="flex items-center gap-3">
							<div class="bg-blue-100 p-2 rounded-full">
								<i class="fas fa-bolt text-blue-600"></i>
							</div>
							<div>
								<div class="font-semibold text-gray-900">5 Min</div>
								<div class="text-xs text-gray-500">Average Approval</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Trust Bar -->
		<section class="bg-gray-50 py-8">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center text-gray-600 mb-4 text-sm font-medium">Trusted by leading Nigerian institutions</div>
				<div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-60">
					<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Coat_of_arms_of_Nigeria.svg/200px-Coat_of_arms_of_Nigeria.svg.png" 
            alt="CBN" class="h-12 mx-auto grayscale">
					<img src="https://indic.ng/images/indic-logo.svg" 
            alt="NDIC" class="h-10 mx-auto grayscale">
					<img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Flutterwave_logo.png" 
            alt="Flutterwave" class="h-8 mx-auto grayscale">
					<img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Visa_Logo.png" 
            alt="Visa" class="h-8 mx-auto grayscale">
					<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Paystack_Logo.png" 
            alt="Paystack" class="h-6 mx-auto grayscale">
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section id="features" class="py-20 bg-white">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">Financial Solutions for Every Nigerian</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						Whether you need funds for business, education, or personal use, SkyLend offers flexible loan products designed for your success.
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8">
					<!-- Personal Loans -->
					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
							<i class="fas fa-user text-blue-600 text-xl"></i>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-3">Personal Loans</h3>
						<p class="text-gray-600 mb-4">Get up to ₦2,000,000 for your personal needs with flexible repayment terms.</p>
						<ul class="space-y-2 text-gray-600">
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>No collateral required</span>
							</li>
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>Same day disbursement</span>
							</li>
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>3-12 month tenure</span>
							</li>
						</ul>
					</div>

					<!-- Business Loans -->
					<div class="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
							Most Popular
						</div>
						<div class="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
							<i class="fas fa-briefcase text-orange-600 text-xl"></i>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-3">Business Loans</h3>
						<p class="text-gray-600 mb-4">Grow your business with loans up to ₦3,000,000. Perfect for SMEs and entrepreneurs.</p>
						<ul class="space-y-2 text-gray-600">
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>Working capital financing</span>
							</li>
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>Equipment purchase</span>
							</li>
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>Inventory management</span>
							</li>
						</ul>
					</div>

					<!-- Emergency Loans -->
					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
							<i class="fas fa-ambulance text-green-600 text-xl"></i>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-3">Emergency Loans</h3>
						<p class="text-gray-600 mb-4">Quick access to funds for urgent needs. Get up to ₦500,000 in minutes.</p>
						<ul class="space-y-2 text-gray-600">
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>Medical emergencies</span>
							</li>
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>Urgent repairs</span>
							</li>
							<li class="flex items-center gap-2">
								<i class="fas fa-check text-green-500 text-sm"></i>
								<span>5-minute approval</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- How It Works -->
		<section id="how-it-works" class="py-20 bg-gray-50">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">Get Your Loan in 4 Simple Steps</h2>
					<p class="text-xl text-gray-600">Our process is designed to be fast, secure, and completely digital.</p>
				</div>

				<div class="grid md:grid-cols-4 gap-8">
					<div class="text-center">
						<div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-blue-600 text-2xl font-bold">1</span>
						</div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Download App</h3>
						<p class="text-gray-600">Get the SkyLend app from Google Play or App Store</p>
					</div>

					<div class="text-center">
						<div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-blue-600 text-2xl font-bold">2</span>
						</div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Register</h3>
						<p class="text-gray-600">Complete your profile with basic information</p>
					</div>

					<div class="text-center">
						<div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-blue-600 text-2xl font-bold">3</span>
						</div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Get Approved</h3>
						<p class="text-gray-600">AI-powered instant approval decision</p>
					</div>

					<div class="text-center">
						<div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
							<span class="text-blue-600 text-2xl font-bold">4</span>
						</div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Receive Funds</h3>
						<p class="text-gray-600">Money sent directly to your bank account</p>
					</div>
				</div>

				<div class="text-center mt-12">
					<div class="flex justify-center gap-4 flex-wrap">
						<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Google Play" class="h-12">
						<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg" 
              alt="App Store" class="h-12">
					</div>
				</div>
			</div>
		</section>

		<!-- Loan Calculator -->
		<section id="calculator" class="py-20 bg-white">
			<div class="max-w-4xl mx-auto px-6">
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 class="text-4xl font-bold text-gray-900 mb-6">Smart Loan Calculator</h2>
						<p class="text-lg text-gray-600 mb-6">
							Plan your finances with our transparent calculator. Know exactly how much you'll pay back before you apply.
						</p>
						<div class="space-y-4">
							<div class="flex items-center gap-3">
								<div class="bg-green-100 p-2 rounded-full">
									<i class="fas fa-check text-green-600"></i>
								</div>
								<span class="text-gray-700">No hidden charges</span>
							</div>
							<div class="flex items-center gap-3">
								<div class="bg-green-100 p-2 rounded-full">
									<i class="fas fa-check text-green-600"></i>
								</div>
								<span class="text-gray-700">Transparent interest rates</span>
							</div>
							<div class="flex items-center gap-3">
								<div class="bg-green-100 p-2 rounded-full">
									<i class="fas fa-check text-green-600"></i>
								</div>
								<span class="text-gray-700">Flexible repayment options</span>
							</div>
						</div>
					</div>

					<div class="bg-gray-50 p-8 rounded-2xl shadow-sm">
						<div class="space-y-6">
							<div>
								<label class="block text-gray-700 font-semibold mb-2">Loan Amount (₦)</label>
								<input 
									type="range" 
									min="5000" 
									max="3000000" 
									step="5000" 
									v-model.number="loanAmount"
									class="w-full mb-2">
								<div class="flex justify-between text-sm text-gray-600">
									<span>₦5,000</span>
									<span class="font-semibold">{{ formattedAmount }}</span>
									<span>₦3,000,000</span>
								</div>
							</div>

							<div>
								<label class="block text-gray-700 font-semibold mb-2">Tenure (Months)</label>
								<input 
									type="range" 
									min="1" 
									max="12" 
									v-model.number="tenure"
									class="w-full mb-2">
								<div class="flex justify-between text-sm text-gray-600">
									<span>1 Month</span>
									<span class="font-semibold">{{ formattedTenure }}</span>
									<span>12 Months</span>
								</div>
							</div>

							<div class="bg-white p-4 rounded-lg border">
								<div class="flex justify-between items-center mb-2">
									<span class="text-gray-600">Monthly Payment</span>
									<span class="text-xl font-bold text-blue-600">{{ formattedMonthlyPayment }}</span>
								</div>
								<div class="flex justify-between items-center text-sm text-gray-600">
									<span>Total Repayment</span>
									<span>{{ formattedTotalRepayment }}</span>
								</div>
								<div class="flex justify-between items-center text-sm text-gray-600">
									<span>Interest (10% p.a.)</span>
									<span>{{ formattedTotalInterest }}</span>
								</div>
							</div>

							<button @click="scrollToSection('apply')" class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full inline-flex items-center justify-center gap-2">
								<i class="fas fa-paper-plane"></i>
								Apply for This Loan
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonials -->
		<section class="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands of Nigerians</h2>
					<p class="text-xl text-gray-600">Real stories from real customers who transformed their lives with SkyLend</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8">
					<div class="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
						<div class="flex items-center gap-3 mb-4">
							<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
								<span class="text-blue-600 font-semibold">AO</span>
							</div>
							<div>
								<div class="font-semibold text-gray-900">Adebayo O.</div>
								<div class="text-sm text-gray-600">Lagos Business Owner</div>
							</div>
						</div>
						<p class="text-gray-700 italic mb-4">
							"SkyLend helped me expand my supermarket when I needed it most. The process was incredibly fast and transparent."
						</p>
						<div class="flex text-yellow-400">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
					</div>

					<div class="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
						<div class="flex items-center gap-3 mb-4">
							<div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
								<span class="text-green-600 font-semibold">CJ</span>
							</div>
							<div>
								<div class="font-semibold text-gray-900">Chioma J.</div>
								<div class="text-sm text-gray-600">Abuja Nurse</div>
							</div>
						</div>
						<p class="text-gray-700 italic mb-4">
							"When I had a medical emergency, SkyLend provided the funds I needed within minutes. Their customer service is exceptional."
						</p>
						<div class="flex text-yellow-400">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
					</div>

					<div class="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
						<div class="flex items-center gap-3 mb-4">
							<div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
								<span class="text-orange-600 font-semibold">EE</span>
							</div>
							<div>
								<div class="font-semibold text-gray-900">Emmanuel E.</div>
								<div class="text-sm text-gray-600">Port Harcourt Student</div>
							</div>
						</div>
						<p class="text-gray-700 italic mb-4">
							"As a student, SkyLend made it possible for me to pay my tuition fees on time. The repayment plan was very flexible."
						</p>
						<div class="flex text-yellow-400">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section id="about" class="py-20 bg-white">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">About SkyLend</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						SkyLend is a digital financial platform built on trust, transparency, and innovation. We believe that access to credit should be simple, fair, and empowering for everyone. Our mission is to help individuals and small businesses across Nigeria achieve stability, growth, and financial independence.
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8">
					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
						<p class="text-gray-600">
							To become Nigeria's most trusted digital lender — promoting responsible borrowing and long-term financial wellness.
						</p>
					</div>

					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
						<p class="text-gray-600">
							To provide transparent, secure, and instant access to financial support powered by AI technology and ethical lending practices.
						</p>
					</div>

					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
						<p class="text-gray-600">
							Every loan we provide comes with clarity, fairness, and support — because your trust is our most valuable asset.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Compliance Section -->
		<section class="py-20 bg-gray-50">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">Compliance & Data Security</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						At SkyLend, we take your privacy and financial safety seriously. We operate under the regulatory supervision of the Central Bank of Nigeria (CBN) and comply with NDPC and NDIC data protection standards. Every transaction is end-to-end encrypted, and all user data is stored securely in accordance with Nigerian law.
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8">
					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">Licensed & Regulated</h3>
						<p class="text-gray-600">
							Fully licensed by the Central Bank of Nigeria (CBN) with adherence to fair lending regulations.
						</p>
					</div>

					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
						<p class="text-gray-600">
							Compliant with NDPC and NDIC standards, ensuring all user information is handled with strict confidentiality.
						</p>
					</div>

					<div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">Secure Transactions</h3>
						<p class="text-gray-600">
							All transactions are end-to-end encrypted and monitored to prevent fraud and unauthorized access.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section id="apply" class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<h2 class="text-4xl font-bold mb-6">Ready to Transform Your Financial Future?</h2>
				<p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
					Join over 500,000 Nigerians who have achieved their dreams with SkyLend. Apply now and get instant approval.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="#apply" class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2">
						<i class="fas fa-paper-plane"></i>
						Apply Now - It's Free
					</a>
					<a @click.prevent="scrollToSection('contact')" href="#contact" class="bg-white/10 text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition cursor-pointer">
						Speak to an Agent
					</a>
				</div>
				<div class="mt-8 text-blue-200 text-sm">
					<i class="fas fa-lock"></i> Your information is secure and encrypted
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="py-20 bg-white">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<h2 class="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
				<p class="text-xl text-gray-600 mb-8">
					Have questions? We're here to help. Contact our support team for assistance.
				</p>
				<div class="grid md:grid-cols-3 gap-8">
					<div>
						<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="fas fa-map-marker-alt text-blue-600 text-xl"></i>
						</div>
						<h3 class="font-semibold text-gray-900 mb-2">Address</h3>
						<p class="text-gray-600">14A, Ilupeju Avenue, Lagos</p>
					</div>
					<div>
						<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="fas fa-phone text-blue-600 text-xl"></i>
						</div>
						<h3 class="font-semibold text-gray-900 mb-2">Phone</h3>
						<p class="text-gray-600">+234 901 234 5678</p>
					</div>
					<div>
						<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="fas fa-envelope text-blue-600 text-xl"></i>
						</div>
						<h3 class="font-semibold text-gray-900 mb-2">Email</h3>
						<p class="text-gray-600">help@skylend.ng</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Floating Apply Button -->
		<a @click.prevent="scrollToSection('apply')" href="#apply" class="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-3xl z-50 inline-flex items-center gap-2 cursor-pointer">
			<i class="fas fa-paper-plane"></i>
			Apply Now
		</a>
	</div>
</template>

<style scoped>
</style>

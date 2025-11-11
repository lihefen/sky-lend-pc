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
		<section id="home" class="text-white">
			<div class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
						<i class="fas fa-bolt"></i>
						<span class="text-sm font-medium">Instant Approval in 5 Minutes</span>
					</div>
					
					<h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black">
						Financial Freedom for <span class="text-[#1A70FF]">Every Nigerian</span>
					</h1>
					
					<p class="text-xl text-black mb-8 leading-relaxed">
						Get instant loans from <span class="text-[#FF6600]">₦5,000</span> to<span class="text-[#FF6600]"> ₦3,000,000</span>. Licensed by the Central Bank of Nigeria. No collateral, no hidden fees. Your trusted financial partner.
					</p>
					
					<div class="flex flex-col sm:flex-row gap-4 mb-8">
						<a @click.prevent="scrollToSection('apply')" href="#apply" class="bg-[#1A70FF] hover:bg-[#1A70FF] text-white px-8 py-3 rounded-lg font-semibold transition text-center cursor-pointer inline-flex items-center justify-center gap-2">
							<i class="fas fa-paper-plane"></i>
							Apply Instantly
						</a>
						<a @click.prevent="scrollToSection('features')" href="#features" class="bg-white/10 border border-[#1A70FF] text-[#1A70FF] hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition text-center cursor-pointer">
							Watch Demo
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
					<div >
						<img src="../assets/images/banner/banner_person.png" 
              alt="SkyLend Mobile App" 
              class="w-full">
					</div>
					
				</div>
			</div>
		</section>

		<!-- Trust Bar -->
		<section class="bg-gray-50 py-10">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center text-gray-600  text-sm font-medium">Trusted by leading Nigerian institutions</div>
				<div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center mt-16">
					<img src="../assets/images/trusted/trusted_1.png" 
            alt="CBN" class="h-12 mx-auto ">
					<img src="../assets/images/trusted/trusted_2.png" 
            alt="NDIC" class="h-12 mx-auto ">
					<img src="../assets/images/trusted/trusted_3.png"  
            alt="Flutterwave" class="h-12 mx-auto ">
					<img src="../assets/images/trusted/trusted_4.png"  
            alt="Visa" class="h-12 mx-auto ">
					<img src="../assets/images/trusted/trusted_5.png" 
            alt="Paystack" class="h-12 mx-auto">
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
					<!-- Reuse Credit Line -->
                    <!-- border: 1px solid rgba(215, 237, 255, 1);
                    border-radius: 20px;
                    background: linear-gradient(180.00deg, rgba(197, 248, 255, 1),rgba(255, 255, 255, 1) 100%); -->

					<div style="background: linear-gradient(180.00deg, rgba(197, 248, 255, .5),rgba(255, 255, 255, 1) 10%);" class="rounded-2xl p-8 shadow-lg border border-[#D7EDFF] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="flex items-center gap-3 mb-4">
							<div class="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
								<i class="fas fa-sync-alt text-blue-600 text-xl"></i>
							</div>
							<h3 class="text-xl font-bold text-gray-900">Reuse Credit Line</h3>
						</div>
						<p class="text-gray-600 mb-6">Your credit limit refreshes as you repay. Use it again without reapplying!</p>
						
						<!-- Financial Details -->
						<div class="grid grid-cols-2 gap-4 mb-6">
							<div>
								<div class="text-2xl font-bold text-gray-900">₦5,000 - ₦100,000</div>
								<div class="text-sm text-gray-600">Reusable Limit</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">0.05%</div>
								<div class="text-sm text-gray-600">Daily Interest</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">Instant</div>
								<div class="text-sm text-gray-600">Repeat Access</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">5 mins</div>
								<div class="text-sm text-gray-600">First Disbursement</div>
							</div>
						</div>

						<!-- Benefits Section -->
						<div class="mb-6">
							<div class="flex items-center gap-2 mb-3">
								<i class="fas fa-gem text-blue-600"></i>
								<h4 class="font-semibold text-gray-900">Benefits for repeat borrowers</h4>
							</div>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Higher loan amounts with each successful repayment</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Faster approval - no re-application needed</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Lower interest rates for loyal customers</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">One-tap borrowing after first loan</span>
								</li>
							</ul>
						</div>

						<button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
							Borrow Again
						</button>
					</div>

					<!-- Growing Loan -->
					<div style="background: linear-gradient(180.00deg, rgba(197, 248, 255, .5),rgba(255, 255, 255, 1) 10%);" class="rounded-2xl p-8 shadow-lg border border-[#D7EDFF] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="flex items-center gap-3 mb-4">
							<div class="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
								<i class="fas fa-chart-line text-blue-600 text-xl"></i>
							</div>
							<h3 class="text-xl font-bold text-gray-900">Growing Loan</h3>
						</div>
						<p class="text-gray-600 mb-6">Each successful repayment increases your borrowing power and lower rates</p>
						
						<!-- Financial Details -->
						<div class="grid grid-cols-2 gap-4 mb-6">
							<div>
								<div class="text-2xl font-bold text-gray-900">₦10,000 - ₦500,000</div>
								<div class="text-sm text-gray-600">Growing Limit</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">1.2% - 2.0%</div>
								<div class="text-sm text-gray-600">Loyalty Rate</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">3 - 24 months</div>
								<div class="text-sm text-gray-600">Flexible Terms</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">↑25%</div>
								<div class="text-sm text-gray-600">Limit increase</div>
							</div>
						</div>

						<!-- Benefits Section -->
						<div class="mb-6">
							<div class="flex items-center gap-2 mb-3">
								<i class="fas fa-gem text-blue-600"></i>
								<h4 class="font-semibold text-gray-900">Loyalty Benefits</h4>
							</div>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Automatic 25% limit increase after 3 repayments</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Rate decrease with each successful loan</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Borrow again before finishing current loan</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Special offers for consistent borrowers</span>
								</li>
							</ul>
						</div>

						<button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
							Borrow Again
						</button>
					</div>

					<!-- Quick Cash -->
					<div style="background: linear-gradient(180.00deg, rgba(197, 248, 255, .5),rgba(255, 255, 255, 1) 10%);" class="rounded-2xl p-8 shadow-lg border border-[#D7EDFF] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="flex items-center gap-3 mb-4">
							<div class="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
								<i class="fas fa-wallet text-blue-600 text-xl"></i>
							</div>
							<h3 class="text-xl font-bold text-gray-900">Quick Cash</h3>
						</div>
						<p class="text-gray-600 mb-6">Need more between paydays? Get instant access after your first loan.</p>
						
						<!-- Financial Details -->
						<div class="grid grid-cols-2 gap-4 mb-6">
							<div>
								<div class="text-2xl font-bold text-gray-900">₦3,000 - ₦50,000</div>
								<div class="text-sm text-gray-600">Quick Cash</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">0.07%</div>
								<div class="text-sm text-gray-600">Daily Interest</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">7 - 30 days</div>
								<div class="text-sm text-gray-600">Short Term</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900">30 secs</div>
								<div class="text-sm text-gray-600">Repeat Access</div>
							</div>
						</div>

						<!-- Benefits Section -->
						<div class="mb-6">
							<div class="flex items-center gap-2 mb-3">
								<i class="fas fa-gem text-blue-600"></i>
								<h4 class="font-semibold text-gray-900">Instant Repeat Borrowing</h4>
							</div>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">One - tap access after first approval</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">No documents needed for repeat loans</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Borrow again even with existing loans</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-green-500 text-sm mt-1"></i>
									<span class="text-sm">Automatic increase with good history</span>
								</li>
							</ul>
						</div>

						<button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
							Borrow Again
						</button>
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

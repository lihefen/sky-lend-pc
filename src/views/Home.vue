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
			<div class="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<div><img src="../assets/images/banner/banner_tag.png"  /></div>
					
					<h1 style="line-height: 1.2;" class="text-5xl lg:text-5xl font-bold mb-6 leading-tight text-black  mt-4 font-helvetica">
						<i class="font-bold">Financial Freedom for</i> <br/><span class="text-[#1A70FF]"><i class="font-bold">Every Nigerian</i></span>
					</h1>
					
					<p class="text-xl text-black mb-8 leading-relaxed">
						Get instant loans from <span class="text-[#FF6600]">₦5,000</span> to<span class="text-[#FF6600]"> ₦3,000,000</span>. Licensed by the Central Bank of Nigeria. No collateral, no hidden fees. Your trusted financial partner.
					</p>
					
					<div class="flex flex-col sm:flex-row gap-4 mb-8">
						<a @click.prevent="scrollToSection('apply')" href="#apply" class="bg-[#1A70FF] hover:bg-[#1A70FF] text-white px-12 py-4 rounded-lg font-semibold transition text-center cursor-pointer inline-flex items-center justify-center gap-2">
							Apply Instantly
						</a>
						<a @click.prevent="scrollToSection('features')" href="#features" class="bg-white/10 border border-[#1A70FF] text-[#1A70FF] hover:bg-white/20 px-12 py-4 rounded-lg font-semibold transition text-center cursor-pointer">
							Watch Demo
						</a>
					</div>
					
					<div class="flex">
						<div >
							<div class="relative text-2xl text-black text-center"><img class="relative" src="../assets/images/banner/banner_num_bg.png" alt="Number Background" ><span class="absolute top-2 left-0 text-2xl  text-black font-helvetica font-bold">500K+</span></div>
							<div class="text-black text-sm text-left mt-2">Customers</div>
						</div>
						<div class="ml-16">
							<div class="relative text-2xl  text-black text-center"><img class="relative mx-auto" src="../assets/images/banner/banner_num_bg.png" alt="Number Background" ><span class="absolute top-2 left-0 text-2xl font-bold  text-black font-helvetica text-center w-full">₦15B+</span></div>
							<div class="text-black text-sm mt-2">Loans Disbursed</div>
						</div>
						<div class="ml-16">
							<div class="relative text-2xl text-black text-center"><img class="relative mx-auto" src="../assets/images/banner/banner_num_bg.png" alt="Number Background" ><span class="absolute top-2 left-0 text-2xl font-bold text-black font-helvetica text-center w-full">98%</span></div>
							<div class="text-black text-sm mt-2">Approval Rate</div>
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
					<div style="background: linear-gradient(180.00deg, rgba(197, 248, 255, .5),rgba(255, 255, 255, 1) 10%);" class="rounded-2xl p-8 shadow-lg border border-[#D7EDFF] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
							<div class="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
								<img src="../assets/images/solutions/pro_icon_1.png" alt="Reuse Credit Line" class="w-12 h-12 object-contain"> 
							</div>
							<div class="text-center md:text-left">
                                <h3 class="text-xl font-bold text-gray-900">Reuse Credit Line</h3>
                            <p class="text-gray-600 text-xs">Your credit limit refreshes as you repay. Use it again without reapplying!</p>
                            </div>
						</div>
						
						<!-- Financial Details -->
						<div class="grid grid-cols-2 gap-4 mb-6">
							<div>
								<div class="text-sm font-bold text-[#0965FE]">₦5,000 - ₦100,000</div>
								<div class="text-xs text-gray-600">Reusable Limit</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-right">0.05%</div>
								<div class="text-xs  text-right text-gray-600">Daily Interest</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-left">Instant</div>
								<div class="text-xs text-gray-600 text-left">Repeat Access</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-right">5 mins</div>
								<div class="text-xs text-gray-600 text-right">First Disbursement</div>
							</div>
						</div>

						<!-- Benefits Section -->
						<div class="mb-6 rounded-2xl py-4 px-4" style="background: #EFFCFE;">
							<div class="flex items-center gap-2 mb-3">
								<i class="fas fa-gem text-[#51A8FF]"></i>
								<h4 class="font-semibold text-gray-900">Benefits for repeat borrowers</h4>
							</div>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Higher loan amounts with each successful repayment</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Faster approval - no re-application needed</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Lower interest rates for loyal customers</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">One-tap borrowing after first loan</span>
								</li>
							</ul>
						</div>

						<button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
							Apply
						</button>
					</div>

					<!-- Growing Loan -->
					<div style="background: linear-gradient(180.00deg, rgba(197, 248, 255, .5),rgba(255, 255, 255, 1) 10%);" class="rounded-2xl p-8 shadow-lg border border-[#D7EDFF] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
							<div class="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
								<img src="../assets/images/solutions/pro_icon_2.png" alt="Reuse Credit Line" class="w-12 h-12 object-contain"> 
							</div>
							<div class="text-center md:text-left">
                                <h3 class="text-xl font-bold text-gray-900">Growing Loan</h3>
                            <p class="text-gray-600  text-xs">Your Each successful repayment increases your borrowing power and lower rates</p>
                            </div>
						</div>
						
						<!-- Financial Details -->
						<div class="grid grid-cols-2 gap-4 mb-6">
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-left">₦10,000 - ₦500,000</div>
								<div class="text-xs text-gray-600 text-left">Growing Limit</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-right">1.2% - 2.0%</div>
								<div class="text-xs text-gray-600 text-right">Loyalty Rate</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-left">3 - 24 months</div>
								<div class="text-xs text-gray-600 text-left">Flexible Terms</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-right">↑25%</div>
								<div class="text-xs text-gray-600 text-right">Limit increase</div>
							</div>
						</div>

						<!-- Benefits Section -->
						<div class="mb-6 rounded-2xl py-4 px-4" style="background: #EFFCFE;">
							<div class="flex items-center gap-2 mb-3">
								<i class="fas fa-gem text-[#51A8FF]"></i>
								<h4 class="font-semibold text-gray-900">Loyalty Benefits</h4>
							</div>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Automatic 25% limit increase after 3 repayments</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Rate decrease with each successful loan</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Borrow again before finishing current loan</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Special offers for consistent borrowers</span>
								</li>
							</ul>
						</div>

						<button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
							Apply
						</button>
					</div>

					<!-- Quick Cash -->
					<div style="background: linear-gradient(180.00deg, rgba(197, 248, 255, .5),rgba(255, 255, 255, 1) 10%);" class="rounded-2xl p-8 shadow-lg border border-[#D7EDFF] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
						<div class="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
							<div class="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
								<img src="../assets/images/solutions/pro_icon_3.png" alt="Reuse Credit Line" class="w-12 h-12 object-contain"> 
							</div>
							<div class="text-center md:text-left">
                                <h3 class="text-xl font-bold text-gray-900">Quick Cash</h3>
                            <p class="text-gray-600 mb-4 text-xs">Need more between paydays?Get instant access after your first loan.</p>
                            </div>
						</div>
						
						<!-- Financial Details -->
						<div class="grid grid-cols-2 gap-4 mb-6">
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-left">₦3,000 - ₦50,000</div>
								<div class="text-xs text-gray-600 text-left">Quick Cash</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-right">0.07%</div>
								<div class="text-xs text-gray-600 text-right">Daily Interest</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-left">7 - 30 days</div>
								<div class="text-xs text-gray-600 text-left">Short Term</div>
							</div>
							<div>
								<div class="text-sm font-bold text-[#0965FE] text-right">30 secs</div>
								<div class="text-xs text-gray-600 text-right">Repeat Access</div>
							</div>
						</div>

						<!-- Benefits Section -->
						<div class="mb-6 rounded-2xl py-4 px-4" style="background: #EFFCFE;">
							<div class="flex items-center gap-2 mb-3">
								<i class="fas fa-gem text-[#51A8FF]"></i>
								<h4 class="font-semibold text-gray-900">Instant Repeat Borrowing</h4>
							</div>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">One - tap access after first approval</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">No documents needed for repeat loans</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Borrow again even with existing loans</span>
								</li>
								<li class="flex items-start gap-2">
									<i class="fas fa-check text-[#51A8FF] text-sm mt-1"></i>
									<span class="text-sm">Automatic increase with good history</span>
								</li>
							</ul>
						</div>

						<button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
							Apply
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- How It Works -->
		<section id="how-it-works" style="background: rgba(26, 112, 255, 1);" class="relative py-20 bg-gray-50 relative overflow-hidden">
			<!-- Background Pattern -->
			<div class="absolute inset-0 opacity-10">
				<div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);"></div>
			</div>
			
			<div class="max-w-7xl mx-auto px-6 relative z-10">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-white mb-4">Get Your Loan in 4 Simple Steps</h2>
					<p class="text-xl text-white/90">Our process is designed to be fast, secure, and completely digital.</p>
				</div>

				<!-- Steps Container -->
				<div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 lg:gap-4 mb-12">
					<!-- Step 1 -->
					<div class="flex flex-col items-center w-full md:w-auto">
						<div class="relative w-full max-w-[280px] md:max-w-[240px] lg:max-w-[280px]">
							<img src="../assets/images/step/step_1.png" alt="Step 1: Download App" class="w-full h-auto object-contain"/>
						</div>
					</div>
					
					<!-- Arrow 1 -->
					<div class="hidden md:block flex-shrink-0 px-2 lg:px-4">
						<img src="../assets/images/step/arrow.png" alt="Arrow" />
					</div>
					
					<!-- Step 2 -->
					<div class="flex flex-col items-center w-full md:w-auto">
						<div class="relative w-full max-w-[280px] md:max-w-[240px] lg:max-w-[280px]">
							<img src="../assets/images/step/step_2.png" alt="Step 2: Register" class="w-full h-auto object-contain"/>
						</div>
					</div>
					
					<!-- Arrow 2 -->
					<div class="hidden md:block flex-shrink-0 px-2 lg:px-4">
						<img src="../assets/images/step/arrow.png" alt="Arrow" />
					</div>
					
					<!-- Step 3 -->
					<div class="flex flex-col items-center w-full md:w-auto">
						<div class="relative w-full max-w-[280px] md:max-w-[240px] lg:max-w-[280px]">
							<img src="../assets/images/step/step_3.png" alt="Step 3: Get Approved" />
						</div>
					</div>
					
					<!-- Arrow 3 -->
					<div class="hidden md:block flex-shrink-0 px-2 lg:px-4">
						<img src="../assets/images/step/arrow.png" alt="Arrow" />
					</div>
					
					<!-- Step 4 -->
					<div class="flex flex-col items-center w-full md:w-auto">
						<div class="relative w-full max-w-[280px] md:max-w-[240px] lg:max-w-[280px]">
							<img src="../assets/images/step/step_4.png" alt="Step 4: Receive Funds" class="w-full h-auto object-contain"/>
						</div>
					</div>
				</div>

				<!-- App Download Links -->
				<div class="text-center mt-12">
					<div class="flex justify-center gap-4 flex-wrap">
						<a href="#" class="transition-transform hover:scale-105">
							<img src="../assets/images/step/apple_img.png" 
								alt="Download on App Store" class="h-12 lg:h-14 object-contain">
						</a>
						<a href="#" class="transition-transform hover:scale-105">
							<img src="../assets/images/step/google_img.png" 
								alt="Get it on Google Play" class="h-12 lg:h-14 object-contain">
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Loan Calculator -->
		<section id="calculator" class="py-20 bg-white">
			<div class="max-w-4xl mx-auto px-6">
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<div class="mr-20">
						<h2 class="text-4xl font-bold text-gray-900 mb-6">Smart Loan Calculator</h2>
						<p class="text-lg text-gray-600 mb-6">
							Plan your finances with our transparent calculator. Know exactly how much you'll pay back before you apply.
						</p>
						<div class="space-y-4">
                            <img src="../assets/images/calculator/calculator_text.png" alt="Calculator" class="">
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
									<span class="text-[#1A70FF]">₦5,000</span>
									<span class="text-[#1A70FF]">{{ formattedAmount }}</span>
									<span class="text-[#1A70FF]">₦3,000,000</span>
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
									<span class="text-[#1A70FF]">91 days</span>
									<span class="text-[#1A70FF]">{{ formattedTenure }}</span>
									<span class="text-[#1A70FF]">150 days</span>
								</div>
							</div>

							<div class="bg-white p-4 rounded-lg border">
								<div class="flex justify-between items-center mb-2">
									<span class="text-gray-600">Monthly Payment</span>
									<span class="text-xl font-bold text-[#1A70FF]">{{ formattedMonthlyPayment }}</span>
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

							<button style="background: rgba(26, 112, 255, 1);" @click="scrollToSection('apply')" class="text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full inline-flex items-center justify-center gap-2">
								<i class="fas fa-paper-plane"></i>
								Apply for This Loan
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonials -->
		<section class="py-20" style="background: rgba(228, 255, 251, 1);">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands of Nigerians</h2>
					<p class="text-xl text-gray-600">Real stories from real customers who transformed their lives with SkyLend</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8">
					<div style="box-sizing: border-box;border-radius: 24px;box-shadow: 0px 7px 16px -5px rgba(44, 209, 191, 0.16),inset -1px -2px 0px 0px rgba(255, 255, 255, 1);background: linear-gradient(180.00deg, rgba(201, 255, 255, 1),rgba(230, 255, 252, 1) 100%);" class="relative rounded-xl p-6 shadow-lg">
                        <img src="../assets/images/real/trusted_text_1.png" alt="" class="absolute top-10 left-0">
						<p class="relative z-10 text-black mb-4 pt-8 ">
							SkyLend helped me expand my supermarket when I needed it most. The process was incredibly fast and transparent.
						</p>
						<div class="flex items-center justify-between">
                            <div class="flex text-yellow-400 ">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-black text-right"> <img src="../assets/images/real/touxiang.png" alt="" class="inline-block  mr-1 vertical-middle"><span >Adebayo O.</span></div>
                                <div class="text-sm text-gray-600">Lagos Business Owner</div>
                            </div>
                        </div>
					</div>

					<div style="box-sizing: border-box;border-radius: 24px;box-shadow: 0px 7px 16px -5px rgba(44, 209, 191, 0.16),inset -1px -2px 0px 0px rgba(255, 255, 255, 1);background: linear-gradient(180.00deg, rgba(201, 255, 240, 1),rgba(230, 255, 246, 1) 100%);" class="relative rounded-xl p-6 shadow-lg">
						<img src="../assets/images/real/trusted_text_2.png" alt="" class="absolute top-10 left-0">
						
						<p class="relative z-10 text-black mb-4 pt-8 ">
							When I had a medical emergency, SkyLend provided the funds I needed within minutes. Their customer service is exceptional.
						</p>
						<div class="flex items-center justify-between">
                            <div class="flex text-yellow-400 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-black text-right"> <img src="../assets/images/real/touxiang.png" alt="" class="inline-block  mr-1 vertical-middle"><span >Chioma J.</span></div>
                                <div class="text-sm text-gray-600 text-right">Abuja Nurse</div>
                            </div>
                        </div>
					</div>

					<div style="box-sizing: border-box;border-radius: 24px;box-shadow: 0px 7px 16px -5px rgba(44, 209, 191, 0.16),inset -1px -2px 0px 0px rgba(255, 255, 255, 1);background: linear-gradient(180.00deg, rgba(201, 255, 255, 1),rgba(230, 255, 252, 1) 100%);" class="relative rounded-xl p-6 shadow-lg">
						<img src="../assets/images/real/trusted_text_3.png" alt="" class="absolute top-10 left-0">
						
						<p class="relative z-10 text-black mb-4 pt-8 ">
							As a student, SkyLend made it possible for me to pay my tuition fees on time. The repayment plan was very flexible.
						</p>
                        <div class="flex items-center justify-between">
                            <div class="flex text-yellow-400 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <div class="font-semibold text-black text-right"><img src="../assets/images/real/touxiang.png" alt="" class="inline-block  mr-1 vertical-middle"><span >Emmanuel E.</span></div>
                                
                                <div class="text-sm text-gray-600 text-right">Port Harcourt Student</div>
                            </div>
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
					<div style="border-radius: 20px;background: rgba(26, 112, 255, 1);" class=" relative rounded-xl p-8 shadow-lg ">
                        <img src="../assets/images/about/about_icon_1.png" alt="" class="absolute top-0 right-0">
						<h3 class="text-xl font-bold text-white mb-3">Our Vision</h3>
						<p class="text-white">
							To become Nigeria's most trusted digital lender — promoting responsible borrowing and long-term financial wellness.
						</p>
					</div>

					<div style="border-radius: 20px;background: rgba(26, 112, 255, 1);" class=" relative rounded-xl p-8 shadow-lg ">
                        <img src="../assets/images/about/about_icon_2.png" alt="" class="absolute top-0 right-0">
						<h3 class="text-xl font-bold text-white mb-3">Our Mission</h3>
						<p class="text-white">
							To provide transparent, secure, and instant access to financial support powered by AI technology and ethical lending practices.
						</p>
					</div>

					<div style="border-radius: 20px;background: rgba(26, 112, 255, 1);" class=" relative rounded-xl p-8 shadow-lg ">
                        <img src="../assets/images/about/about_icon_3.png" alt="" class="absolute  right-0 opacity-10" style="top:-20px">
						<h3 class="text-xl font-bold text-white mb-3">Our Promise</h3>
						<p class="text-white">
							Every loan we provide comes with clarity, fairness, and support — because your trust is our most valuable asset.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Compliance Section -->
		<section class="py-20 bg-white">
			<div class="max-w-7xl mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">Compliance & Data Security</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						At SkyLend, we take your privacy and financial safety seriously. We operate under the regulatory supervision of the Central Bank of Nigeria (CBN) and comply with NDPC and NDIC data protection standards. Every transaction is end-to-end encrypted, and all user data is stored securely in accordance with Nigerian law.
					</p>
				</div>

				<div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="flex justify-center md:justify-start">
                        <img src="../assets/images/security/security_img.png" alt="Security Illustration" class="w-full max-w-md">
                    </div>

                    <div class="space-y-8">
                        <div>
                            <h3  class="relative text-xl font-bold mb-3 inline-block pr-4">Data Protection <span class="absolute bottom-0 right-0 w-full h-2" style="background: rgba(80, 217, 255, 1);opacity: 0.6;"></span></h3>
                            <p class="text-gray-600 leading-relaxed">
                                Compliant with NDPC and NDIC standards, ensuring all user information is handled with strict confidentiality.
                            </p>
                        </div>
                        
                        <div>
                            <h3  class="relative text-xl font-bold mb-3 inline-block pr-2">Secure Transactions<span class="absolute bottom-0 right-0 w-full h-2" style="background: rgba(80, 217, 255, 1);opacity: 0.6;"></span></h3>
                            <p class="text-gray-600 leading-relaxed">
                                All transactions are end-to-end encrypted and monitored to prevent fraud and unauthorized access.
                            </p>
                        </div>

                        <div>
                            <h3  class="relative text-xl font-bold mb-3 inline-block pr-2">Licensed & Regulated<span class="absolute bottom-0 right-0 w-full h-2" style="background: rgba(80, 217, 255, 1);opacity: 0.6;"></span></h3>
                            <p class="text-gray-600 leading-relaxed">
                                Fully licensed by the Central Bank of Nigeria (CBN) with adherence to fair lending regulations.
                            </p>
                        </div>
                    </div>
				</div>
			</div>
		</section>

        <section style="background: rgba(107, 255, 223, 1);" class="py-20">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-4">Apply for a Loan in Minutes</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						Our application process is designed to be simple，transparent， and full digital-powered by AI for instant evaluation and approval.
                    </p>
				</div>

                <div class="grid md:grid-cols-3 gap-8">
					<div style="border-radius: 20px;background: rgba(255, 255, 255, .85);" class=" relative rounded-xl p-4 shadow-lg ">
						<h3 style="border-radius: 10px;background: linear-gradient(90.00deg, rgba(107, 255, 223, 1),rgba(233, 255, 250, 1) 100%);" class="text-xl font-bold text-black mb-3 py-2 px-2">1.Minimal Steps</h3>
						<p class="text-black">
							Enter your phone number and verify with OTP.
						</p>
                        <p class="text-black">
							Fill in your basic details (occupation, income   source).
						</p>
                        <p class="text-black">
							Upload optional documents (ID, bank statement).
						</p>
					</div>

					<div style="border-radius: 20px;background: rgba(255, 255, 255, .85);" class=" relative rounded-xl p-4 shadow-lg ">
						<h3 style="border-radius: 10px;background: linear-gradient(90.00deg, rgba(107, 255, 223, 1),rgba(233, 255, 250, 1) 100%);" class="text-xl font-bold text-black mb-3 py-2 px-2">2.Real-time Pre-Approval</h3>
						<p class="text-black">
							Our AI-based credit scoring engine (inspired by Aella Credit's model) analyzes your profile instantly to determine eligubility and show your approval limit - no waiting, no paperwork.
						</p>
					</div>

					<div style="border-radius: 20px;background: rgba(255, 255, 255, .85);" class=" relative rounded-xl p-4 shadow-lg ">
						<h3 style="border-radius: 10px;background: linear-gradient(90.00deg, rgba(107, 255, 223, 1),rgba(233, 255, 250, 1) 100%);" class="text-xl font-bold text-black mb-3 py-2 px-2">3.Transparent Fees</h3>
						<p class="text-black">
							Your'll see the total repayment, interest breakdown, and late fee policy unfront - ensuring compete transparency and trust in every transaction.
						</p>
					</div>
				</div>
            </div>
        </section>
		<!-- CTA Section -->
		<section id="apply" class="py-20">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<h2 class="text-4xl font-bold mb-6 text-black">Ready to Transform Your Financial Future?</h2>
				<p class="text-xl text-black mb-8 max-w-2xl mx-auto">
					Join over <b class="text-[#1A70FF]"> 500,000 </b>Nigerians who have achieved their dreams with SkyLend. Apply now and get instant approval.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="#apply" class="bg-[#1A70FF] hover:bg-[#1A70FF]/50 text-white w-[340px] py-5 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2">
						Apply Now 
					</a>
					<a style="box-sizing: border-box;border: 1px solid rgba(26, 112, 255, 1);background: rgba(21, 109, 255, 0.05);" @click.prevent="scrollToSection('contact')" href="#contact" class="border border-[#1A70FF] text-[#1A70FF] hover:bg-white/20 w-[340px] py-5 rounded-lg font-semibold transition cursor-pointer">
						Speak to an Agent
					</a>
				</div>
				<div class="mt-8 text-black text-sm">
					<img src="../assets/images/safe_icon.png" alt="" class="inline-block mr-2">Your information is secure and encrypted
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
						<p class="text-gray-600">17 Dopemu Road, Agege, Lagos State, Nigeria</p>
					</div>
					<div>
						<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="fas fa-phone text-blue-600 text-xl"></i>
						</div>
						<h3 class="font-semibold text-gray-900 mb-2">Phone</h3>
						<p class="text-gray-600">+234 812 428 0663</p>
					</div>
					<div>
						<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
							<i class="fas fa-envelope text-blue-600 text-xl"></i>
						</div>
						<h3 class="font-semibold text-gray-900 mb-2">Email</h3>
						<p class="text-gray-600">support@skylend.com</p>
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

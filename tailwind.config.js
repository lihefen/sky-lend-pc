module.exports = {
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
	],

	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				// 使用本地 Helvetica 字体，优先加载本地字体文件
				'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'Segoe UI', 'Roboto', 'Microsoft YaHei', '微软雅黑', 'sans-serif'],
				'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'Segoe UI', 'Roboto', 'Microsoft YaHei', '微软雅黑', 'sans-serif'],
			},
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
				
				// SkyLend brand colors
				'primary': '#0066cc',
				'secondary': '#ff9900',
				'accent': '#00a859',
				'dark': '#1a365d',
				'light': '#f8fafc',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

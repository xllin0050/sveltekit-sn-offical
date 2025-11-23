// Tailwind v4 Config for supernapkin.com
export default {
	theme: {
		extend: {
			colors: {
				bg: 'var(--color-bg)',
				surface: 'var(--color-surface)',
				primary: 'var(--color-text-primary)',
				secondary: 'var(--color-text-secondary)',
				accent: 'var(--color-accent)',
				link: 'var(--color-link)'
			},

			fontFamily: {
				body: ['Poppins', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'system-ui', 'sans-serif'],
				meta: ['Poppins', 'system-ui', 'sans-serif']
			},

			fontSize: {
				xs: '0.75rem',
				sm: 'var(--small-text-size)',
				base: 'var(--normal-text-size)',
				lg: 'var(--large-text-size)',
				xl: 'var(--heading-4-size)',
				'2xl': 'var(--heading-3-size)',
				'3xl': 'var(--heading-2-size)',
				'5xl': 'var(--heading-1-size)'
			},

			spacing: {
				xs: '8px',
				sm: '16px',
				md: '24px',
				lg: '48px',
				xl: '96px'
			},

			maxWidth: {
				content: '1280px'
			},

			letterSpacing: {
				wide: '0.05em',
				tighter: '-0.01em'
			},

			screens: {
				xs: '420px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px'
			},

			borderRadius: {
				none: '0px'
			},

			boxShadow: {
				none: 'none'
			}
		}
	}
};

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext'
	},
	server: {
		host: '0.0.0.0',
		port: 5177
	}
});

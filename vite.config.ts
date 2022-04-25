import { defineConfig } from 'vite';
import solid from 'solid-start';
import { join } from 'path';
import css from 'unocss/vite';

export default defineConfig({
	plugins: [
		solid({
			adapter: 'solid-start-static',
		}),
		css(),
	],
	resolve: {
		alias: {
			'~': join(__dirname, 'src'),
			$css: join(__dirname, 'src/assets/style/bundle.ts'),
		}
	}
});

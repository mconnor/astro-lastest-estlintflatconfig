import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

import js from '@eslint/js';
import markdown from 'eslint-plugin-markdown';
export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,

	...eslintPluginAstro.configs['flat/recommended'],
	eslintConfigPrettier,
	{
		plugins: {
			markdown,
		},
	},
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
	{
		...js.configs.recommended,
		files: ['src/**/*.js', 'src/**/*.jsx'],
	},
	{
		files: ['src/**/*.md'],
		processor: 'markdown/markdown',
		rules: {
			// ...
		},
	},
	{
		// 1. Target ```js code blocks in .md files.
		files: ['**/*.md/*.js'],
		rules: {
			// 2. Disable other rules.
			'no-console': 'off',
			'import/no-unresolved': 'off',
		},
	},
];

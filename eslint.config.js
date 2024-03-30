import eslintPluginAstro from 'eslint-plugin-astro'
import typescriptParser from '@typescript-eslint/parser'
import astroEslintParser from 'astro-eslint-parser'
// import prettier from "prettier";
// import markdown from "eslint-plugin-markdown";
import js from '@eslint/js'

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        sourceType: 'module',
        jsx: true,
      },
    },
    rules: {
      // override/add rules settings here, such as:
      'astro/no-set-html-directive': 'error',
    },
  },

  {
    ...js.configs.recommended,
    files: ['src/**/*.js', 'src/**/*.jsx'],

    // ignores: ["**/*.config.js", "**/*.config.mjs", "!**/eslint.config.js"],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  //     rules: {
  //       // override/add rules settings here, such as:
  //       // "astro/no-set-html-directive": "error"
  //     },
  //   }
]

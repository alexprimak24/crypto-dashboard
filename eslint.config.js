import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      semi: ['warn', 'always'],
      quotes: ['warn', 'single', { avoidEscape: true }],
      'jsx-quotes': ['warn', 'prefer-double'],
      'object-curly-spacing': ['warn', 'always'],
      // 'comma-dangle': ['error', 'always-multiline'],
      indent: ['warn', 2, { SwitchCase: 1 }],
      'arrow-parens': ['warn', 'always'],
    },
  },
);

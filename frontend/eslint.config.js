* eslint.config.js *
import { configs as ReactQueryConfigs, rules as ReactQueryRules } from '@tanstack/eslint-plugin-query';

export const EslintConfig = {
  plugins: {
    '@tanstack/eslint-plugin-query': { rules: ReactQueryRules, configs: ReactQueryConfigs },
  },
  rules: {
    '@tanstack/eslint-plugin-query/exhaustive-deps': 'error',
    '@tanstack/eslint-plugin-query/no-rest-destructuring': 'warn',
    '@tanstack/eslint-plugin-query/stable-query-client': 'error',
  },
};
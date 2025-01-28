import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Ignoroi build ja dist hakemistot
  { ignores: ['dist'] },

  // Konfiguraatio, joka koskee kaikkia .js ja .jsx tiedostoja
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Käytetään ECMAScript 2020
      globals: globals.browser, // Määritellään globaalit muuttujat, kuten browser
      parserOptions: {
        ecmaVersion: 'latest', // Käytetään uusinta ECMAScript-versiota
        ecmaFeatures: { jsx: true }, // Mahdollistetaan JSX
        sourceType: 'module', // Käytetään module-lähde tyyppiä
      },
      parser: 'babel-eslint', // Siirrettiin parser tänne
    },
    settings: {
      react: { version: '18.3' }, // Määritellään Reactin versio
    },
    plugins: {
      react, // Reactin plugin
      'react-hooks': reactHooks, // React Hooksin plugin
      'react-refresh': reactRefresh, // React Refresh plugin
    },
    rules: {
      // ESLintin suositellut säännöt
      ...js.configs.recommended.rules,
      // Reactin suositellut säännöt
      ...react.configs.recommended.rules,
      // JSX-runtime säännöt
      ...react.configs['jsx-runtime'].rules,
      // React Hooksin suositellut säännöt
      ...reactHooks.configs.recommended.rules,

      // Mukautetut säännöt
      'react/jsx-no-target-blank': 'off', // Poistetaan target="_blank" varoitus
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Varoitus, jos ei ole komponentti, mutta on export
      'react/prop-types': 0, // Poistetaan prop-types varoitus
    },
  },
]

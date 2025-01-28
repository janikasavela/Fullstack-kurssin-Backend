import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Määritellään tuetut tiedostot
    languageOptions: {
      ecmaVersion: 'latest', // Käytetään uusinta ECMAScript-versiota
      globals: globals.browser, // Määritellään globaaleiksi selainympäristön muuttujat
      parserOptions: {
        ecmaVersion: 2020, // Käytetään ECMAScript 2020
        sourceType: 'module', // Käytetään module-lähdettä
        ecmaFeatures: { jsx: true }, // Mahdollistetaan JSX
      },
    },
    settings: {
      react: { version: 'detect' }, // Reactin versio automaattisesti tunnistetaan
    },
    plugins: {
      react, // Reactin plugin
      'react-hooks': reactHooks, // React Hooksin plugin
    },
    rules: {
      // ESLintin ja Reactin suositellut säännöt
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'react/jsx-no-target-blank': 'warn', // Varoitus target="_blank" käytöstä ilman rel="noopener noreferrer"
      'react/prop-types': 0, // Poistetaan prop-types tarkistukset (voi lisätä jos tarvitset)
      'react/react-in-jsx-scope': 'off', // Vite ei tarvitse tätä
    },
  },
]

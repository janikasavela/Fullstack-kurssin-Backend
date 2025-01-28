import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh' // Lisäämämme plugin

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
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
      'react-refresh': reactRefresh, // React Refreshin plugin
    },
    extends: [
      'eslint:recommended', // Suositellut ESLintin säännöt
      'plugin:react/recommended', // Suositellut Reactin säännöt
      'plugin:react-hooks/recommended', // Suositellut React Hooksin säännöt
    ],
    rules: {
      'react/jsx-no-target-blank': 'warn', // Varoitus target="_blank" käytöstä ilman rel="noopener noreferrer"
      'react/prop-types': 0, // Poistetaan prop-types tarkistukset (voi lisätä jos tarvitset)
      'react/react-in-jsx-scope': 'off', // Vite ei tarvitse tätä
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // React Refresh sääntö
    },
  },
]

import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

var globalCss = defineGlobalStyles({
  'html, body': {
    bg: 'gray.100',
  },
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Inject Global CSS
  globalCss,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',

    // external
    './node_modules/@ui/design-system/src/**/*.tsx',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // Allow only tokens
  strictTokens: true,

  // The output directory for your css system
  outdir: '@ui/styled-system',
  emitPackage: true,
  jsxFramework: 'react',
})

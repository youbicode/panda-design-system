import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The ouput directory
  outdir: '@ui/styled-system',
  emitPackage: true,
  jsxFramework: 'react',
})

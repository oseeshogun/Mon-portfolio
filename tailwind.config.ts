import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vscode: {
          'bg': '#1e1e1e',
          'sidebar': '#252526',
          'active': '#007acc',
          'hover': '#2d2d2d',
          'border': '#424242',
          'text': '#d4d4d4',
          'muted': '#808080',
        }
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      }
    },
  },
  plugins: [],
}

export default config

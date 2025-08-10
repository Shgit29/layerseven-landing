import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#0D9488',
          600: '#0f766e',
          700: '#0d7377',
        },
        orange: {
          500: '#F97316',
          600: '#ea580c',
        },
        gray: {
          50: '#F9FAFB',
          600: '#4B5563',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
import type { Config } from 'tailwindcss'

export default {
  content: [
    "src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ["JetBrains Mono"]
      }
    },
  },
  plugins: [],
} satisfies Config


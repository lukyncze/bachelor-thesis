App install:

1. pnpm create vite (https://vitejs.dev/guide/)

2. https://tailwindcss.com/docs/guides/vite:

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- tailwind.config.js:

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

- index.css:

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
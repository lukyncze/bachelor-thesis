App install:

1. pnpm create vite (https://vitejs.dev/guide/)

2. https://tailwindcss.com/docs/guides/vite#react:

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- tailwind.config.js:

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
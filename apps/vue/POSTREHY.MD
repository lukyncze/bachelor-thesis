App install:

1. pnpm create vite (https://vitejs.dev/guide/)

2. https://tailwindcss.com/docs/guides/vite#vue:

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- tailwind.config.js:

export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- index.css:

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

3. Vue nespadne při build, když chceme vyrenderovat komponentu, ale nemáme ji naimportovanou.

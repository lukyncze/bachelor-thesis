App install:

1. npm init @angular@latest angular (https://www.npmjs.com/package/@angular/create)

2. https://tailwindcss.com/docs/guides/angular:

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init
- tailwind.config.js:

export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- styles.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

3. Deploy (https://angular-quickstart.netlify.app/)
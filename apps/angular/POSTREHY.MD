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


Error v country-guess-input.component.html:

- Property 'ɵunwrapWritableSignal' does not exist on type 'typeof import("/home/lusu/Desktop/bachelor-thesis/apps/angular/node_modules/.pnpm/@angular+core@17.1.2_rxjs@7.8.1_zone.js@0.14.2/node_modules/@angular/core/index")'.ngtsc(2339)
- https://stackoverflow.com/questions/77986204/property-%C9%B5unwrapwritablesignal-does-not-exist-on-type

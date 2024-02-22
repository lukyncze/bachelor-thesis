App install:

1. pnpm create vite (https://vitejs.dev/guide/)

2. npx svelte-add@latest tailwindcss (https://github.com/svelte-add/tailwindcss)
upraveno pote podle: https://tailwindcss.com/docs/guides/vite#svelte


Chyba při buildu:

"TextEncoder" is not exported by "__vite-browser-external", imported by "node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/formDataToStream.js".
file: /home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/formDataToStream.js:1:8
1: import {TextEncoder} from 'util';
           ^
2: import {Readable} from 'stream';
3: import utils from "../utils.js";
error during build:
RollupError: "TextEncoder" is not exported by "__vite-browser-external", imported by "node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/formDataToStream.js".
    at error (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/parseAst.js:337:30)
    at Module.error (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:12781:16)
    at Module.traceVariable (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:13218:29)
    at ModuleScope.findVariable (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:11635:39)
    at Identifier.bind (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:7217:40)
    at NewExpression.bind (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:4641:23)
    at VariableDeclarator.bind (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:4641:23)
    at VariableDeclaration.bind (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:4637:28)
    at Program.bind (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:4637:28)
    at Module.bindReferences (file:///home/lusu/Desktop/bachelor-thesis/apps/svelte/node_modules/.pnpm/rollup@4.9.6/node_modules/rollup/dist/es/shared/node-entry.js:12777:18)
 ELIFECYCLE  Command failed with exit code 1.

vyřešeno pomocí: https://github.com/vitejs/vite/discussions/15268#discussioncomment-8382647

### Next.js
https://nextjs.org/learn/basics/create-nextjs-app
```plain
npx create-next-app [your_app_name] --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

Next.js creates folders
- pages - pages are generated from there, no need to create special route
- public - files in this folder are accessable after typing domain_name-cz/file_name_in_public_folder.jpg (without folder "public")

Pluses - it solves routing, SSR, static pages, it is globally used, better debug, there are a lot of plugins

### API client 
URQL

https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs

```plain
npm install --save next-urql react-is urql graphql
```

Apollo Client 
- we decided to not use Apollo, package is much greater in kb 
- urql has next.js plugin and we will have more control on loading sources - cache, pre-fetch data, fetch date on build...

https://formidable.com/open-source/urql/docs/comparison/ comparison uqrl, Apollo, Relay

### React-i18next i18next
https://react.i18next.com/

```plain
npm install react-i18next i18next --save
npm install i18next-http-backend i18next-browser-languagedetector --save
```
Pluses 
- command line export
- using BabelEdit for translate (not tried yet https://www.codeandweb.com/babeledit)

### React-i18next translate file export
setup is in file config/i18next-parser.config.js

Command line export
```plain
i18next 'pages/**/*.{js, tsx}' --config config/i18next-parser.config.js
```
or

```plain
npm run translate
```

Translate files are created to folder public/locales/[language]/translation.json - and are pre-filled by constants from en language


### Styleguidist - document your component
https://react-styleguidist.js.org/docs/getting-started
```plain
npm install --save react-styleguidist
```

If you have troubles with dependences use this line:
```plain
npm i --save react-styleguidist --legacy-peer-dep
```
https://react-styleguidist.js.org/docs/cookbook
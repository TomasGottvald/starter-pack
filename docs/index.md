# Install 
Install all dependencies.
```javascript
npm install
```

After install open http://localhost:3000/ in your browser.

## Start app

Start the development server.
```javascript
npm run dev
```

Builds the app for production.
```javascript
npm run build
```

Runs the built app in production mode.
```javascript
npm start
```


# Components

## Next.js
https://nextjs.org/learn/basics/create-nextjs-app
```javascript
npx create-next-app [your_app_name] --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

Vytvoří složky
- pages - odtud se generuji stranky a není třeba pro ně vytvářet routování
- public - soubory v této složce jsou dostupné při zadání nazev_domeny-cz/nazev_souboru_v_public.jpg (bez složky public)

Plusy - řeší routování, SSR, static pages, je hojně používáno, existuje spoustu dalších pluginů a umožňuje lepší debug

## Apollo client 
https://www.apollographql.com/docs/react/get-started/

```javascript
npm install react-i18next i18next --save
```

[doplnit configuraci a příklad použití]

## React-i18next i18next
https://react.i18next.com/

```javascript
npm install react-i18next i18next --save
npm install i18next-http-backend i18next-browser-languagedetector --save
```
Plusy - možnost exportů v příkazové řácce a možnost použít BabelEdit (neodzkoušeno)

### React-i18next export překladových souborů
nastavení je v souboru config/i18next-parser.config.js
export pomocí příkazové řádky
```javascript
i18next 'pages/**/*.{js, tsx}' --config config/i18next-parser.config.js
```
Soubory jsou vytvořeny do public/locales/[jazyk]/translation.json - a jsou předvyplněny konstanty z původního jazyka

## React-intl
https://formatjs.io/docs/getting-started/installation/

```javascript
npm i -S react react-intl
```


```javascript
import CONFIG from '../config/global'
import { IntlProvider, FormattedNumber } from 'react-intl'

<IntlProvider locale={ CONFIG.LOCALE }>
    <FormattedNumber
        value={ props.data.node.price.priceWithVat }
        style={`currency`}
        currency={ CONFIG.CURRENCY }
        />
</IntlProvider>

<FormattedTime value={myDate}/>
<FormattedDate
  value={myDate}
  day="numeric"
  month="long"
  year="numeric"/>

```


## React-toastify
```javascript
npm install --save react-toastify
```
https://www.npmjs.com/package/react-toastify

Demo s nastaveními - https://fkhadra.github.io/react-toastify/introduction/

Plusy - řeší spoustu problémů se zobrazením error hlášek - umožňuje spoustu nastavení - odsouhlaseno s UX


## React Styled components
```javascript
npm install --save styled-components
```
https://styled-components.com/docs/basics#installation

Plusy - umožňuje používat čisté css, globální nastvení themes, práci s proměnnými 


## Formik
https://formik.org/docs/overview

- hezky pracuje s jednotlivými stavy formulářového prvku - včetně zjištění zda bylo do inputu kliknuto (umožňuje pozorovat i jeho historii)

```javascript
npm install formik --save
```
Plusy - Formik je menší o polovinu a rychlejší

## ? App state management

https://dev.to/workshub/state-management-battle-in-react-2021-hooks-redux-and-recoil-2am0
Redux vs Context




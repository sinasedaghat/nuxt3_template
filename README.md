# Add Vuetify & Configuration It

Install Vuetify and mdi/font

```bash
npm i -D vuetify vite-plugin-vuetify
npm i @mdi/font
```

Update nuxt.config.ts file for use Vuetify

```tsx
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
	// ... other options
	// css: ['vuetify/lib/styles/main.sass'],
  build: {
	  // ...
    transpile: ['vuetify'],
  },
  modules: [
	  // ...
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
	  // ...
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

```

Create vuetify.ts in plugins directory for vuetify config (basic configs)

```tsx
// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#d35400",
    secondary: "#8e44ad",
    background: "#ecf0f1",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#8e44ad",
    secondary: "#d35400",
    background: "#2f3640",
    error: "#27ae60",
    info: "#f1c40f",
    success: "#c0392b",
    warning: "#2980b9",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "light",
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
})
```

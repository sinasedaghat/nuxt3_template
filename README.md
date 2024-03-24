# Add Pinia & Configuration It

Install Pinia

```bash
npm install pinia @pinia/nuxt
```

Update nuxt.config.ts file for use Pinia

```tsx
export default defineNuxtConfig({
  // ... other options
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
```

And you can update nuxt.config.ts for auto import store files

```tsx
export default defineNuxtConfig({
  // ... other options
  modules: [
	  // ...
	  '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})
```

To create and use the store file, see [use-pinia](https://github.com/sinasedaghat/vue3-template/tree/use-pinia) branch in [vue3-template](https://github.com/sinasedaghat/vue3-template) project

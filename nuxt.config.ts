// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { 
    enabled: true 
  },
  modules: ['@pinia/nuxt', "@nuxtjs/tailwindcss"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  
  app: {
    head: {
      link: [
        {        
          rel: "stylesheet",        
          href: "https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap",      
        }
      ]
    }
  }
})
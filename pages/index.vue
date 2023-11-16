<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

console.log('useTemplateStore', useTemplateStore())
console.log('ENV CONSUL_URL', import.meta.env.VITE_CONSUL_URL)

const text_lower = ref('salam')
const text_upper = ref('SALAM')

const path = ref(`${import.meta.env.VITE_CONSUL_URL}/v1/internal/ui/services?dc=dc1`)
const data = await useConsul(path)

 console.log('dddd', data)


//const { data } = await useFetch(path.value)

// const data = await useFetch(path.value)

</script>

<template>
  
  <h1 class="text-3xl font-bold underline">
    home Page in h1 tailwind tag
  </h1>

  text_lower ==> upper :{{ upperCase(text_lower) }}
  <br>
  text_upper ==> lower :{{ lowerCase(text_upper) }}
  <br>

  {{ data }}
  <br>
  <!-- {{ data }} -->
</template>
<script setup lang="ts">
  const counterStore = useCounterStore()


</script>

<template>
  <div>

    <h3>
      count: {{ counterStore.count }} | doubleCount: {{ counterStore.doubleCount }}

    </h3>
    <h4 @click="counterStore.increment">increment</h4>
    <h4 @click="counterStore.decrease">decrease</h4>
    
  </div>
</template>

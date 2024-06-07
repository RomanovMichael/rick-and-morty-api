<script setup>
import AppCard from '@/components/AppCard.vue'
  const props = defineProps({
    cards: {
      type: Array
    }
  })
</script>

<template>
  <div class="app-list">
    <app-card v-for="card in props.cards" :key="card"/>
  </div>
</template>

<style>
.app-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.75rem;
}

@media (max-width: 1680px) {
  .app-list {
    grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 1024px) {
  .app-list {
    grid-template-columns: 1fr;
    }
}
</style>

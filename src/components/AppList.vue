<script setup>
import AppCard from '@/components/AppCard.vue'
  const props = defineProps({
    cards: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div v-if="cards" class="app-list">
    <app-card v-for="card in props.cards" :key="card" :item="card"/>
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

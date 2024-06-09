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
  <section class="app-list">
    <div class="container">
      <app-card v-for="card in props.cards" :key="card.id" :item="card"/>
    </div>
  </section>
</template>

<style>
.app-list .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.75rem;
}

@media (max-width: 1680px) {
  .app-list .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1199px) {
  .app-list .container {
    max-width: 45rem;
    grid-template-columns: 1fr;
    padding: 0 3rem;
  }
}

@media (max-width: 640px) {
  .app-list .container {
    padding: 0 2.55rem;
  }
}
</style>

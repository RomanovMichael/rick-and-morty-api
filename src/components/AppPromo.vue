<script setup>
import AppLoader from '@/components/AppLoader.vue'
import { useCharactersStore } from '@/stores/characters'

const charactersStore = useCharactersStore()
</script>

<template>
  <section class="app-promo">
    <div class="container">
      <h1 class="app-promo__title">The Rick and Morty Characters</h1>
      <app-loader v-if="charactersStore.isLoading"/>
    </div>
  </section>
</template>

<style>
  .app-promo {
    position: relative;
    padding: 5rem 0;
    background-color: var(--color-white);
  }

  .app-promo .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .app-promo__title {
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
  }

  @media (max-width: 1024px) {
    .app-promo__title {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
</style>
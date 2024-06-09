<script setup>
import AppList from '@/components/AppList.vue'
import AppFilter from '@/components/AppFilter.vue'

import { useCharactersStore } from '@/stores/characters'
import { onMounted } from 'vue'

const charactersStore = useCharactersStore()

onMounted(() => {
  charactersStore.getEpisodes()
  charactersStore.getCharacters()
})
</script>

<template>
  <main>
    <div class="container">
      <app-filter />
      <app-list :cards="charactersStore.characters" />
    </div>
  </main>
</template>

<style>
  .container {
    margin-top: 5rem;
    padding: 0 1rem;
    max-width: 120rem;
    margin: 0 auto;
  }

  @media (max-width: 1440px) {
    .container {
      padding: 0 2rem;
    }
  }

  @media (max-width: 1024px) {
    .container {
      padding: 0 1rem;
    }
  }
</style>


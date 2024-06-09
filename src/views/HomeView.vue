<script setup>
import AppPromo from '@/components/AppPromo.vue'
import AppFilter from '@/components/AppFilter.vue'
import AppList from '@/components/AppList.vue'

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
    <app-promo />
    <app-filter />
    <div v-if="charactersStore.errorMessage" class="error">
    {{ charactersStore.errorMessage }}
    </div>
    <app-list v-else :cards="charactersStore.characters" />
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


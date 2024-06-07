<script setup>
import { useCharactersStore } from '@/stores/characters'
import { onMounted } from 'vue'
import AppList from '@/components/AppList.vue'

const charactersStore = useCharactersStore()

onMounted(() => {
  charactersStore.getCharacters()
  charactersStore.getEpisodes()
})
</script>

<template>
  <main>
    <div class="container">
      <AppList :cards="charactersStore.characters" class="app__list"/>
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


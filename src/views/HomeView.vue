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
      <div class="container">
        {{ charactersStore.errorMessage }}
      </div>
    </div>

    <app-list v-else :cards="charactersStore.characters" />
  </main>
</template>

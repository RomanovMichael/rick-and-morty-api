<script setup>
import { useCharactersStore } from '@/stores/characters'

const charactersStore = useCharactersStore()

const changePage = (direction) => {
  if(direction === 'prev') {
    charactersStore.filterParams.page -= 1
  } else {
    charactersStore.filterParams.page += 1
  }

  charactersStore.getCharacters()
}

const setFilters = () => {
  charactersStore.filterParams.page = 1

  charactersStore.getCharacters()
}

const resetFilters = () => {
  charactersStore.filterParams.name = ''
  charactersStore.filterParams.status = ''
  charactersStore.filterParams.page = 1

  charactersStore.getCharacters()
}
</script>

<template>
  <div class="app-filter">
    <input v-model="charactersStore.filterParams.name" type="text" placeholder="Enter character name">
    <button @click="setFilters()">Submit</button>
    <button @click="resetFilters()">Reset filters</button>
    <button @click="changePage('prev')" :class="{'is-disabled' : !charactersStore.responsePagerInfo['prev']}">Prev</button>
    <button @click="changePage('nex')" :class="{'is-disabled' : !charactersStore.responsePagerInfo['next']}">Next</button>

      <select v-model="charactersStore.filterParams.status" name="status" id="status">
        <option 
          v-for="option in charactersStore.statusOptionsList" 
          :key="option.label" 
          :value="option.value"
        >
          {{option.label}}
        </option>
      </select>
  </div>
</template>

<style></style>
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
    <div class="container">
      <div class="app-filter__search">
        <input v-model="charactersStore.filterParams.name" type="text" placeholder="Enter character name">
      </div>
      <div class="app-filter__status">
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
      <div class="app-filter__controls">
        <button @click="setFilters()">Submit</button>
        <button @click="resetFilters()">Reset filters</button>
      </div>
      <div class="app-filter__pager">
        <button @click="changePage('prev')" :class="{'is-disabled' : !charactersStore.responsePagerInfo['prev'] || charactersStore.errorMessage}">Prev</button>
        <button @click="changePage('nex')" :class="{'is-disabled' : !charactersStore.responsePagerInfo['next'] || charactersStore.errorMessage}">Next</button>
      </div>
    </div>  
  </div>
</template>

<style>
  .app-filter {
    margin: 2rem 0;
  }

  .app-filter button, select {
    cursor: pointer;
  }

  .app-filter .container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .app-filter__controls {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .app-filter__pager {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: .5rem;
    margin-left: auto;
  }

  .app-filter__pager button.is-disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    .app-filter .container {
      flex-direction: column;
    }

    .app-filter__pager {
      margin-left: unset;
    }
  }
</style>
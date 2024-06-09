<script setup>
import { useCharactersStore } from '@/stores/characters'

const charactersStore = useCharactersStore()
</script>

<template>
  <div class="app-filter">
    <input v-model="charactersStore.filterParams.name" type="text" placeholder="Enter character name">
    <button @click="charactersStore.queryChars()">Submit</button>
    <button @click="charactersStore.resetFilters()">Reset filters</button>

      <button @click="charactersStore.setPage('prev')">Prev</button>
      <button @click="charactersStore.setPage('next')">Next</button>

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
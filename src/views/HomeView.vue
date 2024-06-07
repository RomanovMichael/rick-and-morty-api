<script setup>
import { useCharactersStore } from '@/stores/characters'

const charactersStore = useCharactersStore()
</script>

<template>
  <main>
    <app-list/>
    {{charactersStore.character}}
  </main>
</template>

<style>

@media (max-width: 1024px) {}
</style>


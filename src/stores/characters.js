import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', () => {
  const character = ref('i am character')
  return { character }
})

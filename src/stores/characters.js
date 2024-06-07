import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', () => {
  const BASE_URL = 'https://rickandmortyapi.com/api'
  const characters = ref(null)

  const getCharacters = async () => {
    try {
      const response = await fetch(BASE_URL + '/character')

      if(response.ok) {
        const data = await response.json()
        console.log(data.results)

        characters.value = data.results
      } else {
        console.error('Promise resolved but HTTP status failed')
      } 
    } catch {
      console.error('Promise rejected')
    } finally {
      console.log('function is done')
    }
  }
  
  return { characters, getCharacters }
})

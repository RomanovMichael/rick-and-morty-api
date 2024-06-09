import { ref} from 'vue'
import { defineStore } from 'pinia'
import { makeRequest } from '@/api'

export const useCharactersStore = defineStore('characters', () => {
  const characters = ref([])
  const episodes = ref([])
  const responsePagerInfo = ref({})
  const errorMessage = ref(null)
  const isLoading = ref(false)

  const filterParams = ref({
    page: 1,
    name: '',
    status: ''
  })

  const statusOptionsList = ref([
    {
      label: 'All',
      value: ''
    },
    {
      label: 'Alive',
      value: 'alive'
    },
    {
      label: 'Dead',
      value: 'dead'
    },
    {
      label: 'Unknown',
      value: 'unknown'
    },
  ])

  const getCharacters = async () => {
    const params = new URLSearchParams(filterParams.value).toString()
    try {
      isLoading.value = true 
      const response = await makeRequest({url: `/character/?${params}`})
      characters.value = response.results
      responsePagerInfo.value = response.info
      errorMessage.value = null
      console.log(characters.value)

      return response
    } catch(error) {
      errorMessage.value = error.response.data.error
    } finally {
      isLoading.value = false
    }
  }

  const getEpisodes = async () => {
    try {
      const response = await makeRequest({url: `/episode`})
      episodes.value = response.results

      return response
    } catch(error) {
      console.error(error)
    }
  }

  return {
    getEpisodes,
    getCharacters,
    episodes,
    characters,
    responsePagerInfo,
    filterParams, 
    statusOptionsList, 
    errorMessage,
    isLoading
  }
})
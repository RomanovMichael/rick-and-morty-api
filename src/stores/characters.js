import { ref} from 'vue'
import { defineStore } from 'pinia'
import { makeRequest } from '@/api'

export const useCharactersStore = defineStore('characters', () => {
  const characters = ref([])
  const episodes = ref([])
  const pager = ref(null)

  const filterParams = ref({
    name: '',
    status: '',
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
    // ?page=1&name=''&status=''
    try {
      const response = await makeRequest({url: `/character/?${params}`})
      characters.value = response.results

      pager.value = response.info
      console.log(response.info)
      return response
    } catch(error) {
      console.error(error)
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

  const setPage = async (direction) => {
    const params = new URLSearchParams(filterParams.value).toString()

    const { data } = await makeRequest({url: `${pager.value[direction]}&${params}`})
    characters.value = data.results
    pager.value = data.info
   
    return data 
  }

  const resetFilters = async () => {
    filterParams.value['name'] = ''
    filterParams.value['status'] = ''

    const { data } = await makeRequest({url: `/character`})

    characters.value = data.results
    pager.value = data.info
    return data
  }

  // const setPage = async (direction) => {
  //   try {
  //     const response = await fetch(apiInfo.value[direction])

  //     if(response.ok) {
  //       const data = await response.json()
  //       console.log(data)

  //       apiInfo.value = data.info
  //       characters.value = data.results
  //     } else {
  //       console.error('Promise resolved but HTTP status failed')
  //     } 
  //   } catch {
  //     console.error('Promise rejected')
  //   } finally {
  //     console.log('function is done')
  //   }
  // }

  return { getCharacters, episodes, characters, filterParams, setPage, resetFilters, statusOptionsList, getEpisodes}
})

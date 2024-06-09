import axios from 'axios'
const baseURL = 'https://rickandmortyapi.com/api'

export const makeRequest = ({url, method = 'get'}) => {
  return new Promise((resolve, reject) => {

    axios({
      url,
      method,
      baseURL
    })
    .then(response => resolve(response.data))
    .catch(error => reject(error))
  })
}  

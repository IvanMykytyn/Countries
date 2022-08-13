import axios from 'axios'

const url = 'https://restcountries.com/v3.1'

const customFetch = axios.create({
  baseURL: url,
})

export const fetchCountryFilter = '?fields=name,flags,population,region,capital'

export default customFetch

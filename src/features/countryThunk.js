// axios
import customFetch from '../utils/axios'
import { fetchCountryFilter } from '../utils/axios'

import { v4 as uuidv4 } from 'uuid'

const handleSearch = (countries, search) => {
  const searchParam = ['capital', 'name']

  return countries.filter((country) => {
    return searchParam.some((newItem) => {
      return (
        country[newItem]
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) > -1
      )
    })
  })
}

export const getCountriesThunk = async (_, thunkAPI) => {
  try {
    // get name, flags, population, region, capital of each country
    let link = '/all'
    const currentRegion = thunkAPI.getState().country.currentRegion

    // change link if not all regions
    if (currentRegion !== 'All') {
      link = `/region/${currentRegion}`
    }

    const response = await customFetch.get(`${link}${fetchCountryFilter}`)
    const countries = response.data

    // iterate and get only needed information
    const result = countries.map((country) => {
      const { name, flags, population, region, capital } = country

      return {
        _id: uuidv4(),
        name: name.common,
        flag: flags.svg,
        population: population.toLocaleString('en-US'),
        region,
        capital,
      }
    })
    return handleSearch(result, thunkAPI.getState().country.search)
  } catch (error) {
    console.log(error)
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

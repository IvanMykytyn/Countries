import { v4 as uuidv4 } from 'uuid'

// actions
import { setSearchCountries } from './countrySlice'

// utils
import { handleSearch } from '../utils/search'

// axios
import customFetch from '../utils/axios'
import { fetchCountryFilter } from '../utils/axios'

export const getRegionCountriesThunk = async (region, thunkAPI) => {
  try {
    // get name, flags, population, region, capital of each country
    let link = '/all'
    const currentRegion = region
    // change link if not all regions
    if (currentRegion !== 'All') {
      link = `/region/${currentRegion}`
    }

    const response = await customFetch.get(`${link}${fetchCountryFilter}`)
    const allCountries = response.data

    // iterate and get only needed information
    const countries = allCountries.map((country) => {
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
    // using search
    const regionAndSearchCountries = handleSearch(
      countries,
      thunkAPI.getState().country.search
    )
    thunkAPI.dispatch(setSearchCountries(regionAndSearchCountries))

    return countries
  } catch (error) {
    console.log(error)
    thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

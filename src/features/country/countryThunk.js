import { v4 as uuidv4 } from 'uuid'

// actions
import { setSearchCountries } from './countrySlice'

// utils
import { handleSearch } from '../../utils/search'

// axios
import customFetch from '../../utils/axios'
import { fetchCountryFilter } from '../../utils/axios'

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
    thunkAPI.rejectWithValue(error.response.data)
  }
}

export const getCountryThunk = async (_, thunkAPI) => {
  try {
    // get country name from url
    const urlName = window.location.pathname.split('/').pop()
    const response = await customFetch.get(`/name/${urlName}?fullText=true`)

    const countryData = response.data[0]

    // get countries to get all borders
    const countriesData = await customFetch.get('/all?fields=name,cca3')

    const countries = countriesData.data.map((item) => ({
      code: item.cca3,
      name: item.name.common,
    }))

    let borders = []
    if (countryData.borders) {
      borders = getBorders(countryData.borders, countries)
    }

    // get needed data
    const {
      name,
      capital,
      flags,
      languages,
      population,
      region,
      tld,
      subregion,
      currencies,
    } = countryData

    return {
      name: name.common,
      officialName: name.official,
      capital,
      population,
      region,
      subregion,
      flag: flags.svg,
      languages: languages && Object.values(languages),
      domain: tld,
      currencies:
        currencies && Object.values(currencies).map((item) => item.name),
      borders,
    }
  } catch (error) {
    console.log(error)
    thunkAPI.rejectWithValue(error.response.data)
  }
}
const getBorders = (borderCodes, countries) => {
  const borders = countries
    .filter((country) => {
      return borderCodes.includes(country.code)
    })
    .map((item) => item.name)

  return borders
}

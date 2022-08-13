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
    // set up link
    let link = '/all'
    const currentRegion = region

    // change link if filter isn't All regions
    if (currentRegion !== 'All') {
      link = `/region/${currentRegion}`
    }

    // get name, flags, population, region, capital of each country
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

    // include data from search to filter countries
    const regionAndSearchCountries = handleSearch(
      countries,
      thunkAPI.getState().country.search
    )
    thunkAPI.dispatch(setSearchCountries(regionAndSearchCountries))
    return countries
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const getCountryThunk = async (countryName, thunkAPI) => {
  try {
    // get country name from url
    const response = await customFetch.get(`/name/${countryName}?fullText=true`)

    // get country data
    const countryData = response.data[0]

    // get countries(name and cca3) to get all borders
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
    thunkAPI.rejectWithValue(error.response.data.message)
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

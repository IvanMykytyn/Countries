import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// thunk
import { getRegionCountriesThunk, getCountryThunk } from './countryThunk'

// utils
import { handleSearch } from '../../utils/search'
import {
  getThemeFromLocalStorage,
  setThemeToLocalStorage,
} from '../../utils/localStorage'

export const getRegionCountries = createAsyncThunk(
  'country/getRegionCountries',
  getRegionCountriesThunk
)

export const getCountry = createAsyncThunk(
  'country/getCountry',
  getCountryThunk
)

const initialState = {
  isLoading: false,
  regionCountries: [],
  searchCountries: [],
  search: '',
  currentCountry: '',
  darkTheme: getThemeFromLocalStorage(),
}

if(initialState.darkTheme){
  document.getElementById('root').classList.toggle('dark')
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload
    },
    setSearchCountries: (state, { payload }) => {
      if (payload) {
        state.searchCountries = payload
      } else {
        const { search, regionCountries } = state
        state.searchCountries = handleSearch(regionCountries, search)
      }
    },
    changeTheme: (state) => {
      state.darkTheme = !state.darkTheme
      setThemeToLocalStorage(state.darkTheme)
    },
  },
  extraReducers: {
    [getRegionCountries.pending]: (state) => {
      state.isLoading = true
    },
    [getRegionCountries.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.regionCountries = payload
    },
    [getRegionCountries.rejected]: (state, { payload }) => {
      state.isLoading = false

      console.log('error MSG ' + payload)
    },
    [getCountry.pending]: (state) => {
      state.isLoading = true
    },
    [getCountry.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.currentCountry = payload
    },
    [getCountry.rejected]: (state, { payload }) => {
      state.isLoading = false

      console.log('error MSG ' + payload)
    },
  },
})
// setRegion,
export const { setSearch, setSearchCountries, changeTheme } =
  countrySlice.actions

export default countrySlice.reducer

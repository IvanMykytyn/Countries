import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// thunk
import { getCountriesThunk } from './countryThunk'

export const getCountries = createAsyncThunk(
  'country/getCountries',
  getCountriesThunk
)

const initialState = {
  isLoading: false,
  countries: [],
  currentRegion: 'All',
  search: '',
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setRegion: (state, {payload}) => {
      state.currentRegion = payload
    },
    setSearch: (state, {payload}) => {
      state.search = payload
    }
  },
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.isLoading = true
    },
    [getCountries.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.countries = payload
    },
    [getCountries.rejected]: (state, { payload }) => {
      state.isLoading = false
      console.log('error MSG ' + payload)
    },
  },
})

export const {setRegion, setSearch} = countrySlice.actions

export default countrySlice.reducer

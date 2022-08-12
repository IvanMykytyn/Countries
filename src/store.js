import { configureStore } from '@reduxjs/toolkit'

import countrySlice from './features/country/countrySlice'

export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
})

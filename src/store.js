import { configureStore } from '@reduxjs/toolkit'

import countrySlice from './features/countrySlice'

export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
})

import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'exchange',
  initialState: {
    latestRates: {
      base: '',
      date: '',
      rates: {}
    },
    isFetchLatestRates: false
  },
  reducers: {
    setLatestRates: (state, { payload }) => ({ ...state, latestRates: payload }),
    fetchLatestRates: (state, { payload }) => ({ ...state, isFetchLatestRates: payload })
  }
})

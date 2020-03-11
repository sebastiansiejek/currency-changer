import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'exchange',
  initialState: {
    latestRates: {
      base: '',
      date: '',
      rates: {}
    },
    baseRates: {
      base: '',
      date: '',
      rates: {}
    },
    isFetchLatestRates: false,
    currencyValue: 0,
    currency: ''
  },
  reducers: {
    setLatestRates: (state, { payload }) => ({ ...state, latestRates: payload, baseRates: payload }),
    fetchLatestRates: (state, { payload }) => ({ ...state, isFetchLatestRates: payload }),
    setCurrencyValue: (state, { payload }) => {
      const { rates } = state.latestRates
      const r: { [index: string]: any } = { ...state.baseRates.rates }

      if (payload)
        for (let key in rates) {
          if (rates.hasOwnProperty(key)) {
            r[key] *= payload
          }
        }

      return { ...state, currencyValue: payload, latestRates: { ...state.latestRates, rates: r } }
    },
    setCurrency: (state, { payload }) => ({ ...state, currency: payload })
  }
})

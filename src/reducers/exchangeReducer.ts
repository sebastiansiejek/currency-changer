import { createReducer } from '@reduxjs/toolkit'
import { setLatestRates } from 'actions/actions'

export default createReducer(
  {
    latestRates: {
      base: '',
      date: '',
      rates: {}
    }
  },
  {
    [setLatestRates.type]: (state, { payload }) => ({ latestRates: payload })
  }
)

import exchangeStore from 'stores/exchangeStore'
import { createReducer } from '@reduxjs/toolkit'
import { setLatestRates } from 'actions/actions'

export default createReducer(exchangeStore, {
  [setLatestRates.type]: (state, { payload }) => ({ latestRates: payload })
})

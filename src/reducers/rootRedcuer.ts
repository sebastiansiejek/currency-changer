import { combineReducers } from '@reduxjs/toolkit'
import exchangeReducer from 'reducers/exchangeReducer'

export default combineReducers({
  exchange: exchangeReducer
})

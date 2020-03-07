import exchangeSlice from 'store/slices/exchangeSlice'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

export default configureStore({
  reducer: combineReducers({
    exchange: exchangeSlice.reducer
  })
})

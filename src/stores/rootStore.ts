import rootReducer from 'reducers/rootRedcuer'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: rootReducer
})

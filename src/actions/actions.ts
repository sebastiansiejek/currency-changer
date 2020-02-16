import { SET_LATEST_RATES } from 'constants/exchangeCostants'
import { createAction } from '@reduxjs/toolkit'

export const setLatestRates = createAction(SET_LATEST_RATES, payload => payload)

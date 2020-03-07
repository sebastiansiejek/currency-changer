import CurrencyList from 'components/containers/CurrencyList'
import ExchangeRepository from 'repositories/exchange/ExchangeRepository'
import React from 'react'
import exchangeSlice from 'store/slices/exchangeSlice'
import store from 'store/store'
import CurrencyInput from 'components/atomics/CurrencyInput'

ExchangeRepository.getLatest().then(res => store.dispatch(exchangeSlice.actions.setLatestRates(res)))

const Main = () => (
  <main>
    <CurrencyInput />
    <CurrencyList />
  </main>
)

export default Main

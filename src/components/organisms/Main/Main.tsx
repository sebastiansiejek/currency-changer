import CurrencyList from 'components/containers/CurrencyList'
import ExchangeRepository from 'repositories/exchange/ExchangeRepository'
import React from 'react'
import exchangeSlice from 'store/slices/exchangeSlice'
import store from 'store/store'
import { InputNumber } from 'antd'

ExchangeRepository.getLatest().then(res => store.dispatch(exchangeSlice.actions.setLatestRates(res)))

const Main = () => (
  <main>
    <InputNumber min={0} step={1} />
    <CurrencyList />
  </main>
)

export default Main

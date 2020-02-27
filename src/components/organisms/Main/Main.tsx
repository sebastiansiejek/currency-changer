import CurrencyList from 'components/containers/CurrencyList'
import ExchangeRepository from 'repositories/exchange/ExchangeRepository'
import React from 'react'
import store from 'stores/rootStore'
import { InputNumber } from 'antd'
import { setLatestRates } from 'actions/actions'

ExchangeRepository.getLatest().then(res => store.dispatch(setLatestRates({ payload: res })))

const Main = () => (
  <main>
    <InputNumber min={0} step={1} />
    <CurrencyList />
  </main>
)

export default Main

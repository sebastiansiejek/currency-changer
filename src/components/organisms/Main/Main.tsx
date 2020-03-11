import CurrencyList from 'components/containers/CurrencyList'
import ExchangeRepository from 'repositories/exchange/ExchangeRepository'
import React from 'react'
import CurrencyInput from 'components/atomics/CurrencyInput'
import CurrencySelect from 'components/containers/CurrencySelect/CurrencySelect'

ExchangeRepository.getLatest()

const Main = () => (
  <main>
    <CurrencyInput />
    <CurrencySelect />
    <CurrencyList />
  </main>
)

export default Main

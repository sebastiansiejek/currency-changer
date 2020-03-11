import CurrencyList from 'components/containers/CurrencyList'
import ExchangeRepository from 'repositories/exchange/ExchangeRepository'
import React from 'react'
import CurrencyInput from 'components/atomics/CurrencyInput'
import CurrencySelect from 'components/containers/CurrencySelect/CurrencySelect'

ExchangeRepository.getLatest()

const Main = () => (
  <main>
    <div style={{ padding: '4vw', height: `calc(100vh - 4vw)`, overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <CurrencyInput />
        <CurrencySelect />
      </div>
      <CurrencyList />
    </div>
  </main>
)

export default Main

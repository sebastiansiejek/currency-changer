import React from 'react'
import CurrencyList from 'components/containers/CurrencyList'
import { InputNumber } from 'antd'

const Main = () => (
  <main>
    <h2>Main</h2>
    <InputNumber min={0} step={1} />
    <CurrencyList />
  </main>
)

export default Main

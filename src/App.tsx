import React from 'react'
import MainTemplate from 'templates/MainTemplate'
import ExchangeRepository from 'repositories/exchange/ExchangeRepository'

const App = () => {
  ExchangeRepository.getLatest().then(res => console.log(res))
  return (
    <MainTemplate>
      <h2>Test</h2>
    </MainTemplate>
  )
}

export default App

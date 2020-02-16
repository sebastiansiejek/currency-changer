import CurrencyList from 'components/containers/CurrencyList'
import MainTemplate from 'templates/MainTemplate'
import React from 'react'
import rootStore from 'stores/rootStore'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={rootStore}>
      <MainTemplate>
        <CurrencyList />
      </MainTemplate>
    </Provider>
  )
}

export default App

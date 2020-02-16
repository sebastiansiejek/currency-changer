import 'antd/dist/antd.css'
import Main from 'components/organisms/Main'
import MainTemplate from 'templates/MainTemplate'
import React from 'react'
import rootStore from 'stores/rootStore'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={rootStore}>
      <MainTemplate>
        <Main />
      </MainTemplate>
    </Provider>
  )
}

export default App

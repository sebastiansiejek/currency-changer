import 'antd/dist/antd.css'
import Main from 'components/organisms/Main'
import React from 'react'
import rootStore from 'stores/rootStore'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={rootStore}>
      <Main />
    </Provider>
  )
}

export default App

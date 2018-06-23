import React from 'react'
import { hot } from 'react-hot-loader'
import './App.less'

import { Provider } from 'react-redux'

const App = () => (
  <div className='App'>
    dsafa
  </div>
)

const reduxApp = () => (
  <Provider>
    <App />
  </Provider>
)

export default hot(module)(reduxApp)

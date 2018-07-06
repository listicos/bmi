import React from 'react'
import { Provider } from 'react-redux'
import Root from './Root'
import createStore from '../../Store/Redux'

const store = createStore(true)

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

export default App

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Intro from '../Intro'
import Bmi from '../Bmi'

import createStore from '../../Store/Redux'

const store = createStore(true)

class App extends Component {
  render () {
    return (
      <Router>
        <Provider store={store}>
          <div className={`router-wrap`}>
            <Route exact path='/' component={Intro} />
            <Route exact path='/bmi' component={Bmi} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App

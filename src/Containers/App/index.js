import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Intro from '../Intro'
import Calculator from '../Calculator'

class App extends Component {
  render () {
    return (
      <Router>
        <div className={`router-wrap`}>
          <Route exact path='/' component={Intro} />
          <Route exact path='/calculator' component={Calculator} />
        </div>
      </Router>
    )
  }
}

export default App

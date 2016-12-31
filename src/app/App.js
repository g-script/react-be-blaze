import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'

import AppContainer from './AppContainer'
import Components from './views/Components'
import Objects from './views/Objects'
import Welcome from './views/Welcome'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={Welcome} />
      <Route path='objects' component={Objects} />
      <Route path='components' component={Components} />
    </Route>
  </Router>
)

export default App

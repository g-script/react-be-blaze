import React from 'react'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import App from './App'
import Components from './Components'
import Objects from './Objects'
import Welcome from './Welcome'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome} />
      <Route path='objects' component={Objects} />
      <Route path='components' component={Components} />
    </Route>
  </Router>
)

export default Routes

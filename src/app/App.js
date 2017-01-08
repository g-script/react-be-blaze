import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'

import AppContainer from './AppContainer'
import Components from './views/Components'
import Objects from './views/Objects'
import Welcome from './views/Welcome'

import AllObjects from './objects'
import Cells from './objects/Cells'
import Containers from './objects/Containers'
import Drawers from './objects/Drawers'
import Grids from './objects/Grids'
import Images from './objects/Images'
import Medias from './objects/Medias'
import Modals from './objects/Modals'
import Panels from './objects/Panels'

import AllComponents from './components'
import Accordions from './components/Accordions'
import Addresses from './components/Addresses'
import Alerts from './components/Alerts'
import Avatars from './components/Avatars'
import Badges from './components/Badges'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={Welcome} />
      <Route path='objects' component={Objects}>
        <IndexRoute component={AllObjects} />
        <Route path='containers' component={Containers} />
        <Route path='grids' component={Grids} />
        <Route path='cells' component={Cells} />
        <Route path='images' component={Images} />
        <Route path='medias' component={Medias} />
        <Route path='modals' component={Modals} />
        <Route path='drawers' component={Drawers} />
        <Route path='panels' component={Panels} />
      </Route>
      <Route path='components' component={Components}>
        <IndexRoute component={AllComponents} />
        <Route path='addresses' component={Addresses} />
        <Route path='accordions' component={Accordions} />
        <Route path='alerts' component={Alerts} />
        <Route path='avatars' component={Avatars} />
        <Route path='badges' component={Badges} />
      </Route>
    </Route>
  </Router>
)

export default App

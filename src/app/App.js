import React from 'react'
import { Container, Grid, Nav, NavItem } from 'react-be-blaze'
import { IndexLink, Link } from 'react-router'

import 'blaze/dist/blaze.min.css'

const responsiveness = [{
  size: 'small',
  behavior: 'full'
}, {
  size: 'medium',
  behavior: 'full'
}]

const App = ({ children }) => (
  <div>
    <Nav inline fixed>
      <NavItem customLink={IndexLink} to='/' state='info' activeClassName='c-nav__item--active'>
        react-be-blaze
      </NavItem>
      <NavItem customLink={Link} to='/objects' state='brand' activeClassName='c-nav__item--active'>
        Objects
      </NavItem>
      <NavItem customLink={Link} to='/components' state='brand' activeClassName='c-nav__item--active'>
        Components
      </NavItem>
      <NavItem right state='error' link='http://github.com/g-script/react-be-blaze' target='_blank'>
        GitHub
      </NavItem>
    </Nav>
    <Container size='xlarge' style={{ padding: '5em 0' }}>
      <Grid wrap align='top' responsiveness={responsiveness}>
        {children}
      </Grid>
    </Container>
  </div>
)

export default App

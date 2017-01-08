import React from 'react'
import { Container, Nav, NavItem } from 'react-be-blaze'
import { IndexLink, Link } from 'react-router'

import 'blaze/dist/blaze.min.css'
import 'highlight.js/styles/monokai-sublime.css'

const AppContainer = ({ children }) => (
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
      <NavItem right state='error' href='http://github.com/g-script/react-be-blaze' target='_blank'>
        GitHub
      </NavItem>
    </Nav>
    <Container size='xlarge' style={{ padding: '5em 0' }}>
      {children}
    </Container>
  </div>
)

export default AppContainer

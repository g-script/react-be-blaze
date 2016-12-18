import React, { Component } from 'react'

import { Container, Nav, NavItem, Grid, Cell, Link } from 'react-be-blaze'

import Addresses from './showcase/Addresses'
import Alerts from './showcase/Alerts'

import 'blaze/dist/blaze.min.css'

export default class App extends Component {
  render () {
    const responsiveness = [{
      size: 'small',
      behavior: 'full'
    }, {
      size: 'medium',
      behavior: 'full'
    }]
    const repoLink = <Link href='http://github.com/nicolas-goudry/react-blazecss'>GitHub</Link>

    return (
      <div>
        <Nav inline>
          <NavItem noClick>react-be-blaze</NavItem>
          <NavItem>Objects</NavItem>
          <NavItem state='brand' active>Components</NavItem>
          <NavItem right state='error' link={repoLink} />
        </Nav>
        <Container size='xlarge'>
          <Grid wrap align='top' responsiveness={responsiveness}>
            <Cell>
              <Addresses />
              <Alerts />
            </Cell>
          </Grid>
        </Container>
      </div>
    )
  }
}

import React from 'react'
import { Cell, Grid, Heading, List, ListItem } from 'react-be-blaze'
import { Link } from 'react-router'

import { responsiveness } from '../misc/constants'

const Objects = ({ children }) => (
  <Grid responsiveness={responsiveness}>
    <Cell width={15}>
      <Heading size='medium'>Objects</Heading>
      <List unstyled>
        <ListItem>
          <Link className='c-link' to='/objects'>All</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/containers'>Containers</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/grids'>Grids</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/cells'>Cells</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/images'>Images</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/medias'>Medias</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/modals'>Modals</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/drawers'>Drawers</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/objects/panels'>Panels</Link>
        </ListItem>
      </List>
    </Cell>
    <Cell width={85}>
      {children}
    </Cell>
  </Grid>
)

export default Objects

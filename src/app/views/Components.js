import React from 'react'
import { Alert, Cell, Grid, Heading, Link as BlazeLink, List, ListItem, Paragraph } from 'react-be-blaze'
import { Link } from 'react-router'

import { responsiveness } from '../misc/constants'

const Components = ({ children }) => (
  <Grid responsiveness={responsiveness}>
    <Cell width={15}>
      <Heading size='medium'>Components</Heading>
      <List unstyled>
        <ListItem>
          <Link className='c-link' to='/components'>All</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/components/addresses'>Addresses</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/components/accordions'>Accordions</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/components/alerts'>Alerts</Link>
        </ListItem>
        <ListItem>
          <Link className='c-link' to='/components/avatars'>Avatars</Link>
        </ListItem>
      </List>
    </Cell>
    <Cell width={85}>
      <Alert state='warning'>Please be patient, I’m currently writing these docs!</Alert>
      <Paragraph>
        Can’t wait? <BlazeLink href='https://github.com/g-script/react-be-blaze/tree/master/src/components' target='_blank'>Read the source code!</BlazeLink>
      </Paragraph>
      {children}
    </Cell>
  </Grid>
)

export default Components

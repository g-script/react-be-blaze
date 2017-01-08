import React from 'react'
import { Badge, Cell, Grid, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

import pack from 'react-be-blaze/package.json'

const Badges = () => (
  <div>
    <Heading size='xlarge'>Badges</Heading>
    <Paragraph>
      They're useful when you want to add additional info. Like a version number of a project or for status messages for individual items.
    </Paragraph>
    <Heading size='large'>Basic Badge</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Badge>{pack.version}</Badge>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
`const Example = () => (
  <Badge>${pack.version}</Badge>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Colors</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Badge>{pack.version}</Badge>
        <Badge state='brand'>{pack.version}</Badge>
        <Badge state='info'>{pack.version}</Badge>
        <Badge state='warning'>{pack.version}</Badge>
        <Badge state='success'>{pack.version}</Badge>
        <Badge state='error'>{pack.version}</Badge>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
            `const Example = () => (
  <div>
    <Badge>${pack.version}</Badge>
    <Badge state='brand'>${pack.version}</Badge>
    <Badge state='info'>${pack.version}</Badge>
    <Badge state='warning'>${pack.version}</Badge>
    <Badge state='success'>${pack.version}</Badge>
    <Badge state='error'>${pack.version}</Badge>
  </div>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Rounded</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Badge round>{pack.version}</Badge>
        <Badge state='brand' round>{pack.version}</Badge>
        <Badge state='info' round>{pack.version}</Badge>
        <Badge state='warning' round>{pack.version}</Badge>
        <Badge state='success' round>{pack.version}</Badge>
        <Badge state='error' round>{pack.version}</Badge>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
            `const Example = () => (
  <div>
    <Badge round>${pack.version}</Badge>
    <Badge state='brand' round>${pack.version}</Badge>
    <Badge state='info' round>${pack.version}</Badge>
    <Badge state='warning' round>${pack.version}</Badge>
    <Badge state='success' round>${pack.version}</Badge>
    <Badge state='error' round>${pack.version}</Badge>
  </div>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Ghost</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Badge ghost round>{pack.version}</Badge>
        <Badge state='brand' ghost round>{pack.version}</Badge>
        <Badge state='info' ghost round>{pack.version}</Badge>
        <Badge state='warning' ghost round>{pack.version}</Badge>
        <Badge state='success' ghost round>{pack.version}</Badge>
        <Badge state='error' ghost round>{pack.version}</Badge>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
            `const Example = () => (
  <div>
    <Badge ghost round>${pack.version}</Badge>
    <Badge state='brand' ghost round>${pack.version}</Badge>
    <Badge state='info' ghost round>${pack.version}</Badge>
    <Badge state='warning' ghost round>${pack.version}</Badge>
    <Badge state='success' ghost round>${pack.version}</Badge>
    <Badge state='error' ghost round>${pack.version}</Badge>
  </div>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Props</Heading>
    <Table striped>
      <TableHead>
        <TableCell className='props-table__small-column'>Props</TableCell>
        <TableCell>Values</TableCell>
        <TableCell className='props-table__small-column'>Default</TableCell>
        <TableCell>Description</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className='props-table__small-column'>className</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>CSS class.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>ghost</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Ghost badge (transparent background).</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>round</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Rounded badge.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>state</TableCell>
          <TableCell>brand, info, warning, success, error</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Color.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Badges

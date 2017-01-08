import React from 'react'
import { Breadcrumb, Crumb, Cell, Grid, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'
import { IndexLink, Link } from 'react-router'

const Breadcrumbs = () => (
  <div>
    <Heading size='xlarge'>Breadcrumbs</Heading>
    <Paragraph>
      Breadcrumbs are useful to indicate the navigational route into a website.
    </Paragraph>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Breadcrumb>
          <Crumb customLink={IndexLink} to='/'>Home</Crumb>
          <Crumb customLink={Link} to='/components'>Components</Crumb>
          <Crumb active>Breadcrumbs</Crumb>
        </Breadcrumb>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
`const Example = () => (
  <Breadcrumb>
    <Crumb href='#'>Home</Crumb>
    <Crumb href='#/components'>Components</Crumb>
    <Crumb active>Breadcrumbs</Crumb>
  </Breadcrumb>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Breadcrumb Props</Heading>
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
      </TableBody>
    </Table>
    <Heading size='large'>Crumb Props</Heading>
    <Table striped>
      <TableHead>
        <TableCell className='props-table__small-column'>Props</TableCell>
        <TableCell>Values</TableCell>
        <TableCell className='props-table__small-column'>Default</TableCell>
        <TableCell>Description</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className='props-table__small-column'>active</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>If set to true, will omit link and make text bold.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>className</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>CSS class.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Breadcrumbs

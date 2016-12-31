import React from 'react'
import { Address, Cell, Grid, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Addresses = () => (
  <div>
    <Heading size='xlarge'>Addresses</Heading>
    <Paragraph>
      Addresses in Blaze are essentially a reset to a more consistent style.
    </Paragraph>
    <Heading size='large'>Basic Address</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Address>
          742 Evergreen Terrace,<br />
          Springfield,<br />
          80085,<br />
          USA
        </Address>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
`const Example = () => (
  <Address>
    742 Evergreen Terrace,<br />
    Springfield,<br />
    80085,<br />
    USA
  </Address>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Heading</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Address heading='The Simpsons,'>
          742 Evergreen Terrace,<br />
          Springfield,<br />
          80085,<br />
          USA
        </Address>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
`const Example = () => (
  <Address heading='The Simpsons,'>
    742 Evergreen Terrace,<br />
    Springfield,<br />
    80085,<br />
    USA
  </Address>
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
          <TableCell className='props-table__small-column'>heading</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Address title.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Addresses

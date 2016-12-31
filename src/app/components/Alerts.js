import React from 'react'
import { Alert, Cell, Grid, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Alerts = () => {
  return (
    <div>
      <Heading size='xlarge'>Alerts</Heading>
      <Paragraph>
        Messages that usually appear at the top of the page or container.
      </Paragraph>
      <Heading size='large'>Basic Alert</Heading>
      <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
        <Cell width={50}>
          <Alert>Default</Alert>
        </Cell>
        <Cell width={50}>
          <Highlight className='javascript'>{`const Example = () => (<Alert>Default</Alert>)`}</Highlight>
        </Cell>
      </Grid>
      <Heading size='large'>Closable</Heading>
      <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
        <Cell width={50}>
          <Alert closable>Closable Alert</Alert>
        </Cell>
        <Cell width={50}>
          <Highlight className='javascript'>{`const Example = () => (<Alert closable>Closable Alert</Alert>)`}</Highlight>
        </Cell>
      </Grid>
      <Heading size='large'>Colors</Heading>
      <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
        <Cell width={50}>
          <Alert state='brand'>Brand</Alert>
          <Alert state='info'>Info</Alert>
          <Alert state='warning'>Warning</Alert>
          <Alert state='success'>Success</Alert>
          <Alert state='error'>Error</Alert>
        </Cell>
        <Cell width={50}>
          <Highlight className='javascript'>
            {
              `const Example = () => (
  <div>
    <Alert state='brand'>Brand</Alert>
    <Alert state='info'>Info</Alert>
    <Alert state='warning'>Warning</Alert>
    <Alert state='success'>Success</Alert>
    <Alert state='error'>Error</Alert>
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
            <TableCell className='props-table__small-column'>closable</TableCell>
            <TableCell>true, false</TableCell>
            <TableCell className='props-table__small-column'>false</TableCell>
            <TableCell>Closable alert.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='props-table__small-column'>onCloseClick</TableCell>
            <TableCell>function</TableCell>
            <TableCell className='props-table__small-column'>—</TableCell>
            <TableCell>Override close button default behavior.</TableCell>
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
}

export default Alerts

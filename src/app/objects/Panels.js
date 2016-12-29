import React from 'react'
import { Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Panels = () => (
  <div>
    <Heading size='xlarge'>Panels</Heading>
    <Paragraph>
      A panel can be a very useful piece of layout, it provides a manageable scrollable space within the existing structure of your page.
    </Paragraph>
    <Highlight className='javascript'>
      {
        `import React from 'react'
import { Nav, NavItem, Panel, PanelContainer } from 'react-be-blaze'

const Example = () => (
  <PanelContainer className={…} style={{ height: '350px' }}>
    <Nav position='top' inline>
      <NavItem noClick>Header</NavItem>
    </Nav>
    <Panel className={…} nav={…}>
      …
    </Panel>
    <Nav position='bottom' inline>
      <NavItem noClick>Footer</NavItem>
    </Nav>
  </PanelContainer>
)

export default Example`
      }
    </Highlight>
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
          <TableCell className='props-table__small-column'>nav</TableCell>
          <TableCell>top, bottom, both</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Define nav position from panel.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Panels

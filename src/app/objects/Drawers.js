import React from 'react'
import { Blockquote, Code, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Drawers = () => (
  <div>
    <Heading size='xlarge'>Drawers</Heading>
    <Paragraph>
      Slide in menus. Drawers provide a special layout for cards.
    </Paragraph>
    <Highlight className='javascript'>
      {
        `import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Drawer, Heading, Overlay } from 'react-be-blaze'

const Example = () => (
  <div style={{ overflow: 'hidden' }}>
    <Overlay />
    <Drawer className={…} hidden={…} position={…}>
      <Card>
        <CardHeader>
          <Heading>Heading</Heading>
        </CardHeader>
        <CardBody>
          This is a drawer
        </CardBody>
        <CardFooter>
          <Button>Close</Button>
          <Button state='brand' style={{ float: 'right' }}>Buy item</Button>
        </CardFooter>
      </Card>
    </Drawer>
  </div>
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
          <TableCell className='props-table__small-column'>hidden</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>true</TableCell>
          <TableCell>Toggle drawer visibility.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>position</TableCell>
          <TableCell>top, right, left, bottom</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Drawer position.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Blockquote state='info' from='useful tip'>
      The container should have <Code>overflow: hidden</Code> or you'll see the drawer sliding around.
    </Blockquote>
  </div>
)

export default Drawers

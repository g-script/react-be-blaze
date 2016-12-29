import React from 'react'
import { Blockquote, Code, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Modals = () => (
  <div>
    <Heading size='xlarge'>Modals</Heading>
    <Paragraph>
      Modal popups, with great power comes great responsibility. Please use modals wisely.
    </Paragraph>
    <Highlight className='javascript'>
      {
        `import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Modal, Overlay } from 'react-be-blaze'

const Example = () => (
  <div>
    <Overlay />
    <Modal className={…} full={…} ghost={…}>
      <Card>
        <CardHeader>
          <Button close />
          <Heading>Modal heading</Heading>
        </CardHeader>
        <CardBody>
          This is the modal body
        </CardBody>
        <CardFooter>
          <Button state='brand'>Close</Button>
        </CardFooter>
      </Card>
    </Modal>
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
          <TableCell className='props-table__small-column'>full</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Full screen.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>ghost</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Transparent modal.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Blockquote state='info' from='useful tip'>
      To make a scrollable modal add the <Code>.o-panel</Code> class to the <Code>CardBody</Code>, and apply a fixed height so long content starts to scroll.
    </Blockquote>
  </div>
)

export default Modals

import React from 'react'
import { Code, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Containers = () => (
  <div>
    <Heading size='xlarge'>Containers</Heading>
    <Paragraph>
      Containers provide media query screen width restrictions on your content.
    </Paragraph>
    <Highlight className='javascript'>
      {
        `import React from 'react'
import { Container } from 'react-be-blaze'

const Example = () => (<Container screen='/* … */' size='/* … */'>Example</Container>)

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
          <TableCell className='props-table__small-column'>screen</TableCell>
          <TableCell>xsmall, small, medium, large, xlarge, super</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Screen size for container size to be applied.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>size</TableCell>
          <TableCell>xsmall, small, medium, large, xlarge, super</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Container size.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Heading size='large'>About responsiveness</Heading>
    <Paragraph>
      <Code>{`<Container size='small' screen='large' />`}</Code> for example will restrict the horizontal width to small when the viewport has a large or more width.
    </Paragraph>
  </div>
)

export default Containers

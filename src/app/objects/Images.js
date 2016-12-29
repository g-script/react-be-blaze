import React from 'react'
import { Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Images = () => (
  <div>
    <Heading size='xlarge'>Images</Heading>
    <Paragraph>
      Images are simply display block, 100% wide with height of auto.
    </Paragraph>
    <Highlight className='javascript'>
      {
        `import React from 'react'
import { Image } from 'react-be-blaze'

const Example = () => <Image className={…} src={…} />

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
          <TableCell className='props-table__small-column'>src</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Image source url.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Images

import React from 'react'
import { Heading, Link, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Cells = () => (
  <div>
    <Heading size='xlarge'>Cells</Heading>
    <Paragraph>
      Grids without Cells? Nope.
    </Paragraph>
    <Highlight className='javascript'>
      {
`import React from 'react'
import { Cell } from 'react-be-blaze'

const Example = () => (
  <Cell align={…}
        className={…}
        fixed={…}
        hidden={…}
        noGutter={…}
        offset={…}
        responsiveness={…}
        size={…}
        width={…}>
    Example
  </Cell>)

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
          <TableCell className='props-table__small-column'>align</TableCell>
          <TableCell>top, center, bottom</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Vertical alignment.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>className</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>CSS class.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>fixed</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Allow fixed cell width.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>hidden</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Hide cell.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>noGutter</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Remove cell gutters.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>offset</TableCell>
          <TableCell>Any number between 5 and 100 (incremented by 5)</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Cell horizontal offset in percent.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>responsiveness</TableCell>
          <TableCell>{`arrayOf({ size: small|medium|large, width: number })`}</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell className='fix-table-cell-with-child-element'>Responsive suffix (see <Link href='http://blazecss.com/objects/grid/#responsive-suffixes' target='_blank'>BlazeCSS doc</Link>).</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>size</TableCell>
          <TableCell>xsmall, small, medium, large, xlarge, super</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Screen size for cell width to be applied (width must be provided too).</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>width</TableCell>
          <TableCell>Any number between 5 and 100 (incremented by 5)</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Cell width in percent.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Cells

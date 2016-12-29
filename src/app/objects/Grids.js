import React from 'react'
import { Code, Heading, Link, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Grids = () => (
  <div>
    <Heading size='xlarge'>Grids</Heading>
    <Paragraph>
      The grid is the easiest way to produce a fluid responsive layout. Its easy to use and very flexible.
    </Paragraph>
    <Highlight className='javascript'>
      {
`import React from 'react'
import { Grid } from 'react-be-blaze'

const Example = () => (
  <Grid align={…}
        className={…}
        noGutter={…}
        responsiveness={…}
        wrap={…}>
    Example
  </Grid>)

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
          <TableCell className='props-table__small-column'>noGutter</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Remove cells gutters.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>responsiveness</TableCell>
          <TableCell>{`arrayOf({ behavior: fit|full, size: small|medium|large })`}</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell className='fix-table-cell-with-child-element'>Grid responsiveness (see <Link href='http://blazecss.com/objects/grid/#responsiveness' target='_blank'>BlazeCSS doc</Link>).</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>wrap</TableCell>
          <TableCell>true, false</TableCell>
          <TableCell className='props-table__small-column'>false</TableCell>
          <TableCell>Wrap grid cells.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Grids

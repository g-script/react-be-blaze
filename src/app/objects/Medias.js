import React from 'react'
import { Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Medias = () => (
  <div>
    <Heading size='xlarge'>Medias</Heading>
    <Paragraph>
      Media objects are usually used for comment engines and other image and related text displays.
    </Paragraph>
    <Highlight className='javascript'>
      {
        `import React from 'react'
import { Card, CardItem, Image, MediaBody, MediaImage } from 'react-be-blaze'

const Example = () => (
  <Card>
    <CardItem className='o-media'>
      <MediaBody align={…} className={…}>Body example</MediaBody>
      <MediaImage align={…} className={…}>
        <Image src='https://placehold.it/80' />
      </MediaImage>
    </CardItem>
  </Card>
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
      </TableBody>
    </Table>
  </div>
)

export default Medias

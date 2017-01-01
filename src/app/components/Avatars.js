import React from 'react'
import { Avatar, Cell, Grid, Heading, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Avatars = () => (
  <div>
    <Heading size='xlarge'>Avatars</Heading>
    <Heading size='large'>Basic Avatar</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Avatar image='https://unsplash.it/200?image=1011' size='super' />
        <Avatar image='https://unsplash.it/200?image=1011' size='xlarge' />
        <Avatar image='https://unsplash.it/200?image=1011' size='large' />
        <Avatar image='https://unsplash.it/200?image=1011' size='medium' />
        <Avatar image='https://unsplash.it/200?image=1011' size='small' />
        <Avatar image='https://unsplash.it/200?image=1011' size='xsmall' />
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
`const Example = () => (
  <div>
    <Avatar image='https://unsplash.it/200?image=1011' size='super'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' size='xlarge'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' size='large'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' size='medium'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' size='small'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' size='xsmall'></Avatar>
  </div>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Two images</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='super' />
        <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='xlarge' />
        <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='large' />
        <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='medium' />
        <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='small' />
        <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='xsmall' />
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
            `const Example = () => (
  <div>
    <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='super'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='xlarge'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='large'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='medium'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='small'></Avatar>
    <Avatar image='https://unsplash.it/200?image=1011' secondary='https://unsplash.it/200?random' size='xsmall'></Avatar>
  </div>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Initials</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Avatar initial='G' size='super' />
        <Avatar initial='G' size='xlarge' />
        <Avatar initial='G' size='large' />
        <Avatar initial='G' size='medium' />
        <Avatar initial='G' size='small' />
        <Avatar initial='G' size='xsmall' />
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
            `const Example = () => (
  <div>
    <Avatar initial='G' size='super'></Avatar>
    <Avatar initial='G' size='xlarge'></Avatar>
    <Avatar initial='G' size='large'></Avatar>
    <Avatar initial='G' size='medium'></Avatar>
    <Avatar initial='G' size='small'></Avatar>
    <Avatar initial='G' size='xsmall'></Avatar>
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
          <TableCell className='props-table__small-column'>image</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Main image url.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>initial</TableCell>
          <TableCell>short string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Initials instead of image.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>secondary</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Secondary image url.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>size</TableCell>
          <TableCell>xsmall, small, medium, large, xlarge, super</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Avatar size.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Avatars

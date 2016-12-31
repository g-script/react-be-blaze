import React from 'react'
import { Accordion, AccordionItem, Cell, Grid, Heading, Paragraph, Table, TableBody, TableCell, TableHead, TableRow } from 'react-be-blaze'
import Highlight from 'react-highlight'

const Accordions = () => (
  <div>
    <Heading size='xlarge'>Accordions</Heading>
    <Paragraph>
      Accordions are achieved by adding a modifier to a CardItem element and utilising a hidden checkbox to achieve the interaction.
    </Paragraph>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Accordion>
          <AccordionItem id='accordion-1' label='Item 1'>
            Pane 1
          </AccordionItem>
          <AccordionItem id='accordion-2' label='Item 2'>
            Pane 2
          </AccordionItem>
        </Accordion>
      </Cell>
      <Cell width={50}>
        <Highlight className='javascript'>
          {
`const Example = () => (
  <Accordion>
    <AccordionItem id='accordion-1' label='Item 1'>
      Pane 1
    </AccordionItem>
    <AccordionItem id='accordion-2' label='Item 2'>
      Pane 2
    </AccordionItem>
  </Accordion>
)`
          }
        </Highlight>
      </Cell>
    </Grid>
    <Heading size='large'>Accordion Props</Heading>
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
      </TableBody>
    </Table>
    <Heading size='large'>AccordionItem Props</Heading>
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
          <TableCell className='props-table__small-column'>id</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Hidden checkbox id to achieve interaction.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='props-table__small-column'>label</TableCell>
          <TableCell>string</TableCell>
          <TableCell className='props-table__small-column'>—</TableCell>
          <TableCell>Item title.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default Accordions

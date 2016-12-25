import React from 'react'
import { Address, Cell, Code, Grid, Heading, Paragraph } from 'react-be-blaze'

const Addresses = () => (
  <div>
    <Heading size='xlarge'>Addresses</Heading>
    <Paragraph>
      Addresses in Blaze are essentially a reset to a more consistent style.
    </Paragraph>
    <Heading size='large'>Basic Address</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Address>
          742 Evergreen Terrace,<br />
          Springfield,<br />
          80085,<br />
          USA
        </Address>
      </Cell>
      <Cell width={50}>
        <Code multiline>
          {
`<Address>
  742 Evergreen Terrace,<br />
  Springfield,<br />
  80085,<br />
  USA
</Address>`
          }
        </Code>
      </Cell>
    </Grid>
    <Heading size='large'>Heading</Heading>
    <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
      <Cell width={50}>
        <Address heading='The Simpsons,'>
          742 Evergreen Terrace,<br />
          Springfield,<br />
          80085,<br />
          USA
        </Address>
      </Cell>
      <Cell width={50}>
        <Code multiline>
          {
`<Address heading='The Simpsons,'>
  742 Evergreen Terrace,<br />
  Springfield,<br />
  80085,<br />
  USA
</Address>`
          }
        </Code>
      </Cell>
    </Grid>
  </div>
)

export default Addresses

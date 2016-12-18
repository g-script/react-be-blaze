import React from 'react'

import { Heading, Paragraph, Code, Grid, Cell, Alert } from 'react-be-blaze'

const Alerts = () => {
  return (
    <div>
      <Heading size='xlarge'>Alerts</Heading>
      <Paragraph>
        Messages that usually appear at the top of the page or container.
      </Paragraph>
      <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
        <Cell width={50}>
          <Alert>Default</Alert>
          <Alert state='brand'>Brand</Alert>
          <Alert state='info'>Info</Alert>
          <Alert state='warning'>Warning</Alert>
          <Alert state='success'>Success</Alert>
          <Alert state='error'>Error</Alert>
        </Cell>
        <Cell width={50}>
          <Code multiline>
            {
              `<Alert>Default</Alert>
<Alert state='brand'>Brand</Alert>
<Alert state='info'>Info</Alert>
<Alert state='warning'>Warning</Alert>
<Alert state='success'>Success</Alert>
<Alert state='error'>Error</Alert>`
            }
          </Code>
        </Cell>
      </Grid>
    </div>
  )
}

export default Alerts

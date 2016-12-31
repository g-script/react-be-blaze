import React from 'react'
import { Alert, Cell, Heading, Link, Paragraph } from 'react-be-blaze'

import Addresses from './components/Addresses'
import Alerts from './components/Alerts'

const Components = () => (
  <Cell>
    <Heading size='super'>Components</Heading>
    <Alert state='warning' closable={false}>Please be patient, I’m currently writing these docs!</Alert>
    <Paragraph>
      Can’t wait? <Link href='https://github.com/g-script/react-be-blaze/tree/master/src/components' target='_blank'>Read the source code!</Link>
    </Paragraph>
    <Addresses />
    <Alerts />
  </Cell>
)

export default Components
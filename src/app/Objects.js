import React from 'react'
import { Alert, Cell, Heading, Link, Paragraph } from 'react-be-blaze'

import Containers from './showcase/objects/Containers'
const Objects = () => (
  <Cell>
    <Heading size='super'>Objects</Heading>
    <Alert state='warning'>Please be patient, I’m currently writing these docs!</Alert>
    <Paragraph>
      Can’t wait? <Link href='https://github.com/g-script/react-be-blaze/tree/master/src/objects' target='_blank'>Read the source code!</Link>
    </Paragraph>
    <Containers />
  </Cell>
)

export default Objects

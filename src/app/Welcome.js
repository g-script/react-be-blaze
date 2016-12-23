import React from 'react'
import { Cell, Heading, Link, Loud, Paragraph } from 'react-be-blaze'

const Welcome = () => (
  <Cell>
    <Heading size='xlarge'>Welcome, traveller!</Heading>
    <Paragraph>
      Let me introduce you to <Loud>react-be-blaze</Loud>:
    </Paragraph>
    <Paragraph>
      Actually, it’s just a tiny React wrapper for <Link href='http://blazecss.com'>BlazeCSS</Link> components! But, what is <Loud>BlazeCSS</Loud>?
    </Paragraph>
  </Cell>
)

export default Welcome

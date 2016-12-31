import React from 'react'
import { Abbr, Cell, Code, Heading, Link, List, ListItem, Loud, Paragraph, Quiet } from 'react-be-blaze'

const Welcome = () => (
  <Cell>
    <Heading size='super'>Welcome to <Loud>react-be-blaze</Loud>, developer!</Heading>
    <Paragraph>
      You surely wonder <Loud>what is this?</Loud>
    </Paragraph>
    <Paragraph>
      Well… In fact, it’s no more than a tiny React wrapper for <Link href='http://blazecss.com' target='_blank'>BlazeCSS</Link> components!
    </Paragraph>
    <Heading size='xlarge'>Requirements</Heading>
    <Paragraph>
      You’ll need some knowledge about:
    </Paragraph>
    <List>
      <ListItem>
        <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>JavaScript</Link>
      </ListItem>
      <ListItem>
        <Link href='https://facebook.github.io/react/docs/installation.html' target='_blank'>React</Link>
      </ListItem>
      <ListItem>
        <Link href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>HTML</Link>
      </ListItem>
      <ListItem>
        <Link href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>CSS</Link>
      </ListItem>
    </List>
    <Paragraph>
      …and, obviously, <Link href='http://blazecss.com' target='_blank'>BlazeCSS</Link>!
    </Paragraph>
    <Heading size='xlarge'>Install</Heading>
    <Paragraph>
      Well, it’s just another npm package, so it’s straight forward:
    </Paragraph>
    <Code multiline>npm install --save react-be-blaze</Code>
    <Paragraph>
      But if you prefer to use a <Abbr title='Content Delivery Network'>CDN</Abbr> and include it directly in your HTML, <Code>unpkg</Code> is your friend:
    </Paragraph>
    <Code multiline>&lt;script src="https://unpkg.com/react-be-blaze"&gt;&lt;/script&gt;</Code>
    <Heading size='xlarge'>Usage</Heading>
    <Paragraph>
      <Code>react-be-blaze</Code> is transpiled from ES2015 to ES5 by <Code>babel</Code>, so you can use it in different flavors:
    </Paragraph>
    <Heading size='medium'>ES Modules<Quiet> — so cool!</Quiet></Heading>
    <Code multiline>
      import {'{'} Button } from 'react-be-blaze'
    </Code>
    <Heading size='medium'>ES2015<Quiet> — meh.</Quiet></Heading>
    <Code multiline>
      const {'{'} Button } = require('react-be-blaze')
    </Code>
    <Heading size='medium'>ES5<Quiet> — really?</Quiet></Heading>
    <Code multiline>
      var reactBeBlaze = require('react-be-blaze')<br />
      var Button = reactBeBlaze.Button
    </Code>
    <Heading size='xlarge'>Get involved</Heading>
    <Paragraph>
      Got stuck on something? Found an issue? Need a feature?
    </Paragraph>
    <Paragraph>
      Heads up to <Link href='http://github.com/g-script/react-be-blaze/issues' target='_blank'>GitHub issues</Link> and contribute!
    </Paragraph>
  </Cell>
)

export default Welcome

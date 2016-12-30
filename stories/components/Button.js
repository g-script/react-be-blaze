import { action, storiesOf } from '@kadira/storybook'
import React from 'react'

import { Button, ButtonGroup, Heading } from '../../src'

storiesOf('components/Button.js', module)
  .add('ButtonGroup', () => (
    <div className='wrapper c-text'>
      <Heading size='large'>Default</Heading>
      <div className='wrapper'>
        <ButtonGroup>
          <Button onClick={action('clicked button group brand button')} state='brand'>Button</Button>
          <Button onClick={action('clicked button group default button')}>Button</Button>
        </ButtonGroup>
      </div>
      <Heading size='large'>Rounded</Heading>
      <div className='wrapper'>
        <ButtonGroup round>
          <Button onClick={action('clicked rounded button group brand button')} state='brand'>Button</Button>
          <Button onClick={action('clicked rounded button group default button')}>Button</Button>
          <Button onClick={action('clicked rounded button group info button')} state='info'>Button</Button>
        </ButtonGroup>
      </div>
    </div>
  ))
  .add('Button', () => (
    <div className='wrapper c-text button-margin'>
      <Heading size='large'>Basic</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked button')}>Button</Button>
        <Button onClick={action('clicked input')} type='input'>Input</Button>
        <Button onClick={action('clicked link')} type='link'>Link</Button>
        <Button onClick={action('clicked disabled')} disabled>Button</Button>
      </div>
      <Heading size='large'>Colors</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked default button')}>Button</Button>
        <Button onClick={action('clicked brand button')} state='brand'>Button</Button>
        <Button onClick={action('clicked info button')} state='info'>Button</Button>
        <Button onClick={action('clicked warning button')} state='warning'>Button</Button>
        <Button onClick={action('clicked success button')} state='success'>Button</Button>
        <Button onClick={action('clicked error button')} state='error'>Button</Button>
      </div>
      <Heading size='large'>Active</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked default active button')} active>Button</Button>
        <Button onClick={action('clicked brand active button')} state='brand' active>Button</Button>
        <Button onClick={action('clicked info active button')} state='info' active>Button</Button>
        <Button onClick={action('clicked warning active button')} state='warning' active>Button</Button>
        <Button onClick={action('clicked success active button')} state='success' active>Button</Button>
        <Button onClick={action('clicked error active button')} state='error' active>Button</Button>
      </div>
      <Heading size='large'>Sizes</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked xsmall button')} size='xsmall'>Button</Button>
        <Button onClick={action('clicked small button')} size='small'>Button</Button>
        <Button onClick={action('clicked medium button')} size='medium'>Button</Button>
        <Button onClick={action('clicked large button')} size='large'>Button</Button>
        <Button onClick={action('clicked xlarge button')} size='xlarge'>Button</Button>
        <Button onClick={action('clicked super button')} size='super'>Button</Button>
      </div>
      <Heading size='large'>Full width</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked xsmall block button')} size='xsmall' block>Button</Button>
        <Button onClick={action('clicked small block button')} size='small' block>Button</Button>
        <Button onClick={action('clicked medium block button')} size='medium' block>Button</Button>
        <Button onClick={action('clicked large block button')} size='large' block>Button</Button>
        <Button onClick={action('clicked xlarge block button')} size='xlarge' block>Button</Button>
        <Button onClick={action('clicked super block button')} size='super' block>Button</Button>
      </div>
      <Heading size='large'>Ghost</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked xsmall ghost button')} size='xsmall' ghost>Button</Button>
        <Button onClick={action('clicked small ghost button')} size='small' ghost>Button</Button>
        <Button onClick={action('clicked medium ghost button')} size='medium' ghost>Button</Button>
        <Button onClick={action('clicked large ghost button')} size='large' ghost>Button</Button>
        <Button onClick={action('clicked xlarge ghost button')} size='xlarge' ghost>Button</Button>
        <Button onClick={action('clicked super ghost button')} size='super' ghost>Button</Button>
      </div>
      <Heading size='large'>Ghost colors</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked default ghost button')} ghost>Button</Button>
        <Button onClick={action('clicked brand ghost button')} state='brand' ghost>Button</Button>
        <Button onClick={action('clicked info ghost button')} state='info' ghost>Button</Button>
        <Button onClick={action('clicked warning ghost button')} state='warning' ghost>Button</Button>
        <Button onClick={action('clicked success ghost button')} state='success' ghost>Button</Button>
        <Button onClick={action('clicked error ghost button')} state='error' ghost>Button</Button>
      </div>
      <Heading size='large'>Rounded</Heading>
      <div className='wrapper'>
        <Button onClick={action('clicked default ghost rounded button')} ghost round>Button</Button>
        <Button onClick={action('clicked brand ghost rounded button')} state='brand' ghost round>Button</Button>
        <Button onClick={action('clicked info ghost rounded button')} state='info' ghost round>Button</Button>
        <Button onClick={action('clicked warning ghost rounded button')} state='warning' ghost round>Button</Button>
        <Button onClick={action('clicked success ghost rounded button')} state='success' ghost round>Button</Button>
        <Button onClick={action('clicked error ghost rounded button')} state='error' ghost round>Button</Button>
      </div>
    </div>
  ))

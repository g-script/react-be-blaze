import { storiesOf } from '@kadira/storybook'
import React from 'react'

import { TabItem, Tabs } from '../../src'

storiesOf('components/Tab.js', module)
  .add('Tabs & TabItem', () => (
    <div className='wrapper c-text'>
      <Tabs>
        <TabItem heading='One' active>
          This is tab one
        </TabItem>
        <TabItem heading='Two' disabled>
          This is tab two
        </TabItem>
        <TabItem heading='Three'>
          This is tab three
        </TabItem>
      </Tabs>
    </div>
  ))

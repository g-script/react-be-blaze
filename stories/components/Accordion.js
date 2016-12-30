import { storiesOf } from '@kadira/storybook'
import React from 'react'

import { Accordion, AccordionItem } from '../../src'

storiesOf('components/Accordion.js', module)
  .add('Accordion & AccordionItem', () => (
    <div className='wrapper c-text'>
      <Accordion>
        <AccordionItem id='accordion-1' label='Item 1'>
          Pane 1
        </AccordionItem>
        <AccordionItem id='accordion-2' label='Item 2'>
          Pane 2
        </AccordionItem>
      </Accordion>
    </div>
  ))

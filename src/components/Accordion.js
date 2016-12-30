import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { Card, CardItem } from './Card'

const AccordionItem = () => (
  <div>Missing Accordion container.</div>
)

AccordionItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string
}

const Accordion = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-card--accordion'
  )

  return (
    <Card className={className} {...rest}>
      {children.map((child) => {
        let { children, className, id, label, ...rest } = child.props

        className = classnames(
          className,
          'c-card__item'
        )

        return [
          <input type='checkbox' id={id} />,
          <label htmlFor={id} className='c-card__item'>{label}</label>,
          <CardItem className={className} {...rest}>{children}</CardItem>
        ]
      })}
    </Card>
  )
}

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string
}

export {
  Accordion,
  AccordionItem
}

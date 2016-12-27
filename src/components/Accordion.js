import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { Card, CardItem } from './Card'

const Accordion = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-card--accordion'
  )

  return (
    <Card className={className} {...rest}>
      {children}
    </Card>
  )
}

Accordion.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const AccordionItem = ({ children, className, id, label, ...rest }) => {
  className = classnames(
    className,
    'c-card__item'
  )

  return [
    <input type='checkbox' id={id} />,
    <label htmlFor={id} className={className}>{label}</label>,
    <CardItem className={className} {...rest}>{children}</CardItem>
  ]
}

AccordionItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string
}

export {
  Accordion,
  AccordionItem
}

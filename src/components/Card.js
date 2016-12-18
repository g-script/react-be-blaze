import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { Choice } from './Input'
import { states } from '../misc/constants'

const Card = ({ children, className, group, menu, ...rest }) => {
  className = classnames(
    className,
    'c-card', {
      'c-card--grouped': group,
      'c-card--menu': menu
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  group: PropTypes.bool,
  menu: PropTypes.bool
}

const CardItem = ({ active, children, className, combo, disabled, state, ...rest }) => {
  className = classnames(
    className,
    'c-card__item', {
      'c-card__item--active': active,
      'c-card__item--disabled': disabled,
      [`c-card__item-${state}`]: state
    }
  )

  if (combo) {
    return (
      <Choice className={className} {...rest}>
        {children}
      </Choice>
    )
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

CardItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  combo: PropTypes.bool,
  disabled: PropTypes.bool,
  state: PropTypes.oneOf(states)
}

const CardDivider = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-card__item--divider'
  )

  return (
    <CardItem className={className} {...rest}>
      {children}
    </CardItem>
  )
}

CardDivider.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const CardHeader = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-card__header'
  )

  return (
    <header className={className} {...rest}>
      {children}
    </header>
  )
}

CardHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const CardBody = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-card__body'
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

CardBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const CardFooter = ({ block, children, className, ...rest }) => {
  className = classnames(
    className,
    'c-card__footer', {
      'c-card__footer--block': block
    }
  )

  return (
    <footer className={className} {...rest}>
      {children}
    </footer>
  )
}

CardFooter.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
}

export {
  Card,
  CardBody,
  CardDivider,
  CardFooter,
  CardHeader,
  CardItem
}

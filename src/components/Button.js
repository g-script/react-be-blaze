import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { buttonTypes, defaults, extendedSizes, states } from '../misc/constants'

const ButtonGroup = ({ children, className, round, ...rest }) => {
  className = classnames(
    className,
    'c-input-group', {
      'c-input-group--rounded': round
    }
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  round: PropTypes.bool
}

const Button = ({ active, block, children, className, close, ghost, round, size, state, type, ...rest }) => {
  className = classnames(
    className,
    'c-button', {
      'c-button--active': active,
      'c-button--block': block,
      'c-button--ghost': ghost,
      'c-button--rounded': round,
      [`u-${size}`]: size,
      [`c-button--${state}`]: state && !ghost,
      [`c-button--ghost-${state}`]: state && ghost
    }
  )

  if (close) {
    className = classnames(
      className,
      'c-button',
      'c-button--close'
    )

    return <button className={className} {...rest}>&times;</button>
  }

  switch (type) {
    case 'button':
      return (
        <button className={className} {...rest}>{children}</button>
      )
    case 'input':
      return (
        <input type='button' className={className} value={children} {...rest} />
      )
    case 'link':
      return (
        <a className={className} {...rest}>{children}</a>
      )
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  close: PropTypes.bool,
  ghost: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(extendedSizes),
  state: PropTypes.oneOf(states),
  type: PropTypes.oneOf(buttonTypes)
}

Button.defaultProps = {
  type: defaults.buttonTypes
}

export {
  Button,
  ButtonGroup
}

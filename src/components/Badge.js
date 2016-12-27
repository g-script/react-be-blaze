import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { states } from '../misc/constants'

const Badge = ({ children, className, ghost, round, state, ...rest }) => {
  className = classnames(
    className,
    'c-badge', {
      'c-badge--ghost': ghost,
      'c-badge--rounded': round,
      [`c-badge--${state}`]: state
    }
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  ghost: PropTypes.bool,
  round: PropTypes.bool,
  state: PropTypes.oneOf(states)
}

export default Badge

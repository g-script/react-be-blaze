import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { Button } from './Button'
import { states } from '../misc/constants'

const Alert = ({ children, className, closable, state, ...rest }) => {
  className = classnames(
    className,
    'c-alert', {
      [`c-alert--${state}`]: state
    }
  )

  return (
    <div className={className} {...rest}>
      {closable ? <Button close /> : null}
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  closable: PropTypes.bool,
  state: PropTypes.oneOf(states)
}

Alert.defaultProps = {
  closable: true
}

export default Alert

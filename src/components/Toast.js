import classnames from 'classnames'
import React, { PropTypes } from 'react'

import Alert from './Alert'
import { toastPositions } from '../misc/constants'

const Toast = ({ children, className, position, ...rest }) => {
  className = classnames(
    className,
    'c-alerts', {
      [`c-alerts--${position}`]: position
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Toast.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Alert),
    PropTypes.arrayOf(PropTypes.instanceOf(Alert))
  ]),
  className: PropTypes.string,
  position: PropTypes.oneOf(toastPositions)
}

export default Toast

import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Modal = ({ children, className, full, ghost, ...rest }) => {
  className = classnames(
    className,
    'o-modal', {
      'o-modal--full': full,
      'o-modal--ghost': ghost
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  full: PropTypes.bool,
  ghost: PropTypes.bool
}

export default Modal

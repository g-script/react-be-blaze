import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Overlay = ({ children, className, dismissable, full, transparent, ...rest }) => {
  className = classnames(
    className,
    'c-overlay', {
      'c-overlay--dismissable': dismissable,
      'c-overlay--transparent': transparent,
      'c-overlay--fullpage': full
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  full: PropTypes.bool,
  transparent: PropTypes.bool
}

export default Overlay

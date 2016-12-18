import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { positions } from '../misc/constants'

const Drawer = ({ children, className, hidden, position, ...rest }) => {
  className = classnames(
    className,
    'o-drawer', {
      'o-drawer--visible': !hidden,
      [`o-drawer--${position}`]: position
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Drawer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  position: PropTypes.oneOf(positions)
}

Drawer.defaultProps = {
  hidden: true
}

export default Drawer

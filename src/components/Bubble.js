import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { positions } from '../misc/constants'

const Bubble = ({ children, className, position, ...rest }) => {
  className = classnames(
    className,
    'c-bubble', {
      [`c-bubble--${position}`]: position
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Bubble.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  position: PropTypes.oneOf(positions)
}

export default Bubble

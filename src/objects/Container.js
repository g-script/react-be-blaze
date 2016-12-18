import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { extendedSizes } from '../misc/constants'

const Container = ({ children, className, screen, size, ...rest }) => {
  className = classnames(
    className,
    'o-container', {
      [`o-container--${size}`]: size && !screen,
      [`o-container--${size}@${screen}`]: size && screen
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  screen: PropTypes.oneOf(extendedSizes),
  size: PropTypes.oneOf(extendedSizes)
}

export default Container

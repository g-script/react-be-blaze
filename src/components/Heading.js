import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { defaults, extendedSizes } from '../misc/constants'

const Heading = ({ children, className, size, ...rest }) => {
  className = classnames(
    className,
    'c-heading'
  )

  switch (size) {
    case extendedSizes[0]:
      return (
        <h6 className={className} {...rest}>{children}</h6>
      )
    case extendedSizes[1]:
      return (
        <h5 className={className} {...rest}>{children}</h5>
      )
    case extendedSizes[2]:
      return (
        <h4 className={className} {...rest}>{children}</h4>
      )
    case extendedSizes[3]:
      return (
        <h3 className={className} {...rest}>{children}</h3>
      )
    case extendedSizes[4]:
      return (
        <h2 className={className} {...rest}>{children}</h2>
      )
    case extendedSizes[5]:
      return (
        <h1 className={className} {...rest}>{children}</h1>
      )
  }
}

Heading.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(extendedSizes)
}

Heading.defaultProps = {
  size: defaults.extendedSizes
}

export default Heading

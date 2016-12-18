import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { Button } from './Button'

const Tag = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-tag'
  )

  return (
    <Button className={className} {...rest}>
      {children}
      <span className='c-tag__close'>&times;</span>
    </Button>
  )
}

Tag.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default Tag

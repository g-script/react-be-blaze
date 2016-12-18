import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Image = ({ className, src, ...rest }) => {
  className = classnames(
    className,
    'o-image'
  )

  return (
    <img className={className} src={src} {...rest} />
  )
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default Image

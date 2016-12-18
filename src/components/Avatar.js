import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { extendedSizes } from '../misc/constants'

const Avatar = ({ className, image, initial, secondary, size, ...rest }) => {
  className = classnames(
    className,
    'c-avatar', {
      [`u-${size}`]: size
    }
  )

  return (
    <div className={className} data-text={initial} {...rest}>
      <img className='c-avatar__img' src={image} />
      {secondary && <img className='c-avatar__img' src={secondary} />}
    </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  initial: PropTypes.string,
  secondary: PropTypes.string,
  size: PropTypes.oneOf(extendedSizes)
}

export default Avatar

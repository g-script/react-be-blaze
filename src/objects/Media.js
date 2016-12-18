import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { alignments } from '../misc/constants'

const MediaImage = ({ align, children, className, ...rest }) => {
  className = classnames(
    className,
    'o-media__image', {
      [`o-media__image--${align}`]: align
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

MediaImage.propTypes = {
  align: PropTypes.oneOf(alignments),
  children: PropTypes.any,
  className: PropTypes.string
}

const MediaBody = ({ align, children, className, ...rest }) => {
  className = classnames(
    className,
    'o-media__body', {
      [`o-media__body--${align}`]: align
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

MediaImage.propTypes = {
  align: PropTypes.oneOf(alignments),
  children: PropTypes.any,
  className: PropTypes.string
}

export {
  MediaBody,
  MediaImage
}

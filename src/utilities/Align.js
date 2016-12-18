import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Align = ({ children, className, horizontal, vertical, ...rest }) => {
  className = classnames(
    className,
    'u-center-block__content', {
      'u-center-block--horizontal': horizontal && !vertical,
      'u-center-block--vertical': vertical && !horizontal
    }
  )

  return (
    <div className='u-center-block' {...rest}>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

Align.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool
}

export default Align

import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Address = ({ children, className, heading, ...rest }) => {
  className = classnames(
    className,
    'c-address'
  )

  return (
    <address className={className} {...rest}>
      { heading ? <span className='c-address__heading'>{heading}</span> : null }
      {children}
    </address>
  )
}

Address.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string
}

export default Address

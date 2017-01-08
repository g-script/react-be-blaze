import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { Link } from './Typography'

const Breadcrumb = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-breadcrumbs'
  )

  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Crumb = ({ active, children, className, ...rest }) => {
  className = classnames(
    className,
    'c-breadcrumbs__crumb', {
      'c-text--loud': active
    }
  )

  return (
    <li className={className}>
      {active ? children : <Link {...rest}>{children}</Link>}
    </li>
  )
}

Crumb.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
}

export {
  Breadcrumb,
  Crumb
}

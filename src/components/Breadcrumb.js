import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Breadcrumb = ({ className, crumbs, ...rest }) => {
  className = classnames(
    className,
    'c-breadcrumbs'
  )

  return (
    <ul className={className} {...rest}>
      {crumbs.forEach((crumb, index) => {
        const isCurrentCrumb = index === crumbs.length - 1
        const crumbClassName = `c-breadcrumbs__crumb${isCurrentCrumb && ' c-text--loud'}`

        return (
          <li className={crumbClassName}>
            {isCurrentCrumb ? crumb.label : <a className='c-link' href={crumb.href}>{crumb.label}</a>}
          </li>
        )
      })}
    </ul>
  )
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
}

export default Breadcrumb

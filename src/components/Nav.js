import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { Link } from './Typography'

import { positions, states } from '../misc/constants'

const Nav = ({ children, className, fixed, inline, position, ...rest }) => {
  className = classnames(
    className,
    'c-nav', {
      'c-nav--fixed': fixed,
      'c-nav--inline': inline,
      [`c-nav--${position}`]: position
    }
  )

  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  )
}

Nav.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  inline: PropTypes.bool,
  position: PropTypes.oneOf(positions)
}

const NavItem = ({ active, children, className, customLink, href, noClick, right, state, ...rest }) => {
  className = classnames(
    className, {
      'c-nav__item': !noClick,
      'c-nav__content': noClick,
      'c-nav__item--active': active,
      'c-nav__item--right': right,
      [`c-nav__item--${state}`]: state
    }
  )

  if (customLink || href) {
    customLink = customLink ? { customLink } : {}
    href = href ? { href } : {}

    return (
      <Link className={className} plain {...customLink} {...href} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  )
}

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  customLink: PropTypes.any,
  href: PropTypes.string,
  noClick: PropTypes.bool,
  right: PropTypes.bool,
  state: PropTypes.oneOf(states)
}

export {
  Nav,
  NavItem
}

import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { panelNavPositions } from '../misc/constants'

const PanelContainer = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'o-panel-container'
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

PanelContainer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Panel = ({ children, className, nav, ...rest }) => {
  className = classnames(
    className,
    'o-panel', {
      'o-panel--nav-top': nav && nav.toString() && (nav.toString() === 'top' || nav.toString() === 'both'),
      'o-panel--nav-bottom': nav && nav.toString() && (nav.toString() === 'bottom' || nav.toString() === 'both')
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  nav: PropTypes.oneOf(panelNavPositions)
}

export {
  Panel,
  PanelContainer
}

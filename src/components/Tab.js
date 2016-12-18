import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { states } from '../misc/constants'

const Tab = ({ active, children, className, ...rest }) => {
  className = classnames(
    className,
    'c-tabs__tab', {
      'c-tabs__tab--active': active
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
}

const Tabs = ({ children, className, headings, state, ...rest }) => {
  className = classnames(
    className,
    'c-tabs', {
      [`c-tabs--${state}`]: state
    }
  )

  return (
    <div className={className} {...rest}>
      <div className='c-tabs__headings'>
        {headings}
      </div>
      {children}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  headings: PropTypes.array,
  state: PropTypes.oneOf(states)
}

const TabHeading = ({ active, children, className, disabled, ...rest }) => {
  className = classnames(
    className,
    'c-tab-headings', {
      'c-tab-heading--active': active,
      'c-tab-heading--disabled': disabled
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

TabHeading.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export {
  Tab,
  Tabs,
  TabHeading
}

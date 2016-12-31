import classnames from 'classnames'
import omit from 'lodash.omit'
import React, { Component, PropTypes } from 'react'

import { states } from '../misc/constants'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string,
    state: PropTypes.oneOf(states)
  }

  constructor (props) {
    super(props)

    this.state = {
      active: null
    }
  }

  componentWillReceiveProps () {
    this.setState({
      active: null
    })
  }

  buildHeadings () {
    return this.props.children.map((child, index) => {
      const { active, disabled, heading, headingClassName, onClick } = child.props
      const className = classnames(
        headingClassName,
        'c-tab-heading', {
          'c-tab-heading--active': active && this.state.active === null || this.state.active === index,
          'c-tab-heading--disabled': disabled
        }
      )

      return (
        <div className={className} onClick={onClick || this.toggleTab.bind(this, index)} key={`heading__${index}`}>
          {heading}
        </div>
      )
    })
  }

  buildTabs () {
    return this.props.children.map((child, index) => {
      const rest = omit(child.props, ['active', 'children', 'className', 'disabled', 'heading', 'headingClassName', 'onClick'])
      const { active, children, className } = child.props
      const itemClassName = classnames(
        className,
        'c-tabs__tab', {
          'c-tabs__tab--active': active && this.state.active === null || this.state.active === index
        }
      )

      return (
        <div className={itemClassName} key={`tab__${index}`} {...rest}>
          {children}
        </div>
      )
    })
  }

  toggleTab (index) {
    this.setState({
      active: index
    })
  }

  render () {
    const rest = omit(this.props, ['children', 'className', 'state'])
    const { className, state } = this.props
    const tabsClassName = classnames(
      className,
      'c-tabs', {
        [`c-tabs--${state}`]: state
      }
    )

    return (
      <div className={tabsClassName} {...rest}>
        <div className='c-tabs__headings'>
          {this.buildHeadings()}
        </div>
        {this.buildTabs()}
      </div>
    )
  }
}

const TabItem = () => <div>Missing Tabs container.</div>

TabItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  headingClassName: PropTypes.string
}

export {
  TabItem,
  Tabs
}

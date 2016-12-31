import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'

const states = ['brand', 'info', 'warning', 'error', 'success']

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
      const { active, children, className, disabled, heading, headingClassName, onClick, state, ...rest } = child.props // eslint-disable-line no-unused-vars
      const newClassName = classnames(
        headingClassName,
        'c-tab-heading', {
          'c-tab-heading--active': active && this.state.active === null || this.state.active === index,
          'c-tab-heading--disabled': disabled
        }
      )

      return (
        <div className={newClassName} onClick={onClick || this.toggleTab.bind(this, index)} key={`heading__${index}`}>
          {heading}
        </div>
      )
    })
  }

  buildTabs () {
    return this.props.children.map((child, index) => {
      const { active, children, className, disabled, heading, headingClassName, onClick, state, ...rest } = child.props // eslint-disable-line no-unused-vars
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
    const { active, children, className, disabled, heading, headingClassName, onClick, state, ...rest } = this.props // eslint-disable-line no-unused-vars
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

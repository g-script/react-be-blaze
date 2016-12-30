import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'

import { Button } from './Button'
import { states } from '../misc/constants'

export default class Alert extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    closable: PropTypes.bool,
    onCloseClick: PropTypes.func,
    state: PropTypes.oneOf(states)
  }

  constructor (props) {
    super(props)

    this.closeAlert = this.closeAlert.bind(this)
    this.state = {
      visible: true
    }
  }

  closeAlert () {
    this.setState({
      visible: false
    })
  }

  render () {
    let { children, className, closable, onCloseClick, state, style, ...rest } = this.props

    className = classnames(
      className,
      'c-alert', {
        [`c-alert--${state}`]: state
      }
    )
    style = Object.assign({}, style, { display: this.state.visible ? '' : 'none' })

    return (
      <div className={className} style={style} {...rest}>
        {closable ? <Button onClick={onCloseClick || this.closeAlert} close /> : null}
        {children}
      </div>
    )
  }
}

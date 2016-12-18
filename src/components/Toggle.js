import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { states } from '../misc/constants'

const Toggle = ({ checked, children, className, disabled, state, ...rest }) => {
  className = classnames(
    className,
    'c-toggle', {
      [`c-toggle--${state}`]: state
    }
  )

  return (
    <label className={className} {...rest}>
      <input type='checkbox' checked={checked} disabled={disabled} />
      <div className='c-toggle__track'>
        <div className='c-toggle__handle' />
      </div>
      {children}
    </label>
  )
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  state: PropTypes.oneOf(states)
}

export default Toggle

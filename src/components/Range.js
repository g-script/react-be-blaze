import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { states } from '../misc/constants'

const Range = ({ className, state, ...rest }) => {
  className = classnames(
    className,
    'c-range', {
      [`c-range--${state}`]: state
    }
  )

  return (
    <input type='range' className={className} {...rest} />
  )
}

Range.propTypes = {
  className: PropTypes.string,
  state: PropTypes.oneOf(states)
}

export default Range
